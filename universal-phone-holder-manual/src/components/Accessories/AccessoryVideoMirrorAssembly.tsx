import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../Layouts/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Tooltip, TooltipPosition } from "../Tooltip/Tooltip"
import { Paths } from "../../constants/Paths"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import * as icon from '@coreui/icons';

export const AccessoryVideoMirrorAssembly : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file="AccessoryVideoMirrorAssembly"
                position={new Vector3(0, 0, -70)}
                rotation={new Vector3(-90, 0, 180)}
                showAxes={false}
                cameraPosition={new Vector3(0, -80, 0)}
                lightOrigin={new Vector3(-100, -200, 0)}
            />
        }
        text={
            <>
            
            </>
        }
        previousStepPath={Paths.AccessoriesPath}
        nextStepPath={Paths.AccessoryVideoMirrorCompletePath}
    />
}