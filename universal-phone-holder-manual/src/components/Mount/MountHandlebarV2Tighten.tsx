import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../Layouts/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Tooltip, TooltipPosition } from "../Tooltip/Tooltip"
import { Paths } from "../../constants/Paths"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import * as icon from '@coreui/icons';

export const MountHandlebarV2Tighten : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV2Path}
                file="MountHandlebarTighten"
                position={new Vector3(0, 30, 0)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-90, -70, -60)}
                lightOrigin={new Vector3(-100, -100, 0)}
            />
        }
        text={
            <>
                Screw the cheeks of the ring together so that they clamp around the handlebar.
                If they do not grip tightly or the screw doesn't reach the threading, 
                remove the phone holder assembly and adjust the hole band to change the distance between the cheeks.
            </>
        }
        previousStepPath={Paths.MountHandlebarV2HolderPath}
        nextStepPath={Paths.MountHandlebarV2CompletePath}
    />
}