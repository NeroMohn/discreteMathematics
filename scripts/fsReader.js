
let fs = require = ("fs");

function txtInput(){
let file = document.getElementById("file").files[0];

let groups = [{name:'', elements: [] }];

	  const fileReader = new FileReader();

	  fileReader.onload = function(fileLoadedEvent){
		  let textFromFileLoaded = fileLoadedEvent.target.result; //The event.result property contains the last/previous value returned by an event handler triggered by the specified event. From w3schools
		  document.getElementById("inputTextToSave").value = textFromFileLoaded;
	  };

	  fileReader.readAsText(file, "UTF-8");

	  console.log(fileReader);
    }
    
	function savefile(){
		var content = document.getElementById("inputTextToSave").value;
		uriContent = "data:application/octet-stream," + encodeURIComponent(content);
		document.getElementById("dlink").innerHTML = "<a href=" + uriContent + " download=\"savedfile.txt\">Here is the download link</a>";
		}
		

	function setGroup(textFromFileLoaded){

		for (let i=0; i<textFromFileLoaded.lenght;i++){
			if(textFromFileLoaded.charAt(i).toUpperCase()){
				groups.name.push(textFromFileLoaded.charAt(i));
				while(textFromFileLoaded.charAt(i++).toLowerCase){
					groups.elements.push(textFromFileLoaded.charAt(i))
				}
			}
		}

	}