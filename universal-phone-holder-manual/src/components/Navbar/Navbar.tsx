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

        ]
    }
    return [] 
}

export const Navbar: FunctionComponent = () => {
    const [navOpen, navOpenSet] = useState(false);
    const [path, setPath] = useState('/');

    const currentLocation = useSelector((state: AppState) => state.currentLocation);
    if (currentLocation === '/'){
        return <></>;
    }
    if (currentLocation != path){
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

    return <nav className="nav sidebar" style={{}}>
        <div className="nav-toggle">
            <CIcon icon={icon.cilMenu} height={30} onClick={() => navOpenSet(!navOpen)}></CIcon>
        </div>
        <ul className="nav-list" style={{left: navOpen ? '0px': '-210px'}}>
            {navigations}
        </ul>
    </nav>
}