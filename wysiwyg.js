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
let bio = document.getElementsByClassName("bio");
//now we will populate the dom by making cards. it will come back as an array

console.log("card", card);
// so we need to cycle thru the for loop 


function populateDOM() {
	for (let i = 0; i < people.length; i++) {
	  //print this straight to the DOM, so page is pulled up and see cards immediately
	  let person = people[i];
	  //as we go thru the function we are going to build one card at a time
	  buildCard(person);
	  } 
	addClickEvent();
}

function buildCard(person) {
  container.innerHTML += `<person class="card"><header>${person.title} ${person.name} </header><section><p class="bio">${person.bio}</p><img src="${person.image}"></section><footer>${person.lifespan.birth}-${person.lifespan.death}</footer></person>` 
};


function addClickEvent(currentCard) {
	//need to create a border and focus on input when border is clicked(
			for (let i=0; i<card.length; i++) {
				let currentCard = card[i];
				let currentBio = bio[i];
			  currentCard.addEventListener("click", function() {
			    removeSelected();
			    input.value = "";
			    input.focus();
			    currentCard.classList.add("selected"); 
			    keyEvent(currentCard, currentBio);
		  	});  
  		}
}
//we only want to have one card selected at a time, so:
function removeSelected(){
	for (let i=0; i<card.length; i++) {
    card[i].classList.remove("selected");
  }
}
//when user clicks on a card
function keyEvent(currentCard, currentBio){
  input.addEventListener("keyup", function(event) {
  	//if returns a boolean, so check if currentCard
    if (currentCard.classList.contains("selected")) {
    	let newBio = event.currentTarget.value;
      currentBio.innerHTML = newBio; 
      if (event.keyCode === 13) {
      	 currentBio.innerHTML = newBio;
         input.value = "";
      }   
    }
  });
}


//event.target ect  properties on the event object


populateDOM();


// function makeYellow() {
// 	for (let i=0; i < person.length; i++) {
// 		if (person[i] === 2*i % 2) {
// 			then //background is yellow
// 		}	else 
// 		    //background is light blue
//  	}
// }


