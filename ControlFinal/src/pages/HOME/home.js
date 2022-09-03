
window.onload = startPage();

async function startPage() {
    criartabela()
    const url_valor_despesas = '../../../visual/valor_despesas.php'
    const url_saldo_geral = '../../../visual/saldo_geral.php'

    let reque_despesas = await fetch(url_valor_despesas)
    let response = await reque_despesas.text()
    let resp_despesas = await JSON.parse(response)
    let valor_despesas = await resp_despesas[0]['valor_despesas'];



    let reque_saldoGeral = await fetch(url_saldo_geral)
    let response_saldoGeral = await reque_saldoGeral.text()
    let resp_saldoGeral = await JSON.parse(response_saldoGeral)
    let valor_saldoGeral = await resp_saldoGeral[0]['valor_saldo']

    let cem_porcento = valor_saldoGeral
    let x = valor_despesas
    let porcentagem_grafico = valor_despesas * 100
    porcentagem_grafico = porcentagem_grafico / cem_porcento

    let saldo_disponivel = valor_saldoGeral - valor_despesas
    console.log(porcentagem_grafico)
    document.querySelector('#grafic-01').style.width = `${porcentagem_grafico}%`
    document.querySelector('#valor_saldo').innerText = `${saldo_disponivel.toFixed(2)}`


}


async function criartabela(){
    const url_despesas = '../../../visual/listagem_despesas.php'
    let reque_lista_despesas = await fetch(url_despesas)
    let response = await reque_lista_despesas.text()
    let data = JSON.parse(response)

    let tbody = document.querySelector('#tbody')
    tbody.innerText ='';



    for (let i = 0; i < data.length; i++) {
        let tr = tbody.insertRow()

        let td_nome_despesa = tr.insertCell()
        let td_valor = tr.insertCell()
        let td_data_inicio = tr.insertCell()
        let td_tipo = tr.insertCell()
        let td_data_vencimento = tr.insertCell()
        let  td_situacao= tr.insertCell()

        td_nome_despesa.innerText = data[i]['nome_despesa']
        td_valor.innerText = data[i]['valor']
        td_data_inicio.innerText = data[i]['data_inicio']
        td_tipo.innerText = data[i]['tipo']
        td_data_vencimento.innerText = data[i]['data_vencimento']
        td_situacao.innerText = data[i]['situacao']
        
    }
    
}






let modalDespesas = document.querySelector('.modal-container-01')
let modalDespesasfixas = document.querySelector('.modal-container-02')
let modalEntradas = document.querySelector('.modal-container-03')

function openModalCadDespesa() {
    modalDespesas.classList.add('active')
}

function closeModalCadDespesa() {
    modalDespesas.classList.remove('active')
}

function openModalCadDespesaFixas() {
    modalDespesasfixas.classList.add('active')
}

function closeModalCadDespesafixas() {
    modalDespesasfixas.classList.remove('active')
}

function openModalEntradas() {
    modalEntradas.classList.add('active')
}

function closeModalEntradas() {
    modalEntradas.classList.remove('active')
}






function CAD_Despesa() {
    let nome_despesa = document.querySelector('#inp_nome_despesa-rotativa').value
    console.log(nome_despesa)
    let valor_despesa = document.querySelector('#inp_valor').value
    let data_inicio = document.querySelector('#inp_date_inicio').value
    let data_vencimento = document.querySelector('#inp_date_vencimento').value
    let situacao = document.querySelector('#inp_situacao').value
    let tipo = 'variavel'

    const data = new FormData();
    data.append('nome_despesa', nome_despesa);
    data.append('valor_despesa', valor_despesa);
    data.append('data_inicio', data_inicio);
    data.append('data_vencimento', data_vencimento);
    data.append('situacao', situacao);
    data.append('tipo', tipo);

    fetch('../../../visual/CAD_despesa.php', {
        method: 'POST',
        body: data,
    })

        .then((response) => response.text())
        .then((data) => {
            if (data == 'true') {
            
                startPage()
                criartabela()
                closeModalCadDespesa()

            }

        })
        .catch((error) => {
            console.log('Error', error)
        })
}


function CAD_Despesa_fixa() {
    let nome_despesa = document.querySelector('#inp_nome_despesa_fixa').value
    let valor_despesa = document.querySelector('#inp_valor_fixa').value
    let data_inicio = document.querySelector('#inp_date_inicio_fixa').value
    let data_vencimento = document.querySelector('#inp_date_vencimento_fixa').value
    let situacao = document.querySelector('#inp_situacao_fixa').value
    let tipo = 'Fixa'

    const data = new FormData();
    data.append('nome_despesa', nome_despesa);
    data.append('valor_despesa', valor_despesa);
    data.append('data_inicio', data_inicio);
    data.append('data_vencimento', data_vencimento);
    data.append('situacao', situacao);
    data.append('tipo', tipo);

    fetch('../../../visual/CAD_despesasFixas.php', {
        method: 'POST',
        body: data,
    })

        .then((response) => response.text())
        .then((data) => {
            if (data == 'true') {
                startPage()
                criartabela()
                closeModalCadDespesafixas()

               
            }

        })
        .catch((error) => {
            console.log('Error', error)
        })


}


function cadastra_entradas() {
    let entrada_origem = document.querySelector('#inp_entrada_origem').value
    let entrada_valor = document.querySelector('#inp_entrada_valor').value
    let entrada_data = document.querySelector('#inp_entrada_data').value

    const data = new FormData();
    data.append('origem', entrada_origem)
    data.append('valor', entrada_valor)
    data.append('data', entrada_data)

    fetch('../../../visual/add_entrada.php', {
        method: 'POST',
        body: data,
    })

        .then((response) => response.text())
        .then((data) => {
            if (data == 'true') {
                atualizar()
                closeModalEntradas()
                
            }

        })
        .catch((error) => {
            console.log('Error', error)
            closeModalEntradas()
        })
}
