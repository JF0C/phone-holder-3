import { FunctionComponent, Suspense } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Constants } from "../../constants/Constants"

export const AdjustTightenNeck: FunctionComponent = () => {
    return <ModelAndTextLayout
        model={
            <StlView
                source="/cad/low/AdjustTightenNeck.stl" 
                position={new Vector3(30, 70, 30)}
                rotation={new Vector3(0, 0, 90)}
                showAxes={false}
                cameraPosition={new Vector3(-120, 0, 50)}
                lightOrigin={new Vector3(-100, 50, 0)}
            />
        }
        text={
            <>
                Push the neck towards the rest of the assembly until it touches the top of the phone.
                Have the Allen wrench ready to tighten the screw on the neck.
                Push a little further until the surface touching the phone stands vertical.
                Hold the neck in position and tighten the screw to the body.
                The hook on the neck is deliberately not in the center of the phone to avoid colliding with its camera. 
            </>
        }
        previousStepPath={Constants.AdjustPushFeetInPath}
        nextStepPath={Constants.AdjustLowerFeetPath}
    />
}