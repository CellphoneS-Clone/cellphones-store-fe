import Header from '@/app/(main)/layouts/header';
import Footer from '@/app/(main)/layouts/footer';
import "../globals.css";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
} 