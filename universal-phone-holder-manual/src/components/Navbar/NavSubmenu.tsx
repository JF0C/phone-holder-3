import { FunctionComponent } from "react";
import { MenuGroup } from "./ManuTree";
import { Accordion, AccordionSummary } from "@mui/material";
import CIcon from "@coreui/icons-react";
import * as icon from '@coreui/icons';

export type NavSubMenuProps = {
    data: MenuGroup
}

export const NavSubMenu: FunctionComponent<NavSubMenuProps> = (props) => {
    return <Accordion>
        <AccordionSummary expandIcon={<CIcon icon={icon.cilChevronBottom}/>}>
            {props.data.displayName}
        </AccordionSummary>
    </Accordion>
}