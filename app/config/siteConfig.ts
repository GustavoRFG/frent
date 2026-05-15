export type ExternalChannel = {
  label: string;
  href: string | null;
  unavailableLabel: string;
};

export const siteConfig = {
  brandName: "Encrypta",
  tagline: "Tecnologia premium selecionada, com pronta entrega e atendimento direto.",
  siteUrl: "https://pagina-encrypta.vercel.app",
  logo: {
    src: "/images/brand/encrypta-logo-mark.jpg",
    fullSrc: "/images/brand/encrypta-logo.jpg",
    alt: "Logo da Encrypta Tecnologia.",
    width: 540,
    height: 540,
  },
  contact: {
    whatsapp: {
      label: "Falar no WhatsApp",
      href: null,
      unavailableLabel: "WhatsApp em configuração",
    } satisfies ExternalChannel,
  },
  marketplaceLinks: {
    olx: {
      label: "Ver anuncio na OLX",
      href: null,
      unavailableLabel: "OLX em configuração",
    } satisfies ExternalChannel,
    mercadoLivre: {
      label: "Ver no Mercado Livre",
      href: null,
      unavailableLabel: "Mercado Livre em configuração",
    } satisfies ExternalChannel,
  },
  navigation: [
    { label: "Produtos", href: "/#produtos" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Atendimento", href: "/#atendimento" },
    { label: "Privacidade", href: "/privacidade" },
  ],
  serviceRegion: null as string | null,
};
