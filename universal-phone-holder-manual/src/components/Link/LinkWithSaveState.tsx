import CIcon from '@coreui/icons-react';
import { FunctionComponent, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../constants/Paths';
import { useAppDispatch } from '../../store/store';
import { setNavTitle } from '../../store/UiReducer';
import { linkTitles } from '../Navbar/MenuTree';

export type LinkWithSaveStateProps = {
    path: string;
    useli?: boolean;
    displayValue?: string;
    icon?: string[];
    iconAtEnd?: boolean;
    className?: string;
    disableActive?: boolean;
    onClick?: () => void;
}

const capitalizeFirst = (str: string) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

const formatNavigationText = (str: string) => str.replace(Paths.HtmlDeployedBasePath, '').split('-').map(s => capitalizeFirst(s)).reduce((a, b) => a + ' ' + b, '')

export const LinkWithSaveState: FunctionComponent<LinkWithSaveStateProps> = (props: LinkWithSaveStateProps) => {
    const dispatch = useAppDispatch();
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
    const onNavigation = () => {
        const navTitle = linkTitles.find(t => t.path === props.path)?.title;
        dispatch(setNavTitle(navTitle ?? ''))
        props.onClick?.();
    }
    const activeClass = (document.location.pathname === props.path && !props.disableActive) ? ' active-link' : ''
    return <NavLink
        className={props.className + activeClass}
        key={props.path}
        to={props.path}
        onClick={onNavigation}
    >
        {content}
    </NavLink>
}