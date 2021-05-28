const arrayOfMonths = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];

export const currentDate = (): string => {
  const date = new Date();

  const time = date.toLocaleTimeString().substring(0, 5);
  const month = arrayOfMonths[date.getMonth()];
  const year = date.getFullYear();
  const day = date.getDate();

  return `${day} de ${month} ${year} | ${time} UTC`;
};
