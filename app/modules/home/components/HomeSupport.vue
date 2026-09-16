<template>
  <section class="support" id="suporte">
    <div class="container">
      <div class="support-inner">
        <span class="support-badge">Suporte</span>
        <h2 class="support-title">Estamos aqui para te ajudar</h2>
        <p class="support-sub">
          A BIG TEC oferece suporte direto para todos os clientes StartBIG.
          Sem chatbot, sem fila — fala com quem realmente conhece o sistema.
        </p>
        <div class="support-options">
          <a
            :href="whatsappUrl('Olá! Vim pelo site do StartBIG e preciso de ajuda.')"
            target="_blank"
            rel="noopener"
            class="support-card"
          >
            <span class="s-icon">💬</span>
            <div>
              <strong>WhatsApp</strong>
              <p>Resposta rápida para dúvidas e suporte técnico</p>
              <span class="s-contact">{{ WHATSAPP_DISPLAY }}</span>
            </div>
          </a>
          <a href="#suporte" class="support-card" @click.prevent="open('email')">
            <span class="s-icon">📧</span>
            <div>
              <strong>E-mail</strong>
              <p>Para suporte detalhado e documentação</p>
              <span class="s-contact">{{ EMAIL }}</span>
            </div>
          </a>
        </div>
        <div id="download" class="download-area">
          <a href="#download" class="btn-download" @click.prevent="open('download')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Baixar StartBIG grátis
          </a>
          <p class="download-note">Windows · 14 dias de trial · Sem cartão de crédito</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { EMAIL, WHATSAPP_DISPLAY, whatsappUrl } from '~/shared/contact'
import { useSiteNotice } from '~/shared/composables/useSiteNotice'

const { open } = useSiteNotice()
</script>

<style scoped>
.support {
  padding: 96px 0;
  background: var(--dark);
}
.support-inner {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
}
.support-badge {
  display: inline-block;
  background: rgba(4, 92, 161, 0.15);
  border: 1px solid rgba(4, 92, 161, 0.25);
  color: #93C5FD;
  font-size: 13px;
  font-weight: 600;
  padding: 5px 14px;
  border-radius: 100px;
  margin-bottom: 16px;
}
.support-title {
  font-size: clamp(26px, 4vw, 40px);
  font-weight: 800;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 14px;
}
.support-sub {
  font-size: 17px;
  color: #64748B;
  line-height: 1.7;
}
.support-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 40px 0;
  text-align: left;
}
.support-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 20px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  transition: border-color 0.2s;
}
.support-card:hover {
  border-color: var(--secondary);
  background: rgba(255, 255, 255, 0.06);
}
.s-contact {
  display: block;
  margin-top: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #93C5FD;
  word-break: break-all;
}
.s-icon {
  font-size: 24px;
  flex-shrink: 0;
}
.support-card strong {
  display: block;
  color: #fff;
  font-size: 15px;
  margin-bottom: 4px;
}
.support-card p {
  font-size: 13px;
  color: #475569;
  line-height: 1.5;
}
.download-area {
  margin-top: 8px;
}
.btn-download {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--primary);
  color: #fff;
  padding: 16px 36px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
}
.btn-download:hover {
  background: var(--primary-dark);
  box-shadow: 0 6px 20px rgba(4, 92, 161, 0.45);
  transform: translateY(-1px);
}
.download-note {
  margin-top: 14px;
  font-size: 13px;
  color: #334155;
}
@media (max-width: 480px) {
  .support-options {
    grid-template-columns: 1fr;
  }
}
</style>
