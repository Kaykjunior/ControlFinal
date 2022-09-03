
// seta o icon da moeda 01
window.addEventListener('load', function () {
    document.querySelector('#moeda1').addEventListener('change', function () {
        let icon = document.querySelector('#moeda1').value
        let img = document.querySelector('#icon_1')
        console.log(icon)
        img.setAttribute('src', `img/icon${icon}.png`)
    })
})

// seta o icon da moeda 02
window.addEventListener('load', function () {
    document.querySelector('#moeda2').addEventListener('change', function () {
        let icon = document.querySelector('#moeda2').value
        let img = document.querySelector('#icon_2')
        console.log(icon)
        img.setAttribute('src', `img/icon${icon}.png`)
    })
})


const url_BTC = `https://www.mercadobitcoin.net/api/BTC/ticker/`
const url_ETH = `https://www.mercadobitcoin.net/api/ETH/ticker/`
const url_AXS = `https://www.mercadobitcoin.net/api/AXS/ticker/`
const url_DOGE = `https://www.mercadobitcoin.net/api/DOGE/ticker/`
const url_LTC = `https://www.mercadobitcoin.net/api/LTC/ticker/`
const url_SHIB = `https://www.mercadobitcoin.net/api/SHIB/ticker/`
const url_SOL = `https://www.mercadobitcoin.net/api/SOL/ticker/`






async function fetch_API() {

    let qtd_moeda1 = document.querySelector('#inp_number_moeda1').value //pega o quantidade de moedas
    let qtd_moeda2 = document.querySelector('#inp_number_moeda2').value //pega o quantidade de moedas

    let moeda1 = document.querySelector('#moeda1').value //Indentifica qual é a moeda
    let moeda2 = document.querySelector('#moeda2').value//Indentifica qual é a moeda

    const url_moeda1 = `https://www.mercadobitcoin.net/api/${moeda1}/ticker/` //construtor da url da requição GET da API
    const url_moeda2 = `https://www.mercadobitcoin.net/api/${moeda2}/ticker/` //construtor da url da requição GET da API


    let fetch_moeda1 = await fetch(url_moeda1,)
    let data_token1 = await fetch_moeda1.json()
    let price_token1 = await data_token1.ticker['last']
    


    let fetch_moeda2 = await fetch(url_moeda2)
     let data_token2 = await fetch_moeda2.json()
     let price_token2 = await data_token2.ticker['last']

     function convert(){
         let price_qtd_token1 = qtd_moeda1 * price_token1

         let final = price_qtd_token1/price_token2
         document.querySelector('#inp_number_moeda2').innerText=`${final}`
     }

     convert()

}



