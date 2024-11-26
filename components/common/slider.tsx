import { Slider } from 'rsuite';
import '../../styles/style.sass';
import 'rsuite/Slider/styles/index.css';

interface GenshinSliderProps {
    value: number;
    setValue: (value: number) => void;
    step: number;
    min: number;
    max: number;
}

export default function GenshinSlider(props: GenshinSliderProps) {
    return (
        <Slider
            className="genshinSlider"
            handleClassName="genshinSlider__handle"
            onChange={(value: number | number[]) => {
                if (typeof value === 'number') {
                    props.setValue(value);
                }
            }}
            min={props.min}
            max={props.max}
            step={props.step}
        />
    );
}