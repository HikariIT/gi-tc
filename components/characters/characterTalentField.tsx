import React from 'react';
import GenshinSlider from "../common/slider";

interface TalentFieldProps {
    title: string;
    description: string;
    skillButton: string;
    level: number;
    setLevel: (value: number) => void;
    minLevel: number;
    maxLevel: number;
}

interface PassiveTalentFieldProps {
    title: string;
    skillButton: string;
    description: string;
}

const CharacterTalentField: React.FC<TalentFieldProps> = ({
    title,
    description,
    skillButton,
    level,
    setLevel,
    minLevel,
    maxLevel
}) => {
    return (
        <div className="character-talent__field">
            <div className="character-talent__field__title-container">
                <h3>{title}</h3>
            </div>
            <hr />
            <p>{description}</p>
            <span className="character-talent__field__skillButton">{skillButton}</span>
            <div className="character-talent__level-selector-container">
                <GenshinSlider
                    value={level}
                    setValue={setLevel}
                    min={minLevel}
                    max={maxLevel}
                    step={1}
                />
                <span className="character-talent__level-selector-value">
                    {level < 10 ? ` ${level}` : level}
                </span>
            </div>
        </div>
    );
};

const CharacterPassiveTalentField: React.FC<PassiveTalentFieldProps> = ({
    title,
    skillButton,
    description
}) => {
    return (
        <div className="character-talent__field">
            <div className="character-talent__field__title-container">
                <h3>{title}</h3>
            </div>
            <hr />
            <span className="character-talent__field__skillButton">{skillButton}</span>
            <p>{description}</p>
        </div>
    );
};

export { CharacterTalentField, CharacterPassiveTalentField };