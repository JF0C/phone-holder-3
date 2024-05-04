import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Constants } from "../../constants/Constants"

export const AdjustPushFeetIn: FunctionComponent = () => {
    return <ModelAndTextLayout
        model={
            <StlView
                source="/cad/low/AdjustPullFeetIn.stl" 
                position={new Vector3(-40, 70, -40)}
                rotation={new Vector3(0, 0, 90)}
                showAxes={false}
                cameraPosition={new Vector3(-50, 50, 50)}
                lightOrigin={new Vector3(-100, 100, -50)}
            />
        }
        text={
            <>
                Push the feet towards the edges of the phone until they touch them. 
                Make sure, that the top curved edge is concentric with the phone's curvature.
                Measure the distance of the feet to the end of the rails. 
                Adjust them until they both have the same distance.
                <br />
                <br />
                Adjusting the feet distance and checking the curvature
                ensures that the phone is properly centered on the assembly.
                <br />
                <br />
                Do not push down the feet towards the legs yet.
                <br />
                <br />
                Tighten the screws of the feet just enough that they don't easily move
                along the rails. Vertical movement should still be possible.
            </>
        }
        previousStepPath={Constants.AdjustPlacePhonePath}
        nextStepPath={Constants.AdjustTightenNeckPath}
    />
}