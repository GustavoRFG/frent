import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Aviso de Privacidade",
  description:
    "Aviso de Privacidade da Encrypta para a primeira versão institucional e comercial do site.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="policyPage">
        <section className="policyHero">
          <p className="eyebrow">Privacidade</p>
          <h1>Aviso de Privacidade</h1>
          <p>
            Este aviso descreve, de forma clara e proporcional ao estágio atual do site, como a Encrypta trata a
            privacidade nesta primeira versão institucional e comercial.
          </p>
        </section>

        <article className="policyContent">
          <h2>1. Escopo desta versão</h2>
          <p>
            Nesta primeira versão, o site da Encrypta funciona como uma vitrine institucional e comercial. Ele apresenta
            a marca, produtos em destaque e canais externos de atendimento ou compra.
          </p>

          <h2>2. Coleta direta de dados pessoais</h2>
          <p>
            O site não possui formulário próprio de coleta de dados pessoais, cadastro de usuário, newsletter, checkout,
            painel administrativo ou área autenticada. A proposta desta V1 é coletar o mínimo possível e expor apenas o
            necessário para a comunicação comercial.
          </p>

          <h2>3. Canais externos</h2>
          <p>
            O usuário pode, voluntariamente, entrar em contato por canais externos como WhatsApp, OLX ou Mercado Livre,
            quando esses links estiverem configurados. Esses ambientes pertencem a terceiros e possuem seus próprios
            termos, políticas de privacidade e práticas de segurança.
          </p>

          <h2>4. Evolução futura</h2>
          <p>
            Caso a Encrypta passe a coletar dados diretamente no futuro, esta política deverá ser atualizada para
            explicar a finalidade, a necessidade, o contexto do tratamento, a retenção, o descarte, os direitos do
            titular e os canais de contato aplicáveis.
          </p>

          <h2>5. Prudência e minimização</h2>
          <p>
            A Encrypta busca tratar dados com prudência, redução de exposição desnecessária, transparência e segurança
            compatíveis com cada etapa da operação.
          </p>

          <h2>6. Observação importante</h2>
          <p>
            Este aviso não promete conformidade jurídica absoluta nem proteção total contra qualquer risco. Ele registra
            a postura atual da Encrypta para uma página pública sem coleta própria de dados pessoais.
          </p>

          <p className="policyBackLink">
            <Link href="/">Voltar para a página inicial</Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
