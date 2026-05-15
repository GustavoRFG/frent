import { ActionLink } from "./components/ActionLink";
import { ProductVisual } from "./components/ProductVisual";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { featuredProduct, futureCategories, trustPillars } from "./config/products";

export default function Home() {
  const [whatsappLink, olxLink, mercadoLivreLink] = featuredProduct.purchaseLinks;

  return (
    <>
      <SiteHeader />
      <main>
        <section className="heroSection" aria-labelledby="hero-title">
          <div className="heroContent">
            <p className="eyebrow">Encrypta - nova curadoria em tecnologia</p>
            <h1 id="hero-title">Tecnologia premium selecionada, com pronta entrega.</h1>
            <p className="heroLead">
              A Encrypta reúne oportunidades em eletrônicos de alto valor, com atendimento direto e canais de compra
              seguros.
            </p>

            <div className="heroHighlight" aria-label="Produto em destaque">
              <span>Destaque do momento</span>
              <strong>iPad Air 11” com chip M3 - disponível agora</strong>
              <p>Duas unidades do modelo Wi-Fi 128 GB em cinza-espacial, prontas para negociação.</p>
            </div>

            <div className="heroActions" aria-label="Canais de atendimento e compra">
              <ActionLink
                href={whatsappLink.href}
                label={whatsappLink.label}
                unavailableLabel={whatsappLink.unavailableLabel}
              />
              <ActionLink
                href={olxLink.href}
                label={olxLink.label}
                unavailableLabel={olxLink.unavailableLabel}
                variant="secondary"
              />
              <ActionLink
                href={mercadoLivreLink.href}
                label={mercadoLivreLink.label}
                unavailableLabel={mercadoLivreLink.unavailableLabel}
                variant="secondary"
              />
            </div>
          </div>

          <ProductVisual image={featuredProduct.image} gallery={featuredProduct.gallery} />
        </section>

        <section className="productSection" id="produtos" aria-labelledby="product-title">
          <div className="sectionIntro">
            <p className="eyebrow">Produto em destaque</p>
            <h2 id="product-title">{featuredProduct.name}</h2>
            <p>{featuredProduct.subtitle}</p>
          </div>

          <div className="productGrid">
            <div className="specGrid" aria-label="Especificacoes do produto">
              {featuredProduct.attributes.map((attribute) => (
                <div className="specItem" key={attribute.label}>
                  <span>{attribute.label}</span>
                  <strong>{attribute.value}</strong>
                </div>
              ))}
            </div>

            <aside className="availabilityPanel" aria-label="Disponibilidade">
              <span>{featuredProduct.availability}</span>
              <p>Consulte a disponibilidade atual. Condição vigente nos canais de atendimento.</p>
              <p className="mutedText">Preço fixo não é exibido nesta versão porque pode variar por marketplace.</p>
            </aside>
          </div>
        </section>

        <section className="pillarsSection" aria-labelledby="pillars-title">
          <div className="sectionIntro">
            <p className="eyebrow">Por que comprar com a Encrypta?</p>
            <h2 id="pillars-title">Curadoria, clareza e atendimento direto.</h2>
          </div>

          <div className="cardGrid">
            {trustPillars.map((pillar) => (
              <article className="infoCard" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="aboutSection" id="sobre" aria-labelledby="about-title">
          <div>
            <p className="eyebrow">A Encrypta está evoluindo</p>
            <h2 id="about-title">Uma marca conectada ao universo da tecnologia.</h2>
          </div>
          <p>
            A Encrypta nasceu conectada ao universo da tecnologia e agora amplia sua atuação com uma seleção de
            equipamentos premium e oportunidades de compra bem posicionadas. A proposta atual combina curadoria,
            transparência, atendimento direto, comunicação profissional e expansão gradual do catálogo.
          </p>
        </section>

        <section className="categoriesSection" aria-labelledby="categories-title">
          <div className="sectionIntro">
            <p className="eyebrow">Categorias em expansão</p>
            <h2 id="categories-title">A base de uma operação comercial maior.</h2>
          </div>

          <div className="categoryList" aria-label="Categorias futuras">
            {futureCategories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        </section>

        <section className="finalCta" id="atendimento" aria-labelledby="final-cta-title">
          <p className="eyebrow">Atendimento</p>
          <h2 id="final-cta-title">Quer comprar um dos iPads disponíveis?</h2>
          <p>Fale diretamente com a Encrypta e consulte as condições atuais de disponibilidade.</p>
          <div className="heroActions">
            <ActionLink
              href={whatsappLink.href}
              label={whatsappLink.label}
              unavailableLabel={whatsappLink.unavailableLabel}
            />
            <a className="actionLink actionLink--quiet" href="#produtos">
              Ver canais de compra
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
