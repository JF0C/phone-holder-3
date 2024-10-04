import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'
import { ImagePopover } from '../Tooltip/ImagePopover'

export const MountHandlebarV2Holder : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV2Path}
                file='MountHandlebarHolder'
                position={new Vector3(0, 0, 0)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-90, 0, 0)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                Put the centering pin onto the
                <ImagePopover id='mount-handlebar-v2-ring' text='ring' imagePath='./img/mountRing.png' />.
                Lay the 
                <ImagePopover id='mount-handlebar-v2-holder' text='phone holder assembly' imagePath='./img/phoneHolder.png' />
                onto the ring such that the pin fits into the notch of the holder.
                If the screw does not fall into the threading right away, wiggle the holed band until it does.
            </>
        }
        previousStepPath={Paths.MountHandlebarV2RingPath}
        nextStepPath={Paths.MountHandlebarV2TightenPath}
    />
}