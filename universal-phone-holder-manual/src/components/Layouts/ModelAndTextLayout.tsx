import * as icon from '@coreui/icons';
import { FunctionComponent, ReactElement, Suspense } from 'react';
import { LinkWithSaveState } from '../Navigation/LinkWithSaveState';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { useAppSelector } from '../../store/store';

export type ModelAndTextProperties = {
    model: ReactElement,
    text: ReactElement,
    nextStepPath?: string,
    previousStepPath?: string,
    customNextButton?: ReactElement,
    customPreviousButton?: ReactElement
};

export const ModelAndTextLayout: FunctionComponent<ModelAndTextProperties> = (props: ModelAndTextProperties) => {
    const title = useAppSelector(state => state.uiState.navTitle);
    let nextButton = (props.nextStepPath === null || props.nextStepPath === undefined) ? <></> :
        <LinkWithSaveState className='menu-button in-text' path={props.nextStepPath} displayValue='Next' icon={icon.cilChevronRight} iconAtEnd />
    let prevButton = (props.previousStepPath === null || props.previousStepPath === undefined) ? <></> :
        <LinkWithSaveState className='menu-button in-text' path={props.previousStepPath} displayValue='Previous' icon={icon.cilChevronLeft} />
    if (props.customNextButton !== undefined && props.customNextButton !== null) {
        nextButton = props.customNextButton;
    }
    if (props.customPreviousButton !== undefined && props.customPreviousButton !== null) {
        prevButton = props.customPreviousButton;
    }

    return <Suspense fallback={<LoadingSpinner />}>
        <div className='flex flex-col h-full items-center'>
            <div className='flex flex-row h-full flex-wrap max-w-4xl'>
                <div className='w-full md:basis-1/2 h-1/2 md:h-full'>
                    <div className='w-full h-12 md:hidden font-bold'>{title}</div>
                    {props.model}
                </div>
                <div className='w-full md:basis-1/2 text-container p-4 h-1/2 md:h-full flex flex-col'>
                    <div className='w-full h-12'>
                        <div className='hidden md:block font-bold text-2xl'>{title}</div>
                    </div>
                    <div className='overflow-y-scroll flex-1'>
                        {props.text}
                    </div>
                    <div className='step-navigation h-16 md:h-24'>
                        {prevButton}
                        {nextButton}
                    </div>
                </div>
            </div>
        </div>
    </Suspense>
}