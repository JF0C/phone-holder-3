import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { StlView } from '../Layouts/StlView'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { Paths } from '../../constants/Paths'
import { Tooltip } from '../Tooltip/Tooltip'

export const AssembleInsertFoot: FunctionComponent = () => {
return <ModelAndTextLayout 
        model={
                <StlView
                    folder={Paths.ModelsV1Path}
                    file='AssemblyFootInsert'
                    position={new Vector3(35, -20, -50)}
                    rotation={new Vector3(-90, 0, 0)}
                    showAxes={false}
                    cameraPosition={new Vector3(-30, 20, -60)}
                    lightOrigin={new Vector3(0, 100, -100)}
                    />
            }
        text={
            <>
                Hold one finger below the foot rails to support the&nbsp;
                <Tooltip tooltipId='assemble-insert-foot-sled' reference={<>carriages</>} useIcon>
                    <img height={200} src='/img/sled.png' alt='sled'/>
                </Tooltip>.
                <br />
                <br />
                Hold them, so that they align with the bottom surface of the body.
                <br />
                <br />
                Then, insert the <Tooltip tooltipId='assemble-insert-foot-foot' reference={<>foot</>} useIcon>
                    <img height={200} src='/img/foot.png' alt='foot' />
                </Tooltip> into the v-shaped opening, formed by the carriages.
                <br />
                <br />
                Once the foot is halfway in, push onto the carriages,
                <br />
                so that they fall into place in the rails.
                <br />
                <br />
                Repeat this for the second foot.
            </>
        }
        previousStepPath={Paths.AssemblePath}
        nextStepPath={Paths.AssembleScrewFootPath}
    />
}