// login button dunctionality

document.getElementById("login-button").addEventListener("click",function(event){
    event.preventDefault()
    
    const mobileNumber = 11876692921
    const pinNumber = 1234

    const mobilenumberValue=document.getElementById("mobile-number").value;
    const mobilenumberValueConverted=parseInt(mobilenumberValue)

    const pinNumberValue=document.getElementById("pin-number").value;
    const pinNumberValueConverted=parseInt(pinNumberValue)

    // console.log(mobilenumberValueConverted,pinNumberValueConverted)

    if(mobilenumberValueConverted===mobileNumber && pinNumberValueConverted===pinNumber){
        window.location.href="home.html"
    }else{
        alert("Invalid number or pin")
    }

})