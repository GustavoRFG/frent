import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "../config/siteConfig";
import { ActionLink } from "./ActionLink";

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <Link className="brandMark" href="/" aria-label="Encrypta - pagina inicial">
        <Image
          className="brandLogoImage"
          src={siteConfig.logo.src}
          alt={siteConfig.logo.alt}
          width={siteConfig.logo.width}
          height={siteConfig.logo.height}
          priority
        />
        <span>
          <strong>{siteConfig.brandName}</strong>
          <small>Tecnologia premium</small>
        </span>
      </Link>

      <nav className="siteNav" aria-label="Navegacao principal">
        {siteConfig.navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <ActionLink
        href={siteConfig.contact.whatsapp.href}
        label={siteConfig.contact.whatsapp.label}
        unavailableLabel={siteConfig.contact.whatsapp.unavailableLabel}
        variant="primary"
        className="headerCta"
      />
    </header>
  );
}
