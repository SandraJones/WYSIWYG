"use strict";

let people = [ 
	{
	  title: "U.S. President",
	  name: "James Earl Carter",
	  bio: "Served in U.S. Navy, was elected governor of the state of Georgia, and elected U.S. President.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/JimmyCarterPortrait2.jpg",
	  lifespan: {
	    birth: 1923,
	    death: 2075
	 }	
	},
	{
	title: "U.S. President",
	  name: "William Jefferson Clinton",
	  bio: "Served at the state level in Arkansas, including as Governor, prior to being elected to US Presidency.",
	  image: "http://www.psychorgone.com/wp-content/uploads/2010/06/bill-clinton.jpg",
	  lifespan: {
	    birth: 1950,
	    death: 2075
    }
	},

	{
	title: "U.S. President",
	  name: "Barak Hussein Obama",
	  bio: "Served in the Illinois House of Representatives, was elected Senator and won offic of President.",
	  image: "https://en.wikipedia.org/wiki/United_States_Senate_career_of_Barack_Obama#/media/File:BarackObama2005portrait.jpg",
	  lifespan: {
	    birth: 1961,
	    death: 2075
	}
},
	{
	title: "U.S. President",
	  name: "Hillary Rodham Clinton",
	  bio: "Served as US Senator from New York, then as Sec. of State, then elected to the US Presidency.",
	  image: "http://abcnews.go.com/images/Politics/AP_hillary_clinton_2_jt_151121.jpg",
	  lifespan: {
	    birth: 1950,
	    death: 2075
	}
}
];
let container = document.getElementById("container");
let input = document.getElementById("input");
let card = document.getElementsByClassName("card");
//now we will populate the dom by making cards. it will come back as an array

console.log("card", card);
// so we need to cycle thru the for loop 


for (let i = 0; i < people.length; i++) {
  //print this straight to the DOM, so page is pulled up and see cards immediately
  let person = people[i];
  console.log("person",person);
  //as we go thru the function we are going to build one card at a time
  buildCard(person);

}

function buildCard(person) {
  container.innerHTML += `<person class="card"><header>${person.title} ${person.name} </header><section>${person.bio}<img src="${person.image}"></section><footer>${person.lifespan.birth}-${person.lifespan.death}</footer></person>` 
};

  	//targeting title property in object     

// function makeYellow() {
// 	for (let i=0; i < person.length; i++) {
// 		if (person[i] === 2*i % 2) {
// 			then //background is yellow
// 		}	else 
// 		    //background is light blue
//  	}
// }



card.addEventListener("keyup", buildCard);

//HAVE THIS DONE BY SATURDAY
//event listeners
//css to style photos







// CLASS
//create dom element inside container means create a card

// EVENT LISTENERS
//keyup in the input field  will bind to the card or mirror on the card and when you type it will show up on the card. bio is only thing that will change
//enter  in the input field
//click for border on card (dotted and gain focus)


//CSS
// yellow and blue
//border, dotted

//element called <person>}
// Create an array of objects that represents famous people (see structure below).
// Create a text input in your DOM.
// Beneath that, create a container, block element in your DOM.
// Create a DOM element for each of the objects inside the container.
// Style your person elements however you like.
// For every even numbered element, have a light yellow background.
// For every odd numbered element, have a light blue background.
// Each element's DOM structure should be as shown below.
// When you click on one of the person elements, a dotted border 
// should appear around it.
// When you click on one of the person elements, the text input should 
// immediately gain focus so that you can start typing.means when you click on a card, a cursor shows up use .focus()
// When there is a highlighted person element, and you begin 
// typing in the input box, the person's biography should be 
// immediately bound to what you are typing, letter by letter. this is the mirroring we want
// When you press the enter/return key when typing in the input 
// field, then the content of the input field should immediately be blank.


// VAR
// Create an array of objects that represents famous people (see structure below).


// <person>
// 	  <header>Name and title go here</header>
// 	  <section>Bio and image go here</section>
// 	  <footer>Lifespan info goes here</footer>
// 	</person>