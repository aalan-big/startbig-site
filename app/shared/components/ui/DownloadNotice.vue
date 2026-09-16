<template>
  <BaseModal
    :open="active === 'download'"
    badge="Download"
    title="Por enquanto, o instalador é enviado pela nossa equipe"
    @close="close"
  >
    <p class="modal-text">
      O download direto pelo site ainda não está liberado. Chama a gente no
      WhatsApp ou manda um e-mail: a BIG TEC envia o instalador do StartBIG e
      libera os seus <strong>14 dias grátis</strong>, sem cartão de crédito.
    </p>
    <div class="modal-actions">
      <a
        :href="whatsappUrl('Olá! Quero testar o StartBIG. Podem me enviar o instalador?')"
        target="_blank"
        rel="noopener"
        class="modal-btn primary"
        @click="close"
      >
        Pedir pelo WhatsApp
      </a>
      <button type="button" class="modal-btn outline" @click="open('email')">
        Pedir por e-mail
      </button>
    </div>
  </BaseModal>
</template>

<script setup>
import { whatsappUrl } from '~/shared/contact'
import { useSiteNotice } from '~/shared/composables/useSiteNotice'

const { active, open, close } = useSiteNotice()
</script>
