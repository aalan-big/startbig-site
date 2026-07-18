// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      // Link de pagamento da Stripe do plano Start (R$49,90/mês).
      // Definido pela variável de ambiente NUXT_PUBLIC_STRIPE_START_URL (.env).
      stripeStartUrl: '',
    },
  },
  components: [
    { path: '~/shared/components', pathPrefix: false },
    { path: '~/modules/home/components', pathPrefix: false },
  ],
  app: {
    head: {
      title: 'StartBIG ERP — Sistema de Gestão para sua Empresa',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ERP completo para assistências de informática, serigrafias, oficinas e muito mais. Experimente grátis por 14 dias.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/img/logo-startbig.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' }
      ]
    }
  }
})
