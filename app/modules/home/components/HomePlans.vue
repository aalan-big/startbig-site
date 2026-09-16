<template>
  <section class="plans" id="planos">
    <div class="container">
      <div class="section-center">
        <span class="section-badge">Planos</span>
        <h2 class="section-heading">Escolha o plano ideal</h2>
        <p class="section-sub">
          Todos os planos incluem 14 dias de trial gratuito. Sem cartão de crédito.
        </p>
      </div>
      <div class="plans-grid">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="plan-card"
          :class="{ featured: plan.featured }"
        >
          <div v-if="plan.featured" class="plan-badge">Mais popular</div>
          <div class="plan-name">{{ plan.name }}</div>
          <div class="plan-price">
            <template v-if="plan.price">
              <span class="price-amount">R$ {{ plan.price }}</span>
              <span class="price-period">/mês</span>
            </template>
            <span v-else class="price-soon">Em breve</span>
          </div>
          <div class="plan-users">Até {{ plan.users }} usuários</div>
          <ul class="plan-features">
            <li v-for="f in plan.features" :key="f">
              <span class="check">✓</span> {{ f }}
            </li>
          </ul>
          <a
            v-if="plan.checkout"
            :href="plan.checkout"
            class="plan-cta cta-featured"
          >
            Assinar agora
          </a>
          <span v-else class="plan-cta cta-soon">
            Em breve
          </span>
        </div>
      </div>
      <p class="plans-note">
        Todos os planos iniciam com <strong>14 dias grátis</strong>. Cancele quando quiser.
      </p>
    </div>
  </section>
</template>

<script setup>
// `checkout` guarda a URL da página de assinatura do plano. Quem não tem
// (Pro, por enquanto) cai automaticamente no estado "Em breve".
// A cobrança em si acontece fora deste repositório: a página de assinatura
// identifica o cliente, cria a sessão na Stripe e trata o webhook.
const plans = [
  {
    name: 'Start',
    price: '89,90',
    users: 3,
    featured: false,
    checkout: 'https://assine.startbig.com.br',
    features: [
      'Frente de caixa (PDV) e vendas',
      'Ordens de serviço com histórico',
      'Estoque, produtos e fornecedores',
      'Equipe, permissões e comissões',
      'Relatórios e dashboard',
      'Impressão térmica e A4',
      'Backup automático na nuvem',
      'Suporte por e-mail',
    ],
  },
  {
    name: 'Pro',
    price: null,
    users: 8,
    featured: true,
    features: [
      'Tudo do Start',
      'Gestão de equipe',
      'Relatórios completos',
      'Ranking de funcionários',
      'Suporte por WhatsApp',
      'Atualizações prioritárias',
    ],
  },
  {
    name: 'Business',
    price: '170,00',
    users: 15,
    featured: false,
    checkout: 'https://assine.startbig.com.br',
    features: [
      'Tudo do Pro',
      'Mais usuários simultâneos',
      'Suporte prioritário',
      'Onboarding personalizado',
      'Recursos exclusivos',
      'SLA garantido',
    ],
  },
]
</script>

<style scoped>
.plans {
  padding: 96px 0;
  background: var(--bg);
}
.section-center {
  text-align: center;
  margin-bottom: 56px;
}
.section-center .section-sub {
  margin: 0 auto;
  max-width: 480px;
}
.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;
  max-width: 920px;
  margin: 0 auto;
}
.plan-card {
  border: 1.5px solid var(--border);
  border-radius: 20px;
  padding: 32px 28px;
  position: relative;
  transition: box-shadow 0.2s;
}
.plan-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.09);
}
.plan-card.featured {
  border-color: var(--primary);
  box-shadow: 0 8px 32px rgba(4, 92, 161, 0.14);
  transform: scale(1.03);
}
.plan-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 18px;
  border-radius: 100px;
  white-space: nowrap;
}
.plan-name {
  font-size: 20px;
  font-weight: 800;
  color: var(--dark);
  margin-bottom: 16px;
}
.plan-price {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 8px;
}
.price-amount {
  font-size: 36px;
  font-weight: 800;
  color: var(--dark);
}
.price-period {
  font-size: 14px;
  color: var(--muted);
}
.price-soon {
  font-size: 18px;
  font-weight: 600;
  color: var(--muted);
}
.plan-users {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}
.plan-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
}
.plan-features li {
  font-size: 14px;
  color: var(--text);
  display: flex;
  align-items: center;
  gap: 8px;
}
.check {
  color: var(--success);
  font-weight: 700;
  flex-shrink: 0;
}
.plan-cta {
  display: block;
  text-align: center;
  padding: 13px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.2s;
  cursor: pointer;
}
.cta-featured {
  background: var(--primary);
  color: #fff;
}
.cta-featured:hover {
  background: var(--primary-dark);
}
.cta-outline {
  border: 1.5px solid var(--border);
  color: var(--dark);
}
.cta-outline:hover {
  border-color: var(--primary);
  color: var(--primary);
}
.cta-soon {
  background: var(--bg-soft);
  color: var(--muted);
  cursor: default;
  border: 1.5px solid var(--border);
}
.plans-note {
  text-align: center;
  margin-top: 32px;
  font-size: 14px;
  color: var(--muted);
}
@media (max-width: 768px) {
  .plans-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
  .plan-card.featured {
    transform: none;
  }
}
</style>
