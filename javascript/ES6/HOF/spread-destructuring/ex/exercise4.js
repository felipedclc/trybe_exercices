const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

/* const filterPeople = people.filter((person) => person.bornIn >= 1900 && person.bornIn <= 2000 && person.nationality === 'Australian');
function filteredPeople() {
    return filterPeople;
}
console.log(filteredPeople()); */

const bornIn20Century = year => year >= 1901 && year <= 2000
const isAustralian = nationality => nationality === "Australian"
const filterPeople = (people) => people.filter(
    ({ bornIn, nationality }) => bornIn20Century(bornIn) && isAustralian(nationality)
)

const filteredPeople = filterPeople(people)

assert.deepStrictEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepStrictEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })

// Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas
// as pessoas australianas que nasceram no século 20: