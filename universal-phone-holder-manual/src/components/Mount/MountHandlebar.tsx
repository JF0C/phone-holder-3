import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../Layouts/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Tooltip, TooltipPosition } from "../Tooltip/Tooltip"
import { Paths } from "../../constants/Paths"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import * as icon from '@coreui/icons';

export const MountHandlebar : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file="MountBarHolder"
                position={new Vector3(0, 0, 40)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-70, 50, 0)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                Attach the <Tooltip text={<>ring</>}><img src="" /></Tooltip> to the handlebar.
                It will snap onto it. Lower the <Tooltip text={<>phone holder assembly</>}><img src="" /></Tooltip> onto the ring and screw it on.
            </>
        }
        previousStepPath={Paths.MountPath}
        nextStepPath={Paths.MountHandlebarCompletePath}
    />
}