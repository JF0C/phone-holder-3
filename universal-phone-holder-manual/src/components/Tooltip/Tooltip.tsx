import CIcon from "@coreui/icons-react";
import {FunctionComponent, ReactElement, useState} from "react";
import * as icons from '@coreui/icons';

type TooltipProps = {
    children: ReactElement;
    text: ReactElement;
    useIcon?: boolean;
}

export const Tooltip: FunctionComponent<TooltipProps> = (props: TooltipProps) => {
    const [show, setShow] = useState(false);
    let icon = <></>;
    if (props.useIcon) {
        icon = <><CIcon icon={icons.cilImagePlus} height={18} />&nbsp;</>;
    }
    return (
        <>
        <div className="tooltip" style={show ? { visibility: "visible" } : {}}>
            {props.children}
        </div>
        <div
            className="tooltip-text"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onTouchEnd={() => setShow(!show)}
        >
            {icon}
            {props.text}
        </div>
        </>
    );
}
