function showContent(){
    document.getElementById('result-container').style.display = "flex"
}

async function clicar1(){
    showContent();
    var item = '';
    item = document.getElementById('1').src;
    document.getElementById('image').src = item;

    url = 'https://economia.awesomeapi.com.br/all/BTC-BRL'
    coinValue = document.getElementById('valormoeda')

    // Pegando valor da Moeda por API
    await fetch(url, { method: 'GET' }).then(function(response){
        response.json().then(function(dado){
            coinValue.value =  dado.BTC.ask;
        })
    })
}
async function clicar2(){
    showContent();
    var item = '';
    item = document.getElementById('2').src;
    document.getElementById('image').src = item;

    url = 'https://economia.awesomeapi.com.br/all/USD-BRL'
    coinValue = document.getElementById('valormoeda')

    // Pegando valor da Moeda por API
    await fetch(url, { method: 'GET' }).then(function(response){
        response.json().then(function(dado){
            coinValue.value =  dado.USD.ask;
        })
    })
}
async function clicar3(){
    showContent();
    var item = '';
    item = document.getElementById('3').src;
    document.getElementById('image').src = item;

    url = 'https://economia.awesomeapi.com.br/all/CAD-BRL'
    coinValue = document.getElementById('valormoeda')

    // Pegando valor da Moeda por API
    await fetch(url, { method: 'GET' }).then(function(response){
        response.json().then(function(dado){
            coinValue.value =  dado.CAD.ask;
        })
    })
}
async function clicar4(){
    showContent();
    var item = '';
    item = document.getElementById('4').src;
    document.getElementById('image').src = item;

    url = 'https://economia.awesomeapi.com.br/all/GBP-BRL'
    coinValue = document.getElementById('valormoeda')

    // Pegando valor da Moeda por API
    await fetch(url, { method: 'GET' }).then(function(response){
        response.json().then(function(dado){
            coinValue.value =  dado.GBP.ask;
        })
    })
}
async function clicar5(){
    showContent();
    var item = '';
    item = document.getElementById('5').src;
    document.getElementById('image').src = item;

    url = 'https://economia.awesomeapi.com.br/all/EUR-BRL'
    coinValue = document.getElementById('valormoeda')

    // Pegando valor da Moeda por API
    await fetch(url, { method: 'GET' }).then(function(response){
        response.json().then(function(dado){
            coinValue.value =  dado.EUR.ask;
        })
    })
}
async function clicar6(){
    showContent();
    var item = '';
    item = document.getElementById('6').src;
    document.getElementById('image').src = item;

    url = 'https://economia.awesomeapi.com.br/all/CHF-BRL'
    coinValue = document.getElementById('valormoeda')

    // Pegando valor da Moeda por API
    await fetch(url, { method: 'GET' }).then(function(response){
        response.json().then(function(dado){
            coinValue.value =  dado.CHF.ask;
        })
    })
}
async function clicar7(){
    showContent();
    var item = '';
    item = document.getElementById('7').src;
    document.getElementById('image').src = item;

    url = 'https://economia.awesomeapi.com.br/all/JPY-BRL'
    coinValue = document.getElementById('valormoeda')

    // Pegando valor da Moeda por API
    await fetch(url, { method: 'GET' }).then(function(response){
        response.json().then(function(dado){
            coinValue.value =  dado.JPY.ask;
        })
    })
}
async function clicar8(){
    showContent();
    var item = '';
    item = document.getElementById('8').src;
    document.getElementById('image').src = item;

    url = 'https://economia.awesomeapi.com.br/all/CNY-BRL'
    coinValue = document.getElementById('valormoeda')

    // Pegando valor da Moeda por API
    await fetch(url, { method: 'GET' }).then(function(response){
        response.json().then(function(dado){
            coinValue.value =  dado.CNY.ask;
        })
    })
}