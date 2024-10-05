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
                The <ImagePopover id='mount-handlebar-ring' text='handlebar rings' imagePath='./img/mount-ring-v1.png' /> come in different sizes.
                Select on that fits onto your handlebar and snap it on. 
                Next, lower the <ImagePopover id='mount-handlebar-phoneholder' text='phone holder assembly' imagePath='./img/base-assembly.png'/> 
                onto the ring and screw it on.
            </>
        }
        previousStepPath={Paths.MountPath}
        nextStepPath={Paths.MountHandlebarCompletePath}
    />
}