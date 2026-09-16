<template>
  <BaseModal
    :open="active === 'email'"
    badge="E-mail"
    title="Fale com a gente por e-mail"
    @close="close"
  >
    <p class="modal-text">
      Manda sua dúvida ou pedido para o endereço abaixo. Respondemos em horário
      comercial, direto com quem conhece o sistema.
    </p>
    <div class="modal-copy">
      <code>{{ EMAIL }}</code>
      <button type="button" :class="{ done: copied }" @click="copy">
        {{ copied ? 'Copiado ✓' : 'Copiar' }}
      </button>
    </div>
    <div class="modal-actions">
      <a
        :href="whatsappUrl('Olá! Vim pelo site do StartBIG e preciso de ajuda.')"
        target="_blank"
        rel="noopener"
        class="modal-btn outline"
        @click="close"
      >
        Prefiro falar pelo WhatsApp
      </a>
    </div>
  </BaseModal>
</template>

<script setup>
import { EMAIL, whatsappUrl } from '~/shared/contact'
import { useSiteNotice } from '~/shared/composables/useSiteNotice'

const { active, close } = useSiteNotice()
const copied = ref(false)

async function copy() {
  try {
    await navigator.clipboard.writeText(EMAIL)
  } catch {
    // navegador sem clipboard: seleciona o texto pra copiar na mão
    const range = document.createRange()
    range.selectNodeContents(document.querySelector('.modal-copy code'))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
  }
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>
