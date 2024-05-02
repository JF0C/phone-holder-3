import { FunctionComponent, Suspense } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"


export const AssembleScrewFoot: FunctionComponent = () => {
return <>
<Suspense>
    <StlView
            source="/cad/AssemblyFootScrew.stl" 
            position={new Vector3(-30, 70, -50)}
            rotation={new Vector3(0, 0, 90)}
            showAxes={false}
            cameraPosition={new Vector3(10, 50, 50)}
            lightOrigin={new Vector3(-100, 0, 0)}
        />
</Suspense>
</>
}