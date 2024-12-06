import {getCSS, tickConfig} from "./common.js"

// O código async diz para a função esperar para pegar as informações que ira utilizar
async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    // Esse json() faz a API parecer uma API
    const dados = await res.json()
    // Cada chave tem um valos e com o código keys acessamos as chaves
    const nomesDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
    // Exemplo de objeto e valor,  object: values, casa: 70
    const data = [
        {
            x: nomesDasRedes,
            y: quantidadeUsuarios,
            // Esse bar é para gerar o gráfico de barras
            type: 'bar',
            // O código marker é para mudar as barras
            marker: {
                // O código gatConputedStyle() pega os estilos do documento, e dentro dos parenteses indicamos onde deve ir pegar
                // O código getPropertyVale() pega um valor em especifico
                color: getCSS('--primary-color')
            }
        }
    ]

    // Removendo o fundo do gráfico de barras
    const layout = {
        plot_bgcolor: getCSS('--br-color'),
        paper_bgcolor: getCSS('--br-color'),
        title: {
            text: 'Redes sociais com mais usuários no mundo',
            // Deixando o titulo na esquerda
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        // Adicionar as informações eixo X do gráfico
        xaxis: {
            // O código tickfont está responsavel pelas confiurações de fonte dos tickts do gráfico
            tickfont: tickConfig,
            title: {
                text: 'nome das redes sociais',
                font: {
                    color: getCSS('--secundary-color'),
                }
            }
        },
        // Adicionar as informações eixo Y do gráfico
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'bilhões de usuários ativos',
                font: {
                    color: getCSS('--secundary-color'),
                }
            }
        },
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    // Esse Plotly.newPlot() passa dentro dos parenteses as consts de confiuração feitas para o grafico, o que quer acrecentar
    Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuarios()

