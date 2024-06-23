import { useFloating, offset, flip } from "@floating-ui/react";
import { FunctionComponent, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState, closePopups, openPopup } from "../../store/state";
import { Dispatch } from "@reduxjs/toolkit";
import CIcon from '@coreui/icons-react';
import * as icons from '@coreui/icons';

export type TooltipProps = {
    tooltipId: string,
    reference: ReactElement,
    children: ReactElement,
    useIcon?: boolean
}

export const Tooltip: FunctionComponent<TooltipProps> = (props: TooltipProps) => {
    const {refs, floatingStyles} = useFloating({
        placement: 'top-start',
        strategy: 'fixed',
        middleware: [
            offset(10),
            flip()
        ]
    });
    let tooltip = <></>;
    const isOpen = useSelector((state: AppState) => state.currentOpenPopup) === props.tooltipId;
    if (isOpen){
        tooltip = <div ref={refs.setFloating} className='tooltip-content' style={floatingStyles}>{props.children}</div>;
    }
    const dispatch : Dispatch<any> = useDispatch();

    let icon = <></>;
    if (props.useIcon) {
        icon = <span className='icon-arrange'><CIcon icon={icons.cilImagePlus} />&nbsp;</span>;
    }
    return <>
        <div className='tooltip-text' ref={refs.setReference} onClick={() => {dispatch(isOpen ? closePopups() : openPopup(props.tooltipId))}}>
            { icon }
            { props.reference }
        </div>
        { tooltip }
    </>
}
