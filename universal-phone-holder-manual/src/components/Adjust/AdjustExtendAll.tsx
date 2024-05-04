import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Constants } from "../../constants/Constants"

export const AdjustExtendAll: FunctionComponent = () => {
    return <ModelAndTextLayout
        model={
            <StlView
                source="/cad/low/AdjustExtendAll.stl" 
                position={new Vector3(0, 70, 0)}
                rotation={new Vector3(0, -70, 90)}
                showAxes={false}
                cameraPosition={new Vector3(-150, 100, 0)}
                lightOrigin={new Vector3(0, 100, 50)}
            />
        }
        text={
            <>
                Loosen the screws, so that the feet and neck can be moved easily.
                <br />
                <br />
                Extend all of them as far out as possible. 
                Move the feet up above the body.
            </>
        }
        previousStepPath={Constants.AdjustPath}
        nextStepPath={Constants.AdjustPlacePhonePath}
    />
}