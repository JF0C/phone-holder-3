import { FunctionComponent, useState } from "react"
import { Link } from 'react-router-dom'
import { Dispatch } from "redux"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentLocation, AppState } from "../../store/state";

const capitalizeFirst = (str: string) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

const formatNavigationText = (str: string) => str.split('-').map(s => capitalizeFirst(s)).reduce((a, b) => a + ' ' + b, '')

const getEntries = (location: string): string[] => {
    switch(location){
        case '/assemble':
            return ['insert-foot', 'screw-foot'];

        default: return []
    }
}

export const Navbar: FunctionComponent = () => {
    const dispatch : Dispatch<any> = useDispatch();
    const currentLocation = useSelector((state: AppState) => state.currentLocation);
    if (currentLocation === '/'){
        return <></>;
    }

    const navigations = [];
    navigations.push(
        <Link to={"/"} onClick={() => dispatch(setCurrentLocation('/'))}>
            <li key="/">
                Start
            </li>
        </Link>);
    for(let entry of getEntries(currentLocation)){
        const path = "/" + entry.toLowerCase();
        navigations.push(
            <Link to={path} onClick={() => dispatch(setCurrentLocation(path))}>
                <li key={path}>
                    {formatNavigationText(entry)}
                </li>   
            </Link>);
    }

    return <nav className="nav sidebar">
        <ul>
            {navigations}
        </ul>
    </nav>
}