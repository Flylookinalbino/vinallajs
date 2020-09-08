// JavaScript Object Notation
/*
var person = {
    name:"Brad",
    age: 35,
    email: function(){
        return 'example@gamil.com';
    },
    address:{
        street: "5 main st",
        city: "Boston"
    },
    children:["child1", "child2"]
};

// console.log(person.email());

// Convert JSObject + N
person =  JSON.stringify(person);
console.log(person);

// Convert JSObject - N
person = JSON.parse(person);
console.log(person.name);
console.log(person.children[0]);
console.log(person.address.street);
*/

// Array of JSObjects
/*
var people =[
    {
        name: "Name1",
        age: 35,
    },
    {
        name: "Name2",
        age: 40,
    },
    {
        name: "Name3",
        age: 15,
    },

];
console.log(people[1].name);

// Send Data from JSObject to InnerHTML
var output = '';
people.forEach((person) => output += `<li>${person.name}</li>`);
document.getElementById('people').innerHTML = output;
*/

// Create JSON File
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var response = JSON.parse(xhttp.responseText);
        var output = '';
        console.log(response.people);
        response.people.forEach((person) => output +=`<li>${person.name}</li>`);
        document.getElementById('people').innerHTML = output;
    }
};
xhttp.open("GET", "people.json", true);
xhttp.send();