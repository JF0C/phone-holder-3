import { FunctionComponent, ReactElement } from "react"

export type ModelAndTextProperties = {
    model: ReactElement,
    text: ReactElement
};

export const ModelAndTextLayout: FunctionComponent<ModelAndTextProperties> = (props: ModelAndTextProperties) => {

    return <div className="model-and-text">
        <div className="model-view">
            {props.model}
        </div>
        <div className="text-view">
            {props.text}
        </div>
    </div>
}