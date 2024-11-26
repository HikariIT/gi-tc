import genshindb from 'genshin-db';
import { CharacterModel } from './types/models/characterModel';
import { writeFileSync } from 'fs';

genshindb.setOptions({
    dumpResult: false,
})

const characters = genshindb.characters('names', { matchCategories: true });

for (const character of characters) {
    const characterData = genshindb.characters(character);
    const characterTalents = genshindb.talents(character);
    const characterNamecards = genshindb.namecards(character);
    const characterConstellations = genshindb.constellations(character);

    if (!characterData || !characterTalents || !characterNamecards || !characterConstellations) {
        console.log(`Character ${character} not found.`);
        continue;
    }

    const requiredData: CharacterModel = {
        name: characterData.name,
        element: characterData.elementText,
        rarity: characterData.rarity,
        weapon: characterData.weaponText,
        description: characterData.description,
        ascensionSubstat: characterData.substatText,
        constellation: characterData.constellation,
        gachaSplashOffset: 0.5,
        talents: {
            attack: {
                name: characterTalents.combat1.name,
                description: characterTalents.combat1.description,
                attributes: characterTalents.combat1.attributes,
                imagePath: characterTalents.images?.filename_combat1,
            },
            elementalSkill: {
                name: characterTalents.combat2.name,
                description: characterTalents.combat2.description,
                attributes: characterTalents.combat2.attributes,
                imagePath: characterTalents.images?.filename_combat2,
            },
            elementalBurst: {
                name: characterTalents.combat3.name,
                description: characterTalents.combat3.description,
                attributes: characterTalents.combat3.attributes,
                imagePath: characterTalents.images?.filename_combat3,
            },
            alternateSprint: characterTalents.combatsp
                ? {
                    name: characterTalents.combatsp.name,
                    description: characterTalents.combatsp.description,
                    attributes: characterTalents.combatsp.attributes,
                    imagePath: characterTalents.images!.filename_combatsp,
                }
                : undefined,
            passive1: {
                name: characterTalents.passive1.name,
                description: characterTalents.passive1.description,
                imagePath: characterTalents.images?.filename_passive1,
            },
            passive2: {
                name: characterTalents.passive2.name,
                description: characterTalents.passive2.description,
                imagePath: characterTalents.images?.filename_passive2,
            },
            passive3: characterTalents.passive3
                ? {
                      name: characterTalents.passive3.name,
                      description: characterTalents.passive3.description,
                      imagePath: characterTalents.images?.filename_passive3,
                  }
                : undefined,
            passive4: characterTalents.passive4
                ? {
                      name: characterTalents.passive4.name,
                      description: characterTalents.passive4.description,
                      imagePath: characterTalents.images?.filename_passive4,
                  }
                : undefined,
        },
        constellations: {
            c1: {
                name: characterConstellations.c1.name,
                description: characterConstellations.c1.description,
                imagePath: characterConstellations.images.filename_c1,
            },
            c2: {
                name: characterConstellations.c2.name,
                description: characterConstellations.c2.description,
                imagePath: characterConstellations.images.filename_c2,
            },
            c3: {
                name: characterConstellations.c3.name,
                description: characterConstellations.c3.description,
                imagePath: characterConstellations.images.filename_c3,
            },
            c4: {
                name: characterConstellations.c4.name,
                description: characterConstellations.c4.description,
                imagePath: characterConstellations.images.filename_c4,
            },
            c5: {
                name: characterConstellations.c5.name,
                description: characterConstellations.c5.description,
                imagePath: characterConstellations.images.filename_c5,
            },
            c6: {
                name: characterConstellations.c6.name,
                description: characterConstellations.c6.description,
                imagePath: characterConstellations.images.filename_c6,
            },
        },
        filenames: {
            icon: characterData.images.filename_icon,
            sideIcon: characterData.images.filename_sideIcon,
            gachaSplash: characterData.images.filename_gachaSplash,
            gachaSlice: characterData.images.filename_gachaSlice,
            namecardBar: characterNamecards.images.filename_banner,
            namecard: characterNamecards.images.filename_background,
        },
    }

    // Output json to file ./public/data/characterDetails.json
    console.log(`Writing ${character} to file...`);
    writeFileSync(`./public/data/characterDetails/${character}.json`, JSON.stringify(requiredData, null, 4));
}