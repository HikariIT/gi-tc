export interface LoaderProps {
    condition: boolean;
}

export default function Loader(props: LoaderProps) {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {props.condition && <div className="loader"/>}
        </div>
    );
}