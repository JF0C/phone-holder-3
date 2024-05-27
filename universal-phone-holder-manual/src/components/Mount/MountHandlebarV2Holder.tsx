import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../Layouts/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Tooltip, TooltipPosition } from "../Tooltip/Tooltip"
import { Paths } from "../../constants/Paths"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import * as icon from '@coreui/icons';

export const MountHandlebarV2Holder : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV2Path}
                file="MountHandlebarHolder"
                position={new Vector3(0, 0, 0)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-90, 0, 0)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                Put the centering pin onto the <Tooltip text={<>ring</>}><img /></Tooltip>.
                Lay the <Tooltip text={<>phone holder assembly</>}><img /></Tooltip> onto the ring such that the pin fits into the notch of the holder.
                If the screw does not fall into the threading right away, wiggle the holed band until it does.
            </>
        }
        previousStepPath={Paths.MountHandlebarV2RingPath}
        nextStepPath={Paths.MountHandlebarV2TightenPath}
    />
}