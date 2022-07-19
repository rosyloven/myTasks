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

/* ------ Способ c удалением дубликатов (Код из константы result нагуглил, не очень понимаю, как работает)
const mergeArrays = (arrayOne, arrayTwo) => {
    const arrForDeduplicate = [...arrayOne, ...arrayTwo];
    const result = arrForDeduplicate.filter((v,i,a)=>a.findIndex(t=>(t.place === v.place && t.name===v.name))===i)
    return result;
}
console.log(mergeArrays(arrCitizens, arrVillagers));
*/
