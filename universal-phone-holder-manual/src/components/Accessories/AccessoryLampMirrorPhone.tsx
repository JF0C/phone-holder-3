import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Tooltip, TooltipPosition } from "../Tooltip/Tooltip"
import { Constants } from "../../constants/Constants"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import * as icon from '@coreui/icons';

export const AccessoryLampMirrorPhone : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                source="/cad/low/AccessoryLightMirrorPhone.stl" 
                position={new Vector3(20, 0, 0)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(40, 0, -140)}
                lightOrigin={new Vector3(-170, 30, -50)}
            />
        }
        text={
            <>
            
            </>
        }
        previousStepPath={Constants.AccessoryLampMirrorCompletePath}
    />
}