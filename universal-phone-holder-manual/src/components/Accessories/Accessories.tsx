import { FunctionComponent } from 'react';
import { Paths } from '../../constants/Paths';
import { LinkWithSaveState } from '../Link/LinkWithSaveState';

export const Accessories: FunctionComponent = () => {

    return <div className='text-container'>
        <br />
        <br />
        Accessories for the Phone Holder &nbsp;
        <LinkWithSaveState path={Paths.AccessoryLampMirrorAssemblyPath} displayValue='Lamp Mirror' />
        Before installing any accessory, dismount the phone holder assembly from any mounting adapter it is attached to.
    </div>
}