import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'

export const AccessoryLampMirrorComplete : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file='AccessoryLightMirrorComplete' 
                position={new Vector3(0, 0, 70)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(40, 40, -50)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                This is how the assembly with lamp mirror should look like now.
            </>
        }
        previousStepPath={Paths.AccessoryLampMirrorAssemblyPath}
        nextStepPath={Paths.AccessoryLampMirrorPhonePath}
    />
}