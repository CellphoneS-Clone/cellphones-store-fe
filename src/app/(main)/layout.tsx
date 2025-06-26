'use client';

import Header from '@/app/(main)/layouts/header';
import Footer from '@/app/(main)/layouts/footer';
import "../globals.css";
import { useState } from 'react';
import ChatWidget from '@/components/chat/ChatWidget';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { useMenu } from '@/context/MenuContext';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { isMenuOpen } = useMenu();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className={`transition-opacity duration-300 ${isMenuOpen ? 'opacity-50' : 'opacity-100'}`}>
        <main className="flex-grow">{children}</main>
        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Liên hệ</span>
          </button>
        )}
        {isChatOpen && <ChatWidget onClose={() => setIsChatOpen(false)} />}
        <Footer />
      </div>
    </div>
  );
}
