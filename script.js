//Get the class names for all the Accordions
const accord = document.getElementsByClassName('acc')
const plusminus = document.getElementsByClassName('r')

//First Accordion
//take the first record from the array accord
let a = accord[0];
//set up the content
let line = document.createElement('div');
a.append(line);
line.className = 'line';
let par = document.createElement('p');
line.append(par);
par.innerText = 'Information management is an emerging field that is concerned with: The infrastructure used to collect, manage, preserve, store and deliver information.'
//make the content not display during startup
line.style.display = "none"

//Second Accordion
//take the second record from the array accord
let a1 = accord[1];
//set up the content
let line1 = document.createElement('div');
a1.append(line1);
line1.className = 'line';
let par1 = document.createElement('p');
line1.append(par1);
par1.innerText = 'Computer networking refers to interconnected computing devices that can exchange data and share resources with each other. These networked devices use a system of rules, called communications protocols, to transmit information over physical or wireless technologies.'
//make the content not display during startup
line1.style.display = "none"

//Third Accordion
//take the third record from the array accord
let a2 = accord[2];
//set up the content
let line2 = document.createElement('div');
a2.append(line2);
line2.className = 'line';
let par2 = document.createElement('p');
line2.append(par2);
par2.innerText = 'Web information system, or web-based information system, is an information system that uses Internet web technologies to deliver information and services, to users or other information systems/applications.'
//make the content not display during startup
line2.style.display = "none"

//Third Accordion
//take the third record from the array accord
let a3 = accord[3];
//set up the content
let line3 = document.createElement('div');
a3.append(line3);
line3.className = 'line';
let par3 = document.createElement('p');
line3.append(par3);
par3.innerText = 'The Systems Integration Architecture provides a bridge between the heterogeneous operational applications and platforms. This architecture ties together the mix of platforms, operating systems, transports, and applications.'
//make the content not display during startup
line3.style.display = "none"

//functions
function accord0(){
	if(line.style.display == "none") {
		plusminus[0].innerText = "~";
		line.style.display = "block";
	}
	else {
		plusminus[0].innerText = "+";
		line.style.display = "none"
	}
}
function accord1(){
	if(line1.style.display == "none") {
		plusminus[1].innerText = "~";
		line1.style.display = "block";
	}
	else {
		plusminus[1].innerText = "+";
		line1.style.display = "none"
	}
}
function accord2(){
	if(line2.style.display == "none") {
		plusminus[2].innerText = "~";
		line2.style.display = "block";
	}
	else {
		plusminus[2].innerText = "+";
		line2.style.display = "none"
	}
}
function accord3(){
	if(line3.style.display == "none") {
		plusminus[3].innerText = "~";
		line3.style.display = "block";
	}
	else {
		plusminus[3].innerText = "+";
		line3.style.display = "none"
	}
}
