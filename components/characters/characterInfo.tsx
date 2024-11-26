'use client'

import { useEffect, useState } from "react";
import { Element } from "../../types/models/element";
import { LocalDataProvider, LocalImageProvider, ResourceManager, setColorPalette } from "../../utils";
import CharacterCard from "./characterCard";
import CharacterLoadoutList from "./characterLoadoutList";
import CharacterGlobalSettings from "./characterGlobalSettings";
import { CharacterModel } from "../../types/models/characterModel";

export interface CharacterInfoProps {
    characterId: string;
}

export default function CharacterInfo(props: CharacterInfoProps) {
    const [characterData, setCharacterData] = useState<CharacterModel | null>(null);
    const [splashUrl, setSplashUrl] = useState<string>('');

    useEffect(() => {
      ResourceManager.getCharacterDataFromId(LocalDataProvider, props.characterId).then((data) => {
        console.log(data);
        setCharacterData(data);
        if (data.filenames.gachaSplash){
          const url = ResourceManager.getCharacterSplashUrlByFilename(LocalImageProvider, props.characterId, data.filenames.gachaSplash);
          const styleSplashUrl = `linear-gradient(to bottom, var(--color-secondary-dark) 5%, rgba(0, 0, 0, 0) 100%), url('${url}') ${data.gachaSplashOffset * 100}% 0%`;
          setSplashUrl(styleSplashUrl);
        }
      });
    }, []);


    useEffect(() => {
        if (!characterData) {
            return;
        }
        document.title = characterData.name;
        setColorPalette(Element[characterData.element as keyof typeof Element]);
    }, [characterData]);

    return (
        <div className="character-info">
          <CharacterCard splashUrl={splashUrl} name={characterData ? characterData.name : ''} constellation={characterData ? characterData.constellation : ''}/>
          <div className="character-info__content-container">
            <CharacterLoadoutList/>
            <CharacterGlobalSettings character={characterData}/>
          </div>
        </div>

    )
}