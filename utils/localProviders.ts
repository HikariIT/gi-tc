import { ImageProvider } from "./resourceManager";

export class LocalImageProvider extends ImageProvider {
    static baseUrl: string = '/gi-tc'

    static getCharacterIconUrl(characterId: string, gameId: string): string {
        return `${LocalImageProvider.baseUrl}/images/characters/${characterId}/UI_AvatarIcon_${gameId}.png`;
    }

    static getCharacterSideIconUrl(characterId: string, gameId: string): string {
        return `${LocalImageProvider.baseUrl}/images/characters/${characterId}/UI_AvatarIcon_Side_${gameId}.png`;
    }

    static getCharacterNamecardUrl(characterId: string, gameId: string): string {
        return `${LocalImageProvider.baseUrl}/images/characters/${characterId}/UI_NameCardPic_${gameId}_P.png`;
    }

    static getCharacterNamecardBarUrl(characterId: string, gameId: string): string {
        return `${LocalImageProvider.baseUrl}/images/characters/${characterId}/UI_NameCardPic_${gameId}_Alpha.png`;
    }
}
