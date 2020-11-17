function exo1(number, tableau) {
    return tableau[number]
}

function exo2(tableau, delimiteur) {
    return tableau.join(delimiteur)
}

function exo3(number, valeur) {
    var arr = []

    for (; number != 0; number--)
        arr.push(valeur)
    return arr
}

function exo4(tableau) {
    return tableau.flat()
}

function exo5(tableau) {
    return tableau.reverse()
}

function exo6(tableau) {
    const arr = tableau.filter(tableau => tableau !== undefined)
    const arr1 = arr.filter(tableau => tableau !== null)

    return arr1.filter(tableau => tableau !== false)
}

function exo7(tableau) {
    var arr = {}
    for (let i = 0; i < tableau.length; i++) {
         arr += `${tableau[i][0]}: ${tableau[i][1]}`
      }
    return  arr
}

function exo8(tableau) {
    return new Set(tableau)
}

function exo9(string, number) {
    var arr = []
    var tmp = string.split(' ')

    for(let i = 0; i < number; i++) {
        arr.push(tmp[i])
    }
    return arr
}

function exo10(tableau) {
    return tableau.map(x => x * 2)
}

function exo11(tableau) {
    return tableau.reduce((accumulator, currentValue) => accumulator + currentValue)
}
  
var arr = ["one", "two", "three", "four", "five"]
var arr1 = [[1, 2],[3, 4],[5 ,6],[7, 8],[9, 10]]
var arr2 = ["0", "one", null, "two", undefined, "three", false, "four", "five"]
var arr3 = (['a', 1], ['b', 2])
var arr4 = [1, 2, 2, 5 ,8, 2 ,1]

 console.log(exo1(2, arr))
 console.log(exo2(arr, '_'))
 console.log(exo3(12, 'A'))
 console.log(exo4(arr1));
 console.log(exo5(arr))
 console.log(exo6(arr2))
 console.log(exo7(arr3))
 console.log(exo8(arr4))
 console.log(exo9("Bonjour je m’appelle Anakin", 3))
 console.log(exo10(arr4))
 console.log(exo11(arr4))
