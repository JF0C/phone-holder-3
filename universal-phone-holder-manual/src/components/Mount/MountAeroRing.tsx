import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'

export const MountAeroRing : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file='MountAeroRingToBar'
                position={new Vector3(0, 0, -100)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-90, -30, 20)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                tset
            </>
        }
        previousStepPath={Paths.MountAeroHolderPath}
        nextStepPath={Paths.MountAeroHandlebarPath}
    />
}