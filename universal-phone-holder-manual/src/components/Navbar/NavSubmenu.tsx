import * as icon from '@coreui/icons';
import CIcon from "@coreui/icons-react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FunctionComponent } from "react";
import { LinkWithSaveState } from "../Link/LinkWithSaveState";
import { MenuGroup } from "./ManuTree";

export type NavSubMenuProps = {
    data: MenuGroup
    onClick?: () => void
}

export const NavSubMenu: FunctionComponent<NavSubMenuProps> = (props) => {
    return <Accordion sx={{ bgcolor: 'rgb(50,50,50)', color: 'white' }}>
        <AccordionSummary expandIcon={<CIcon style={{color: 'white'}} icon={icon.cilChevronBottom}/>}>
            {props.data.displayName}
        </AccordionSummary>
        <AccordionDetails>
            {
                props.data.subGroups?.map(s => <NavSubMenu data={s} onClick={props.onClick} />)
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