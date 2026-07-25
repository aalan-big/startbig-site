<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slides = [
  { src: '/img/dashboard.png', alt: 'Painel de vendas do StartBIG ERP' },
  { src: '/img/login.png', alt: 'Tela de login do StartBIG ERP' },
]

const current = ref(0)
let timer = null

const INTERVAL = 3500

function go(i) {
  current.value = (i + slides.length) % slides.length
}
function next() {
  go(current.value + 1)
}
function start() {
  stop()
  timer = setInterval(next, INTERVAL)
}
function stop() {
  if (timer) clearInterval(timer)
  timer = null
}
function select(i) {
  go(i)
  start()
}

onMounted(start)
onBeforeUnmount(stop)
</script>

<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-content">
        <span class="hero-badge">
          <span class="badge-dot" />
          Trial gratuito · 14 dias sem compromisso
        </span>
        <h1 class="hero-title">
          Gerencie sua empresa<br>
          <span class="highlight">de forma inteligente</span>
        </h1>
        <p class="hero-sub">
          Sistema de gestão e PDV para quem vende produtos e presta serviços.
          Vendas, ordens de serviço, estoque e equipe — tudo em um só lugar,
          rodando direto no seu computador.
        </p>
        <div class="hero-actions">
          <a href="#download" class="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Baixar grátis agora
          </a>
          <a href="#planos" class="btn-ghost">
            Ver planos
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
        <div class="hero-trust">
          <span>✓ Sem cartão de crédito</span>
          <span>✓ Instalação em minutos</span>
          <span>✓ Backup na nuvem</span>
          <span>✓ Suporte incluído</span>
        </div>
      </div>

      <div class="hero-mockup" @mouseenter="stop" @mouseleave="start">
        <div class="slideshow">
          <div class="slides">
            <img
              v-for="(slide, i) in slides"
              :key="slide.src"
              :src="slide.src"
              :alt="slide.alt"
              class="slide"
              :class="{ active: i === current }"
            >
          </div>
        </div>
        <div class="slide-dots">
          <button
            v-for="(slide, i) in slides"
            :key="slide.src"
            class="slide-dot"
            :class="{ active: i === current }"
            :aria-label="`Ir para o print ${i + 1}`"
            @click="select(i)"
          />
        </div>
      </div>
    </div>
    <div class="hero-shape" />
  </section>
</template>

<style scoped>
.hero {
  background: var(--dark);
  position: relative;
  overflow: hidden;
  padding: 80px 0 0;
}
.hero::before {
  content: '';
  position: absolute;
  top: -150px;
  right: -150px;
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, rgba(4, 92, 161, 0.18) 0%, transparent 70%);
  pointer-events: none;
}
.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  padding-bottom: 72px;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(4, 92, 161, 0.12);
  border: 1px solid rgba(4, 92, 161, 0.25);
  color: #93C5FD;
  font-size: 13px;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 24px;
}
.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10B981;
  flex-shrink: 0;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
.hero-title {
  font-size: clamp(34px, 4.5vw, 56px);
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}
.highlight {
  background: linear-gradient(135deg, #4DA3E8, #045CA1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-sub {
  font-size: 17px;
  color: #94A3B8;
  line-height: 1.7;
  margin-bottom: 36px;
  max-width: 460px;
}
.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}
.hero-trust {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.hero-trust span {
  font-size: 13px;
  color: #475569;
  font-weight: 500;
}

/* Mockup */
.hero-mockup {
  position: relative;
}
.slideshow {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  transform: perspective(1200px) rotateY(-4deg) rotateX(2deg);
}
.slides {
  position: absolute;
  inset: 0;
}
.slide {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  opacity: 0;
  transition: opacity 0.8s ease;
  filter: drop-shadow(0 24px 45px rgba(0, 0, 0, 0.55));
}
.slide.active {
  opacity: 1;
}
.slide-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 18px;
}
.slide-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background: rgba(148, 163, 184, 0.35);
  transition: background 0.3s ease, transform 0.3s ease;
}
.slide-dot:hover {
  background: rgba(148, 163, 184, 0.6);
}
.slide-dot.active {
  background: #60A5FA;
  transform: scale(1.25);
}

.hero-shape {
  height: 64px;
  background: var(--bg);
  clip-path: ellipse(100% 100% at 50% 100%);
  margin-top: -1px;
}

@media (max-width: 960px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-bottom: 0;
  }
  .hero-mockup {
    display: none;
  }
  .hero-shape {
    display: none;
  }
  .hero {
    padding-bottom: 64px;
  }
}
@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
  }
  .btn-ghost {
    justify-content: center;
  }
}
</style>
