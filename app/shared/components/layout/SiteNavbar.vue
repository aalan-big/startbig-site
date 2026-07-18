<template>
  <nav class="navbar">
    <div class="container navbar-inner">
      <a href="/" class="logo">
        <SiteLogo />
      </a>
      <ul class="nav-links">
        <li><a href="#funcionalidades">Funcionalidades</a></li>
        <li><a href="#segmentos">Segmentos</a></li>
        <li><a href="#planos">Planos</a></li>
        <li><a href="#suporte">Suporte</a></li>
      </ul>
      <a href="#download" class="btn-nav">Baixar grátis</a>
      <button class="menu-toggle" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menu">
        <span /><span /><span />
      </button>
    </div>
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <a href="#funcionalidades" @click="menuOpen = false">Funcionalidades</a>
      <a href="#segmentos" @click="menuOpen = false">Segmentos</a>
      <a href="#planos" @click="menuOpen = false">Planos</a>
      <a href="#suporte" @click="menuOpen = false">Suporte</a>
      <a href="#download" class="btn-primary" @click="menuOpen = false">Baixar grátis</a>
    </div>
  </nav>
</template>

<script setup>
const menuOpen = ref(false)
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid var(--border);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}
.navbar-inner {
  display: flex;
  align-items: center;
  gap: 32px;
  height: 68px;
}
.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.nav-links {
  display: flex;
  list-style: none;
  gap: 2px;
  margin-left: auto;
}
.nav-links a {
  display: block;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
  transition: background 0.15s, color 0.15s;
}
.nav-links a:hover {
  background: var(--bg-soft);
  color: var(--primary);
}
.btn-nav {
  background: var(--primary);
  color: #fff;
  padding: 9px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  transition: background 0.2s;
  flex-shrink: 0;
}
.btn-nav:hover {
  background: var(--primary-dark);
}
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
  width: 32px;
  height: 32px;
}
.menu-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--dark);
  border-radius: 2px;
  transition: all 0.2s;
}
.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 12px 24px 20px;
  border-top: 1px solid var(--border);
}
.mobile-menu.open {
  display: flex;
}
.mobile-menu a {
  padding: 10px 8px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
  border-radius: 6px;
}
.mobile-menu .btn-primary {
  margin-top: 8px;
  justify-content: center;
}
@media (max-width: 768px) {
  .nav-links,
  .btn-nav {
    display: none;
  }
  .menu-toggle {
    display: flex;
  }
}
</style>
