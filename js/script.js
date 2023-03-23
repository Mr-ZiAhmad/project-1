var userName = document.getElementById("form1").value ;
document.getElementById("login").onclick = function (){
  var email = document.getElementById("form2").value ;
  var password = document.getElementById("form3").value ;
  
  // localStorage.setitem("whatTheFuck", userName);
   
// if (userName.lenght < 3  ){
//     Toastify({
//         text: "Fill the Correct Name",
//         duration: 3000,
//         destination: "https://github.com/apvarun/toastify-js",
//         newWindow: true,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "left", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//             background: "linear-gradient(to right, #d00000, #e85d04)",
//         },
        
//     }).showToast(); 
// return;
// }
if (!userName && !email && !password){
    Toastify({
        text: "Plz Fill The Form",
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
        
      }).showToast();  
return;
}
if (email === "admin@gmail.com" && password === "12345"){
    alert("Logged in Sucessfully") 
    window.location.href ="home.html";
} else { 
    Toastify({
        text: "Details are incorrect",
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
        
      }).showToast(); 
return;
}

function passvalue (){
  localStorage.setItem("value" , userName);
  return false;
}
}