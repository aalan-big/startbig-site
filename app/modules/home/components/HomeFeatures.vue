<template>
  <section class="features" id="funcionalidades">
    <div class="container">
      <div class="section-center">
        <span class="section-badge">Funcionalidades</span>
        <h2 class="section-heading">Tudo que sua empresa precisa</h2>
        <p class="section-sub">
          Do atendimento ao cliente até os relatórios de desempenho — o StartBIG cobre cada etapa do seu negócio.
        </p>
      </div>
      <div class="features-grid">
        <div v-for="feat in features" :key="feat.title" class="feature-card">
          <div class="feat-icon">{{ feat.icon }}</div>
          <h3>{{ feat.title }}</h3>
          <p>{{ feat.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: '🛒',
    title: 'Controle de Vendas',
    desc: 'Registre vendas, emita recibos e acompanhe o faturamento em tempo real.',
  },
  {
    icon: '🔧',
    title: 'Ordens de Serviço',
    desc: 'Abra, gerencie e feche OS com histórico completo de serviços e peças.',
  },
  {
    icon: '👥',
    title: 'Cadastro de Clientes',
    desc: 'Base de clientes completa com histórico de atendimentos e contatos.',
  },
  {
    icon: '📦',
    title: 'Gestão de Produtos',
    desc: 'Controle de estoque com entradas, saídas e alertas de baixo estoque.',
  },
  {
    icon: '📈',
    title: 'Relatórios',
    desc: 'Relatórios de vendas, ordens de serviço, estoque e financeiro para decidir com dados.',
  },
  {
    icon: '📊',
    title: 'Dashboard',
    desc: 'Painel inicial com os principais indicadores do negócio em tempo real.',
  },
  {
    icon: '👷',
    title: 'Gestão de Equipe',
    desc: 'Ranking de funcionários, controle de metas e desempenho individual.',
  },
  {
    icon: '🏢',
    title: 'Dados da Empresa',
    desc: 'Configure as informações da sua empresa, logo e dados de contato.',
  },
]
</script>

<style scoped>
.features {
  padding: 96px 0;
  background: var(--bg-soft);
}
.section-center {
  text-align: center;
  margin-bottom: 56px;
}
.section-center .section-sub {
  margin: 0 auto;
  max-width: 540px;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.feature-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 24px;
  transition: box-shadow 0.2s, transform 0.2s;
}
.feature-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}
.feat-icon {
  font-size: 28px;
  margin-bottom: 12px;
}
.feature-card h3 {
  font-size: 15px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 8px;
}
.feature-card p {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.6;
}
@media (max-width: 900px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
