import { FunctionComponent } from "react"

type StartMenuProperties = {
    height: string
};

export const StartMenu: FunctionComponent<StartMenuProperties> = (props: StartMenuProperties) => {
    const startMenuStyle = {
        height: props.height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return <div style={startMenuStyle} className="start-menu-container">
        <div className="menu-button">Assemble</div>
        <div className="menu-button">Adjust</div>
    </div>
}