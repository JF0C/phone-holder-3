import { FunctionComponent } from 'react';
import { Paths } from '../../constants/Paths';
import { LinkWithSaveState } from '../Link/LinkWithSaveState';
import * as icon from '@coreui/icons';
import { Tooltip } from '../Tooltip/Tooltip';
import { TextLayout } from '../Layouts/TextLayout';

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
                <Tooltip reference={<>2 phone holder feet</>} tooltipId='assemble-feet-li' useIcon>
                    <img height={200} src='/img/foot.png' alt='foot part' />
                </Tooltip>
                &nbsp;[i]
            </li>
            <li>
                <Tooltip reference={<>4 foot carriage</>} tooltipId='assemble-sled-li' useIcon>
                    <img height={200} src='/img/sled.png' alt='sled part'/>
                </Tooltip>
                &nbsp;[i]
            </li>
            <li>
                <Tooltip reference={<>The phone holder body</>} tooltipId='assemble-body-li' useIcon>
                    <img height={200} src='/img/body.png' alt='phone holder body part' />
                </Tooltip>&nbsp;[i]
            </li>
            <li>
                <Tooltip reference={<>The phone holder neck</>} tooltipId='assemble-neck-li' useIcon>
                    <img height={200} src='/img/neck.png' alt='neck part' />
                </Tooltip>
                &nbsp;[i]
            </li>
        </ul>
        [i] = included in phone holder set. <br />
    </TextLayout>
}