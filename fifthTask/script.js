const arrCitizens = [
    {
    name: "Gregoriy Lapinskiy",
    height: "175",
    weight: "85",
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
    height: "190.242",
    weight: "101",
    hair_color: "light-brown",
    skin_color: "white",
    eyecolor: "brown",
    birthyear: "#ffffff",
    gender: "male",
    }, 
    {
    "name":"Biggs Darklighter",
    "height":"183.98",
    "wei_ght":"84",
    "hair_color":"blue",
    "skin_color":"dark",
    "eye_color":"brown",
    "birthyear":"#ffffff",
    "gender":"male",
    }, 
    {
    name: "Victoriiiia Morth",
    birthyear: "#ffffff",
    gender: "female",
    }, 
];
const obj = {  
    "name":"some name",
    "height":"182",
    "mass":"77",
    "hair_color":"black",
    "skin_color":"red",
    "eye_color":"brown",
    "birth_year":"XXXXXX",
    "gender":"female",
}

const sortByGender = (array, genderValue) => {
    if (genderValue === 'male') {
        const sortedByMale = [...array].sort((a, b) => {
            if (a.gender > b.gender) {
                return -1
        }
    })
    return sortedByMale;
    }
    if (genderValue === 'female') {
        const sortedByFemale = [...array].sort((a, b) => {
            if (a.gender < b.gender) {
                return -1
        }
    })
    return sortedByFemale;
    }
}
console.log(sortByGender(arrCitizens, 'male'));

