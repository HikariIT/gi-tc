import React from "react";
import '../../../styles/style.sass';
import characterList from '../../../public/data/characterList.json';
import CharacterInfo from "../../../components/characters/characterInfo";
import { CharacterBaseModel } from "../../../types/models/characterBaseModel";

export function generateStaticParams() {
    const params = characterList.map((character: CharacterBaseModel) => ({
        characterId: character.id,
    }));
    console.log(params);
    return params;
}

interface CharacterPageParams {
    characterId: string;
}

export default async function CharacterPage({params}: {params: Promise<CharacterPageParams>}) {
    const awaitedParams = await params;
    return (
        <CharacterInfo characterId={awaitedParams.characterId}/>
    )
}