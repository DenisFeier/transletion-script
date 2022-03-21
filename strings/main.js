const fs = require('fs');
const readline = require('readline');

const enF = './s_en.txt'
const frF = './s_fr.txt'
const itF = './s_it.txt'
const nlF = './s_nl.txt'

const isEmpty = (str) => {
    return (!str || str.length === 0 );
}

const filterLines = (str) => {
    return !str.includes('//') && !isEmpty(str)
}

const readLinesFor = (file) => {
    const lines = fs.readFileSync(file, 'utf-8').split('\n')

    return lines.filter(filterLines)
}

console.log(readLinesFor(enF))
