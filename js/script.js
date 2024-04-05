const url ="https://v6.exchangerate-api.com/v6/380f80debc18b9870005bb0d/latest/";
//const currency_one1 = "USD" //get all inputs from users

const currencyE1_one = document.getElementById('currency-one');
const currencyE1_two = document.getElementById('currency-two');
const amountE1_one = document.getElementById('amount-one');
const amountE1_two = document.getElementById('amount-two');
const rateE1 = document.getElementById('rate');
const swap = document.getElementById('swap');
const opt1 = document.getElementById('currency-opt1');
const opt2 = document.getElementById('currency-opt2');

function getExchange(event) { 
    const currency_one = currencyE1_one.value;
    const currency_two = currencyE1_two.value;
   // console.log(event);
    fetch(url+currency_one)
        .then((res) => res.json())
        .then((data) => {
        const rate = data.conversion_rates[currency_two];
        rateE1.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
       // amountE1_two.value = amountE1_one.value*rate //calculate the exchange rate
        amountE1_two.value = Math.floor((amountE1_one.value*rate)*1000)/1000
        });
    }
/*
HTML.addeventlistener('event', handler(){
    tell currency1 one to swap places with currency 2

});
*/
console.log(currencyE1_one)

swap.addEventListener('click', function(){
    let tempValue2 = currencyE1_one.value //holding value1
    currencyE1_one.value = currencyE1_two.value; //swap 1>2
    currencyE1_two.value = tempValue2;//swaps 2>1
    getExchange()
})


/*function getExchange2(event) { 
        const currency_one = currencyE1_one.value;
        const currency_two = currencyE1_two.value;
        console.log(event);
        fetch(url+currency_one)
            .then((res) => res.json())
            .then((data) => {
            const rate = data.conversion_rates[currency_two];
            rateE1.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountE1_one.value = Math.floor((amountE1_two.value/rate)*1000)/1000//calculate the exchange rate
    
            });
        }
*/
currencyE1_one.addEventListener('change', getExchange); 
currencyE1_two.addEventListener('change', getExchange);
amountE1_one.addEventListener('input', getExchange);
amountE1_two.addEventListener('input', getExchange);


getExchange();// Is this hoisted