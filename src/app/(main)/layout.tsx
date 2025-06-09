import Link from 'next/link'

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex items-center justify-between">
                        <Link href="/" className="text-xl font-bold text-gray-800">
                            Cellphones Store
                        </Link>
                        <div className="flex items-center gap-6">
                            <Link href="/products" className="text-gray-600 hover:text-gray-900">
                                Products
                            </Link>
                            <Link href="/cart" className="text-gray-600 hover:text-gray-900">
                                Cart
                            </Link>
                            <Link href="/auth/login" className="text-gray-600 hover:text-gray-900">
                                Login
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-100">
                <div className="container mx-auto px-4 py-6">
                    <div className="text-center text-gray-600">
                        <p>© 2024 Cellphones Store. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
} 