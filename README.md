# StartBIG — Site

Site de divulgação do **StartBIG ERP**, o sistema de gestão para pequenas empresas
(assistências de informática, oficinas mecânicas e outros segmentos).

O objetivo do site é apresentar o produto e levar o visitante ao **download do trial
de 14 dias** e à **contratação dos planos**.

> ⚠️ Este repositório é **apenas o site** (vitrine). O SaaS/ERP e a lógica de licenças
> ficam em um projeto separado na VPS.

## Stack

- [Nuxt 4](https://nuxt.com) + Vue 3
- CSS próprio (sem framework), organizado por módulos

## Rodando localmente

```bash
npm install
npm run dev
```

O site abre em `http://localhost:3000`.

Não há variáveis de ambiente: o site é 100% estático.

## Contratação de planos

O botão "Assinar agora" do plano Start aponta para `https://assine.startbig.com.br`,
fora deste repositório. É lá que o cliente é identificado, a sessão de pagamento é
criada na Stripe (com o `licencaId` nos metadados) e o webhook renova a licença.

O site **não** aponta direto para um Payment Link da Stripe: um link estático não
consegue informar de qual licença é o pagamento, e o webhook descartaria a cobrança.

A URL de cada plano fica em `checkout`, dentro de `HomePlans.vue`. Plano sem
`checkout` aparece como "Em breve".

## Build de produção

```bash
npm run build     # gera a saída em .output/
npm run preview   # pré-visualiza o build localmente
```

## Estrutura

```
app/
  pages/            # rotas (index.vue = home)
  modules/home/     # seções da home (Hero, Segmentos, Funcionalidades, Planos, Suporte)
  shared/           # componentes reutilizáveis (Navbar, Footer, Logo)
  assets/css/       # estilos globais e tokens de cor da marca
public/img/         # imagens (logo, prints das telas)
```
