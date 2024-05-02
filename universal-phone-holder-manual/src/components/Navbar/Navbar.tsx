import { FunctionComponent } from "react"
import { useSelector } from "react-redux"
import { AppState } from "../../store/state";
import { LinkWithSaveState } from "../Link/LinkWithSaveState";
import { Constants } from "../../constants/Constants";

type LocationAndDisplayName = {
    location: string;
    displayName: string;
}

const getEntries = (location: string): LocationAndDisplayName[] => {
    if (location.includes('assemble')){
        return [
            {
                location: Constants.AssemblePath,
                displayName: '<i class="cil-home"></i> Assemble'
            }, 
            {
                location: Constants.AssembleInsertFootPath,
                displayName: 'Insert Foot'
            },
            {
                location: Constants.AssembleScrewFootPath,
                displayName: 'Screw Foot'
            },
            {
                location: Constants.AssembleNeckPath,
                displayName: 'Attach Neck'
            },
            {
                location: Constants.AdjustPath,
                displayName: 'Adjust'
            }];
    }
    return [] 
}

export const Navbar: FunctionComponent = () => {
    const currentLocation = useSelector((state: AppState) => state.currentLocation);
    if (currentLocation === '/'){
        return <></>;
    }

    const navigations = [];
    navigations.push(<LinkWithSaveState path={''} useli={true} displayValue="Start" />);
    for(let entry of getEntries(currentLocation)){
        navigations.push(<LinkWithSaveState path={entry.location.toLowerCase()} useli={true} displayValue={entry.displayName} />);
    }

    return <nav className="nav sidebar">
        <ul>
            {navigations}
        </ul>
    </nav>
}