import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../Layouts/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Paths } from "../../constants/Paths"

export const AdjustExtendAll: FunctionComponent = () => {
    const model = window.innerWidth < 1000 ?
        <StlView
            folder={Paths.ModelsV1Path}
            file="AdjustExtendAll"
            position={new Vector3(0, 0, 0)}
            rotation={new Vector3(-30, -30, 0)}
            showAxes={false}
            cameraPosition={new Vector3(-180, 0, 0)}
            lightOrigin={new Vector3(-200, 100, 0)}
        />
        :
        <StlView
            folder={Paths.ModelsV1Path}
            file="AdjustExtendAll"
            position={new Vector3(0, 0, 30)}
            rotation={new Vector3(-90, 0, 0)}
            showAxes={false}
            cameraPosition={new Vector3(-180, 50, 0)}
            lightOrigin={new Vector3(0, 100, 0)}
        />
        ;
    return <ModelAndTextLayout
        model={model}
        text={
            <>
                Loosen the screws, so that the feet and neck can be moved easily.
                <br />
                <br />
                Extend all of them as far out as possible. 
                Move the feet up, away from the body.
            </>
        }
        previousStepPath={Paths.AdjustPath}
        nextStepPath={Paths.AdjustPlacePhonePath}
    />
}