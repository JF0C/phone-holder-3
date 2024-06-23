import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'
import { Tooltip } from '../Tooltip/Tooltip'


export const MountHandlebarV2Ring : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV2Path}
                file='MountHandlebarRing'
                position={new Vector3(0, 30, 0)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(90, 20, 60)}
                lightOrigin={new Vector3(100, 100, 0)}
            />
        }
        text={
            <>
                Combine both <Tooltip tooltipId='mount-ring-halves' reference={<>halves</>}><img height={200} src='/img/mount-ring.png' alt='clamp halves'/></Tooltip> of the ring 
                and wrap it around the handlebar.
                Extend the <Tooltip tooltipId='mount-ring-band' reference={<>band</>}><img alt='band half'/></Tooltip> with the adjustment holes 
                so that a gap of around 1 cm is between the two cheeks.
                A hole in the band should match up with the hole in the &nbsp;
                <Tooltip tooltipId='mount-ring-adapter' reference={<>phone holder adapter part</>}>
                    <img height={200} src='/img/phone-holder-ring-adapter.png' alt='ring adapter'/>
                </Tooltip>.
            </>
        }
        previousStepPath={Paths.MountPath}
        nextStepPath={Paths.MountHandlebarV2HolderPath}
    />
}