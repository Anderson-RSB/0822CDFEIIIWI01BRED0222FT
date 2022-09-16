
function Item(propriedades) {
    return <li>{propriedades.concluido} - {propriedades.valor} - {propriedades.descricao}</li>
}

/*
function Item({ concluido, valor }) {
    return <li>{concluido} - {valor}</li>
}*/

export default Item;