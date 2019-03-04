
let fs = require = ("fs");
let textFromFileLoadedGlobal;
let groups = [];
let elements = [];
let values = [];

function txtInput(){
let file = document.getElementById("file").files[0];




	  const fileReader = new FileReader();

	  fileReader.onload = function(fileLoadedEvent){
		  let textFromFileLoaded = fileLoadedEvent.target.result; //The event.result property contains the last/previous value returned by an event handler triggered by the specified event. From w3schools

		  textFromFileLoadedGlobal = textFromFileLoaded;

		  document.getElementById("inputTextToSave").value = textFromFileLoadedGlobal;
		  console.log("haha \n hehe");
	  }

	  fileReader.readAsText(file, "UTF-8");

	  console.log(fileReader);


    }
   

	function setGroups(){

		let textForUse;
		
		textForUse = textFromFileLoadedGlobal;
		textForUse = textForUse.replace(/ /g,"");
		textForUse = textForUse.replace( /\n/g,"");
		let count1 = 0;
		let end = textForUse.indexOf("FIM");
		console.log(end);
		let j = 0;

		for (let i=0; i<end;i++){
			console.log(i+"\n")
			if(textForUse.charAt(i) == textForUse.charAt(toUpperCase())){
				groups.push(textFromFileLoaded.charAt(i));
				i+=2;
				while(textForUse.charAt(i)!="}"){
					values[j].push(textFromFileLoaded.charAt(i));
				}
			j++;	
			}
		}
	document.getElementById("inputGroups").value = groups;
	}