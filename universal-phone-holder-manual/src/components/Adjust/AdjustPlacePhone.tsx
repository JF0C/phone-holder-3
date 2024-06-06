import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'

export const AdjustPlacePhone: FunctionComponent = () => {
    return <ModelAndTextLayout
        model={
            <StlView
                folder={Paths.ModelsV1Path}
                file='AdjustPlacePhone'
                position={new Vector3(0, 0, 15)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-120, 150, 0)}
                lightOrigin={new Vector3(0, 100, 0)}
            />
        }
        text={
            <>
                Put the assembly onto a flat surface and place your phone on top of it.
                It is highly recommended to use a phone case with this assembly.
                This increases the stability and reduces the risk of the phone falling out 
                or being scratched by the holder assembly.
            </>
        }
        previousStepPath={Paths.AdjustExtendAllPath}
        nextStepPath={Paths.AdjustPushFeetInPath}
    />
}