
function Item({ produto }) {

    return (
        <li>{produto.nome} - R$ {produto.preco}</li>
    );
}

export default Item;