'use client'
import { useState } from 'react'
import ChatWidget from '@/components/chat/ChatWidget'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isChatOpen, setIsChatOpen] = useState(false);

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
                            <button
                                onClick={() => setIsChatOpen(true)}
                                className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
                            >
                                Liên hệ
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>
            {!isChatOpen && (
                <button
                    onClick={() => setIsChatOpen(true)}
                    className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors"
                >
                    <MessageCircle className="w-5 h-5" />
                    <span>Liên hệ</span>
                </button>
            )}
            {/* Chat Widget */}
            {isChatOpen && <ChatWidget onClose={() => setIsChatOpen(false)} />}

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