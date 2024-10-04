import * as icon from '@coreui/icons';
import CIcon from "@coreui/icons-react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FunctionComponent } from "react";
import { LinkWithSaveState } from "./LinkWithSaveState";
import { MenuGroup } from "./MenuTree";
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setRadioGroup } from '../../store/UiReducer';

export type NavSubMenuProps = {
    data: MenuGroup;
    onClick?: () => void;
    radioGroupId?: string;
}

export const NavSubMenu: FunctionComponent<NavSubMenuProps> = (props) => {
    const color = document.location.pathname.includes(props.data.groupId) ? 'rgba(124, 148, 150, 0.8)' : 'rgb(50,50,50)';
    const dispatch = useAppDispatch();
    const isExpanded = useAppSelector((state) => {
        const item = state.uiState.radioGroups.find(r => r.groupId === props.radioGroupId);
        if (!props.radioGroupId) return undefined;
        if (!item) return false;
        return item.activeItem === props.data.groupId;
    });

    const radioActivation = (e: any) => {
        if (!props.radioGroupId) {
            return;
        }
        const closing = e.currentTarget.className.split(' ').includes('Mui-expanded');
        dispatch(setRadioGroup({ groupId: props.radioGroupId, activeItem: closing ? undefined : props.data.groupId }));
    }

    return <Accordion expanded={isExpanded} onChange={(e: any) => radioActivation(e)} sx={{ bgcolor: 'rgb(50,50,50)', color: 'white' }}>
        <AccordionSummary sx={{ bgcolor: color }} expandIcon={<CIcon style={{color: 'white'}} icon={icon.cilCaretBottom}/>}>
        <div className='flex flex-row justify-center items-center'>
            {
                props.data.path ?
                <LinkWithSaveState disableActive onClick={props.onClick}
                    displayValue={props.data.displayName}
                    path={props.data.path}
                    icon={props.data.icon}
                    className='flex flex-row items-center navbar-accordion-link' /> :
                props.data.icon ?
                <><CIcon icon={props.data.icon} />&nbsp;{props.data.displayName}</> :
                <>{props.data.displayName}</>
            }
        </div>
        </AccordionSummary>
        <AccordionDetails>
            {
                props.data.subGroups?.map(s => <NavSubMenu radioGroupId={props.data.groupId} data={s} onClick={props.onClick} />)
            }
            {
                props.data.items?.map(i => <LinkWithSaveState
                className='flex flex-row navbar-button items-center'
                path={i.location ?? ''}
                displayValue={i.displayName}
                onClick={() => props.onClick?.()}
                />)
            }
        </AccordionDetails>
    </Accordion>
}