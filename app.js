/*
   createMultipleButtons fn - Create multiple dynamic buttons & attach a click event on them

   numOfButtons : No of dynamic buttons to be created

*/
function createMultipleButtons(numOfButtons) {
  if (numOfButtons <=0) {
	return;
  }

  var btnContainer = document.createElement("div");						//btn container
  btnContainer.setAttribute("id", "btn-container");
  
  for (var i=0; i<numOfButtons; i++) {
    var btn = document.createElement("button");							//create dynamic button
	btn.setAttribute("name", "btn-" + (i+1));							//set name attribute with index starting from 1

	var btntext = document.createTextNode("Click Me - " + (i+1) + "!");
	btn.appendChild(btntext);

	btnContainer.appendChild(btn);										//append dynamic buttons to btn container
  }
  document.body.appendChild(btnContainer);								//append btn container to body
  
  btnContainer.addEventListener('click', function(event) {				//attach click listener to btn container
	var targetElmnt = event.target;
	if (targetElmnt.nodeName == "BUTTON") {
		var btnName = targetElmnt.getAttribute("name");
		var btnNameArray = btnName.split('-');
		var btnIndex;
		if (btnNameArray.length > 1) {
			var btnIndex = btnNameArray[1]
		}
		console.log("Button Clicked!Name = " + btnName);
		console.log("Button Clicked!Index = " + btnIndex);
	}
  }, false);
}

createMultipleButtons(5);