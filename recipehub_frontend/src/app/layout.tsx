import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RecipeHub",
  description: "A modern recipe manager and browser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        <div className="flex min-h-screen bg-[#fff]">
          <aside 
            className="w-64 bg-[#4CAF50] text-white flex flex-col justify-between py-8 shadow-lg"
            style={{
              backgroundColor: "var(--color-primary, #4CAF50)",
            }}
          >
            <div>
              <div className="flex items-center gap-2 px-6 pb-8 border-b border-white/10">
                <span className="font-bold text-2xl">RecipeHub</span>
              </div>
              <nav className="mt-8 flex-1">
                <ul className="flex flex-col gap-2 px-4">
                  <li>
                    <a href="/" className="sidebar-link">
                      🏠 Recipe Listing
                    </a>
                  </li>
                  <li>
                    <a href="/details" className="sidebar-link">
                      📄 Recipe Details
                    </a>
                  </li>
                  <li>
                    <a href="/add-edit" className="sidebar-link">
                      ➕ Add/Edit Recipes
                    </a>
                  </li>
                  <li>
                    <a href="/auth" className="sidebar-link">
                      👤 User Authentication
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="px-6">
              <span className="text-xs opacity-75">RecipeHub © 2024</span>
            </div>
          </aside>
          <main className="flex-1 bg-[#fafbfb] text-[#222] p-8 md:p-12 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
