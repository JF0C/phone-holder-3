import { FunctionComponent, Suspense } from "react"
import { StlView } from "../StlViewer/StlView"
import { Vector3 } from "three"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import { Constants } from "../../constants/Constants"
import { Loader } from "@react-three/drei"

export const StartMenu: FunctionComponent = () => {
    return <>
        <Suspense fallback={<Loader/>}>
            <StlView 
                source="/cad/PhoneHolderBase.stl" 
                position={new Vector3(0, 0, 0)}
                rotation={new Vector3(90, 0, 0)}
                cameraPosition={new Vector3(100, 50, 0)}
                lightOrigin={new Vector3(100, 100, 0)}
                showAxes={false}
            />
        </Suspense> 
        <div className="start-menu-container">
            <div className="menu-button">
                <LinkWithSaveState path={Constants.AssemblePath} />
            </div>
            <div className="menu-button">
                <LinkWithSaveState path={Constants.AdjustPath} />
            </div>
            <div className="menu-button">
                <LinkWithSaveState path={Constants.MountPath} />
            </div>
        </div>
    </>
}