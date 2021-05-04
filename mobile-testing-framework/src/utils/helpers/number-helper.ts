export function formatMoneyToNumber(money: string): number {
  const amount = Number(money.replace('.', '').replace('R$ ', '').replace(/,/g, '.'));
  return amount;
}

export function formatNumberBrlMoney(amount: number): string {
  const decimals = 2;
  const money = amount.toFixed(decimals).toString().replace('.', ',');
  return `R$ ${money}`;
}