let map = document.getElementById("map");
let new_cases = document.getElementById("new_case");
let new_death = document.getElementById("new_death");
let total_death = document.getElementById("total_death");
let total_recovered = document.getElementById("total_recovered");
let total_cases = document.getElementById("total_cases");
let table = document.getElementById('state_stat')
let state = document.querySelector('.map svg-content-responsive')
 
function makeButtons(){
	fetch("https://covid-19-usa-data-by-zt.p.rapidapi.com/GetUSStateWiseData", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c040d6ad58msh0dac702e285eb0bp1190d7jsnd7236d84ebe9",
		"x-rapidapi-host": "covid-19-usa-data-by-zt.p.rapidapi.com"
		}
	})

.then(response => response.json())
.then(states =>{
    //debugger
	console.log(states)
    states.data.forEach(state =>{
	   const stateButtonString = `<button id=${state.code}> ${state.code} </button>`
	   document.querySelector('.buttons').innerHTML += stateButtonString
		state.onload = function(){
			
		}
	
		
	})
})

}
// let state_data = fetch("https://covid-19-usa-data-by-zt.p.rapidapi.com/GetUSStateWiseData", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "c040d6ad58msh0dac702e285eb0bp1190d7jsnd7236d84ebe9",
// 		"x-rapidapi-host": "covid-19-usa-data-by-zt.p.rapidapi.com"
// 	}
// })

	   //stateButton.addEventListener("click", function() { makeItHappen(boxa,boxb); }
	   //document.getElementById(`${state.code}`).addEventListener('click', (e)=>{debugger})
	   //debugger
	   //addButtonListeners()

	// stateButtons = document.getElementsByClassName("buttons")[0].children
	// stateButtons.forEach(button =>{
	// 	button.addEventListener("DOMContentLoaded", (e)=>{console.log("added event")})
	// })
	//<button data-> ${world.attributes.likes} Likes </button>
	//)
//Getting all the state statistic using a loop
    
//}))
// .catch(err => {
//     console.log(err);
// })


// Listeners here
function addButtonListeners() {
	const stateButtons = document.getElementsByClassName("buttons")[0].children
	   stateButtons.forEach(button =>{
		   button.addEventListener("click", (e)=>{console.log("added event")})
	   })
}

document.addEventListener("DOMContentLoaded", () =>{
	makeButtons();
	debugger

	
})
//console.log('#state node type is', state)

//document.querySelectorAll('iframe').forEach( item =>
    //console.log(item.contentWindow.document.body.querySelectorAll("#states"))

