import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'

export const MountAeroV2Handlebar : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV2Path}
                file='MountAeroHandlebar'
                position={new Vector3(0, 0, -100)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-120, -50, -20)}
                lightOrigin={new Vector3(-100, -100, 0)}
            />
        }
        text={
            <>
            
            </>
        }
        previousStepPath={Paths.MountPath}
        nextStepPath={Paths.MountAeroV2HandlebarPath}
    />
}