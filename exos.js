// n index
const getNthValue = (tableau, n) => {
  if(n > tableau.length) {
    return 'Value does not exist'
  }
  return tableau[n]
}

console.log(getNthValue(['a', 0, { e: "45" }], 5))

const joinTable = (tableau, delimiter) => {
  // return tableau.join(delimiter)
  let string = ''

  for (let i = 0; i < tableau.length; i++) {
    const del = tableau.length - 1 === i ? "" : delimiter;
    string += tableau[i] + del
  }

  return string
}

console.log(joinTable(["Lundi", "Mardi", "Mercredi", "Jeudi"], "_"))

const createArray = (n, word) => {
  // let newTable = []
  // for (let i = 0; i < n; i++) {
  //   newTable.push(word)
  // }
  // return newTable
  return Array(n).fill(word)
}

// console.log(createArray(1000, 'Bonjour'))

const applatisse = (nested_tables) => {
  return nested_tables.flat()
}

// console.log(applatisse([[1, 2],[3, 4],[5 ,6],[7, 8],[9, 10]]))

const createObject = (tab) => {
  const obj = {}
  for (let i = 0; i < tab.length; i++) {
    obj[tab[i][0]] = tab[i][1]
  }
  return obj
}

console.log(createObject([["a", 1], ["b", 2]]))

const cleanArray = (values) => {
  return values.filter((value) => value)
}

// console.log(cleanArray([0, 1, false, 2, undefined, 3, null, '']))

const withoutDouble = (tab) => {
  const alreadyViewed = []

  for (let i = 0; i < tab.length; i++) {
    if(!alreadyViewed.includes(tab[i])) {
      alreadyViewed.push(tab[i])
    }
  }
  
  return alreadyViewed;
}

console.log(withoutDouble(([1, 2, 2, 5 ,8, 2 ,1])))

let duplicate = item_list.reduce((acc,currentValue,index, array) => { 
  if(array.indexOf(currentValue)!=index && !acc.includes(currentValue)) {
    acc.push(currentValue);
  } 
  return acc; 
  }, []); 