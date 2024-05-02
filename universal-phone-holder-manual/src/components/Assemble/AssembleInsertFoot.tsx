import { FunctionComponent, Suspense } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"


export const AssembleInsertFoot: FunctionComponent = () => {
return <ModelAndTextLayout 
        model={
            <Suspense>
                <StlView
                    source="/cad/AssemblyFootInsert.stl" 
                    position={new Vector3(-30, 70, -50)}
                    rotation={new Vector3(0, 0, 90)}
                    showAxes={false}
                    cameraPosition={new Vector3(-50, 50, 50)}
                    lightOrigin={new Vector3(-100, 0, 0)}
                    />
            </Suspense>}
        text={
            <div className="text-container">
                Hold one finger below the 
            </div>
        }
    />
}