import { FunctionComponent } from "react"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import { Constants } from "../../constants/Constants"
import { Tooltip } from "../Tooltip/Tooltip"
import * as icon from '@coreui/icons';

export const Accessories: FunctionComponent = () => {

    return <div className="text-container">
        <br />
        <br />
        Accessories for the Phone Holder &nbsp;
        <LinkWithSaveState path={Constants.AccessoryLampMirrorAssemblyPath} displayValue="Lamp Mirror" />
    </div>
}