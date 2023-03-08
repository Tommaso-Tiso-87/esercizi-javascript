const data1 = document.getElementById('data1');
const data2 = document.getElementById('data2');
let riportaData = document.getElementById('dataCalcolata');
function calcola(){
    const data1milli = new Date(data1.value).getTime();
    const data2milli = new Date(data2.value).getTime();

    if (data2milli >data1milli) {
        const differenzaDate = data2milli - data1milli;
        riportaData.innerHTML= differenzaDate/(1000*60*60*24) + " giorni";
        riportaData.style.color="green";
        
    } else {

        riportaData.innerHTML = "La data due è minore della data 1 e non puoi fare questa operazione";
        riportaData.style.color="red";
        
    }



    
}





