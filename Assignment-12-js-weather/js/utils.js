export function formateDate() {
  const date = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
  })
    .format(new Date('2024-12-10'))
    .split(' ');

  return date;
}
