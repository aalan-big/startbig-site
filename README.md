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

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha:

```
NUXT_PUBLIC_STRIPE_START_URL=   # Payment Link da Stripe do plano Start (R$ 89,90/mês)
```

O botão "Contratar" do plano Start apenas redireciona para esse link de pagamento
da Stripe. O pagamento e a renovação de licença são tratados pelo SaaS na VPS
(via webhook), fora deste repositório.

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
