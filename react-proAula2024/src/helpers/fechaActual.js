export const fechaActual = () => {
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();

  return `${dia}/${mes}/${anio}`;
};
