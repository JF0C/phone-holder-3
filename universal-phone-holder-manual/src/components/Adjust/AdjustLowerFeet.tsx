import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import { Constants } from "../../constants/Constants"

export const AdjustLowerFeet: FunctionComponent = () => {
    return <ModelAndTextLayout
        model={
            <StlView
                source="/cad/low/AdjustLowerFeet.stl" 
                position={new Vector3(-30, 70, -20)}
                rotation={new Vector3(0, 0, 90)}
                showAxes={false}
                cameraPosition={new Vector3(-70, 25, 20)}
                lightOrigin={new Vector3(-100, 0, 0)}
            />
        }
        text={
            <>
                Push the feet down until they contact the phone case.
                The phone should not be able to move anymore relative to the holder.
                <br />
                <br />
                Check again that the feet are aligned with the phone as described in step&nbsp;
                <LinkWithSaveState path={Constants.AdjustPushFeetInPath} displayValue="Push Feet In" />.
                Meaning that the feet should still be at the same distance from the end of the rails and the curvatures match. 
            </>
        }
        previousStepPath={Constants.AdjustTightenNeckPath}
        nextStepPath={Constants.AdjustTestAssemblyPath}
    />
}