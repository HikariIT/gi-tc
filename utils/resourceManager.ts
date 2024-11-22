
export class ResourceManager {
    static getCharacterIconUrl(provider: typeof ImageProvider, characterId: string, gameId: string) {
        return provider.getCharacterIconUrl(characterId, gameId);
    }

    static getCharacterNamecardUrl(provider: typeof ImageProvider, characterId: string, gameId: string) {
        return provider.getCharacterNamecardUrl(characterId, gameId);
    }

    static getCharacterSideIconUrl(provider: typeof ImageProvider, characterId: string, gameId: string) {
        return provider.getCharacterSideIconUrl(characterId, gameId);
    }

    static getCharacterNamecardBarUrl(provider: typeof ImageProvider, characterId: string, gameId: string) {
        return provider.getCharacterNamecardBarUrl(characterId, gameId);
    }
}

export abstract class ImageProvider {
    static getCharacterIconUrl(characterId: string, gameId: string): string {
        throw new Error("Method not implemented! Use a concrete implementation of ImageProvider.");
    }

    static getCharacterSideIconUrl(characterId: string, gameId: string): string {
        throw new Error("Method not implemented! Use a concrete implementation of ImageProvider.");
    }

    static getCharacterNamecardUrl(characterId: string, gameId: string): string {
        throw new Error("Method not implemented! Use a concrete implementation of ImageProvider.");
    }

    static getCharacterNamecardBarUrl(characterId: string, gameId: string): string {
        throw new Error("Method not implemented! Use a concrete implementation of ImageProvider.");
    }
}

abstract class IconProvider {

}