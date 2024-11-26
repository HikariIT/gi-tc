interface CharacterCardProps {
    splashUrl: string;
    name: string;
    constellation: string;
}

export default function CharacterCard(props: CharacterCardProps) {
    return (
        <div className="character-info__card" style={{ background: props.splashUrl }}>
            <h1>{props.name}</h1>
            <p>{props.constellation}</p>
            <hr/>
        </div>
    )
}