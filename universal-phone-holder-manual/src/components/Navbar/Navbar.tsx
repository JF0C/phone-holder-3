import * as icon from '@coreui/icons';
import { Box, SwipeableDrawer } from '@mui/material';
import { FunctionComponent } from 'react';
import { Paths } from '../../constants/Paths';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setNavbar } from '../../store/UiReducer';
import { LinkWithSaveState } from '../Link/LinkWithSaveState';
import { menuTree } from './MenuTree';
import { NavSubMenu } from './NavSubmenu';

export const Navbar: FunctionComponent = () => {
    const showNavbar = useAppSelector(state => state.uiState.showNavbar)
    const dispatch = useAppDispatch();

    const navigations = [];
    navigations.push(<LinkWithSaveState 
        className='flex flex-row navbar-button items-center'
        path={Paths.HtmlDeployedBasePath.substring(0, Paths.HtmlDeployedBasePath.length - 1)}
        displayValue='Start'
        icon={icon.cilHome} 
        onClick={() => toggleDrawer(false)}
        />);
    for (let node of menuTree) {
        navigations.push(<NavSubMenu
            radioGroupId={'toplevel'}
            data={node}
            onClick={() => toggleDrawer(false)}
        />);
    }
    const toggleDrawer = (open: boolean) => {
        dispatch(setNavbar(open));
    };


    return <SwipeableDrawer
        anchor='left'
        open={showNavbar}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
    >
        <Box sx={{ width: 250, height: '100%', bgcolor: 'rgb(50,50,50)' }}>
            <div className="app-bar-space"></div>
            <ul className='nav-list'>
                {navigations}
            </ul>
        </Box>
    </SwipeableDrawer>
}