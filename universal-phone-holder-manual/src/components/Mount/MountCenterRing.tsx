import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'
import { ImagePopover } from '../Tooltip/ImagePopover'

export const MountCenterRing : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file='MountCenterRing'
                position={new Vector3(0, 0, 40)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-70, 50, 0)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                Snap the <ImagePopover id='mount-center-ring-adapter' text='mount adapter' imagePath='./img/mountAdapter.png'/>
                onto the stem.
                Rotate it so that the phone holder adapter part points upwards.
                Screw the ring tight using a washer.
            </>
        }
        previousStepPath={Paths.MountPath}
        nextStepPath={Paths.MountCenterHolderPath}
    />
}