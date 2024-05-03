import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Constants } from "../../constants/Constants"

export const AdjustPlacePhone: FunctionComponent = () => {
    return <ModelAndTextLayout
        model={
            <StlView
                source="/cad/AdjustPlacePhone.stl" 
                position={new Vector3(10, 55, 30)}
                rotation={new Vector3(0, 0, 90)}
                showAxes={false}
                cameraPosition={new Vector3(-55, 50, 150)}
                lightOrigin={new Vector3(-100, 0, 0)}
            />
        }
        text={
            <>
                Put the assembly onto a flat surface and place your phone on top of it.
                It is highly recommended to use a phone case with this assembly.
                This increases the stability and reduces the risk of the phone falling out 
                or being scratched by the holder assembly.
            </>
        }
        previousStepPath={Constants.AdjustExtendAllPath}
        nextStepPath={Constants.AdjustPushFeetInPath}
    />
}