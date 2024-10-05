import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'
import { ImagePopover } from '../Tooltip/ImagePopover'

export const MountCenterHolder : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file='MountCenterHolder'
                position={new Vector3(0, 0, 40)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-70, 50, 0)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                Screw the phone holder 
                <ImagePopover id='phone-holder-base-assembly' text='assembly' imagePath='./img/base-assembly.png' /> 
                onto the ring. Different positions are possible by using any of the holes 
                (including the long hole) of the <ImagePopover id='body' text='Body' imagePath='./img/body.png' />.
            </>
        }
        previousStepPath={Paths.MountCenterRingPath}
        nextStepPath={Paths.MountCenterCompletePath}
    />
}