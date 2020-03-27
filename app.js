const pTag = document.getElementById('nameId');
//name 
pTag.style.color ='magenta';
//the new name
pTag.textContent = 'My New Name';
//couldn't find any other fun Ptags. :(

//interactivety (click buttom and changeName name 'insert name'
// with 'blue text')

//get the button
const myButton = document.getElementById('superButton');

function changeName() {
    //use the button
    const pTag = document.getElementById('nameId', 'superButton');
    pTag.textContent = "Why would you push this?";
    //adding some color
    pTag.style.color = 'blue';
    //grabing the input
    const myInput = document.getElementById('name-input');
    //had to ask for help on this part
    const curretInput = myInput.value;
    pTag.textContent = curretInput;
}

myButton.addEventListener('click', changeName);

//ANNND IT WORKS!!


//Danny's "source code"

//function changeName() {
     // use a callback
     //const pTag = document.getElementById('name');

     //pTag.style.color = 'orange';
      
     //pTag.textContent = 'Lady Gaga';     
 //}
 
// myButton.addEventListener('click', changeName);
//myButton.addEventListener('click', function() {}); ---is this the same tag?(try it in free time)
 

