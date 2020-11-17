function arrayElement(array, index) {
    return `${array[index]}`
}

// console.log(arrayElement(['michel', 'jean-claude', 'francis'], 2))

function stringArray(array, delimiter) {
    return `${array.join(delimiter)}`
}

// console.log(stringArray(['michel', 'jean-claude', 'francis'], '/'))

function createArray(length, element) {
    return Array(length).fill(element)
}

// console.log(createArray(5, 'Bonjour'))

function flattenArray(array) {
    return array.flat()
}

// console.log(flattenArray([[1, 2], [3, 4], [5, 6]]))

function reverseArray(array) {
    return array.reverse()
}

// console.log(reverseArray([1, 2, 3]))

function cleanArray(array) {
    const cleanedArray = array.filter(element => element !== undefined)
    const cleanedArray2 = cleanedArray.filter(element => element !== null)
    return cleanedArray2.filter(element => element !== false)
}

// console.log(cleanArray([1, 2, null, undefined, 5, false]))

function keyValueObject(array) {
    const object = {}
    for(let i = 0; i < array.length; i++) {
        object[array[i][0]] = array[i][1]
    }
    return object
}

// console.log(keyValueObject([['a', 1], ['b', 2]]))

function arrayWithoutDouble(array) {
    const arrayWithoutDouble = []
    for (let i = 0; i < array.length; i++) {
        if(!arrayWithoutDouble.includes(array[i])) {
            arrayWithoutDouble.push(array[i])
        }
    }
    return arrayWithoutDouble

    // return new Set(array)
}

// console.log(arrayWithoutDouble([1, 2, 2, 3, 4, 5, 5, 1, 2, 6]))