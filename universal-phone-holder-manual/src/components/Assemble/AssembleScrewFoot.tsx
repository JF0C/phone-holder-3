import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Constants } from "../../constants/Constants"

export const AssembleScrewFoot: FunctionComponent = () => {
return <ModelAndTextLayout 
    model={
        <StlView
            source="/cad/low/AssemblyFootScrew.stl" 
            position={new Vector3(35, 0, -50)}
            rotation={new Vector3(-90, 0, 0)}
            showAxes={false}
            cameraPosition={new Vector3(-50, 50, 10)}
            lightOrigin={new Vector3(0, 100, -100)}
        />
    }
    text={
        <>
            Use a (around 18mm long) screw, two washers and a nut 
            to fix each foot onto the body. Apply some kind of weak 
            glue to bind the nuts and screws together so that they
            won't loosen from vibrations when in use.
            <br />
            <br />
            Do not tighten the screws too hard.
            We will need to move the foot again to adjust it to the phone later.
        </>
    }
    previousStepPath={Constants.AssembleInsertFootPath}
    nextStepPath={Constants.AssembleNeckPath}
/>
}