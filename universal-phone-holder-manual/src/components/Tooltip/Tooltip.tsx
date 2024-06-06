import CIcon from '@coreui/icons-react';
import {FunctionComponent, ReactElement, useState} from 'react';
import * as icons from '@coreui/icons';

export enum TooltipPosition{
    top,
    bottom
}

type TooltipProps = {
    children: ReactElement;
    text: ReactElement;
    position?: TooltipPosition;
    useIcon?: boolean;
}

const TooltipPositionToClassName = (position: TooltipPosition) => {
    switch(position){
        case TooltipPosition.top:
            return ' top';
        case TooltipPosition.bottom:
            return ' bottom';
        default:
            return ' top';
    }
}

export const Tooltip: FunctionComponent<TooltipProps> = (props: TooltipProps) => {
    const [show, setShow] = useState(false);
    let position = TooltipPosition.top;
    if (props.position !== undefined && props.position !== null){
        position = props.position;
    }
    let icon = <></>;
    if (props.useIcon) {
        icon = <span className='icon-arrange'><CIcon icon={icons.cilImagePlus} />&nbsp;</span>;
    }
    return (
        <>
        <div
            className='tooltip-text'
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onTouchEnd={() => setShow(!show)}
        >
            <div className={'tooltip' + TooltipPositionToClassName(position)} style={show ? { visibility: 'visible' } : {}}>
                {props.children}
            </div>
            {icon}
            {props.text}
        </div>
        </>
    );
}
