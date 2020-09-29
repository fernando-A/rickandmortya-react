export default function reducer(state, action) {
    switch (action.type) {
        case 'SET_CHARACTER_LIST':{
          return {...state, characterList: action.payload.results, characterFilteredOrigin: action.payload.results, characterInfo: action.payload.info}
        }
        case 'SET_CHARACTER_NAME':{
          const characterListByName = state.characterFilteredOrigin.filter(character => character.name.toLowerCase().includes(action.payload.toLowerCase()))
          return { ...state, characterList: characterListByName }
        }
        default: {
          return state
        } 
    }
}