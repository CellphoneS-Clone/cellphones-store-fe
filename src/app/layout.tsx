// layout.tsx (RootLayout)
import { MenuProvider } from "@/context/MenuContext";
import "./globals.css";
import { ThemeProvider } from "@/components/admin/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body
        className={`antialiased bg-gray-100`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem  
          disableTransitionOnChange
        >
          <MenuProvider>
            {children}
          </MenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}