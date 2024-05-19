import { Loader } from "@react-three/drei";
import { FunctionComponent, ReactElement, Suspense } from "react"
import { LinkWithSaveState } from "../Link/LinkWithSaveState";
import * as icon from '@coreui/icons';

export type ModelAndTextProperties = {
    model: ReactElement,
    text: ReactElement,
    nextStepPath?: string,
    previousStepPath?: string,
    customNextButton?: ReactElement,
    customPreviousButton?: ReactElement
};

export const ModelAndTextLayout: FunctionComponent<ModelAndTextProperties> = (props: ModelAndTextProperties) => {
    let nextButton = (props.nextStepPath === null || props.nextStepPath === undefined) ? <></> :
            <LinkWithSaveState className="menu-button in-text" path={props.nextStepPath} displayValue="Next" icon={icon.cilChevronRight} iconAtEnd />
    let prevButton = (props.previousStepPath === null || props.previousStepPath === undefined) ? <></> :
            <LinkWithSaveState className="menu-button in-text" path={props.previousStepPath} displayValue="Previous" icon={icon.cilChevronLeft} />
    if (props.customNextButton !== undefined && props.customNextButton !== null){
        nextButton = props.customNextButton;
    }
    if (props.customPreviousButton !== undefined && props.customPreviousButton !== null){
        prevButton = props.customPreviousButton;
    }

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