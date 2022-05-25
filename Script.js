// JavaScript source code

const input_options = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
"j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var name = '';
add_options();
length_name();
show_name();


function add_options(){

	for(i=1; i < 21; i++){
		var element = document.getElementById(i);
		shuffle_options()

		for(j=0; j < input_options.length; j++) {
		
			var option = document.createElement("option");

			if (i == 1){
				option.value = input_options[j].toUpperCase();
				option.text = input_options[j].toUpperCase();
			}
			else {
				option.value = input_options[j];
				option.text = input_options[j];
			}
		
			element.add(option);
		}

		
	}
}


function shuffle_options(){
	input_options.sort(() => Math.random() - 0.4);
}


function length_name(){
	length_fn = Math.round(parseInt(input_length_fn.value)/5);
	document.getElementById("output_length_fn").innerHTML = "length: " + length_fn ;
	
	change_layout_width()
	visibility_letters();
	show_name();
}


function visibility_letters(){

	for (i=1; i < 21; i++){

		var element = document.getElementById(i);

		if (i <= length_fn){
			element.style.visibility = "visible";
		}
		else {
			element.style.visibility = "hidden";
		}
	}
}


function show_name(){
	name = "";
	for (i=1; i <= length_fn; i++){
		var e = document.getElementById(i);
		var letter = e.value;
		name += letter;
	}
	document.getElementById("name").innerHTML = name;
}


function change_layout_width(){
	document.getElementById("firstName").style.width = (length_fn*5) + "%"
	for (i=1; i <= length_fn; i++){
		var width = (100/(length_fn+(0.07*length_fn))) + "%";
		document.getElementById(i).style.width = width;
	}
}

function continue_button(){
	alert('Hi, ' + name + "! \nNice to meet you!");
	console.log(name);
}