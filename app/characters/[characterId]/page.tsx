import React from "react";

export function generateStaticParams() {
    /*return characterList.map((character: CharacterBaseModel) => ({
        params: {
            id: character.id,
            name: character.name
        }
    }));*/
    return [{characterId: 'furina'}];
}

interface CharacterPageParams {
    params: {
        characterId: string;
    }
    searchParams: URLSearchParams;
}

export default async function CharacterPage(params: Promise<CharacterPageParams>) {
    const paramsAwaited = await params;
    return (
        <div>
            <h1>Character ID: {paramsAwaited.params.characterId}</h1>
        </div>
    )
}