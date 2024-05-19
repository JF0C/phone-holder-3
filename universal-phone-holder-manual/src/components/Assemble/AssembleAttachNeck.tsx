import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Tooltip, TooltipPosition } from "../Tooltip/Tooltip"
import { Constants } from "../../constants/Constants"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import * as icon from '@coreui/icons';

export const AssembleAttachNeck : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                source="/cad/low/AssemblyNeck.stl" 
                position={new Vector3(0, 0, 40)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-70, 50, 0)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                Insert the front part of the&nbsp;
                <Tooltip text={<>body</>} position={TooltipPosition.bottom} useIcon>
                    <img height={200} src="/img/body.png" />
                </Tooltip> into the groove in the <Tooltip text={<>neck</>} position={TooltipPosition.bottom} useIcon>
                    <img height={200} src="/img/neck.png" />
                </Tooltip>.
                Depending on the size of the phone to be attached,
                different holes in the body can be used to screw the neck onto.
                <br />
                <br />
                One hole already has a threaded insert.
                This is the standard size, which should fit for most phones
                with a length between 135 and 175 mm.
                Use a short screw and washer here.
                <br />
                <br />
                If your phone exceeds the limits above, 
                you might have to use another hole to attach the neck,
                which are not equipped with a threaded insert.
                For these, use an additional washer and a nut,
                to counter the screw on the opposite side of the neck.
                <br />
                <br />
                Use a weak glue again here to prevent loosening of the screw.
            </>
        }
        previousStepPath={Constants.AssembleScrewFootPath}
        customNextButton={
            <LinkWithSaveState 
                className="menu-button in-text" 
                path={Constants.AdjustPath} 
                displayValue="Adjust" 
                icon={icon.cilMediaStepForward} />
        }
    />
}