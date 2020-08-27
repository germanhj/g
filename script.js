let dog = {
  name: 'doki',
  age: 11,
  vacunas:true,
  sexo: 'masculino'
}
const {name,age,vacunas,sexo} = dog

const mostrarInfo = ({name,sexo} ) => {
  console.log(name,sexo)
}
mostrarInfo(dog) => // destructuracion de objetos
