import type { Metadata } from "next";
import { Sulphur_Point } from "next/font/google"; // 1. Importa a fonte
import "./globals.css";

// 2. Configura a fonte
const sulphurPoint = Sulphur_Point({
  weight: ["300", "400", "700"], // Pesos que você vai usar
  subsets: ["latin"],
  variable: "--font-sulphur", 
});

export const metadata: Metadata = {
  title: "Kadoo Edu",
  description: "Plataforma Kadoo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* 3. Aplica a variável no body e força a classe font-sans */}
      <body className={`${sulphurPoint.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}