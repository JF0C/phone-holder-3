import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'

export const AccessoryRainShieldComplete : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV2Path}
                file='AccessoryRainShieldComplete' 
                position={new Vector3(0, 0, 70)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(90, 70, -90)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                Attach the Rain Shield assembly to the socket on the body.
            </>
        }
        previousStepPath={Paths.AccessoryRainShieldLidPath}
    />
}