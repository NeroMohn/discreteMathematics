
let fs = require = ("fs");
let textFromFileLoadedGlobal;
let groups = [];
let grouped = [];
let elements = [];
let values = [];

function nullFilter(value) {
	return value != null;
}

function txtInput() {
	let file = document.getElementById("file").files[0];

	const fileReader = new FileReader();

	fileReader.onload = function (fileLoadedEvent) {
		let textFromFileLoaded = fileLoadedEvent.target.result; //The event.result property contains the last/previous value returned by an event handler triggered by the specified event. From w3schools

		textFromFileLoadedGlobal = textFromFileLoaded;

		document.getElementById("inputTextToSave").value = textFromFileLoadedGlobal;
	}

	fileReader.readAsText(file, "UTF-8");

}

function setGroups() {

	let textForUse;

	textForUse = textFromFileLoadedGlobal;
	textForUse = textForUse.replace(/ /g, "");
	textForUse = textForUse.replace(/FIM/g, "");
	console.log(textForUse);
	let reg = /\n/;
	let regGrouped = /[a-zA-Z]/;
	let regElement = /[a-z]/;
	let regGroup = /[A-Z]/;
	textForUse = textForUse.split(reg);
	textForUse.pop();
	console.log(textForUse);
	for (i = 0; i < textForUse.length; i++) {
		grouped.push(textForUse[i].match(regGrouped));
	}

	for (j = 0; j < grouped.length; j++) {
		elements.push(grouped[j].input.match(regElement));
	}
	elements = elements.filter(nullFilter);

	for (k = 0; k < grouped.length; k++) {
		groups.push(grouped[k].input.match(regGroup));
	}
	groups = groups.filter(nullFilter);

	for (k = 0; k < grouped.length; k++) {
		values.push(grouped[k].input);
		values[k] = values[k].replace(/[a-zA-Z]/g, "");
		values[k] = values[k].replace(/\=/g, "");
		values[k] = values[k].replace(/\{/g, "");
		values[k] = values[k].replace(/\}/g, "");
	}

	console.log(grouped)
	console.log(groups)
	console.log(elements);
	console.log(values);


	document.getElementById("inputGroups").value = groups;
	document.getElementById("inputElements").value = elements;
	for (i = 0; i < grouped.length; i++) {
		document.getElementById("inputValues").value += grouped[i][0] + " = " + values[i];
	}
}