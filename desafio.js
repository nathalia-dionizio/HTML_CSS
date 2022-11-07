/*

//1
const precoCombustivel = 5.79;
const KmPorLitros = 12;
const distaciaEmKm = 1580;

const valorDaViagem = (valor) => {
 valor = distaciaEmKm / KmPorLitros * precoCombustivel
 return valor.toFixed(2)
}

console.log("Valor na primeira viagem", valorDaViagem())

//2
const combustivelGasolina = 8.79;
const combustivelAlcool = 5.79;
const tipoCombustivel = "gasolina";
const KmPorLitros2 = 12;
const distaciaEmKm2 = 1580;

const valorDaViagem2 = (valor) => {
    if (tipoCombustivel === "gasolina") {
        valor = distaciaEmKm / KmPorLitros * combustivelGasolina
        return valor.toFixed(2)
    } else {
        valor = distaciaEmKm / KmPorLitros * combustivelAlcool
        return valor.toFixed(2) 
    }
 
}

console.log("Valor na segunda viagem", valorDaViagem2())

//3
const nota1 = 9;
const nota2 = 6;
const nota3 = 10;

const notaDoAluno = (media) => {
    if (media < 5) {
     media = Math.round((nota1 + nota2 + nota3) / 3) ;
     return `Sua média é ${media}, REPROVADO`
    } else if (media >=5 && media <=7) {
     media = Math.round((nota1 + nota2 + nota3) / 3)
     return `Sua média é ${media}, RECUPERAÇÃO`
    } else {
      media = Math.round((nota1 + nota2 + nota3) / 3)
      return `Sua média é ${media}, APROVADO!`
    }
}
console.log("Calcula média:", notaDoAluno())

//4

const calcularImc = (peso, altura) => {
    return Math.round(peso / (altura * altura))
}


const peso = 48;
const altura = 1.56;
const imc = calcularImc(peso, altura)

const condicaoDePeso = (imc) => {
    if (imc < 18.5) {
     return `Seu IMC é: ${imc}, ABAIXO DO PESO`
    } else if (imc >= 18.5 && imc < 25) { 
        return `Seu IMC é: ${imc}, PESO NORMAL`
    } else if (imc >= 25 && imc <=30) {
        return `Seu IMC é: ${imc}, ACIMA DO PESO`
    } else if (imc >= 30 && imc <=40) {
    return `Seu IMC é: ${imc}, OBESO`
    } else {
    return `Seu IMC é: ${imc}, OBESIDADE GRAVE`
    }
}

console.log("Calcula peso:", condicaoDePeso(peso, altura))

//5

const operacao = "debito";
const produto = 33;
const debito = produto / 100 * 10
const dinheiroOuPix = produto / 100 * 15 
const acima2X = (10 / 100) * produto

const maneiraPagamento = (valorFinal) => {
  if (operacao === "debito") {
    valorFinal = produto - debito
    return `Pagamento em debito ${valorFinal.toFixed(2)}`
  } else if (operacao === "dinheiro" || operacao === "pix" ) {
    valorFinal = produto - dinheiroOuPix
    return `Pagamento em dinheiro ou pix ${valorFinal.toFixed(2)}`
  } else if (operacao === "duas vezes") {
    valorFinal = produto
    return `Pagamento em duas vezes ${valorFinal.toFixed(2)}`
  } else {
    valorFinal = produto + acima2X
    return `Pagamento acima de duas vezes ${valorFinal.toFixed(2)}`
  }
  }
console.log(maneiraPagamento())


const ex = 40
const p1 = 10
const p2 = 23
calcular = (ex + p1 + p2) / 3

function calculaNota(ex, p1, p2) {
  if (calcular === 9) {
    return "A"
  } else if (calcular <9 && calcular >= 7.5) {
    return "B"
  } else if (calcular < 7.5 && calcular >= 6) {
    return "C"
  } else {
    return "D"
  }
}
console.log(calculaNota())


const ex = 30
const p1 = 40
const p2 = 80
const resultado = p1 + p2 + ex / 3

const calculaNota = () => {
 if (resultado >= 9 ) {
  return "A"
 } else if (resultado >= 7.5 && resultado < 9) {
  return "B"
 } else if (resultado >= 6 && resultado < 7.5) {
  return "C"
 } else {
  return "D"
 }
}
console.log(calculaNota())





const calculaNota1 = (ex1, p11, p21) => {
const resultado1 = p11 + p21 + ex1 / 3
 if (resultado1 >= 9 ) {
  return "A"
 } else if (resultado1 >= 7.5 && resultado1 < 9) {
  return "B"
 } else if (resultado1 >= 6 && resultado1 < 7.5) {
  return "C"
 } else {
  return "D"
 }
}
console.log(calculaNota1(5, 6, 1))


function calculaNota3(ex3, p13, p23) {
  const resultado3 = p13 + p23 + ex3 / 3
  if (resultado3 >= 9 ) {
  return "A"
 } else if (resultado3 >= 7.5 && resultado3 < 9) {
  return "B"
 } else if (resultado3 >= 6 && resultado3 < 7.5) {
  return "C"
 } else {
  return "D"
 }
}
console.log(calculaNota3(1, 4, 1))

*/