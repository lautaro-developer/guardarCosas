// let autos = new Array ('AK-47', 'M4', 'MP5') antigua forma de crear arrays o arreglos

// forma actual de crear arreglos o array con []
// un array es un tipo obj que puedes agregar diferentes valores

const categoria = ['masturbacion', 'inces', 'futa']
console.log(categoria)

// para haceder a un valor de un array se debe hacer lo siguiente
console.log(categoria[0])
// se tiene que dar el indice el cual comienza en cero

// saber cuantos valores tiene el array con .length y for

for(let a = 0; a < categoria.length; a++){
    console.log(a,':',categoria[a] )
}

// modificar valor
categoria[1] = 'monster'
console.log(categoria)


// agregar un nuevo valor
categoria.push('orgia')
console.log(categoria)

// agregar elementos de otra forma
console.log(categoria.length)
categoria [categoria.length] = 'shota'

// manera de agregar elementos saltando indicese pero no es recomendable ya que se desperdicia espacio en memoria
categoria[5] = 'lolicon'
console.log(categoria)



for(let a = 0; a < categoria.length; a++){
    console.log(a,':',categoria[a] )
}

// saber que clase es array

// aqui sale que es tipo obj
console.log(typeof categoria)

// preguntar si es tipo array
console.log(Array.isArray(categoria))