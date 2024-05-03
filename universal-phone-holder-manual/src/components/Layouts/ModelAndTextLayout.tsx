import { Loader } from "@react-three/drei";
import { FunctionComponent, ReactElement, Suspense } from "react"
import { LinkWithSaveState } from "../Link/LinkWithSaveState";
import * as icon from '@coreui/icons';

export type ModelAndTextProperties = {
    model: ReactElement,
    text: ReactElement,
    nextStepPath?: string,
    previousStepPath?: string
};

export const ModelAndTextLayout: FunctionComponent<ModelAndTextProperties> = (props: ModelAndTextProperties) => {
    const nextButton = (props.nextStepPath === null || props.nextStepPath === undefined) ? <></> :
        <div className="menu-button in-text">
            <LinkWithSaveState path={props.nextStepPath} displayValue="Next" icon={icon.cilChevronRight} iconAtEnd />
        </div>
    const prevButton = (props.previousStepPath === null || props.previousStepPath === undefined) ? <></> :
        <div className="menu-button in-text">
            <LinkWithSaveState path={props.previousStepPath} displayValue="Previous" icon={icon.cilChevronLeft} />
        </div>

    return <div className="model-and-text text-container">
        <Suspense fallback={<Loader />}>
            <div className="model-view">
                {props.model}
            </div>
            <div className="text-view">
                {props.text}
                <div className="step-navigation">
                    {prevButton}
                    {nextButton}
                </div>
            </div>
        </Suspense>
    </div>
}