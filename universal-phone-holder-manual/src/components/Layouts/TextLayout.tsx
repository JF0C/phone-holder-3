import { FunctionComponent, ReactNode } from "react";
import { useAppSelector } from "../../store/store";

export type TextLayoutProps = {
    children: ReactNode,
    footerContent?: ReactNode
}

export const TextLayout: FunctionComponent<TextLayoutProps> = (props) => {
    const title = useAppSelector(state => state.uiState.navTitle);

    return <div className='flex flex-col h-full'>
        <div className='h-12 font-bold text-2xl'>{title}</div>
        <div className='flex-1 p-4 text-container overflow-y-scroll'>
            <div className=''>
                {props.children}
            </div>
        </div>
        <div className='px-4 mb-6 flex flex-row'>
            {props.footerContent}
        </div>
    </div>
}