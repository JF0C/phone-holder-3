import { FunctionComponent } from "react"
import { Vector3 } from "three"
import { StlView } from "../Layouts/StlView"
import { ModelAndTextLayout } from "../Layouts/ModelAndTextLayout"
import { Tooltip, TooltipPosition } from "../Tooltip/Tooltip"
import { Paths } from "../../constants/Paths"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import * as icon from '@coreui/icons';

export const MountHandlebarV2Ring : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV2Path}
                file="MountHandlebarRing"
                position={new Vector3(0, 30, 0)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(90, 20, 60)}
                lightOrigin={new Vector3(100, 100, 0)}
            />
        }
        text={
            <>
                Combine both <Tooltip text={<>halves</>}><img /></Tooltip> of the ring 
                and wrap it around the handlebar.
                Extend the <Tooltip text={<>band</>}><img /></Tooltip> with the adjustment holes 
                so that a gap of around 1 cm is between the two cheeks.
                A hole in the band should match up with the hole in the &nbsp;
                <Tooltip text={<>phone holder adapter part</>}>
                    <img />
                </Tooltip>.
            </>
        }
        previousStepPath={Paths.MountPath}
        nextStepPath={Paths.MountHandlebarV2HolderPath}
    />
}