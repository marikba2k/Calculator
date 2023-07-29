const amount = document.getElementById("amount");
const guests = document.getElementById("guests");
const quality = document.getElementById("quality");
const tipAmount = document.getElementById("tip-amount");

calculate = () =>{
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
    amount.value = '';
    guests.value = '';
    quality.value = '';
    if(tip==='NaN'){
        tipAmount.innerHTML = 'Tip $0 each';
        showTipAmount();
        console.log("showed")
    }
    else{
        tipAmount.innerHTML = 'Tip $ ' + tip +' each';
        showTipAmount();
        console.log("showed")
    }


}

showTipAmount = () => {
    console.log("showed")
    var x = tipAmount;
    x.className = 'show';
    setTimeout(function(){x.className = x.className.replace('show','');}, 3000);
}