
const superheroes = [

    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }

];



const findSpiderman = () => {
 
 return  superheroes.find(hero =>
    
    hero.name === 'Spiderman');  
 };

console.log(findSpiderman());



const findSpiderman2 = () =>

superheroes.find(hero => hero.name === 'Spiderman');

console.log(findSpiderman2());




const findSpiderman3 = () => {
    
    const superHeroToFind = superheroes.find(hero => hero.name === 'Spiderman');
    
    return superHeroToFind;
};

console.log(findSpiderman3());





const theHeroWeAreLookingFor = superheroes.find(hero => hero.name === 'Spiderman');


console.log(theHeroWeAreLookingFor);





const doubleArrayValues = [1, 2, 3];


const doubleArrayNumbers = () => 

doubleArrayValues.forEach(number => console.log(number * 2)

);

doubleArrayNumbers();




const doubleArrayNumbers2 = () => 

 doubleArrayValues.map(number => number * 2);


console.log(doubleArrayNumbers2());





const checkNumberBiggerThenTen = (array) => 

array.some(number => number > 10);


console.log(checkNumberBiggerThenTen([1, 4, 3, 6, 9, 7, 11]));

console.log(checkNumberBiggerThenTen([1, 2, 5, 3, 8, 5]));




const isItalyInTheGreat7 = array => 

array.some(country => country === 'Italy');


console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']));




const tenfold = (array) =>

 array.forEach(number => console.log(number * 10 ));


tenfold([1, 4, 3, 6, 9, 7, 11]);





const isBelow100 = (array) => 

array.every(number => number < 100);


console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]));
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, , 11, 77, 84, 98 ]));



const bigSum = (currentTotal, array) => {

    array.reduce(array + currentTotal);

};




console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))







