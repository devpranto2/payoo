const validpin=1234
const withdrawvalidPin=1234

//function to get the input feild
function getTheInputVlaueNumber(id){
    const inputField=document.getElementById(id)
    const inputFieldValue=inputField.value
    const inputToNumber=parseInt(inputFieldValue)
    

}


document.getElementById("add-money-btn").addEventListener("click",function(event){
    event.preventDefault();
    
    const accountNumber=document.getElementById("account-number").value
    const amount=getTheInputVlaueNumber("add-amount")
    const pin=getTheInputVlaueNumber("add-pin")

    const availableBalance=parseInt(document.getElementById("available-balance").innerText)

    const totalAvailabelBalance=availableBalance+amount;

    if(accountNumber.length!==11){
        alert("Number is invalid");
        return;
    }
    if(validpin!==pin){
        alert("Pin is worng");
        return;
    }


    document.getElementById("available-balance").innerText=(totalAvailabelBalance)
})

//toggling feature
document.getElementById("add-money-button").addEventListener("click",function(event){
    document.getElementById("add-money-parent").style.display="block"

    document.getElementById("cashout-parent").style.display="none"
})
document.getElementById("cashout-button").addEventListener("click",function(event){
    document.getElementById("cashout-parent").style.display="block"

    document.getElementById("add-money-parent").style.display="none"
})

//cashout feature

document.getElementById("withdraw-btn").addEventListener("click",function(event){
    event.preventDefault();
    

    const agentNumber=document.getElementById("agent-number").value
    const withdrawAmount=getTheInputVlaueNumber("withdraw-amount")

    const withdrawPin=getTheInputVlaueNumber("withdraw-pin")
    const availablebalance=parseInt(document.getElementById("available-balance").innerText);

    if(agentNumber.length<11){
        alert("Number is invalid");
        return;
        
    }
    if(withdrawPin !== withdrawvalidPin){
        alert("Incorrect Pin");
        return;
    }

    const newTotalBalance=availablebalance-withdrawAmount;
    document.getElementById("available-balance").innerText=(newTotalBalance)
})