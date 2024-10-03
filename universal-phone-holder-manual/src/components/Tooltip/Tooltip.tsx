import * as icons from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { flip, offset, useFloating } from "@floating-ui/react";
import { FunctionComponent, ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { closePopup, openPopup } from "../../store/UiReducer";

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
    const isOpen = useAppSelector((state) => state.uiState.currentOpenPopup) === props.tooltipId;
    const dispatch = useAppDispatch();
    if (isOpen){
        tooltip = <div ref={refs.setFloating} className='tooltip-content' style={floatingStyles}>{props.children}</div>;
    }

    let icon = <></>;
    if (props.useIcon) {
        icon = <span className='icon-arrange'><CIcon icon={icons.cilImagePlus} />&nbsp;</span>;
    }
    return <>
        <div className='tooltip-text' ref={refs.setReference} onClick={() => {dispatch(isOpen ? dispatch(closePopup()) : openPopup(props.tooltipId))}}>
            { icon }
            { props.reference }
        </div>
        { tooltip }
    </>
}
