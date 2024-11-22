import { LocalImageProvider, ResourceManager } from "../../utils";
import { CharacterBaseModel } from "../../types/models/characterBaseModel";
import { CharacterIcon } from "../images";

type CharacterProps = { character: CharacterBaseModel };

export function CharacterHorizontalBar(props: CharacterProps) {
    return (
      <div className="character-horizontal-card" style={{"backgroundImage": `url('${ResourceManager.getCharacterNamecardBarUrl(LocalImageProvider, props.character.id, props.character.gameId)}')`}}>
        <div className="character-horizontal-card__image-container">
          <CharacterIcon id={props.character.id} gameId={props.character.gameId} width={100} height={100}/>
          <h1>{props.character.name}</h1>
          <span>Currently saved Loadouts: 0</span>
        </div>
      </div>
    );
}