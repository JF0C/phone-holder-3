import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'
import { ImagePopover } from '../Tooltip/ImagePopover'

export const AccessoryVideoMirrorAssembly : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file='AccessoryVideoMirrorAssembly'
                position={new Vector3(0, 0, -70)}
                rotation={new Vector3(-90, 0, 180)}
                showAxes={false}
                cameraPosition={new Vector3(0, -80, 0)}
                lightOrigin={new Vector3(-100, -200, 0)}
            />
        }
        text={
            <>
                Use a screw to connect the
                <ImagePopover id='accessory-mount-video-mirror-mirror' text='mirror' imagePath='./img/videoMirror.png'/>
                to the neck of the 
                <ImagePopover id='accessory-mount-video-mirror-phoneholder' text='phone holder' imagePath='./img/phoneHolder.png' />
                Insert washers between all parts including the nut.
                Tighten the screw just enough that everything stays in place, but still can be moved for adjustment.
            </>
        }
        previousStepPath={Paths.AccessoriesPath}
        nextStepPath={Paths.AccessoryVideoMirrorCompletePath}
    />
}