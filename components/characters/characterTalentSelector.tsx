import { useState } from "react";
import { Talents } from "../../types/models/characterModel"
import { CharacterPassiveTalentField, CharacterTalentField } from "./characterTalentField";

export interface CharacterTalentSelectorProps {
    talents: Talents | null;
}

export default function CharacterTalentSelector(props: CharacterTalentSelectorProps) {
    const [talentLevels, setTalentLevels] = useState<{attack: number; elementalSkill: number; elementalBurst: number}>({
        attack: 1,
        elementalSkill: 1,
        elementalBurst: 1
    });

    return (
        <div>
            <h2>Talents</h2>
            <hr/>
            <div className="character-talent-selector">
                <CharacterTalentField
                    title={props.talents ? props.talents.attack.name : ''}
                    description="Normal attack talent"
                    skillButton="N"
                    level={talentLevels.attack}
                    setLevel={(value) => setTalentLevels({ ...talentLevels, attack: value })}
                    minLevel={1}
                    maxLevel={10}
                />
                <CharacterTalentField
                    title={props.talents ? props.talents.elementalSkill.name : ''}
                    description="Elemental Skill"
                    skillButton="E"
                    level={talentLevels.elementalSkill}
                    setLevel={(value) => setTalentLevels({ ...talentLevels, elementalSkill: value })}
                    minLevel={1}
                    maxLevel={13}
                />
                <CharacterTalentField
                    title={props.talents ? props.talents.elementalBurst.name : ''}
                    description="Elemental Burst"
                    skillButton="Q"
                    level={talentLevels.elementalBurst}
                    setLevel={(value) => setTalentLevels({ ...talentLevels, elementalBurst: value })}
                    minLevel={1}
                    maxLevel={13}
                />
                <CharacterPassiveTalentField
                    title={props.talents ? props.talents.passive1.name : ''}
                    skillButton="A1"
                    description={props.talents ? props.talents.passive1.description : ''}
                />
                <CharacterPassiveTalentField
                    title={props.talents ? props.talents.passive2.name : ''}
                    skillButton="A4"
                    description={props.talents ? props.talents.passive2.description : ''}
                />
            </div>
        </div>
    )
}