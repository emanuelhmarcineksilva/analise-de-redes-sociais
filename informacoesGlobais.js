const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
const container = document.getElementById('graficos-container')


// O código async diz para a função esperar para pegar as informações que ira utilizar
async function visualizarinformacoesGlobais() {
    // O código await pede para o javaScript esperar a inquisição ser completamente feita para realizar a ação 
    // E é atravez do fetch() que fará a aquisição na url que esta dentro dele, buscará a API
    const res = await fetch(url)
    // O código json() trasforma o que for passado para ele em json, forma de armazenamento de dados para API
    const dados = await res.json()
    const paragrafo = document.createElement('p')
    // Essa divisão d1e9 é por um bilhão (1.000.000.000)
    const pessoasConectadas = (dados.total_pessoas_conectadas/1e9)
    const totalPessoasMundo = (dados.total_pessoas_mundo/1e9)
    // O código parseInt separa e mostra somente a parte inteira de um número quebrado (2.38 = 2). A parseInt é uma função utilizada para analisar uma string e retornar um número inteiro com base no conteúdo da string, ou seja, podemos solucionar o problema de somatórias incorretas e aceitação de dados em texto com a conversão para inteiro.
    const horas = parseInt(dados.tempo_medio)
    // O código Math.round arredonda números
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    // O código toFixed() é para o número so ter a quantidade de casas decimais dentro do parenteses, nesse caso só tera duas casas decimais. 
    const porcentagemPessoasConectadas = ((pessoasConectadas/totalPessoasMundo) * 100).toFixed(2)

    paragrafo.classList.add('grafico-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${totalPessoasMundo} bilhões</span> de pessoas e que aproximadamente 
    <span>${pessoasConectadas} bilhões</span> estão conectadas a uma rede social e passam em média <span>${minutos} horas</span>
    e <span>${minutos} min</span> conectadas. <br> Isso significa que, aproximadamente <span>${porcentagemPessoasConectadas}%</span> 
    de pessoas no mundo estão conectadas a alguma rede social.`
    // Quando queremos que no código tenha um elemento que queremos acrecentar a ele um filho temos que usar o 'appendChild()'
    container.appendChild(paragrafo)
}

visualizarinformacoesGlobais()
