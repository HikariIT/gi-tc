import '../styles/style.sass';
import '../styles/pages/_home.sass';
import { HomeDescription } from '../components';
import { CharacterPreview } from '../components/characters';


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
