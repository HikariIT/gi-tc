'use client'

import { CharacterBaseModel } from "../../types/models/characterBaseModel";
import { CharacterHorizontalBar } from "./characterHorizontalBar"
import { Loader, TogglableList } from "..";
import { useEffect, useState } from "react"
import { FaFilter } from "react-icons/fa";


export function CharacterPreview() {
    const [charactersLoaded, setCharactersLoaded] = useState<boolean>(false);
    const [characterList, setCharacterList] = useState<CharacterBaseModel[]>([]);
    const [filteredElements, setFilteredElements] = useState<string[]>([]);
    const [filteredWeapons, setFilteredWeapons] = useState<string[]>([]);
    const [filteredRarities, setFilteredRarities] = useState<string[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [allElements, setAllElements] = useState<string[]>([]);
    const [allWeapons, setAllWeapons] = useState<string[]>([]);
    const [allCharacters, setAllCharacters] = useState<CharacterBaseModel[]>([]);
    const allRarities = ['4★', '5★']

    useEffect(() => {
        fetch('/gi-tc/data/characterList.json')
            .then(response => response.json())
            .then(characterList => {
                setCharacterList(characterList);

                console.log(characterList)

                const elementSet = new Set<string>(characterList.map((character: CharacterBaseModel) => character.element));
                const weaponSet = new Set<string>(characterList.map((character: CharacterBaseModel) => character.weapon));

                setAllCharacters(characterList);
                setAllElements(Array.from(elementSet));
                setAllWeapons(Array.from(weaponSet));

                setFilteredElements(Array.from(elementSet));
                setFilteredWeapons(Array.from(weaponSet));
                setFilteredRarities(allRarities);
            })
            .catch(error => console.error(error))
            .finally(() => setCharactersLoaded(true))
    }, [])

    const isCharacterSearched = (character: CharacterBaseModel) => {
        if (searchText === '') return true;
        return character.name.toLowerCase().includes(searchText.toLowerCase());
    }

    const doesCharacterMatchFilter = (character: CharacterBaseModel) => {
        if (filteredElements.length === 0 && filteredWeapons.length === 0 && filteredRarities.length === 0) return true;
        return filteredElements.includes(character.element) && filteredWeapons.includes(character.weapon) && filteredRarities.includes(character.rarity.toString() + '★');
    }

    const toggleElementFilter = (element: string) => {
        if (filteredElements.length == allElements.length) {
            setFilteredElements([element]);
            return;
        }

        if (filteredElements.includes(element)) {
            const newFilteredElements = filteredElements.filter(e => e !== element);
            if (newFilteredElements.length == 0) {
                setFilteredElements(allElements);
                return;
            }
            setFilteredElements(filteredElements.filter(e => e !== element));
        } else {
            setFilteredElements([...filteredElements, element]);
        }

        if (filteredElements.length == 0) {
            setFilteredElements(allElements);
        }
    }

    const toggleWeaponFilter = (weapon: string) => {
        if (filteredWeapons.length == allWeapons.length) {
            setFilteredWeapons([weapon]);
            return;
        }

        if (filteredWeapons.includes(weapon)) {
            const newFilteredWeapons = filteredWeapons.filter(w => w !== weapon);
            if (newFilteredWeapons.length == 0) {
                setFilteredWeapons(allWeapons);
                return;
            }
            setFilteredWeapons(filteredWeapons.filter(w => w !== weapon));
        } else {
            setFilteredWeapons([...filteredWeapons, weapon]);
        }
    }

    const toggleRarityFilter = (rarity: string) => {
        if (filteredRarities.includes(rarity)) {
            const newFilteredRarities = filteredRarities.filter(r => r !== rarity);
            if (newFilteredRarities.length == 0) {
                setFilteredRarities(allRarities);
                return;
            }
            setFilteredRarities(filteredRarities.filter(r => r !== rarity));
        } else {
            setFilteredRarities([...filteredRarities, rarity]);
        }
    }

    useEffect(() => {
      console.log(filteredElements, filteredWeapons)
    }, [filteredElements, filteredWeapons])

    return (
      <div key="character-container" className='generic-shadow-container' id="character-preview-container">
        <div id="filters-top-menu">
          <h1 className="container-title">Character Preview</h1>
          <div id="filters-and-search">
            <div className="filter-container">
              <div className="filter-icon-container">
                <FaFilter size={20}/>
              </div>
              <div className="filter-group">
                <TogglableList title="Element" allItems={allElements} filteredItems={filteredElements} toggleItem={toggleElementFilter}/>
              </div>
              <div className="filter-group">
                <TogglableList title="Weapon" allItems={allWeapons} filteredItems={filteredWeapons} toggleItem={toggleWeaponFilter}/>
              </div>
              <div className="filter-group">
                <TogglableList title="Rarity" allItems={allRarities} filteredItems={filteredRarities} toggleItem={toggleRarityFilter}/>
              </div>
            </div>
            <input type="text" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
          </div>
          <hr/>
        </div>
        <div id="character-list">
          <Loader condition={!charactersLoaded}/>
          {allCharacters.map((character) => (
            isCharacterSearched(character) && doesCharacterMatchFilter(character) && <CharacterHorizontalBar key={character.name.toLowerCase()} character={character}/>
          ))}
        </div>
      </div>
    )
}