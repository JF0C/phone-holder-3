import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { Paths } from "../../constants/Paths"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { StlView } from "../Layouts/StlView"
import { ImagePopover } from "../Tooltip/ImagePopover"

export const MountAeroHolder : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file="MountAeroHolderToBar"
                position={new Vector3(0, 0, -15)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-70, -10, -20)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                Use a 20mm to 25mm M4 screw and nut to attach the <ImagePopover id='phone-holder-assembly' text='Phone Hodler Assembly' imagePath='./img/base-assembly.png' />
                onto the <ImagePopover id='aero-bar' text='Aero Bar' imagePath='./img/aero-bar-v1.png' />.
                Note that the Aero Bar can be turned around to attach it to either the left of right side of the handlebar.
            </>
        }
        previousStepPath={Paths.MountPath}
        nextStepPath={Paths.MountAeroRingPath}
    />
}