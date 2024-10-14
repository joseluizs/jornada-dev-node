import Button from "./evento/Button"

function Evento() {

    function meuEvento() {
        console.log(`Ativando 1º evento!`)
    }
    return (
        <div>
            <p>Clique para disparar o evento</p>
            <Button event={meuEvento} text="Primeiro Evento" />
        </div>
    )
}

export default Evento