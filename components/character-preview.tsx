import CharacterHorizontalBar from "./character-horizontal-bar"


function fetchCharacters() {
    return ['Furina', 'Chiori', 'Kachina', 'Bennett']
}


export default function CharacterPreview() {
    const characterList = fetchCharacters()

    return (
      <div key="characterContainer" className='generic-shadow-container' id="character-preview-container">
        <h1 className="container-title">Character Preview</h1>
        <hr/>
        {characterList.map((character) => (
          <CharacterHorizontalBar name={character}/>
        ))}
      </div>
    )
}