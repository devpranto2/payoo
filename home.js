const validpin=1234

document.getElementById("add-money-btn").addEventListener("click",function(event){
    event.preventDefault()

    const bank=document.getElementById("bank").value
    const accountNumber=document.getElementById("account-number").value
    const amount=parseInt(document.getElementById("add-amount").value)
    const pinNumber=parseInt(document.getElementById("add-pin").value)

    

    const availablebalance=parseInt(document.getElementById("available-balance").innerText)

    if(accountNumber.length<11){
        alert("please provide a valid number")
        return;
    }

    if(pinNumber !==validpin){
        alert("Please Provide valid pin");
        return;
    }


    const totalAvailableBalance=amount+availablebalance;
    document.getElementById("available-balance").innerText=(totalAvailableBalance)

})