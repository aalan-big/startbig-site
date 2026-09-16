<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <div class="footer-logo">
          <SiteLogo dark />
        </div>
        <p>Sistema ERP para gestão de pequenas e médias empresas. Simples, rápido e completo.</p>
        <p class="footer-copy">© 2026 StartBIG · Desenvolvido por BIG TEC</p>
      </div>
      <div class="footer-links">
        <div>
          <strong>Produto</strong>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#segmentos">Segmentos</a>
          <a href="#planos">Planos</a>
          <a href="#download" @click.prevent="open('download')">Download</a>
        </div>
        <div>
          <strong>Empresa</strong>
          <a href="#suporte">Suporte</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useSiteNotice } from '~/shared/composables/useSiteNotice'

const { open } = useSiteNotice()
</script>

<style scoped>
.footer {
  background: #020617;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 56px 0 32px;
}
.footer-inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 48px;
}
.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
}
.footer-brand p {
  font-size: 14px;
  color: #475569;
  line-height: 1.7;
  max-width: 280px;
}
.footer-copy {
  margin-top: 20px;
  font-size: 12px !important;
  color: #334155 !important;
}
.footer-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
.footer-links > div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-links strong {
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}
.footer-links a {
  font-size: 14px;
  color: #475569;
  transition: color 0.15s;
}
.footer-links a:hover {
  color: #94A3B8;
}
@media (max-width: 640px) {
  .footer-inner {
    grid-template-columns: 1fr;
  }
  .footer-links {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
