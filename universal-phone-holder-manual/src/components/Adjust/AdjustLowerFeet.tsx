import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { StlView } from '../Layouts/StlView'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { LinkWithSaveState } from '../Navigation/LinkWithSaveState'
import { Paths } from '../../constants/Paths'
import { ImagePopover } from '../Tooltip/ImagePopover'

export const AdjustLowerFeet: FunctionComponent = () => {
    return <ModelAndTextLayout
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file='AdjustLowerFeet'
                position={new Vector3(35, 0, -50)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-50, 20, -50)}
                lightOrigin={new Vector3(0, 100, -100)}
            />
        }
        text={
            <>
                Push the <ImagePopover id='feet-popover' text='Feet' imagePath='./img/foot.png' /> down until they contact the phone case.
                The phone should not be able to move anymore relative to the holder.
                <br />
                <br />
                Check again that the feet are aligned with the phone as described in step&nbsp;
                <LinkWithSaveState path={Paths.AdjustPushFeetInPath} displayValue='Push Feet In' />.
                Meaning that the feet should still be at the same distance from the end of the rails and the curvatures match. 
            </>
        }
        previousStepPath={Paths.AdjustTightenNeckPath}
        nextStepPath={Paths.AdjustTestAssemblyPath}
    />
}