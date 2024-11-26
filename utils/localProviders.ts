import { CharacterModel } from "../types/models/characterModel";
import { ImageProvider } from "./resourceManager";

export class LocalImageProvider extends ImageProvider {
    static baseUrl: string = '/gi-tc'

    static getCharacterIconUrlByFilename(characterId: string, filename: string): string {
        return `${LocalImageProvider.baseUrl}/images/characters/${characterId}/${filename}.png`;
    }

    static getCharacterSideIconUrlByFilename(characterId: string, filename: string): string {
        return `${LocalImageProvider.baseUrl}/images/characters/${characterId}/${filename}.png`;
    }

    static getCharacterNamecardUrlByFilename(characterId: string, filename: string): string {
        return `${LocalImageProvider.baseUrl}/images/characters/${characterId}/${filename}.png`;
    }

    static getCharacterNamecardBarUrlByFilename(characterId: string, filename: string): string {
        return `${LocalImageProvider.baseUrl}/images/characters/${characterId}/${filename}.png`;
    }

    static getCharacterIconUrlByGameId(characterId: string, gameId: string): string {
        return `${LocalImageProvider.baseUrl}/images/characters/${characterId}/UI_AvatarIcon_${gameId}.png`;
    }

    static getCharacterSideIconUrlByGameId(characterId: string, gameId: string): string {
        return `${LocalImageProvider.baseUrl}/images/characters/${characterId}/UI_AvatarIcon_Side_${gameId}.png`;
    }

    static getCharacterNamecardUrlByGameId(characterId: string, gameId: string): string {
        return `${LocalImageProvider.baseUrl}/images/characters/${characterId}/UI_NameCardPic_${gameId}_P.png`;
    }

    static getCharacterNamecardBarUrlByGameId(characterId: string, gameId: string): string {
        return `${LocalImageProvider.baseUrl}/images/characters/${characterId}/UI_NameCardPic_${gameId}_Alpha.png`;
    }

    static getCharacterSplashUrlByFilename(characterId: string, filename: string): string {
        return `${LocalImageProvider.baseUrl}/images/splashes/${filename}.png`;
    }
}

export class LocalDataProvider {
    static async getCharacterDataFromId(characterId: string): Promise<CharacterModel> {
        const response = await fetch(`/gi-tc/data/characterDetails/${characterId}.json`);
        return await response.json();
    }
}