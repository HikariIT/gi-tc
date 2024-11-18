import '../styles/style.sass';
import '../styles/pages/_home.sass';
import CharacterPreview from '../components/character-preview';
import HomeDescription from '../components/home-description';

const characterList = ['Furina', 'Chiori', 'Kachina', 'Bennett']

export default function Home() {
  return (
    <div className='content-container'>
      <HomeDescription/>
      <div className='generic-shadow-container' id="character-preview-container">
        <h1 className="container-title">Character Preview</h1>
        <hr/>
        {characterList.map((character) => (
          <CharacterPreview name={character}/>
        ))}
      </div>
      <div id="loader-container">
        <p>Website is currently under construction. Stay tuned!</p>
        <p>~ Hikari ~</p>
      </div>
    </div>
  );
}
