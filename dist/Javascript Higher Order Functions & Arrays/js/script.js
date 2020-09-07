const companies =[
    {name: 'Company One',   category: 'Finance',    start: 1981, end: 2003},
    {name: 'Company Two',   category: 'Retail',     start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto',       start: 1999, end: 2007},
    {name: 'Company Four',  category: 'Retail',     start: 1989, end: 2010},
    {name: 'Company Five',  category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six',   category: 'Finance',    start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto',       start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine',  category: 'Retail',     start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forLoop => forEach
for(let i = 0 ; i < companies.length; i++){
    console.log(companies[i]);
}
console.log('\nEnd of For Loop\n\n');

// forEach => forLoop
companies.forEach(function(company, index){
    console.log(company.name);
    console.log(index);
});
console.log('\nEnd of ForEach\n\n');

// forLoop => filter
let canDrink = [];
for(let i = 0; i < ages.length; i++){
    (ages[i] >= 21) ? canDrink.push(ages[i]): "";
}
console.log(canDrink);
console.log('\nEnd of For Loop - Filter\n\n');

// filter => forLoop
const canDrink2 = ages.filter(function(age){
    return (age >= 21)?(true):(false);
});
console.log(canDrink2);
console.log('\nEnd of Basic Filter\n\n');

// Arrow Function => Filter => for loop
const canDrink3 = ages.filter(age => age >= 21);
console.log(canDrink3);
console.log('\nEnd of Arrow function filter\n\n');

// Filter Retail company
const retailCompanies = companies.filter(function(company){
    return (company.category === 'Retail')? true:false;
});
console.log(retailCompanies);
console.log('\nEnd of filter retail companies\n\n');

// Arrow Function => Filter Retail Companies
const retailComp = companies.filter(company => company.category === 'Retail');
console.log(retailComp);
console.log('\nEnd of Arrow function filter retail company\n\n');

// Arrow Function => Filter Companies in 80s
const comp80s = companies.filter(company => (company.start >= 1980 && company.start <= 1989));
console.log(comp80s);
console.log('\nEnd of Arrow function filter 80s companies\n\n');

// Arrow Function => Filter Companies lasted 10 years or more
const comp10Years = companies.filter(company => ((company.end - company.start) >= 10));
console.log(comp10Years);
console.log('\nEnd of Arrow function filter companies lasted 10 years or more\n\n');

// map
// Create array of company names
const companyNames = companies.map(company => company.name);
console.log(companyNames);
console.log('\nEnd of Arrow function maps of company names\n\n');

// sort
const sortCompanies = companies.sort((c1,c2)=> (c1.start > c2.start)?1:-1);
console.log(sortCompanies);
console.log('\nEnd of Arrow function sort company based on start date\n\n');

// reduce
const sumAges = ages.reduce((total, age) => total + age, 0);
console.log(sumAges);
console.log('\nEnd of Arrow function reduce the sum of ages \n\n');