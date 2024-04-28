import { FunctionComponent, Suspense } from "react"
import { StlView } from "../StlViewer/StlView"
import { Vector3 } from "three"

type AssembleProperties = {

}

export const Assemble: FunctionComponent<AssembleProperties> = (props: AssembleProperties) =>{
    return <>
        <Suspense>

            <StlView height="80vh" 
                    source="/cad/AssemblyFootInsert.stl" 
                    position={new Vector3(0, 250, 0)}
                    rotation={new Vector3(0, 0, 0)}
                />
        </Suspense>
    </>
}