interface CharacterLoadoutListProps {

}

export default function CharacterLoadoutList() {
    return (
        <div className="character-info__loadouts">
            <h1>Current loadouts</h1>
            <hr/>
            <p>You currently have no Regular and Theorycrafting loadouts for this character.
                If you wish to create a new loadout, click the button in the bottom-right corner.</p>
            <div className="character-content__button-container">
                <button>
                    &nbsp;+&nbsp;
                </button>
            </div>
        </div>
    )
}