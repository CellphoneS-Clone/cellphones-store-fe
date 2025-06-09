export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex">
            <aside className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-xl font-bold mb-4">Dashboard</h2>
                {/* Add your dashboard navigation here */}
            </aside>
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
} 