import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'
import { ImagePopover } from '../Tooltip/ImagePopover'

export const AdjustPushFeetIn: FunctionComponent = () => {
    return <ModelAndTextLayout
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file='AdjustPullFeetIn'
                position={new Vector3(35, 0, -50)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-50, 30, -50)}
                lightOrigin={new Vector3(0, 100, -100)}
            />
        }
        text={
            <>
                Push the <ImagePopover id='feet-popover' text='Feet' imagePath='./img/foot.png' /> towards the edges of the phone until they touch them. 
                Make sure, that the top curved edge is concentric with the phone's curvature.
                Measure the distance of the feet to the end of the rails of the <ImagePopover id='body' text='Body' imagePath='./img/body.png' />. 
                Adjust them until they both have the same distance.
                <br />
                <br />
                Adjusting the feet distance and checking the curvature
                ensures that the phone is properly centered on the assembly.
                <br />
                <br />
                Do not push down the feet towards the legs yet.
                <br />
                <br />
                Tighten the screws of the feet just enough that they don't easily move
                along the rails. Vertical movement should still be possible.
            </>
        }
        previousStepPath={Paths.AdjustPlacePhonePath}
        nextStepPath={Paths.AdjustTightenNeckPath}
    />
}