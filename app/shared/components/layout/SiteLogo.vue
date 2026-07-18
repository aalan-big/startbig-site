<script setup>
defineProps({
  // 'dark' deixa o texto claro (para usar sobre fundo escuro, ex: rodapé)
  dark: { type: Boolean, default: false },
})
</script>

<template>
  <span class="logo-mark" :class="{ 'is-dark': dark }">
    <svg class="logo-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="0" y="0" width="32" height="32" rx="8" fill="url(#sb-grad)" />
      <rect x="6.5" y="18" width="4.5" height="8" rx="2" fill="#fff" fill-opacity="0.6" />
      <rect x="13.75" y="13" width="4.5" height="13" rx="2" fill="#fff" fill-opacity="0.82" />
      <rect x="21" y="7.5" width="4.5" height="18.5" rx="2" fill="#fff" />
      <defs>
        <linearGradient id="sb-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stop-color="#045CA1" />
          <stop offset="1" stop-color="#5590BF" />
        </linearGradient>
      </defs>
    </svg>
    <span class="logo-word">Start<strong>BIG</strong></span>
  </span>
</template>

<style scoped>
.logo-mark {
  display: inline-flex;
  align-items: center;
  gap: 9px;
}
.logo-icon {
  width: 30px;
  height: 30px;
  flex-shrink: 0;
}
.logo-word {
  font-size: 19px;
  font-weight: 600;
  color: var(--dark);
  letter-spacing: -0.01em;
  line-height: 1;
}
.logo-word strong {
  font-weight: 800;
  color: var(--primary);
}
.logo-mark.is-dark .logo-word {
  color: #fff;
}
.logo-mark.is-dark .logo-word strong {
  color: #60A5FA;
}
</style>
