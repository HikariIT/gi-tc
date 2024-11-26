import { CharacterModel } from "../types/models/characterModel";

export class ResourceManager {
    static getCharacterIconUrlByGameId(provider: typeof ImageProvider, characterId: string, gameId: string) {
        return provider.getCharacterIconUrlByGameId(characterId, gameId);
    }

    static getCharacterNamecardUrlByGameId(provider: typeof ImageProvider, characterId: string, gameId: string) {
        return provider.getCharacterNamecardUrlByGameId(characterId, gameId);
    }

    static getCharacterSideIconUrlByGameId(provider: typeof ImageProvider, characterId: string, gameId: string) {
        return provider.getCharacterSideIconUrlByGameId(characterId, gameId);
    }

    static getCharacterNamecardBarUrlByGameId(provider: typeof ImageProvider, characterId: string, gameId: string) {
        return provider.getCharacterNamecardBarUrlByGameId(characterId, gameId);
    }

    static getCharacterSplashUrlByFilename(provider: typeof ImageProvider, characterId: string, filename: string) {
        return provider.getCharacterSplashUrlByFilename(characterId, filename);
    }

    static async getCharacterDataFromId(provider: typeof DataProvider, characterId: string): Promise<CharacterModel> {
        return provider.getCharacterDataFromId(characterId);
    }
}

export abstract class ImageProvider {
    static getCharacterIconUrlByGameId(characterId: string, gameId: string): string {
        throw new Error("Method not implemented! Use a concrete implementation of ImageProvider.");
    }

    static getCharacterSideIconUrlByGameId(characterId: string, gameId: string): string {
        throw new Error("Method not implemented! Use a concrete implementation of ImageProvider.");
    }

    static getCharacterNamecardUrlByGameId(characterId: string, gameId: string): string {
        throw new Error("Method not implemented! Use a concrete implementation of ImageProvider.");
    }

    static getCharacterNamecardBarUrlByGameId(characterId: string, gameId: string): string {
        throw new Error("Method not implemented! Use a concrete implementation of ImageProvider.");
    }

    static getCharacterSplashUrlByGameId(characterId: string, gameId: string): string {
        throw new Error("Method not implemented! Use a concrete implementation of ImageProvider.");
    }

    static getCharacterIconUrlByFilename(characterId: string, filename: string): string {
        throw new Error("Method not implemented! Use a concrete implementation of ImageProvider.");
    }

    static getCharacterSideIconUrlByFilename(characterId: string, filename: string): string {
        throw new Error("Method not implemented! Use a concrete implementation of ImageProvider.");
    }

    static getCharacterNamecardUrlByFilename(characterId: string, filename: string): string {
        throw new Error("Method not implemented! Use a concrete implementation of ImageProvider.");
    }

    static getCharacterNamecardBarUrlByFilename(characterId: string, filename: string): string {
        throw new Error("Method not implemented! Use a concrete implementation of ImageProvider.");
    }

    static getCharacterSplashUrlByFilename(characterId: string, filename: string): string {
        throw new Error("Method not implemented! Use a concrete implementation of ImageProvider.");
    }
}

export abstract class DataProvider {
    static async getCharacterDataFromId(characterId: string): Promise<CharacterModel> {
        throw new Error("Method not implemented! Use a concrete implementation of DataProvider.");
    }
}

abstract class IconProvider {

}