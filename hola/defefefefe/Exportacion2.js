export let cadena = 'miModulo';

const suma = (x, y) => {
  let b = x + y;
  return b;
};
const res = (x, y) => {
  let b = x - y;
  return b;
};
const multi = (x, y) => {
  let b = x * y;
  return b;
};
const div = (x, y) => {
  let b = x / y;
  return b;
};
const resi = (x, y) => {
  let b = x % y;
  return b;
};

export let a = 20, b = 10;

export let primerNombre = 'Diaz';

class Nombre{
    b(x){
        return x + x
    }
}
export const obj = new Nombre(2);

export default {
  suma,
  res,
  multi,
  div,
  resi,
  obj,
};