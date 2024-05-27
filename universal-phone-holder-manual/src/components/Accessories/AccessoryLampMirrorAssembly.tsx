import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../Layouts/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Tooltip, TooltipPosition } from "../Tooltip/Tooltip"
import { Paths } from "../../constants/Paths"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import * as icon from '@coreui/icons';

export const AccessoryLampMirrorAssembly : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file="AccessoryLightMirrorAssembly"
                position={new Vector3(0, 0, 65)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(10, 60, 0)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                Use a screw to connect the <Tooltip text={<>mirror</>}><img /></Tooltip> to the neck of the <Tooltip text={<>phone holder</>}><img /></Tooltip>. 
                Insert washers between all parts including the nut.
                Tighten the screw just enough that everything stays in place, but still can be moved for adjustment.
            </>
        }
        previousStepPath={Paths.AccessoriesPath}
        nextStepPath={Paths.AccessoryLampMirrorCompletePath}
    />
}