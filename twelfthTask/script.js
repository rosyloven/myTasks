const arrCitizens = [
    {
    name: "Gregoriy Lapinskiy",
    height: 175,
    weight: 85,
    gender: "male",
    }, 
    {
    name: "Victoria Morth",
    birthyear: "#ffffff",
    height: 175,
    weight: 85,
    iq: 100,
    }, 
    {
    name: "Vladislav Moretti",
    height: 190.242,
    weight: 101,
    hair_color: "light-brown",
    gender: "male",
    }, 
    {
    name: "Vladislav Moretti",
    birthyear: "#ffffff",
    gender: "male",
    }, 
    {
    "name":"Biggs Darklighter",
    "height":183.98,
    "wei_ght":84,
    }, 
    {
    name: "Anna Marsh",
    height: 150,
    weight: 45,
    }, 
];
const calcSummInArray = (array) => {
    const result = array.map(person => {  
        return Object.values(person).filter((val) => typeof val === 'number').reduce((sum, current) => sum + current);
    })
    return result.sort((b, a) => +a - +b);
}
console.log(calcSummInArray(arrCitizens));
