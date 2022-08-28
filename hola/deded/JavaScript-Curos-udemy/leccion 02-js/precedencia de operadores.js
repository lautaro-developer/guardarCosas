// las expreciones en JS se evaluan de izquierda a dereche
// pero con los operadores se rompe esta condicion 'adjunto foto'
// ya que como en las matematicas, si se encuentra un x/* una divicion / se evalua primero

let suma = a=1, b=5, c=2;
suma = a + (b * c)
console.log('resultado: ' + suma)