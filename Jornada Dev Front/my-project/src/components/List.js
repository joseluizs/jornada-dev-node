import Item from "./Item"

function List() {
    return (
        <>
            <h1>My List</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985} />
                <Item marca="Fiat" ano_lancamento={1964} />
            </ul>
        </>
    )
}

export default List