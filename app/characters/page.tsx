import { CharacterPreview } from "../../components/characters";
import '../../styles/style.sass';
import '../../styles/pages/_home.sass';

export default function CharactersPage() {
    return (
      <div className='content-container'>
        <CharacterPreview/>
        <div id="loader-container">
          <p>Website is currently under construction. Stay tuned!</p>
          <p>~ Hikari ~</p>
        </div>
      </div>
    );
  }