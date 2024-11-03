
export const PokemonCard = ({id, name, sprites = []}) => {
  return (
    <section style={{ height: 200 }}>
        <h2 className="text-capitalize">#{id} - {name}</h2>
        {/* images */}
        <div>
            { sprites.map((sprite)=>(
                <img key = {sprite} alt = {name} src = {sprite}></img>
            ))}
        </div>
    </section>
  )
}
