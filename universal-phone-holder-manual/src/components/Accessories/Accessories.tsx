import { FunctionComponent } from "react"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import { Paths } from "../../constants/Paths"
import { Tooltip } from "../Tooltip/Tooltip"
import * as icon from '@coreui/icons';

export const Accessories: FunctionComponent = () => {

    return <div className="text-container">
        <br />
        <br />
        Accessories for the Phone Holder &nbsp;
        <LinkWithSaveState path={Paths.AccessoryLampMirrorAssemblyPath} displayValue="Lamp Mirror" />
    </div>
}