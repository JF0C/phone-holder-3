import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'
import { Tooltip } from '../Tooltip/Tooltip'

export const MountHandlebarV2Holder : FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
            <StlView
                folder={Paths.ModelsV2Path}
                file='MountHandlebarHolder'
                position={new Vector3(0, 0, 0)}
                rotation={new Vector3(-90, 0, 0)}
                showAxes={false}
                cameraPosition={new Vector3(-90, 0, 0)}
                lightOrigin={new Vector3(-100, 100, 0)}
            />
        }
        text={
            <>
                Put the centering pin onto the <Tooltip tooltipId='mount-handlebar-v2-ring' reference={<>ring</>}>
                    <img height={200} src='/img/mount-ring.png' alt='ring'/>
                </Tooltip>.
                Lay the <Tooltip tooltipId='mount-handlebar-v2-holder' reference={<>phone holder assembly</>}>
                    <img height={200} src='/img/phoneholder-base-assembly.png' alt='phoneholder' />
                </Tooltip> onto the ring such that the pin fits into the notch of the holder.
                If the screw does not fall into the threading right away, wiggle the holed band until it does.
            </>
        }
        previousStepPath={Paths.MountHandlebarV2RingPath}
        nextStepPath={Paths.MountHandlebarV2TightenPath}
    />
}