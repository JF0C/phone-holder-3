import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../Layouts/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Tooltip, TooltipPosition } from "../Tooltip/Tooltip"
import { Paths } from "../../constants/Paths"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import * as icon from '@coreui/icons';

export const MountCenterComplete : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file="MountCenterComplete"
                position={new Vector3(0, 0, 40)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-150, 80, -30)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                TODO: add text
            </>
        }
        previousStepPath={Paths.MountCenterHolderPath}
    />
}