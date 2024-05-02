import { FunctionComponent, Suspense } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"

export const AssembleAttachNeck : FunctionComponent = () => {


    return <Suspense>
        <StlView height="80vh" 
                source="/cad/AssemblyNeck.stl" 
                position={new Vector3(40, 70, 20)}
                rotation={new Vector3(0, 0, 90)}
                showAxes={false}
                cameraPosition={new Vector3(-25, 50, 50)}
                lightOrigin={new Vector3(-100, 0, 0)}
            />
    </Suspense>
}