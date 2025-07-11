"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
// Toast component đơn giản
function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  if (!message) return null;
  return (
    <div className="fixed top-6 right-6 z-[100] bg-green-600 text-white px-4 py-2 rounded shadow-lg animate-in fade-in duration-300">
      {message}
      <button className="ml-4 text-white/80 hover:text-white" onClick={onClose}>×</button>
    </div>
  );
}
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Sheet, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";


type Product = {
  id: number;
  name: string;
  sku: string;
  category: string;
  image: string;
};

type Attribute = {
  id: number;
  code: string;
  name: string;
  name_en?: string;
  type: string;
  values: string[];
  values_en?: string[];
  status: boolean;
  public: boolean;
  order: number;
  description?: string;
  category: string;
  products: Product[];
  stockInfo?: string;
  history?: { user: string; time: string; action: string }[];
};

const initialProducts: Product[] = [
  { id: 1, name: "Áo thun nam", sku: "TS001", category: "Quần áo", image: "/images/ao-thun.jpg" },
  { id: 2, name: "iPhone 15 Pro", sku: "IP15P", category: "Điện tử", image: "/images/iphone15pro.png" },
];

const initialAttributes: Attribute[] = [
  {
    id: 1,
    code: "color",
    name: "Màu sắc",
    name_en: "Color",
    type: "Dropdown",
    values: ["Đỏ", "Xanh", "Đen"],
    values_en: ["Red", "Blue", "Black"],
    status: true,
    public: true,
    order: 1,
    description: "Màu sắc sản phẩm theo chuẩn quốc tế.",
    category: "Quần áo",
    products: [initialProducts[0]],
    stockInfo: "Mỗi màu có tồn kho riêng.",
    history: [
      { user: "admin", time: "2025-07-10 10:00", action: "Tạo mới" },
      { user: "admin", time: "2025-07-11 09:00", action: "Cập nhật giá trị" },
    ],
  },
  {
    id: 2,
    code: "size",
    name: "Kích thước",
    name_en: "Size",
    type: "Dropdown",
    values: ["S", "M", "L"],
    values_en: ["S", "M", "L"],
    status: true,
    public: true,
    order: 2,
    description: "Kích thước theo chuẩn châu Á.",
    category: "Quần áo",
    products: [initialProducts[0]],
    stockInfo: "Tồn kho theo từng size.",
    history: [
      { user: "admin", time: "2025-07-10 10:10", action: "Tạo mới" },
    ],
  },
  {
    id: 3,
    code: "storage",
    name: "Dung lượng",
    name_en: "Storage",
    type: "Dropdown",
    values: ["128GB", "256GB", "512GB"],
    values_en: ["128GB", "256GB", "512GB"],
    status: false,
    public: false,
    order: 1,
    description: "Dung lượng bộ nhớ cho thiết bị điện tử.",
    category: "Điện tử",
    products: [initialProducts[1]],
    stockInfo: "Tồn kho theo từng dung lượng.",
    history: [
      { user: "admin", time: "2025-07-09 15:00", action: "Tạo mới" },
    ],
  },
];

export default function AttributePage() {
  const [attributes, setAttributes] = useState<Attribute[]>(initialAttributes);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [editing, setEditing] = useState<Attribute | null>(null);
  const [form, setForm] = useState<any>({
    code: "",
    name: "",
    name_en: "",
    type: "Dropdown",
    values: "",
    values_en: "",
    status: true,
    public: true,
    order: 1,
    description: "",
    category: "",
    products: [],
    stockInfo: "",
  });
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [toast, setToast] = useState("");
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<"order" | "name">("order");
  const pageSize = 5;

  // Lọc và phân trang
  const filtered = useMemo(() => {
    let arr = attributes;
    if (categoryFilter) arr = arr.filter(a => a.category === categoryFilter);
    if (statusFilter) arr = arr.filter(a => statusFilter === "active" ? a.status : !a.status);
    if (search) {
      arr = arr.filter(a =>
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.values.join(", ").toLowerCase().includes(search.toLowerCase()) ||
        a.products.some(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase()))
      );
    }
    arr = [...arr].sort((a, b) => sortBy === "order" ? a.order - b.order : a.name.localeCompare(b.name));
    return arr;
  }, [attributes, search, categoryFilter, statusFilter, sortBy]);
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const paged = useMemo(() => filtered.slice((page - 1) * pageSize, page * pageSize), [filtered, page]);

  // Lấy danh sách danh mục
  const categories = useMemo(() => Array.from(new Set(attributes.map(a => a.category))), [attributes]);

  const handleEdit = (attr: Attribute) => {
    setEditing(attr);
    setForm({
      code: attr.code,
      name: attr.name,
      name_en: attr.name_en || "",
      type: attr.type,
      values: attr.values.join(", "),
      values_en: attr.values_en?.join(", ") || "",
      status: attr.status,
      public: attr.public,
      order: attr.order,
      description: attr.description || "",
      category: attr.category,
      products: attr.products,
      stockInfo: attr.stockInfo || "",
    });
    setSheetOpen(true);
  };
  const handleAdd = () => {
    setEditing(null);
    setForm({
      code: "",
      name: "",
      name_en: "",
      type: "Dropdown",
      values: "",
      values_en: "",
      status: true,
      public: true,
      order: 1,
      description: "",
      category: "",
      products: [],
      stockInfo: "",
    });
    setSheetOpen(true);
  };
  const handleDelete = (id: number) => {
    setDeleteId(id);
  };
  const confirmDelete = () => {
    setAttributes(attrs => attrs.filter(a => a.id !== deleteId));
    setToast("Xóa thuộc tính thành công!");
    setDeleteId(null);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valuesArr = form.values.split(",").map((v: string) => v.trim()).filter(Boolean);
    const valuesEnArr = form.values_en.split(",").map((v: string) => v.trim()).filter(Boolean);
    if (editing) {
      setAttributes(attrs => attrs.map(a => a.id === editing.id ? {
        ...a,
        ...form,
        values: valuesArr,
        values_en: valuesEnArr,
        order: Number(form.order),
      } : a));
      setToast("Cập nhật thuộc tính thành công!");
    } else {
      setAttributes(attrs => [
        ...attrs,
        {
          id: Date.now(),
          code: form.code,
          name: form.name,
          name_en: form.name_en,
          type: form.type,
          values: valuesArr,
          values_en: valuesEnArr,
          status: form.status,
          public: form.public,
          order: Number(form.order),
          description: form.description,
          category: form.category,
          products: [],
          stockInfo: form.stockInfo,
          history: [{ user: "admin", time: new Date().toLocaleString(), action: "Tạo mới" }],
        },
      ]);
      setToast("Thêm thuộc tính thành công!");
    }
    setSheetOpen(false);
  };
  const handleStatusToggle = (id: number) => {
    setAttributes(attrs => attrs.map(a => a.id === id ? { ...a, status: !a.status } : a));
    setToast("Cập nhật trạng thái thành công!");
  };
  const handleOrderChange = (id: number, up: boolean) => {
    setAttributes(attrs => {
      const idx = attrs.findIndex(a => a.id === id);
      if (idx === -1) return attrs;
      const newAttrs = [...attrs];
      if (up && idx > 0) {
        [newAttrs[idx - 1], newAttrs[idx]] = [newAttrs[idx], newAttrs[idx - 1]];
      } else if (!up && idx < newAttrs.length - 1) {
        [newAttrs[idx + 1], newAttrs[idx]] = [newAttrs[idx], newAttrs[idx + 1]];
      }
      // Cập nhật lại order
      return newAttrs.map((a, i) => ({ ...a, order: i + 1 }));
    });
    setToast("Sắp xếp thành công!");
  };

  return (
    <div className="p-6">
      <Toast message={toast} onClose={() => setToast("")} />
      {/* Tìm kiếm */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Quản lý thuộc tính sản phẩm</h1>
          <p className="text-muted-foreground">Quản lý, cập nhật, tổ chức thuộc tính sản phẩm, liên kết sản phẩm, mô tả, đa ngôn ngữ, kho, lịch sử...</p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <Input
            placeholder="Tìm kiếm tên, giá trị, sản phẩm..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            className="w-48"
          />
          <Select value={categoryFilter} onValueChange={v => { setCategoryFilter(v); setPage(1); }}>
            <SelectTrigger className="w-36"><SelectValue placeholder="Lọc theo danh mục" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="">Tất cả danh mục</SelectItem>
              {categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={v => { setStatusFilter(v); setPage(1); }}>
            <SelectTrigger className="w-36"><SelectValue placeholder="Lọc theo trạng thái" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="">Tất cả trạng thái</SelectItem>
              <SelectItem value="active">Kích hoạt</SelectItem>
              <SelectItem value="inactive">Vô hiệu hóa</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={v => setSortBy(v as any)}>
            <SelectTrigger className="w-36"><SelectValue placeholder="Sắp xếp" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="order">Thứ tự hiển thị</SelectItem>
              <SelectItem value="name">Tên thuộc tính</SelectItem>
            </SelectContent>
          </Select>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button onClick={handleAdd} className="font-semibold">+ Thêm thuộc tính</Button>
            </SheetTrigger>
            {sheetOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                <Card className="w-full max-w-2xl p-6 overflow-y-auto max-h-[90vh]">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-xl font-semibold mb-2">{editing ? "Sửa thuộc tính" : "Thêm thuộc tính"}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="code">Mã thuộc tính</Label>
                        <Input id="code" value={form.code} onChange={e => setForm(f => ({ ...f, code: e.target.value }))} required />
                      </div>
                      <div>
                        <Label htmlFor="order">Thứ tự hiển thị</Label>
                        <Input id="order" type="number" min={1} value={form.order} onChange={e => setForm(f => ({ ...f, order: e.target.value }))} required />
                      </div>
                      <div>
                        <Label htmlFor="name">Tên thuộc tính (VI)</Label>
                        <Input id="name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                      </div>
                      <div>
                        <Label htmlFor="name_en">Tên thuộc tính (EN)</Label>
                        <Input id="name_en" value={form.name_en} onChange={e => setForm(f => ({ ...f, name_en: e.target.value }))} />
                      </div>
                      <div>
                        <Label htmlFor="type">Loại thuộc tính</Label>
                        <Select value={form.type} onValueChange={val => setForm(f => ({ ...f, type: val }))}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Chọn loại" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Dropdown">Dropdown</SelectItem>
                            <SelectItem value="Checkbox">Checkbox</SelectItem>
                            <SelectItem value="Text">Text</SelectItem>
                            <SelectItem value="Number">Number</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="category">Danh mục</Label>
                        <Input id="category" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} required />
                      </div>
                      <div>
                        <Label htmlFor="values">Giá trị (VI, phẩy)</Label>
                        <Input id="values" value={form.values} onChange={e => setForm(f => ({ ...f, values: e.target.value }))} placeholder="Đỏ, Xanh, Đen" />
                      </div>
                      <div>
                        <Label htmlFor="values_en">Giá trị (EN, phẩy)</Label>
                        <Input id="values_en" value={form.values_en} onChange={e => setForm(f => ({ ...f, values_en: e.target.value }))} placeholder="Red, Blue, Black" />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="description">Mô tả</Label>
                        <Input id="description" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="stockInfo">Thông tin kho</Label>
                        <Input id="stockInfo" value={form.stockInfo} onChange={e => setForm(f => ({ ...f, stockInfo: e.target.value }))} />
                      </div>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="status">Kích hoạt</Label>
                        <Switch id="status" checked={form.status} onCheckedChange={val => setForm(f => ({ ...f, status: val }))} />
                      </div>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="public">Hiển thị công khai</Label>
                        <Switch id="public" checked={form.public} onCheckedChange={val => setForm(f => ({ ...f, public: val }))} />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <SheetClose asChild>
                        <Button type="button" variant="outline" onClick={() => setSheetOpen(false)}>Hủy</Button>
                      </SheetClose>
                      <Button type="submit">Lưu</Button>
                    </div>
                  </form>
                </Card>
              </div>
            )}
          </Sheet>
        </div>
      </div>
      <Card className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Thứ tự</TableHead>
              <TableHead>Mã</TableHead>
              <TableHead>Tên (VI/EN)</TableHead>
              <TableHead>Loại</TableHead>
              <TableHead>Giá trị (VI/EN)</TableHead>
              <TableHead>Danh mục</TableHead>
              <TableHead>Sản phẩm liên quan</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead>Công khai</TableHead>
              <TableHead>Mô tả</TableHead>
              <TableHead>Kho</TableHead>
              <TableHead>Lịch sử</TableHead>
              <TableHead>Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paged.length === 0 ? (
              <TableRow>
                <TableCell colSpan={13} className="text-center text-muted-foreground">Không có thuộc tính nào.</TableCell>
              </TableRow>
            ) : paged.map(attr => (
              <TableRow key={attr.id}>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button size="icon" variant="outline" className="p-1" onClick={() => handleOrderChange(attr.id, true)} disabled={attr.order === 1}>↑</Button>
                    <Button size="icon" variant="outline" className="p-1" onClick={() => handleOrderChange(attr.id, false)} disabled={attr.order === attributes.length}>↓</Button>
                    <span className="ml-2">{attr.order}</span>
                  </div>
                </TableCell>
                <TableCell>{attr.code}</TableCell>
                <TableCell>
                  <div>{attr.name}</div>
                  <div className="text-xs text-muted-foreground">{attr.name_en}</div>
                </TableCell>
                <TableCell>{attr.type}</TableCell>
                <TableCell>
                  <div>{attr.values.join(", ")}</div>
                  <div className="text-xs text-muted-foreground">{attr.values_en?.join(", ")}</div>
                </TableCell>
                <TableCell>{attr.category}</TableCell>
                <TableCell>
                  {attr.products.map(p => (
                    <div key={p.id} className="flex items-center gap-2 mb-1">
                      <Image src={p.image} alt={p.name} width={32} height={32} className="rounded object-cover border" />
                      <div>
                        <div className="font-medium text-sm">{p.name}</div>
                        <div className="text-xs text-muted-foreground">{p.sku} - {p.category}</div>
                      </div>
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  <Switch checked={attr.status} onCheckedChange={() => handleStatusToggle(attr.id)} />
                  <span className="ml-2 text-sm">{attr.status ? "Đang sử dụng" : "Ẩn"}</span>
                </TableCell>
                <TableCell>
                  <Switch checked={attr.public} onCheckedChange={() => setAttributes(attrs => attrs.map(a => a.id === attr.id ? { ...a, public: !a.public } : a))} />
                  <span className="ml-2 text-sm">{attr.public ? "Công khai" : "Nội bộ"}</span>
                </TableCell>
                <TableCell>
                  <div className="max-w-[120px] truncate" title={attr.description}>{attr.description}</div>
                </TableCell>
                <TableCell>
                  <div className="max-w-[120px] truncate" title={attr.stockInfo}>{attr.stockInfo}</div>
                </TableCell>
                <TableCell>
                  <div className="text-xs">
                    {attr.history?.map((h, i) => (
                      <div key={i}>{h.time} - {h.user}: {h.action}</div>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" className="mr-2" onClick={() => handleEdit(attr)}>Sửa</Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(attr.id)}>Xóa</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Phân trang */}
        <div className="flex justify-end items-center gap-2 mt-4">
          <Button size="sm" variant="outline" disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))}>Trước</Button>
          <span className="text-sm">Trang {page} / {totalPages}</span>
          <Button size="sm" variant="outline" disabled={page === totalPages} onClick={() => setPage(p => Math.min(totalPages, p + 1))}>Sau</Button>
        </div>
      </Card>
      {/* Dialog xác nhận xóa */}
      {deleteId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <Card className="p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-2">Xác nhận xóa</h3>
            <p>Bạn có chắc chắn muốn xóa thuộc tính này không?</p>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setDeleteId(null)}>Hủy</Button>
              <Button variant="destructive" onClick={confirmDelete}>Xóa</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}   