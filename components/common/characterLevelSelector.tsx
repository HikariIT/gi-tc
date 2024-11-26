interface CharacterLevelSelectorProps {
    levelChangeCallback: (level: string) => void;
}

export default function CharacterLevelSelector(props: CharacterLevelSelectorProps) {
    const levels = [];
    const ascensionBreakpoints = [20, 40, 50, 60, 70, 80, 90];
    let i = 1;
    let breakpointIndex = 0;

    while (true) {
        if (breakpointIndex === ascensionBreakpoints.length) {
            break;
        }
        if (i < ascensionBreakpoints[breakpointIndex]) {
            levels.push(`${i}/${ascensionBreakpoints[breakpointIndex]}`);
            i++;
        }
        if (i === ascensionBreakpoints[breakpointIndex]) {
            levels.push(`${i}/${ascensionBreakpoints[breakpointIndex]}`);
            breakpointIndex++;
        }
    }

    return (
        <select className="character-level-selector" onChange={(e) => props.levelChangeCallback(e.target.value)}>
            <option value="1/20">1/20</option>
            {levels.map((level) => (
                <option key={level} value={level}>{level}</option>
            ))}
        </select>
    )
}