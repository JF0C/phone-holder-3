import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"

export const AssembleAttachNeck : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                source="/cad/AssemblyNeck.stl" 
                position={new Vector3(40, 70, 20)}
                rotation={new Vector3(0, 0, 90)}
                showAxes={false}
                cameraPosition={new Vector3(-25, 50, 50)}
                lightOrigin={new Vector3(-100, 0, 0)}
            />
        }
        text={
            <div className="text-container">hello</div>
        }
    />
}