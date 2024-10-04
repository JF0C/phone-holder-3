import * as icon from '@coreui/icons';
import { FunctionComponent } from 'react';
import { Paths } from '../../constants/Paths';
import { TextLayout } from '../Layouts/TextLayout';
import { LinkWithSaveState } from '../Navigation/LinkWithSaveState';
import { ImagePopover } from '../Tooltip/ImagePopover';

export const Assemble: FunctionComponent = () => {
    return <TextLayout footerContent={
        <LinkWithSaveState
            className='menu-button in-text'
            path={Paths.AssembleInsertFootPath}
            displayValue='Next Step'
            icon={icon.cilChevronRight}
            iconAtEnd/>}>
        Here, we will walk through the assembly of phone holder from its constituent parts. <br />
        Usually, your phone holder arrives pre-assembled. In this case, you can skip over to <LinkWithSaveState path={Paths.AdjustPath} />. <br />
        If you want to make changes your phone holder or it is for some reason not assembled already, check if you have all the follwing parts and tools:
        <ul>
            <li>3mm Allen wrench</li>
            <li>Wrench or pliers for M4 nuts</li>
            <li>5 M4 washers [i]</li>
            <li>2 M4 screws of around 18mm shaft length [i]</li>
            <li>1 M4 screw of around 10mm shaft length [i]</li>
            <li>
                2 x phone holder <ImagePopover id='feet-popover' text='Foot' imagePath='./img/neck.png' />[i]
            </li>
            <li>
                4 x <ImagePopover id='carriage' text='Foot Carriage' imagePath='./img/sled.png' />[i]
            </li>
            <li>
                The phone holder <ImagePopover id='body' text='Body' imagePath='./img/body.png' />[i]
            </li>
            <li>
                The phone holder <ImagePopover id='neck-popover' text='Neck' imagePath='./img/neck.png'/>[i]
            </li>
            <li>
            </li>
        </ul>
        [i] = included in phone holder set. <br />
    </TextLayout>
}