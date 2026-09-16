<template>
  <Teleport to="body">
    <div v-if="open" class="modal-backdrop" @click.self="$emit('close')">
      <div class="modal" role="dialog" aria-modal="true">
        <button class="modal-close" aria-label="Fechar" @click="$emit('close')">×</button>
        <span v-if="badge" class="modal-badge">{{ badge }}</span>
        <h3 v-if="title" class="modal-title">{{ title }}</h3>
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  open: Boolean,
  badge: String,
  title: String,
})
const emit = defineEmits(['close'])

function onKeydown(e) {
  if (e.key === 'Escape' && props.open) emit('close')
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(21, 21, 21, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.modal {
  position: relative;
  background: var(--bg);
  border-radius: 20px;
  padding: 36px 32px 32px;
  max-width: 480px;
  width: 100%;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);
}
.modal-close {
  position: absolute;
  top: 14px;
  right: 16px;
  background: none;
  border: none;
  font-size: 26px;
  line-height: 1;
  color: var(--muted);
  cursor: pointer;
}
.modal-close:hover {
  color: var(--dark);
}
.modal-badge {
  display: inline-block;
  background: var(--primary-light);
  color: var(--primary);
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 100px;
  margin-bottom: 14px;
}
.modal-title {
  font-size: 22px;
  font-weight: 800;
  color: var(--dark);
  line-height: 1.2;
  margin-bottom: 14px;
}
</style>
