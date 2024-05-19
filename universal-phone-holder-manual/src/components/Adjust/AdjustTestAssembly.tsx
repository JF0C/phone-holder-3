import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Constants } from "../../constants/Constants"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import * as icon from '@coreui/icons';

export const AdjustTestAssembly: FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
                <StlView
                    source="/cad/low/AdjustLowerFeet.stl" 
                    position={new Vector3(0, 0, 0)}
                    rotation={new Vector3(0, 0, 0)}
                    showAxes={false}
                    cameraPosition={new Vector3(0, 0, -150)}
                    lightOrigin={new Vector3(0, -100, -100)}
                />
            }
        text={
            <>
                Turn the assembly with and without the phone in it around and visually check that everything is in place.
                Check that all screw connections are secured with glue.
                Ensure that all screws are properly tightened.
                <br />
                <br />
                Grab the assembly at the middle beam and hold it over a soft surface, like a sofa or bed.
                Shake it strongly to see if the phone falls out.
                <br />
                <br />
                If it does, check all screw connections again and pull the feet and neck closer inwards.
                If it holds, continue with mounting the phone holder.
            </>
        }
        previousStepPath={Constants.AdjustLowerFeetPath}
        customNextButton={
            <LinkWithSaveState
                className="menu-button in-text"
                path={Constants.MountPath}
                displayValue="Mount"
                icon={icon.cilMediaStepForward} />
        }
    />
}