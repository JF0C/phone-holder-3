import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../Layouts/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Tooltip, TooltipPosition } from "../Tooltip/Tooltip"
import { Paths } from "../../constants/Paths"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import * as icon from '@coreui/icons';

export const AccessoryLampMirrorPhone : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file="AccessoryLightMirrorPhone"
                position={new Vector3(20, 0, 0)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(40, 0, -140)}
                lightOrigin={new Vector3(-170, 30, -50)}
            />
        }
        text={
            <>
                Click the phone into the holder and activate its lamp.
                Adjust the mirror such that the light is reflected forward.
                Finally, screw the lamp mirror tight.
            </>
        }
        previousStepPath={Paths.AccessoryLampMirrorCompletePath}
    />
}