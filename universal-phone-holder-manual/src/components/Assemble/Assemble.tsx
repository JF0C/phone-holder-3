import { FunctionComponent } from "react"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import { Constants } from "../../constants/Constants"
import { Tooltip } from "../Tooltip/Tooltip"

export const Assemble: FunctionComponent = () => {
    return <div className="text-container">
        Here we will walk through the assembly of phone holder from its constituent parts. <br />
        Usually, your phone holder should arrive already pre-assembled, so you can probably skip over to <LinkWithSaveState path={Constants.AdjustPath} />. <br />
        If you want to make changes your phone holder or it is for some reason not assembled already, check if you have all the follwing parts and tools:
        <ul>
            <li>3mm Allen wrench</li>
            <li>Wrench or pliers for M4 nuts</li>
            <li>[i] 5 M4 washers</li>
            <li>[i] 2 M4 screws of around 18mm shaft length</li>
            <li>[i] 1 M4 screw of around 10mm shaft length</li>
            <li>[i]&nbsp;
                <Tooltip text={<>2 phone holder feet</>} useIcon>
                    <img height={200} src='/img/foot.png' />
                </Tooltip>
            </li>
            <li>[i]&nbsp;
                <Tooltip text={<>4 sliding guidances</>} useIcon>
                    <img height={200} src="/img/sled.png"/>
                </Tooltip> 
            </li>
            <li>[i]&nbsp;
                <Tooltip text={<>The phone holder body</>} useIcon>
                    <img height={200} src="/img/body.png" />
                </Tooltip></li>
            <li>[i]&nbsp;
                <Tooltip text={<>The phone holder neck</>} useIcon>
                    <img height={200} src="/img/neck.png" />
                </Tooltip>
            </li>
        </ul>
        [i] = included in phone holder set. <br />
        After that, continue with the
        <LinkWithSaveState path={Constants.AssembleInsertFootPath} displayValue=" next assembly step" />.
    </div>
}