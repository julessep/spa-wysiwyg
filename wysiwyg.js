let people = [
	{	
	  title: "Musician",
	  name: "Nate",
	  bio: "Nate often had cold hands in the mountians when he wasn't playing the guitar.",
	  image: "https://f4.bcbits.com/img/a0486809077_2.jpg",
	  lifespan: {
	    birth: 1993,
	    death: "Present"
	  }
	},
	{	
	  title: "Artist",
	  name: "Picasso",
	  bio: "Hello was not the favorite word of this famous artist but he liked color.",
	  image: "http://www.thefamouspeople.com/profiles/images/pablo-picasso-3.jpg",
	  lifespan: {
	    birth: 1881,
	    death: 1873
	  }
	},
	{	
	  title: "Painter",
	  name: "Klee",
	  bio: "Klee spent many of his days dreaming of being the king of all insects.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Paul_Klee_1911.jpg",
	  lifespan: {
	    birth: 1879,
	    death: 1940
	  }
	},
		{	
	  title: "Actress",
	  name: "Judy",
	  bio: "Judy was a very judgmental woman.",
	  image: "https://68.media.tumblr.com/27f48f48a051aa66c62329865677abb7/tumblr_inline_oqgkfvOiNA1qgp297_540.jpg",
	  lifespan: {
	    birth: 1942,
	    death: "Present"
	  }
	}	
]

let counter = 0;
let outputEl = document.getElementById('outputEl');
let header = document.getElementById('person')
for (; counter < people.length; counter++) {
  outputEl.innerHTML += 
  	`<div class="people_container" id="people${counter}">
  		<header id="header">
  			<h1>${people[counter].title}</h1>
  			<h2>${people[counter].name}</h2>
  		</header>
  		<section id="section">
  			<p>${people[counter].bio}</p>
  			<img src=${people[counter].image}>
  		</section>
  		<footer id="footer">
  			<p>${people[counter].lifespan.birth} - ${people[counter].lifespan.death}</p>
  	</div>`
}

let containerEl = document.getElementsByClassName("people_container");
let userInput = document.getElementById("userInput");
		

for (let i = 0; i < containerEl.length; i++) {
	containerEl[i].addEventListener("click", function() {
			containerEl[i].classList.toggle("border")
	})
}

	userInput.addEventListener("keyup", function() {
		if (event.key === "Enter") {
			userInput.value = "";
		}
	})