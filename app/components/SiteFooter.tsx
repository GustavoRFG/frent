import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "../config/siteConfig";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div>
        <Link className="footerBrand" href="/" aria-label="Encrypta - pagina inicial">
          <Image
            src={siteConfig.logo.fullSrc}
            alt={siteConfig.logo.alt}
            width={328}
            height={380}
          />
        </Link>
        <p>{siteConfig.tagline}</p>
        {siteConfig.serviceRegion ? <p>Atendimento em {siteConfig.serviceRegion}</p> : null}
      </div>

      <nav aria-label="Navegacao do rodape">
        {siteConfig.navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
