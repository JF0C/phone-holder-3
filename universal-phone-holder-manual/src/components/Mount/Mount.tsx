import { FunctionComponent } from 'react';
import { TextLayout } from '../Layouts/TextLayout';
import { ImagePopover } from '../Tooltip/ImagePopover';
import { LinkWithSaveState } from '../Navigation/LinkWithSaveState';
import { Paths } from '../../constants/Paths';

export const Mount: FunctionComponent = () => {

    return <TextLayout>
        In this section, we install the phone holder to your bicycle handlebar or any other rod it can be attached to.
        There are several options, depending on, which connectors you have and where you want to place the phone:
        <ul>
            <li>
                The <ImagePopover id='mount-handlebar-v1' text='Handlebar V1' imagePath='./img/mount-handlebar-v1.png' /> mount attaches the phone holder to the handlebar.
                It is explained <LinkWithSaveState path={Paths.MountHandlebarPath} displayValue='here' />.
            </li>
            <li>
                The <ImagePopover id='mount-stem-v1' text='Stem V1' imagePath='./img/mount-stem-v1.png' /> mount attaches the phone holder to the center rod of the handlebar.
                Instructions for it can be found <LinkWithSaveState path={Paths.MountCenterRingPath} displayValue='here' />.
            </li>
            <li>
                The <ImagePopover id='mount-aero-v1' text='Aero V1' imagePath='./img/mount-aero-v1.png' /> mount brings the phone in line with the surface of the handlebar
                and places it in an extension line of the stem rod. This improves aerodynamic properties and increases ergonomics on race bikes.
                Find the instructions for it <LinkWithSaveState path={Paths.MountAeroHolderPath} displayValue='here' />
            </li>
            <li>
                The <ImagePopover id='mount-handlebar-v2' text='Handlebar V2' imagePath='./img/mount-handlebar-v2.png' /> mount uses the 
                <ImagePopover id='ring-adapter-handlebar' text='ring adapter' imagePath='./img/mount-ring.png' /> to attach the holder to the handlebar and
                can be found <LinkWithSaveState path={Paths.MountHandlebarV2RingPath} displayValue='here' />.
            </li>
            <li>
                The <ImagePopover id='mount-stem-v2' text='Stem V2' imagePath='./img/mount-stem-v2.png' /> mount also uses the 
                <ImagePopover id='ring-adapter-handlebar' text='ring adapter' imagePath='./img/mount-ring.png' /> to attach the holder to the stem.
                Details can be found <LinkWithSaveState path={Paths.MountCenterV2RingPath} displayValue='here' />.
            </li>
            <li>
                The <ImagePopover id='mount-aero-v2' text='Aero V2' imagePath='./img/mount-aero-v2.png' /> comes with the same benefits as the Aero V1 version,
                but with increased stability and more flexible mounting options explained <LinkWithSaveState path={Paths.MountAeroV2HolderPath} displayValue='here' />.
            </li>
        </ul>        
    </TextLayout>
}