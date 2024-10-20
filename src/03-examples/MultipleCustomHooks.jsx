import { useFetch } from "../hooks"

export const MultipleCustomHooks = () => {
  const {data, hasError, isLoading} = useFetch('https://pokeapi.co/api/v2/pokemon/2');
  return (
    <>
        <h1>Información de pokemón</h1>
        <hr/>
        {isLoading && <h1>Cargando...</h1>}
        {/* <pre>{ JSON.stringify(data, null, 2)}</pre> */}
        <h2>{data?.name}</h2>
    </>
  )
}
