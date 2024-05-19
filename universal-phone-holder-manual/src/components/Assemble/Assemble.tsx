import { FunctionComponent } from "react"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import { Constants } from "../../constants/Constants"
import { Tooltip } from "../Tooltip/Tooltip"
import * as icon from '@coreui/icons';

export const Assemble: FunctionComponent = () => {
    return <div className="text-container">
        <br />
        <br />
        Here, we will walk through the assembly of phone holder from its constituent parts. <br />
        Usually, your phone holder arrives pre-assembled. In this case, you can skip over to <LinkWithSaveState path={Constants.AdjustPath} />. <br />
        If you want to make changes your phone holder or it is for some reason not assembled already, check if you have all the follwing parts and tools:
        <ul>
            <li>3mm Allen wrench</li>
            <li>Wrench or pliers for M4 nuts</li>
            <li>5 M4 washers [i]</li>
            <li>2 M4 screws of around 18mm shaft length [i]</li>
            <li>1 M4 screw of around 10mm shaft length [i]</li>
            <li>
                <Tooltip text={<>2 phone holder feet</>} useIcon>
                    <img height={200} src='/img/foot.png' />
                </Tooltip>
                &nbsp;[i]
            </li>
            <li>
                <Tooltip text={<>4 foot carriage</>} useIcon>
                    <img height={200} src="/img/sled.png"/>
                </Tooltip>
                &nbsp;[i]
            </li>
            <li>
                <Tooltip text={<>The phone holder body</>} useIcon>
                    <img height={200} src="/img/body.png" />
                </Tooltip>&nbsp;[i]
            </li>
            <li>
                <Tooltip text={<>The phone holder neck</>} useIcon>
                    <img height={200} src="/img/neck.png" />
                </Tooltip>
                &nbsp;[i]
            </li>
        </ul>
        [i] = included in phone holder set. <br />
        <br />
        Now, you are ready for the
        <br />
        <br />
        <LinkWithSaveState
            className="menu-button in-text"
            path={Constants.AssembleInsertFootPath}
            displayValue="Next Step"
            icon={icon.cilChevronRight}
            iconAtEnd/>
    </div>
}