import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'
import { ImagePopover } from '../Tooltip/ImagePopover'

export const MountCenterComplete : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file='MountCenterComplete'
                position={new Vector3(0, 0, 40)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-150, 80, -30)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                This is how the assembly on the stem should look like now.
                Place the phone in it and check that everything is still stable.
                Remember that if the position is not perfect yet, you can use the different holes in the 
                <ImagePopover id='body' text='Body' imagePath='./img/body.png' /> reposition the assembly.
                Also, you can loosen and reposition the adapter ring on the stem.
            </>
        }
        previousStepPath={Paths.MountCenterHolderPath}
    />
}