import CIcon from "@coreui/icons-react";
import * as icon from '@coreui/icons';
import { Button, Popover } from "@mui/material";
import { FunctionComponent, useState } from "react";

export type ImagePopoverProps = {
    //    children: ReactNode
    imagePath: string
    text: string
    id: string
}

export const ImagePopover: FunctionComponent<ImagePopoverProps> = (props) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    return <>
        <Button onClick={handleClick} id={props.id}>
            {props.text}
            &nbsp;
            <CIcon icon={icon.cilImagePlus} />
        </Button>
        <Popover open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            id={props.id}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}>
            <img className="w-40" src={props.imagePath} alt={props.text} />
        </Popover>
    </>
}