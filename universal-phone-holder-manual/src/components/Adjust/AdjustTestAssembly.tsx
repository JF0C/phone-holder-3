import { FunctionComponent } from 'react'
import { Vector3 } from 'three'
import { Paths } from '../../constants/Paths'
import { ModelAndTextLayout } from '../Layouts/ModelAndTextLayout'
import { StlView } from '../Layouts/StlView'
import { LinkWithSaveState } from '../Navigation/LinkWithSaveState'
import { ImagePopover } from '../Tooltip/ImagePopover'

export const AdjustTestAssembly: FunctionComponent = () => {
    return <ModelAndTextLayout 
        model={
                <StlView
                    folder={Paths.ModelsV1Path}
                    file='AdjustLowerFeet'
                    position={new Vector3(0, 0, 0)}
                    rotation={new Vector3(0, 0, 0)}
                    showAxes={false}
                    cameraPosition={new Vector3(0, 0, -150)}
                    lightOrigin={new Vector3(0, -100, -100)}
                />
            }
        text={
            <>
                Turn the <ImagePopover id='base-assembly' text='Assembly' imagePath='./img/base-assembly.png' /> with and without the phone in it around and visually check that everything is in place.
                Check that all screw connections are secured with glue.
                Ensure that all screws are properly tightened.
                <br />
                <br />
                Grab the assembly at the middle beam with the phone inserted and hold it over a soft surface, like a sofa or bed.
                Shake it strongly to see if the phone falls out.
                <br />
                <br />
                If it does, check all screw connections again and pull the feet and neck closer inwards.
                If it holds, continue with <LinkWithSaveState path={Paths.MountPath} displayValue='Mounting' /> the phone holder.
                <br />
                <br />
                If you have an accessory for the phone holder, go over to <LinkWithSaveState path={Paths.AccessoriesPath} displayValue='Accessories' />.
            </>
        }
        previousStepPath={Paths.AdjustLowerFeetPath}
    />
}