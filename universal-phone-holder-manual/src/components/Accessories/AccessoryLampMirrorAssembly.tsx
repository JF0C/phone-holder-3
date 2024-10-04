import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'
import { ImagePopover } from '../Tooltip/ImagePopover'


export const AccessoryLampMirrorAssembly : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file='AccessoryLightMirrorAssembly'
                position={new Vector3(0, 0, 65)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(10, 60, 0)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                Use a screw to connect the
                <ImagePopover id='accessory-mount-lamp-mirror-mirror' text='mirror' imagePath='./img/lampMirror.png' />
                to the neck of the 
                <ImagePopover id='accessory-mount-lamp-mirror-phoneholder' text='phone holder' imagePath='./img/phoneHolder.png' />
                Insert washers between all parts including the nut.
                Tighten the screw just enough that everything stays in place, but still can be moved for adjustment.
            </>
        }
        previousStepPath={Paths.AccessoriesPath}
        nextStepPath={Paths.AccessoryLampMirrorCompletePath}
    />
}