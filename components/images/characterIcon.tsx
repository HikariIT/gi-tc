import { LocalImageProvider, ResourceManager } from "../../utils";
import Image from 'next/image';

export interface CharacterIconProps {
    id: string;
    gameId: string;
    width?: number;
    height?: number;
}

export function CharacterIcon(props: CharacterIconProps) {
    return (
        <div className="character-icon">
            <Image
                src={ResourceManager.getCharacterIconUrl(LocalImageProvider, props.id, props.gameId)}
                alt={props.id}
                width={props.width || 100}
                height={props.height || 100}
                unoptimized
            />
        </div>
    );
}