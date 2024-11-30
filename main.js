const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
const container = document.getElementById('graficos-container')


// O código async dis para a função esperar para pegar as informações que ira utilizar
async function visualizarinformacoesGlobais() {
    // O código await pede para o javaScript esperar a inquisição ser completamente feita paraa realizar a ação 
    // E é atravez do fetch() que fará a aquisição na url que esta dentro dele, buscará a API
    const res = await fetch(url)
    // O código json() trasforma o que for passado para ele em json, forma de armazenamento de dados para API
    const dados = await res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('grafico-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas a uma rede social e passam em média ${dados.tempo_medio} conectadas.`
    // Quando queremos que no código tenha um elemento que queremos acrecentar a ele um filho temos que usar o 'appendChild()'
    container.appendChild(paragrafo)
}

visualizarinformacoesGlobais()
