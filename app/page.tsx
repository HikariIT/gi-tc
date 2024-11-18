import '../styles/style.sass';
import '../styles/pages/_home.sass';
import HomeDescription from '../components/home-description';
import CharacterPreview from '../components/character-preview';


export default function Home() {
  return (
    <div className='content-container'>
      <HomeDescription/>
      <CharacterPreview/>
      <div id="loader-container">
        <p>Website is currently under construction. Stay tuned!</p>
        <p>~ Hikari ~</p>
      </div>
    </div>
  );
}
