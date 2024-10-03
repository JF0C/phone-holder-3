import CIcon from '@coreui/icons-react';
import { FunctionComponent, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
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
    var content: ReactNode|string = formatNavigationText(props.path);
    if (props.displayValue){
        content = props.displayValue;
    }
    if (props.icon){
        if (props.iconAtEnd !== undefined && props.iconAtEnd !== null && props.iconAtEnd === true){
            content = <>{content}<CIcon icon={props.icon} style={{marginLeft: '5px'}}/></>
        }
        else{
            content = <><CIcon icon={props.icon} style={{marginRight: '5px'}}/>{content}</>
        }
    }
    if (props.useli){
        content = <li key={'li/' + props.path}>{content}</li>;
    }
    return <NavLink
        className={props.className}
        key={props.path}
        to={props.path}
    >
        {content}
    </NavLink>
}