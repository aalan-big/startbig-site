// Avisos globais do site (um por vez): 'download' enquanto o instalador não
// estiver liberado no site, 'email' para mostrar o endereço com botão copiar.
export function useSiteNotice() {
  const active = useState('site-notice', () => null)
  return {
    active,
    open: (name) => (active.value = name),
    close: () => (active.value = null),
  }
}
