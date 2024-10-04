import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'
import { ImagePopover } from '../Tooltip/ImagePopover'

export const MountHandlebar : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file='MountBarHolder'
                position={new Vector3(0, 0, 40)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-70, 50, 0)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                Attach the <ImagePopover id='mount-handlebar-ring' text='ring' imagePath='./img/mountRing.png' /> to the handlebar.
                It will snap onto it. Lower the <ImagePopover id='mount-handlebar-phoneholder' text='phone holder assembly' imagePath='./img/phohneHolder.png'/> 
                onto the ring and screw it on.
            </>
        }
        previousStepPath={Paths.MountPath}
        nextStepPath={Paths.MountHandlebarCompletePath}
    />
}