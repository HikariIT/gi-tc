'use client'

import { useState } from "react";
import CharacterLevelSelector from "../common/characterLevelSelector"
import CharacterTalentSelector from "./characterTalentSelector"
import { CharacterModel } from "../../types/models/characterModel";

interface CharacterGlobalSettingsProps {
    character: CharacterModel | null;
}

export default function CharacterGlobalSettings(props: CharacterGlobalSettingsProps) {
    const [characterLevel, setCharacterLevel] = useState("1/20");

    return (
        <div className="character-info__global-settings">
            <h1>Character Details</h1>
            <hr/>
            <p>
                Here you can specify global character details which are shared between all loadouts. Note that in the case of Theorycrafting loadouts, these details may be overriden by changes inside the loadout creation menu.
                These include: Character level, Ascension level, Talents level and Constellations level.
            </p>
            <div style={{display: 'flex'}}>
                <h2>Constellation: </h2>
            </div>
            <p>
                Select character level:
                <CharacterLevelSelector levelChangeCallback={setCharacterLevel}/>
            </p>
            <CharacterTalentSelector talents={props.character ? props.character.talents : null}/>
        </div>
    )
}