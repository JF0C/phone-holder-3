import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../StlViewer/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Tooltip, TooltipPosition } from "../Tooltip/Tooltip"

export const AssembleInsertFoot: FunctionComponent = () => {
return <ModelAndTextLayout 
        model={
                <StlView
                    source="/cad/AssemblyFootInsert.stl" 
                    position={new Vector3(-30, 70, -50)}
                    rotation={new Vector3(0, 0, 90)}
                    showAxes={false}
                    cameraPosition={new Vector3(-50, 50, 50)}
                    lightOrigin={new Vector3(-100, 0, 0)}
                    />
            }
        text={
            <div className="text-container">
                Hold one finger below the foot rails to support the&nbsp;
                <Tooltip text={<>carriages</>} position={TooltipPosition.bottom} useIcon>
                    <img height={200} src="/img/sled.png"/>
                </Tooltip>.
                <br />
                Hold them, so that they align with the bottom surface of the body.
                <br />
                Then, insert the <Tooltip text={<>foot</>} position={TooltipPosition.bottom} useIcon>
                    <img height={200} src="/img/foot.png" />
                </Tooltip>
            </div>
        }
    />
}