import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"

export const AdjustExtendAll: FunctionComponent = () => {
    return <ModelAndTextLayout
        model={
            <StlView
                source="/cad/AdjustExtendAll.stl" 
                position={new Vector3(35, 10, -70)}
                rotation={new Vector3(75, 55, 30)}
                showAxes={false}
                cameraPosition={new Vector3(170, 0, 0)}
                lightOrigin={new Vector3(100, 100, 50)}
            />
        }
        text={
            <div className="text-container">
                Loosen the screws, so that the feet and neck can be moved easily.
                <br />
                Extend all of them as far out as possible. 
                Move the feet up above the body.
            </div>
        }
    />
}