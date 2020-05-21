const fs=require('fs')
const human={
    name:'Hari',
    planet:'earth'
}
const humanJSON=JSON.stringify(human)
fs.writeFileSync('1-json.json',humanJSON)

const dataBuffer=fs.readFileSync('1-json.json')
const dataJson=dataBuffer.toString()
const data=JSON.parse(dataJson)
data.name='hariharan'
console.log(data.name)