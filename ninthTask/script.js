const arrCitizens = [
    {
    name: "Gregoriy Lapinskiy",
    gender: "male",
    }, 
    {
    name: "Victoria Morth",
    birthyear: "#ffffff",
    gender: "female",
    }, 
    {
    name: "Vladislav Moretti",
    birthyear: "#ffffff",
    gender: "male",
    }, 
    {
    "name":"Biggs Darklighter",
    "gender":"male",
    }, 
    {
    name: "Anna Marsh",
    birthyear: "#ffffff",
    gender: "female",
    }, 
    {
        name: "Pavel Pavlov",
        gender: "male",
    }, 
];
const arrVillagers = [
    {
    name: "Pavel Pavlov",
    gender: "male",
    }, 
    {
    name: "Marina Marinova",
    birthyear: "#ffffff",
    gender: "female",
    }, 
    {
    name: "Islam Islamov",
    gender: "male",
    }, 
]
const mergeArrays = (arrayOne, arrayTwo) => {
    return [...arrayOne, ...arrayTwo];
}
console.log(mergeArrays(arrCitizens, arrVillagers));

//Второй способ
/*
const mergeArrays = (arrayOne, arrayTwo) => 
    return arrayOne.concat(arrayTwo);
};
console.log(mergeArrays(arrCitizens, arrVillagers));
*/

/* ------ Способ с нерабочим удалением дубликатов (Не знаю, почему не работает, возможно в массиве обьектов вообще нет смысла удалять дубликаты)
const mergeArrays = (arrayOne, arrayTwo) => {
    const prepeared = [...arrayOne, ...arrayTwo];
    const result = prepeared.filter((element, index) => {
        return prepeared.indexOf(element) === index;
    });
    return result;
}
console.log(mergeArrays(arrCitizens, arrVillagers));
*/
