const arrCitizens = [
    {
    name: "Gregoriy Lapinskiy",
    height: 175,
    weight: 85,
    hair_color: "brown",
    birthyear: "#ffffff",
    gender: "male",
    }, 
    {
    name: "Victoria Morth",
    birthyear: "#ffffff",
    gender: "female",
    }, 
    {
    name: "Vladislav Moretti",
    height: 190.242,
    weight: 101,
    hair_color: "light-brown",
    skin_color: "white",
    eyecolor: "brown",
    birthyear: "#ffffff",
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
    "hair_color":"blue",
    "skin_color":"dark",
    "eye_color":"brown",
    "birthyear":"#ffffff",
    "gender":"male",
    }, 
    {
    name: "Anna Marsh",
    birthyear: "#ffffff",
    gender: "female",
    }, 
];

const arrayToString = (array) => array.map(person => {
    return Object.values(person).filter((val) => typeof val === 'string').join('; ');
});
console.log(arrayToString(arrCitizens));
