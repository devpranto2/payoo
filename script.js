// login button dunctionality

document.getElementById("login-button").addEventListener('click',function(event){
    event.preventDefault();
    console.log("clicked")

    const validNumber=11111111111;
    const validPin=1234;

    const MobileNumber=parseInt(document.getElementById("mobile-number").value)

    const pinNumber=parseInt(document.getElementById("pin-number").value)


    if(MobileNumber === validNumber && pinNumber === validPin){
        window.location.href="home.html"
    }else{
        alert("User informationis Invalalid")
    }
})