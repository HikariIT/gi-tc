'use client'

import { useRef, useState } from "react";
import { useOutsideAlerter } from "../hooks/useOutsideAlerter";
import '../styles/components/_togglable-list.sass';

export interface TogglableListProps {
    title: string;
    allItems: string[];
    filteredItems: string[];
    toggleItem: (item: string) => void;
}

export function TogglableList(props: TogglableListProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, () => setIsOpen(false));

    return (
        <div className="togglable-list-container" ref={wrapperRef}>
            <button className="togglable-list-title" onClick={() => setIsOpen(!isOpen)}>{props.title}</button>
            <ul className={"togglable-list-items" + (isOpen ? "-active" : "")}>
                {props.allItems.map(item => (
                    <li className="togglable-list-items__item" key={item}>
                        <span>{item}</span>
                        <input type="checkbox" checked={props.filteredItems.includes(item)} onChange={() => props.toggleItem(item)}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}