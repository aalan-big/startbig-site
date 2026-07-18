<template>
  <section class="segments" id="segmentos">
    <div class="container">
      <div class="section-center">
        <span class="section-badge">Segmentos</span>
        <h2 class="section-heading">Para o seu tipo de negócio</h2>
        <p class="section-sub">
          O StartBIG adapta-se ao seu setor. Já atendemos assistências de informática
          e oficinas mecânicas — e estamos expandindo para muito mais.
        </p>
      </div>
      <div class="segments-grid">
        <div
          v-for="seg in segments"
          :key="seg.name"
          class="segment-card"
          :class="{ coming: !seg.active }"
        >
          <div class="seg-icon">{{ seg.icon }}</div>
          <h3>{{ seg.name }}</h3>
          <p>{{ seg.desc }}</p>
          <span class="seg-status" :class="seg.active ? 'active' : 'soon'">
            {{ seg.active ? 'Disponível agora' : 'Em breve' }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const segments = [
  {
    name: 'Assistência de Informática',
    icon: '💻',
    desc: 'Ordens de serviço, controle de peças, clientes e relatórios de desempenho.',
    active: true,
  },
  {
    name: 'Oficina Mecânica de Carro',
    icon: '🔧',
    desc: 'OS de manutenção, histórico dos veículos, controle de peças e serviços.',
    active: true,
  },
  {
    name: 'Serigrafia',
    icon: '🎨',
    desc: 'Gestão de pedidos personalizados, produção e controle de materiais.',
    active: false,
  },
  {
    name: 'Outros Segmentos',
    icon: '🏪',
    desc: 'Novos segmentos em desenvolvimento. Seu tipo de negócio chegará em breve.',
    active: false,
  },
]
</script>

<style scoped>
.segments {
  padding: 96px 0;
  background: var(--bg);
}
.section-center {
  text-align: center;
  margin-bottom: 56px;
}
.section-center .section-sub {
  margin: 0 auto;
  max-width: 520px;
}
.segments-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.segment-card {
  background: var(--bg);
  border: 1.5px solid var(--border);
  border-radius: 16px;
  padding: 28px 24px;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}
.segment-card:not(.coming):hover {
  border-color: var(--primary);
  box-shadow: 0 8px 24px rgba(4, 92, 161, 0.1);
  transform: translateY(-3px);
}
.segment-card.coming {
  opacity: 0.55;
}
.seg-icon {
  font-size: 36px;
  margin-bottom: 14px;
}
.segment-card h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 8px;
}
.segment-card p {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 16px;
}
.seg-status {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 100px;
}
.seg-status.active {
  background: rgba(16, 185, 129, 0.1);
  color: var(--success);
}
.seg-status.soon {
  background: var(--bg-soft);
  color: var(--muted);
}
@media (max-width: 900px) {
  .segments-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .segments-grid {
    grid-template-columns: 1fr;
  }
}
</style>
