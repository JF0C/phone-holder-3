import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'

export const MountHandlebarV2Complete : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV2Path}
                file='MountHandlebarComplete'
                position={new Vector3(0, 0, 10)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-120, 70, 0)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                By tightening or untightening the screw, the assembly can be turned around the handlebar more or less easily.
                This allows to turn the phone to point in the direction of travel to film or take photos during the ride.
            </>
        }
        previousStepPath={Paths.MountHandlebarV2TightenPath}
        nextStepPath={Paths.MountHandlebarV2PhonePath}
    />
}