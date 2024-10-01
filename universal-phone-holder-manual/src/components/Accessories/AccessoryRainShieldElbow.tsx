import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'


export const AccessoryRainShieldElbow : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV2Path}
                file='AccessoryRainShieldElbow'
                position={new Vector3(0, 0, 45)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(120, 100, -40)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                Screw the Rain Shield onto the L-shaped elbow piece.
            </>
        }
        previousStepPath={Paths.AccessoryRainShieldSocketPath}
        nextStepPath={Paths.AccessoryRainShieldLidPath}
    />
}