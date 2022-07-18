const arrCitizens = [
    {
    mass: '85',
    name: "Gregoriy Lapinskiy",
    height: "175",
    hair_color: "brown",
    birthyear: "#ffffff",
    gender: "male",
    }, 
    {
    mass: '100',
    name: "Victoria Morth",
    birthyear: "#ffffff",
    gender: "female",
    }, 
    {
    mass: "101",
    name: "Vladislav Moretti",
    height: "190.242",
    hair_color: "light-brown",
    skin_color: "white",
    eyecolor: "brown",
    birthyear: "#ffffff",
    gender: "male",
    }, 
    {
    mass: '60',
    name: "Vladislav Moretti",
    birthyear: "#ffffff",
    gender: "male",
    }, 
    {
    "mass":"84",
    "name":"Biggs Darklighter",
    "height":"183.98",
    "hair_color":"blue",
    "skin_color":"dark",
    "eye_color":"brown",
    "birthyear":"#ffffff",
    "gender":"male",
    }, 
    {
    mass: '65',
    name: "Anna Marsh",
    birthyear: "#ffffff",
    gender: "female",
    }, 
];

const sortArrayByMass = (array) => {   
    return array.sort((a, b) => +a.mass > +b.mass ? 1 : -1);
}
console.log(sortArrayByMass(arrCitizens));