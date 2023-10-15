let input = document.getElementById("displayInput");
let keys = document.querySelectorAll("button");

let strings = "";
let previousString = ""
let arr = Array.from(keys);	

// function checkChar(char){
// 	if(char)
// }

arr.forEach(button => {
  
	button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      strings = eval(strings);
      input.value = strings;
	  
    } 
	else if (e.target.innerHTML == "C") {
      strings = "";
      input.value = strings;
    }
	else if (e.target.innerHTML == "±") {
		strings = "-";
		input.value = strings;
	}  
	else if(e.target.innerHTML == "DEL"){
		strings = strings.slice(0,-1);
		input.value = strings;
	}
	else if(e.target.innerHTML == "√"){
		strings = Math.sqrt(strings);
		input.value = strings;
	}
	else {
      strings += e.target.innerHTML;
	  console.log(strings);
      input.value = strings;
    }
  });
});



