import { FunctionComponent, Suspense } from "react"
import { StlView } from "../Layouts/StlView"
import { Vector3 } from "three"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import { Paths } from "../../constants/Paths"
import { Loader } from "@react-three/drei"
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner"

export const StartMenu: FunctionComponent = () => {
    let view = <StlView 
        folder={Paths.ModelsV1Path}
        file="PhoneHolderBase"
        position={new Vector3(0, 0, 0)}
        rotation={new Vector3(-90, 0, 0)}
        cameraPosition={new Vector3(-100, 50, 0)}
        lightOrigin={new Vector3(-50, 100, 0)}
        showAxes={false}
    />;
    if (window.innerWidth < 1000){
        view = <StlView 
        folder={Paths.ModelsV1Path}
        file="PhoneHolderBase"
        position={new Vector3(0, 0, 0)}
        rotation={new Vector3(-30, 0, 0)}
        cameraPosition={new Vector3(-100, 0, 100)}
        lightOrigin={new Vector3(-150, 100, 0)}
        showAxes={false}
    />
    }
    return <>
        <div className="main-menu-canvas">
            <Suspense fallback={<LoadingSpinner />}>
                {view}
            </Suspense>
        </div>
        
        <div className="start-menu-container">
            <LinkWithSaveState className="menu-button" path={Paths.AssemblePath} />
            <LinkWithSaveState className="menu-button" path={Paths.AdjustPath} />
            <LinkWithSaveState className="menu-button" path={Paths.MountPath} />
            <LinkWithSaveState className="menu-button" path={Paths.AccessoriesPath} />
        </div>
    </>
}