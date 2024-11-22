import Image from "next/image";

type CharacterProps = {
    character: CharacterBaseModel
};

function getCharacterNamecard(name: string) {
    return `url('/gi-tc/images/namecards/banner-${name.toLowerCase()}.png')`;
}

function getCharacterIcon(name: string) {
    return `/gi-tc/images/icons/icon-${name.toLowerCase()}.png`;
}

export default function CharacterHorizontalBar(props: CharacterProps) {
    return (
      <div className="character-horizontal-card" style={{"backgroundImage": getCharacterNamecard(props.character.name)}}>
        <div className="character-horizontal-card__image-container">
            <Image src={getCharacterIcon(props.character.name)} alt={props.character.name} width={100} height={100} unoptimized/>
            <h1>{props.character.name}</h1>
            <span>Currently saved Loadouts: 0</span>
        </div>
      </div>
    );
}