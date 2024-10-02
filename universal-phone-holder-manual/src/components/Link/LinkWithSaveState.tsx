import { Dispatch } from '@reduxjs/toolkit';
import { FunctionComponent, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppState, setCurrentLocation } from '../../store/state';
import CIcon from '@coreui/icons-react';
import React from 'react';
import { Paths } from '../../constants/Paths';

export type LinkWithSaveStateProps = {
    path: string;
    useli?: boolean;
    displayValue?: string;
    selected?: boolean;
    icon?: string[];
    iconAtEnd?: boolean;
    className?: string;
}

const capitalizeFirst = (str: string) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

const formatNavigationText = (str: string) => str.replace(Paths.HtmlDeployedBasePath, '').split('-').map(s => capitalizeFirst(s)).reduce((a, b) => a + ' ' + b, '')

export const LinkWithSaveState: FunctionComponent<LinkWithSaveStateProps> = (props: LinkWithSaveStateProps) => {
    const currentLocation = useSelector((state: AppState) => state.currentLocation);
    var content: ReactNode|string = formatNavigationText(props.path);
    const itemKey = '/' + props.path;
    if (props.displayValue !== undefined && props.displayValue.length > 0){
        content = props.displayValue;
    }
    if (props.icon !== undefined && props.icon !== null && props.icon.length > 0){
        if (props.iconAtEnd !== undefined && props.iconAtEnd !== null && props.iconAtEnd === true){
            content = <>{content}<CIcon icon={props.icon} style={{marginLeft: '5px'}}/></>
        }
        else{
            content = <><CIcon icon={props.icon} style={{marginRight: '5px'}}/>{content}</>
        }
    }
    if (props.useli !== undefined && props.useli){
        const activeClass = currentLocation === '/' + props.path ? 'active' : ''
        content = <li className={activeClass} key={itemKey}>{content}</li>;
    }
    const dispatch : Dispatch<any> = useDispatch();
    return <NavLink
        className={props.className}
        key={itemKey}
        to={'' + props.path} 
        onClick={() => dispatch(setCurrentLocation(props.path))}
    >
        {content}
    </NavLink>
}