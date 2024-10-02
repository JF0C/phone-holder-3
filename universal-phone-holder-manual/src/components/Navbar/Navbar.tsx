import { FunctionComponent, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/state';
import { LinkWithSaveState } from '../Link/LinkWithSaveState';
import { Paths } from '../../constants/Paths';
import * as icon from '@coreui/icons';
import CIcon from '@coreui/icons-react';

type LocationAndDisplayName = {
    location: string;
    displayName: string;
    icon?: string[];
}

const getEntries = (location: string): LocationAndDisplayName[] => {
    if (location.includes('assemble')){
        return [
            {
                location: Paths.AssemblePath,
                displayName: 'Assemble'
            }, 
            {
                location: Paths.AssembleInsertFootPath,
                displayName: 'Insert Foot'
            },
            {
                location: Paths.AssembleScrewFootPath,
                displayName: 'Fasten Foot'
            },
            {
                location: Paths.AssembleNeckPath,
                displayName: 'Attach Neck'
            },
            {
                location: Paths.AdjustPath,
                displayName: 'Adjust',
                icon: icon.cilMediaStepForward
            }];
    }
    if (location.includes('adjust')){
        return [
            {
                location: Paths.AssemblePath,
                displayName: 'Assemble',
                icon: icon.cilMediaStepBackward
            },
            {
                location: Paths.AdjustPath,
                displayName: 'Adjust'
            },
            {
                location: Paths.AdjustExtendAllPath,
                displayName: 'Extend All'
            },
            {
                location: Paths.AdjustPlacePhonePath,
                displayName: 'Place Phone'
            },
            {
                location: Paths.AdjustPushFeetInPath,
                displayName: 'Push Feet In'
            },
            {
                location: Paths.AdjustTightenNeckPath,
                displayName: 'Tighten Neck'
            },
            {
                location: Paths.AdjustLowerFeetPath,
                displayName: 'Lower Feet'
            },
            {
                location: Paths.AdjustTestAssemblyPath,
                displayName: 'Test Assembly'
            },
            {
                location: Paths.AccessoriesPath,
                displayName: 'Accessories',
                icon: icon.cilMediaStepForward
            },
            {
                location: Paths.MountPath,
                displayName: 'Mount',
                icon: icon.cilMediaStepForward
            }
        ]
    }
    if (location === Paths.HtmlDeployedBasePath + 'mount'){
        return [
            {
                location: Paths.AdjustPath,
                displayName: 'Adjust',
                icon: icon.cilMediaStepBackward
            },
            {
                location: Paths.MountPath,
                displayName: 'Mount'
            },
            {
                location: Paths.MountHandlebarPath,
                displayName: 'Handlebar'
            },
            {
                location: Paths.MountCenterRingPath,
                displayName: 'Stem'
            },
            {
                location: Paths.MountAeroHolderPath,
                displayName: 'Aero'
            },
            {
                location: Paths.MountHandlebarV2RingPath,
                displayName: 'Handlebar V2'
            },
            {
                location: Paths.MountCenterV2RingPath,
                displayName: 'Stem V2'
            },
            {
                location: Paths.MountAeroV2HolderPath,
                displayName: 'Aero V2'
            }
        ]
    }
    if (location.includes('mount-handlebar-v2')){
        return [
            {
                location: Paths.MountPath,
                displayName: 'Mount',
                icon: icon.cilMediaStepBackward
            },
            {
                location: Paths.MountHandlebarV2RingPath,
                displayName: 'Ring to Handlebar'
            },
            {
                location: Paths.MountHandlebarV2HolderPath,
                displayName: 'Holder to Ring'
            },
            {
                location: Paths.MountHandlebarV2TightenPath,
                displayName: 'Tighten Ring'
            },
            {
                location: Paths.MountHandlebarV2CompletePath,
                displayName: 'Holder Complete'
            },
            {
                location: Paths.MountHandlebarV2PhonePath,
                displayName: 'Phone to Holder'
            }
        ]
    }
    if (location.includes('mount-center-v2')){
        return [
            {
                location: Paths.MountPath,
                displayName: 'Mount',
                icon: icon.cilMediaStepBackward
            },
            {
                location: Paths.MountCenterV2RingPath,
                displayName: 'Ring to Stem'
            },
            {
                location: Paths.MountCenterV2HolderPath,
                displayName: 'Holder to Ring'
            },
            {
                location: Paths.MountCenterV2TightenPath,
                displayName: 'Tighten Ring'
            },
            {
                location: Paths.MountCenterV2CompletePath,
                displayName: 'Holder Complete'
            },
            {
                location: Paths.MountCenterV2PhonePath,
                displayName: 'Phone to Holder'
            }
        ]
    }
    if (location.includes('mount-aero-v2')){
        return [
            {
                location: Paths.MountPath,
                displayName: 'Mount',
                icon: icon.cilMediaStepBackward
            },
            {
                location: Paths.MountAeroV2HolderPath,
                displayName: 'Holder to Aerobar'
            },
            {
                location: Paths.MountAeroV2HandlebarPath,
                displayName: 'Aerobar to Handlebar'
            },
            {
                location: Paths.MountAeroV2CompletePath,
                displayName: 'Holder Complete'
            },
            {
                location: Paths.MountAeroV2PhonePath,
                displayName: 'Phone to Holder'
            }
        ]
    }
    if (location.includes('mount-handlebar')){
        return [
            {
                location: Paths.MountPath,
                displayName: 'Mount',
                icon: icon.cilMediaStepBackward
            },
            {
                location: Paths.MountHandlebarPath,
                displayName: 'Ring to Handlebar'
            },
            {
                location: Paths.MountHandlebarCompletePath,
                displayName: 'Handlebar Complete'
            }
        ]
    }
    if (location.includes('mount-center')){
        return [
            {
                location: Paths.MountPath,
                displayName: 'Mount',
                icon: icon.cilMediaStepBackward
            },
            {
                location: Paths.MountCenterRingPath,
                displayName: 'Ring to Stem'
            },
            {
                location: Paths.MountCenterHolderPath,
                displayName: 'Holder to Stem'
            },
            {
                location: Paths.MountCenterCompletePath,
                displayName: 'Stem Mount Complete'
            }
        ]
    }
    if (location.includes('mount-aero')){
        return [
            {
                location: Paths.MountPath,
                displayName: 'Mount',
                icon: icon.cilMediaStepBackward
            },
            {
                location: Paths.MountAeroHolderPath,
                displayName: 'Holder to Aerobar'
            },
            {
                location: Paths.MountAeroRingPath,
                displayName: 'Ring to Aerobar'
            },
            {
                location: Paths.MountAeroHandlebarPath,
                displayName: 'Aerobar to Handlebar'
            },
            {
                location: Paths.MountAeroCompletePath,
                displayName: 'Aerobar Complete'
            }
        ]
    }
    if (location.includes(Paths.AccessoriesPath)){
        return [
            {
                location: Paths.AccessoriesPath,
                displayName: 'Accessories'
            },
            {
                location: Paths.AccessoryLampMirrorAssemblyPath,
                displayName: 'Lamp Mirror'
            },
            {
                location: Paths.AccessoryVideoMirrorAssemblyPath,
                displayName: 'Video Mirror'
            },
            {
                location: Paths.AccessoryRainShieldSocketPath,
                displayName: 'Rain Shield'
            }
        ]
    }
    if (location.includes('accessory-lamp-mirror')){
        return [
            {
                location: Paths.AccessoriesPath,
                displayName: 'Accessories'
            },
            {
                location: Paths.AccessoryLampMirrorAssemblyPath,
                displayName: 'Mirror Assembly'
            },
            {
                location: Paths.AccessoryLampMirrorCompletePath,
                displayName: 'Mirror Complete'
            },
            {
                location: Paths.AccessoryLampMirrorPhonePath,
                displayName: 'Mirror w/ Phone'
            }
        ]
    }
    if (location.includes('accessory-video-mirror')){
        return [
            {
                location: Paths.AccessoriesPath,
                displayName: 'Accessories'
            },
            {
                location: Paths.AccessoryVideoMirrorAssemblyPath,
                displayName: 'Mirror Assembly'
            },
            {
                location: Paths.AccessoryVideoMirrorCompletePath,
                displayName: 'Mirror Complete'
            },
            {
                location: Paths.AccessoryVideoMirrorPhonePath,
                displayName: 'Mirror w/ Phone'
            }
        ]
    }
    if (location.includes('accessory-rain-shield')) {
        return [
            {
                location: Paths.AccessoriesPath,
                displayName: 'Accessories'
            },
            {
                location: Paths.AccessoryRainShieldSocketPath,
                displayName: 'Socket'
            },
            {
                location: Paths.AccessoryRainShieldElbowPath,
                displayName: 'Shield on Elbow'
            },
            {
                location: Paths.AccessoryRainShieldLidPath,
                displayName: 'Lid to Shield'
            },
            {
                location: Paths.AccessoryRainShieldCompletePath,
                displayName: 'Complete Shield'
            }
        ]
    }
    return [] 
}

export const Navbar: FunctionComponent = () => {
    const [navOpen, navOpenSet] = useState(false);
    const [path, setPath] = useState('initial');

    const currentLocation = useSelector((state: AppState) => state.currentLocation);
    console.log(currentLocation);
    if (currentLocation === '/' ||
        currentLocation === Paths.HtmlDeployedBasePath ||
        currentLocation === '.' + Paths.HtmlDeployedBasePath
    )
    {
        return <></>;
    }
    if (currentLocation !== path){
        setPath(currentLocation);
        navOpenSet(false);
    }

    const navigations = [];
    navigations.push(<LinkWithSaveState path={'.' + Paths.HtmlDeployedBasePath} useli={true} displayValue='Start' icon={icon.cilHome} />);
    for(let entry of getEntries(currentLocation)){
        navigations.push(
            <LinkWithSaveState path={entry.location.toLowerCase()} 
                useli={true} displayValue={entry.displayName} icon={entry.icon}/>);
    }

    return <nav className='nav sidebar' style={{height: navOpen ? '100%' : '35px' }}>
        <div className='nav-toggle' style={ {backgroundColor: navOpen ? 'rgba(124, 148, 150, 0.8)' : ''}}>
            <CIcon icon={icon.cilMenu} height={30} onClick={() => navOpenSet(!navOpen)}></CIcon>
        </div>
        <ul className='nav-list' style={{left: navOpen ? '0px': '-210px' }}>
            {navigations}
        </ul>
    </nav>
}