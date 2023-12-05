export const currencyFormatter = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
