import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'


export const AccessoryRainShieldLid : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV2Path}
                file='AccessoryRainShieldLid'
                position={new Vector3(0, 0, 65)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-70, 70, -70)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                Insert the Rain Shield into the lid piece. This will hold off any rain coming from ahead.
            </>
        }
        previousStepPath={Paths.AccessoryRainShieldElbowPath}
        nextStepPath={Paths.AccessoryRainShieldCompletePath}
    />
}