import { siteConfig } from "./siteConfig";

export type ProductAttribute = {
  label: string;
  value: string;
};

export type PurchaseLink = {
  id: "whatsapp" | "olx" | "mercado-livre";
  label: string;
  href: string | null;
  unavailableLabel: string;
};

export type ProductImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type FeaturedProduct = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  attributes: ProductAttribute[];
  quantity: number;
  availability: string;
  featured: boolean;
  image: ProductImage;
  gallery: ProductImage[];
  purchaseLinks: PurchaseLink[];
};

export const featuredProduct: FeaturedProduct = {
  id: "ipad-air-11-m3-wifi-128gb-space-gray",
  slug: "ipad-air-11-m3",
  name: "Apple iPad Air 11”",
  subtitle: "Chip M3, Wi-Fi, 128 GB, cinza-espacial.",
  attributes: [
    { label: "Chip", value: "M3" },
    { label: "Tela", value: "11 polegadas" },
    { label: "Conectividade", value: "Wi-Fi" },
    { label: "Armazenamento", value: "128 GB" },
    { label: "Cor", value: "Cinza-espacial" },
    { label: "Disponibilidade", value: "2 unidades" },
  ],
  quantity: 2,
  availability: "2 unidades disponíveis",
  featured: true,
  image: {
    src: "/images/ipads/ipad-air-m3-main.jpg",
    alt: "Foto real de duas caixas do Apple iPad Air 11 polegadas com chip M3 em cinza-espacial.",
    width: 1536,
    height: 2048,
  },
  gallery: [
    {
      src: "/images/ipads/ipad-air-m3-detail-01.jpg",
      alt: "Foto real das caixas do iPad Air 11 polegadas mostrando a embalagem do produto.",
      width: 1536,
      height: 2048,
    },
  ],
  purchaseLinks: [
    {
      id: "whatsapp",
      label: siteConfig.contact.whatsapp.label,
      href: siteConfig.contact.whatsapp.href,
      unavailableLabel: siteConfig.contact.whatsapp.unavailableLabel,
    },
    {
      id: "olx",
      label: siteConfig.marketplaceLinks.olx.label,
      href: siteConfig.marketplaceLinks.olx.href,
      unavailableLabel: siteConfig.marketplaceLinks.olx.unavailableLabel,
    },
    {
      id: "mercado-livre",
      label: siteConfig.marketplaceLinks.mercadoLivre.label,
      href: siteConfig.marketplaceLinks.mercadoLivre.href,
      unavailableLabel: siteConfig.marketplaceLinks.mercadoLivre.unavailableLabel,
    },
  ],
};

export const trustPillars = [
  {
    title: "Curadoria de tecnologia",
    text: "Seleção focada em equipamentos desejados, com comunicação objetiva sobre disponibilidade.",
  },
  {
    title: "Atendimento direto",
    text: "Negociação humana, clara e sem formulários desnecessários nesta primeira versão.",
  },
  {
    title: "Pronta entrega",
    text: "O destaque atual prioriza itens disponíveis para consulta e negociação imediata.",
  },
  {
    title: "Compra por plataforma ou negociação local",
    text: "A Encrypta direciona para canais externos de compra e atendimento, conforme disponibilidade.",
  },
];

export const futureCategories = [
  "Apple",
  "Notebooks",
  "Hardware premium",
  "Oportunidades em tecnologia",
];
