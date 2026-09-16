// Canais de contato da BIG TEC usados no site inteiro. Trocar aqui reflete
// na seção Suporte, no modal do plano Business e onde mais for importado.

// Só dígitos, com DDI 55 e DDD. Ex.: '5511999998888'
export const WHATSAPP_NUMBER = '5588996971128'

export const EMAIL = 'startbig.oficial@gmail.com'

// Número formatado para exibição: (11) 99999-8888
export const WHATSAPP_DISPLAY = WHATSAPP_NUMBER.replace(
  /^55(\d{2})(\d{4,5})(\d{4})$/,
  '($1) $2-$3',
)

// Abre a conversa no WhatsApp já com a mensagem preenchida.
export function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

