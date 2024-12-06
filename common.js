
const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    color: getCSS('--primary-color'),
    size: 16,
    family: getCSS('--font')
}

// O código export é para que outras pastas possam importar e usar o getCSS e o tickConfig
export {getCSS, tickConfig}
