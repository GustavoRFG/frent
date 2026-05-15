import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pagina-encrypta.vercel.app"),
  title: {
    default: "Encrypta - Tecnologia premium selecionada",
    template: "%s | Encrypta",
  },
  description:
    "Encrypta seleciona oportunidades em tecnologia premium, com destaque para iPad Air M3, pronta entrega e atendimento direto.",
  openGraph: {
    title: "Encrypta - Tecnologia premium selecionada",
    description:
      "Vitrine comercial da Encrypta para equipamentos Apple, hardware premium e oportunidades selecionadas em tecnologia.",
    url: "https://pagina-encrypta.vercel.app",
    siteName: "Encrypta",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
