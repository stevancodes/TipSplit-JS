var racun = document.querySelector(".billInput")

var procenat = document.querySelectorAll("tip")

var customTip = document.querySelector(".customInput")

var napojnica = document.querySelector(".tipAmount-inner-right")
var racunpoosobi = document.querySelector(".totalAmount-inner-right")
var brojLjudi = document.querySelector(".brojLjudi")


var totalBill = 0;
var totalPeople = 0;
var tipSelected = 0;

function bill() {
    totalBill = Number(racun.value)
    // console.log(totalBill);
}

function tip(event) {
    tipSelected = event.target.value
    var tipNode = document.getElementsByClassName("tip-active")[0];    /// ovde hatamo samo onaj element koji ima onu dodatu klasu tip-active koja se dodaje na klik
    if (tipNode) {
        tipNode.classList.remove("tip-active");
    }
    event.target.className += " tip-active";   /// ovde se dodaje
    if (tipSelected > 0 && totalBill > 0) {
        tipPerPerson()
    }
}

function people(event) {
    totalPeople = Number(event.target.value)
    // console.log(totalPeople);
}

function tipPerPerson() {
    var totalTip = totalBill * (tipSelected / 100)
    // console.log(totalTip);
    totalBillPerPerson(totalTip)
    return napojnica.innerText = `$${(totalTip / totalPeople).toFixed(2)}`
}

function totalBillPerPerson(totalTip) {
    var totalPerPerson = ((totalBill + totalTip) / totalPeople).toFixed(2)
    return racunpoosobi.innerText = `$${totalPerPerson}`
}


function resetAll() {
    var tipNode = document.getElementsByClassName("tip-active")[0];
    tipNode.classList.remove("tip-active");
    totalBill = 0;
    totalPeople = 0;
    tipSelected = 0;
    totalTip = 0;
    totalPerPerson = 0;
    racun.value = ''
    brojLjudi.value = ''
    customTip.value = ''
    napojnica.innerText = "$0.00"
    racunpoosobi.innerText = "$0.00"
    console.log("reset");

}