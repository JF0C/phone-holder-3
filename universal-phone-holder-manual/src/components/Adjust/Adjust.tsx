import * as icon from '@coreui/icons';
import { FunctionComponent } from 'react';
import { Paths } from '../../constants/Paths';
import { LinkWithSaveState } from '../Navigation/LinkWithSaveState';
import { TextLayout } from '../Layouts/TextLayout';

export const Adjust: FunctionComponent = () => {
    return <TextLayout footerContent={
        <div className='flex flex-row justify-between w-full'>
            <div>
                <LinkWithSaveState
                    className='menu-button in-text'
                    path={Paths.AssemblePath}
                    displayValue='Assemble'
                    icon={icon.cilMediaStepBackward} />
            </div>
            <div>
                <LinkWithSaveState
                    className='menu-button in-text'
                    path={Paths.AdjustExtendAllPath}
                    displayValue='Next'
                    icon={icon.cilChevronRight}
                    iconAtEnd />
            </div>
        </div>
    }>
        In this section, we are going to fit the phone holder to your phone.
        The holder is designed to fit most mobile phones availble while being extremely easy to use.
        This comes at the cost of adjustment to the precise dimensions of any specific device, which is a bit of a tedious procedure.
        So take your time with it and prepare the following tools and assemblies:
        <ul>
            <li>3mm Allen wrench</li>
            <li>Wrench or pliers for M4 nuts</li>
            <li>The preassembled phone holder</li>
        </ul>
    </TextLayout>
}