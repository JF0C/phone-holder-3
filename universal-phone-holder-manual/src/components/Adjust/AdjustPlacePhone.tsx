import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"

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
            <div className="text-container"></div>
        }
    />
}