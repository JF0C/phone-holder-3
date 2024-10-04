import { FunctionComponent, Suspense } from "react"
import { Vector3 } from "three"
import { Paths } from "../../constants/Paths"
import { StlView } from "../Layouts/StlView"
import { LinkWithSaveState } from "../Navigation/LinkWithSaveState"
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
        <div className="h-5/6">
            <Suspense fallback={<LoadingSpinner />}>
                {view}
            </Suspense>
        </div>
        
        <div className="start-menu-container">
            <LinkWithSaveState className="menu-button first-menu-button" path={Paths.AssemblePath} />
            <LinkWithSaveState className="menu-button" path={Paths.AdjustPath} />
            <LinkWithSaveState className="menu-button" path={Paths.AccessoriesPath} />
            <LinkWithSaveState className="menu-button" path={Paths.MountPath} />
        </div>
    </>
}