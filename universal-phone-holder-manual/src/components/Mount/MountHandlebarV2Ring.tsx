import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'
import { ImagePopover } from '../Tooltip/ImagePopover'

export const MountHandlebarV2Ring : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV2Path}
                file='MountHandlebarRing'
                position={new Vector3(0, 30, 0)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(90, 20, 60)}
                lightOrigin={new Vector3(100, 100, 0)}
            />
        }
        text={
            <>
                Combine both 
                <ImagePopover id='mount-ring-halves' text='halves' imagePath='./img/mount-ring.png' />
                of the ring and wrap it around the handlebar.
                Extend the 
                <ImagePopover id='mount-ring-band' text='band' imagePath='./img/moung-band.png' />
                with the adjustment holes 
                so that a gap of around 1 cm is between the two cheeks.
                A hole in the band should match up with the hole in the
                <ImagePopover id='mount-ring-adapter' text='ring adapter' imagePath='/img/phone-holder-ring-adapter.png' />.
            </>
        }
        previousStepPath={Paths.MountPath}
        nextStepPath={Paths.MountHandlebarV2HolderPath}
    />
}