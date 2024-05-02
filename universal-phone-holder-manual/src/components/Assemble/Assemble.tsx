import { FunctionComponent, Suspense } from "react"
import { LinkWithSaveState } from "../Link/LinkWithSaveState"
import { Constants } from "../../constants/Constants"

type AssembleProperties = {

}

export const Assemble: FunctionComponent<AssembleProperties> = (props: AssembleProperties) => {
    return <>
        Here we will walk through the assembly of phone holder from its constituent parts. <br />
        Usually, your phone holder should arrive already pre-assembled, so you can probably skip over to <LinkWithSaveState path={Constants.AdjustPath} />.
        If you want to make changes your phone holder or it is for some reason not assembled already, continue 
    </>
}