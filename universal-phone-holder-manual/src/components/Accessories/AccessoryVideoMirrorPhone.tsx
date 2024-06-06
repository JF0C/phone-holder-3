import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'

export const AccessoryVideoMirrorPhone : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file='AccessoryVideoMirrorPhone'
                position={new Vector3(0, 0, 70)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(0, 10, -120)}
                lightOrigin={new Vector3(50, 100, -100)}
            />
        }
        text={
            <>
                Click the phone into the holder and activate its camera.
                Adjust the mirror such that the image reflected by the mirror fills the camera field.
                Finally, screw the video mirror tight.
            </>
        }
        previousStepPath={Paths.AccessoryVideoMirrorCompletePath}
    />
}