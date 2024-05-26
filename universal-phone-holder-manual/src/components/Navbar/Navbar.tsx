import { FunctionComponent, useState } from "react"
import { useSelector } from "react-redux"
import { AppState } from "../../store/state";
import { LinkWithSaveState } from "../Link/LinkWithSaveState";
import { Constants } from "../../constants/Constants";
import * as icon from '@coreui/icons';
import CIcon from "@coreui/icons-react";

type LocationAndDisplayName = {
    location: string;
    displayName: string;
    icon?: string[];
}

const getEntries = (location: string): LocationAndDisplayName[] => {
    if (location.includes('assemble')){
        return [
            {
                location: Constants.AssemblePath,
                displayName: 'Assemble'
            }, 
            {
                location: Constants.AssembleInsertFootPath,
                displayName: 'Insert Foot'
            },
            {
                location: Constants.AssembleScrewFootPath,
                displayName: 'Fasten Foot'
            },
            {
                location: Constants.AssembleNeckPath,
                displayName: 'Attach Neck'
            },
            {
                location: Constants.AdjustPath,
                displayName: 'Adjust',
                icon: icon.cilMediaStepForward
            }];
    }
    if (location.includes('adjust')){
        return [
            {
                location: Constants.AssemblePath,
                displayName: 'Assemble',
                icon: icon.cilMediaStepBackward
            },
            {
                location: Constants.AdjustPath,
                displayName: 'Adjust'
            },
            {
                location: Constants.AdjustExtendAllPath,
                displayName: 'Extend All'
            },
            {
                location: Constants.AdjustPlacePhonePath,
                displayName: 'Place Phone'
            },
            {
                location: Constants.AdjustPushFeetInPath,
                displayName: 'Push Feet In'
            },
            {
                location: Constants.AdjustTightenNeckPath,
                displayName: 'Tighten Neck'
            },
            {
                location: Constants.AdjustLowerFeetPath,
                displayName: 'Lower Feet'
            },
            {
                location: Constants.AdjustTestAssemblyPath,
                displayName: 'Test Assembly'
            },
            {
                location: Constants.MountPath,
                displayName: 'Mount',
                icon: icon.cilMediaStepForward
            }
        ]
    }
    if (location === '/mount'){
        return [
            {
                location: Constants.AdjustPath,
                displayName: 'Adjust',
                icon: icon.cilMediaStepBackward
            },
            {
                location: Constants.MountPath,
                displayName: 'Mount'
            },
            {
                location: Constants.MountHandlebarPath,
                displayName: 'Handlebar'
            },
            {
                location: Constants.MountCenterRingPath,
                displayName: 'Stem'
            },
            {
                location: Constants.MountAeroHolderPath,
                displayName: 'Aero'
            },
            {
                location: Constants.MountHandlebarV2RingPath,
                displayName: 'Handlebar V2'
            },
            {
                location: Constants.MountCenterV2RingPath,
                displayName: 'Stem V2'
            },
            {
                location: Constants.MountAeroV2HolderPath,
                displayName: 'Aero V2'
            }
        ]
    }
    if (location.includes('mount-handlebar-v2')){
        return [
            {
                location: Constants.MountPath,
                displayName: 'Mount',
                icon: icon.cilMediaStepBackward
            },
            {
                location: Constants.MountHandlebarV2RingPath,
                displayName: 'Ring to Handlebar'
            },
            {
                location: Constants.MountHandlebarV2HolderPath,
                displayName: 'Holder to Ring'
            },
            {
                location: Constants.MountHandlebarV2TightenPath,
                displayName: 'Tighten Ring'
            },
            {
                location: Constants.MountHandlebarV2CompletePath,
                displayName: 'Holder Complete'
            },
            {
                location: Constants.MountHandlebarV2PhonePath,
                displayName: 'Phone to Holder'
            }
        ]
    }
    if (location.includes('mount-center-v2')){
        return [
            {
                location: Constants.MountPath,
                displayName: 'Mount',
                icon: icon.cilMediaStepBackward
            },
            {
                location: Constants.MountCenterV2RingPath,
                displayName: 'Ring to Stem'
            },
            {
                location: Constants.MountCenterV2HolderPath,
                displayName: 'Holder to Ring'
            },
            {
                location: Constants.MountCenterV2TightenPath,
                displayName: 'Tighten Ring'
            },
            {
                location: Constants.MountCenterV2CompletePath,
                displayName: 'Holder Complete'
            },
            {
                location: Constants.MountCenterV2PhonePath,
                displayName: 'Phone to Holder'
            }
        ]
    }
    if (location.includes('mount-aero-v2')){
        return [
            {
                location: Constants.MountPath,
                displayName: 'Mount',
                icon: icon.cilMediaStepBackward
            },
            {
                location: Constants.MountAeroV2HolderPath,
                displayName: 'Holder to Aerobar'
            },
            {
                location: Constants.MountAeroV2HandlebarPath,
                displayName: 'Aerobar to Handlebar'
            },
            {
                location: Constants.MountAeroV2CompletePath,
                displayName: 'Holder Complete'
            },
            {
                location: Constants.MountAeroV2PhonePath,
                displayName: 'Phone to Holder'
            }
        ]
    }
    if (location.includes('mount-handlebar')){
        return [
            {
                location: Constants.MountPath,
                displayName: 'Mount',
                icon: icon.cilMediaStepBackward
            },
            {
                location: Constants.MountHandlebarPath,
                displayName: 'Ring to Handlebar'
            },
            {
                location: Constants.MountHandlebarCompletePath,
                displayName: 'Handlebar Complete'
            }
        ]
    }
    if (location.includes('mount-center')){
        return [
            {
                location: Constants.MountPath,
                displayName: 'Mount',
                icon: icon.cilMediaStepBackward
            },
            {
                location: Constants.MountCenterRingPath,
                displayName: 'Ring to Stem'
            },
            {
                location: Constants.MountCenterHolderPath,
                displayName: 'Holder to Stem'
            },
            {
                location: Constants.MountCenterCompletePath,
                displayName: 'Stem Mount Complete'
            }
        ]
    }
    if (location.includes('mount-aero')){
        return [
            {
                location: Constants.MountPath,
                displayName: 'Mount',
                icon: icon.cilMediaStepBackward
            },
            {
                location: Constants.MountAeroHolderPath,
                displayName: 'Holder to Aerobar'
            },
            {
                location: Constants.MountAeroRingPath,
                displayName: 'Ring to Aerobar'
            },
            {
                location: Constants.MountAeroHandlebarPath,
                displayName: 'Aerobar to Handlebar'
            },
            {
                location: Constants.MountAeroCompletePath,
                displayName: 'Aerobar Complete'
            }
        ]
    }
    if (location.includes(Constants.AccessoriesPath)){
        return [
            {
                location: Constants.AccessoriesPath,
                displayName: 'Accessories'
            },
            {
                location: Constants.AccessoryLampMirrorAssemblyPath,
                displayName: 'Lamp Mirror'
            }
        ]
    }
    if (location.includes('accessory-lamp-mirror')){
        return [
            {
                location: Constants.AccessoriesPath,
                displayName: 'Accessories'
            },
            {
                location: Constants.AccessoryLampMirrorAssemblyPath,
                displayName: 'Mirror Assembly'
            },
            {
                location: Constants.AccessoryLampMirrorCompletePath,
                displayName: 'Mirror Complete'
            },
            {
                location: Constants.AccessoryLampMirrorPhonePath,
                displayName: 'Mirror w/ Phone'
            }
        ]
    }
    return [] 
}

export const Navbar: FunctionComponent = () => {
    const [navOpen, navOpenSet] = useState(false);
    const [path, setPath] = useState('initial');

    const currentLocation = useSelector((state: AppState) => state.currentLocation);
    if (currentLocation === '/' ||
        currentLocation.includes(Constants.HtmlIndexFilePath) ||
        currentLocation.includes(Constants.HtmlPhoneholderFilePath))
    {
        return <></>;
    }
    if (currentLocation !== path){
        setPath(currentLocation);
        navOpenSet(false);
    }

    const navigations = [];
    navigations.push(<LinkWithSaveState path={''} useli={true} displayValue="Start" icon={icon.cilHome} />);
    for(let entry of getEntries(currentLocation)){
        navigations.push(
            <LinkWithSaveState path={entry.location.toLowerCase()} 
                useli={true} displayValue={entry.displayName} icon={entry.icon}/>);
    }

    return <nav className="nav sidebar" style={{height: navOpen ? '100%' : '35px' }}>
        <div className="nav-toggle" style={ {backgroundColor: navOpen ? 'rgba(124, 148, 150, 0.8)' : ''}}>
            <CIcon icon={icon.cilMenu} height={30} onClick={() => navOpenSet(!navOpen)}></CIcon>
        </div>
        <ul className="nav-list" style={{left: navOpen ? '0px': '-210px' }}>
            {navigations}
        </ul>
    </nav>
}