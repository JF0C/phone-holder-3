import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Tooltip, TooltipPosition } from "../Tooltip/Tooltip"
import { Constants } from "../../constants/Constants"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import * as icon from '@coreui/icons';

export const MountAeroRing : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                source="/cad/low/MountAeroRingToBar.stl" 
                position={new Vector3(0, 0, -100)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-90, -30, 20)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
            
            </>
        }
        previousStepPath={Constants.MountAeroHolderPath}
        nextStepPath={Constants.MountAeroHandlebarPath}
    />
}