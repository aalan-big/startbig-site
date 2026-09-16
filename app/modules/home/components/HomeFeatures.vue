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
    title: 'Frente de Caixa (PDV)',
    desc: 'Venda rápido no balcão: dinheiro, cartão, boleto, transferência e parcelamento com juros.',
  },
  {
    icon: '🔧',
    title: 'Ordens de Serviço',
    desc: 'Cadastre o equipamento do cliente e acompanhe reparo, aprovação, garantia e retirada.',
  },
  {
    icon: '💰',
    title: 'Financeiro Completo',
    desc: 'Contas a pagar e receber, fluxo de caixa, fechamento de caixa e controle de despesas.',
  },
  {
    icon: '🧾',
    title: 'NF-e e NFC-e',
    desc: 'Emissão de nota fiscal eletrônica e cupom fiscal direto do sistema, integrado às vendas.',
  },
  {
    icon: '📦',
    title: 'Estoque e Catálogo',
    desc: 'Produtos, serviços e fornecedores com alerta de estoque mínimo e visão de capital parado.',
  },
  {
    icon: '👥',
    title: 'Cadastro de Clientes',
    desc: 'Base de clientes completa com histórico de compras, atendimentos e contatos.',
  },
  {
    icon: '👷',
    title: 'Equipe e Comissões',
    desc: 'Cargos e permissões por funcionário, com comissão por venda e por serviço e meta mensal.',
  },
  {
    icon: '📊',
    title: 'Relatórios e Dashboard',
    desc: 'Faturamento do dia, semana e mês, ranking da equipe, curva ABC e desempenho das OS.',
  },
  {
    icon: '🖨️',
    title: 'Impressão Profissional',
    desc: 'Cupom em impressora térmica e documentos em A4 com a identidade da sua loja.',
  },
  {
    icon: '☁️',
    title: 'Backup na Nuvem',
    desc: 'Seus dados salvos automaticamente fora da loja. Se o computador falhar, nada se perde.',
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
  grid-template-columns: repeat(5, 1fr);
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
@media (max-width: 1100px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
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
