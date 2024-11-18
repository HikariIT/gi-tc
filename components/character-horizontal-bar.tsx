import Image from "next/image";

type CharacterProps = {
    name: string;
};

function getCharacterNamecard(name: string) {
    return `url('/gi-tc/images/namecards/banner-${name.toLowerCase()}.png')`;
}

function getCharacterIcon(name: string) {
    return `/gi-tc/images/icons/icon-${name.toLowerCase()}.png`;
}

export default function CharacterHorizontalBar(character: CharacterProps) {
    return (
      <div className="character-horizontal-card" style={{"backgroundImage": getCharacterNamecard(character.name)}}>
        <div className="character-horizontal-card__image-container">
            <Image src={getCharacterIcon(character.name)} alt={character.name} width={100} height={100} unoptimized/>
            <h1>{character.name}</h1>
            <span>Currently saved Loadouts: 0</span>
        </div>
      </div>
    );
}