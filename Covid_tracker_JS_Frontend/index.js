let map = document.getElementById("map");
let new_cases = document.getElementById("new_case");
let new_death = document.getElementById("new_death");
let total_death = document.getElementById("total_death");
let total_recovered = document.getElementById("total_recovered");
let total_cases = document.getElementById("total_cases");
let state_name = document.getElementById("state_name")

//state class
class State {
	constructor(state) {
		this.name = state.name
		this.confirmed = state.confirmed
		this.newconfirmed = state.newconfirmed
		this.deaths = state.deaths
		this.newdeaths = state.newdeaths
		this.code = state.code
		State.all.push(this)
	}
}

State.all = [];


// upon start up
document.addEventListener("DOMContentLoaded", () => {
	makeButtons();
	
})
//makes the buttons for all 50 states
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

    	states.data.forEach(state =>{
       	const stateButtonString = `<button id=${state.code} class= "state"> ${state.code} </button>`
       	document.querySelector('.buttons').innerHTML += stateButtonString
	   	new State(state, state.attributes)
	})

		let array = Array.from(document.getElementsByClassName(`state`))
		array.forEach(button => button.addEventListener("click", (e)=>{getCovidData(button)}))
		array.forEach(button => button.addEventListener("click", (e)=>{indexComments(button)}))
	})
		
}
//gets and displays all the COVID data for a particular state
function getCovidData(button) {
	let stateCovidData = State.all.filter(state => {
		return state.code === button.id
	})
	

		state_name.innerHTML = stateCovidData[0].name
		total_cases.innerHTML = stateCovidData[0].confirmed
		new_cases.innerHTML = stateCovidData[0].newconfirmed
		total_death.innerHTML = stateCovidData[0].deaths
		new_death.innerHTML = stateCovidData[0].newdeaths
	
	

	
	}
//allows someone to create a new user and store it into API
function signIn(){
	document.getElementById("signin").innerHTML +=
	
	`<br>
	<label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>
	<br>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
	<br>
    <button type="submit">Login</button>
	<h3> or sign up here! </h3>
	<label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>
	<br>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>`

    
  	
}




//allows someone to create a comment and store it into API(fetch create)
function postComment(statename){
	debugger
	const baseUrl = "http://localhost:3000/api/v1/comments"
		fetch(baseUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({})
		  })
			.then((response) => response.json())
			.then((data) => {
			  console.log(data);
			  indexComments
			});
		}







// fetch comments(read)
function indexComments(stateButton){
	let stateData = State.all.filter(state => {
		return state.code === stateButton.id;
		
	})
	previousComments = document.getElementById("stateComments");
	previousComments.remove();
	const baseUrl = "http://localhost:3000/api/v1/comments"
	fetch(baseUrl, {
		method: "GET",
		headers: { "Content-Type": "application/json" }
	  })
		.then((response) => response.json())
		.then((data) => {
		  console.log(data);
		//document.getElementById("comments").innerHTML=
		//data.forEach(comment => 
			//`<div>
				//<h2>${comment.text}</h2>
			//</div`
			//)

		 
		 
		 
		  document.getElementById("comments").innerHTML = 
		`<div id="stateComments">
		<input id="comment_box" placeholder="Enter a Comment about ${stateData[0].name}!">
		<button onclick= "postComment('${stateData[0].name}')" id= "comment_submit">Post Comment</button>
		</div>`
		});
	
	
	
	
	document.getElementById("comments").innerHTML = 
		`<div id="stateComments">
		<input id="comment_box" placeholder="Enter a Comment about ${stateData[0].name}!">
		<button onclick= "postComment('${stateData[0].name}')" id= "comment_submit">Post Comment</button>
		</div>`
}


