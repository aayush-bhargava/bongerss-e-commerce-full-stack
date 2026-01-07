import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
  title: "Bongers",
  description: "Nature's Touch",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="min-h-screen bg-gray-100">
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
