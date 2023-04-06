import pokemons from '../pokemons_array'



const getPokemons = () => {
  Math.floor(Math.random() * pokemons.length)

}
export default { getPokemons }  