document.getElementById("name").innerHTML = localStorage.getItem("value");
let cities = ["Faisalabad","Multan","Queeta","Lahore","Islamabad","Karachi","Sargodha","Rawalpindi"] 
document.getElementById("Button").onclick = function(){
    document.getElementById("citybox").innerHTML = " ";
}

function toast(message){
    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #d00000, #e85d04)",
        },
        onClick: function () { } // Callback after click
      }).showToast(); 
}
// Print All City
 function printcities(){
    
    document.getElementById("statement").innerHTML =" "

    for(let i = 0; i < cities.length; i++){
        let num= i + 1
        document.getElementById("statement").innerHTML += num + ')' + cities[i] + '<br>'
    }
 }

// Add City
function addcity(){
    let city = document.getElementById("citybox").value ;
    if (!city || city.length < 3){
        var message = "Please Enetr Your Correct City Name"
         toast(message);
         return;
        
    }
//  cities.push(city);
let firstLetter = city.charAt(0).toUpperCase();
let allLetters = city.slice(1).toLowerCase();
let cityAllLetters = firstLetter + allLetters
console.log(cityAllLetters)
let cityfound = false ;
for(let i = 0; i < cities.length; i++){
    if(cities[i] === cityAllLetters){
        cityfound = true
        let html = '<p><span style="color: green; font-size: 24px; ">"'+cityAllLetters+ '"</span>already in list.</p>';
        document.getElementById("statement").innerHTML = html;
    }
}
if (cityfound === false)
  cities.push(cityAllLetters)
  let  html = '<p><span style="color: green; font-size: 24px; ">"'+cityAllLetters+ '"</span>has been sucessfully added.</p>';
  document.getElementById("statement").innerHTML = html;
 
}

// Print All City
// '<span style="color: green; font-size: 24px;>"''"has been sucessfully added</span>'

