import { FunctionComponent } from 'react';
import { Paths } from '../../constants/Paths';
import { LinkWithSaveState } from '../Navigation/LinkWithSaveState';
import { TextLayout } from '../Layouts/TextLayout';

export const Accessories: FunctionComponent = () => {

    return <TextLayout footerContent={<>
        <div className='m-2'>
            <LinkWithSaveState
                className='menu-button in-text'
                path={Paths.AccessoryLampMirrorAssemblyPath}
                displayValue='Lamp Mirror'
            />
        </div>
        <div className='m-2'>
            <LinkWithSaveState
                className='menu-button in-text'
                path={Paths.AccessoryVideoMirrorAssemblyPath}
                displayValue='Video Mirror'
            />
        </div>
        <div className='m-2'>
            <LinkWithSaveState
                className='menu-button in-text'
                path={Paths.AccessoryRainShieldSocketPath}
                displayValue='Rain Shield'
            />
        </div>
    </>}>
        Accessories for the Phone Holder &nbsp;
        Before installing any accessory, dismount the phone holder assembly from any mounting adapter it is attached to.
    </TextLayout>
}