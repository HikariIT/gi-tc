interface Talent {
    name: string;
    description: string;
    attributes: {
        labels: string[];
        parameters: {
            [key: string]: number[];
        };
    };
    imagePath?: string;
}

interface PassiveTalent {
    name: string;
    description: string;
    imagePath?: string;
}

interface Constellation {
    name: string;
    description: string;
    imagePath: string;
}

interface Filenames {
    icon: string;
    sideIcon: string;
    gachaSplash?: string;
    gachaSlice?: string;
    namecardBar?: string;
    namecard: string;
}

export interface Talents {
    attack: Talent;
    elementalSkill: Talent;
    elementalBurst: Talent;
    alternateSprint?: Talent;
    passive1: PassiveTalent;
    passive2: PassiveTalent;
    passive3?: PassiveTalent;
    passive4?: PassiveTalent;
}

export interface Constellations {
    c1: Constellation;
    c2: Constellation;
    c3: Constellation;
    c4: Constellation;
    c5: Constellation;
    c6: Constellation;
}

export interface CharacterModel {
    name: string;
    element: string;
    rarity: number;
    weapon: string;
    description: string;
    ascensionSubstat: string;
    constellation: string;
    gachaSplashOffset: number;
    talents: Talents;
    constellations: Constellations;
    filenames: Filenames;
}