import { Loader } from "@react-three/drei";
import { FunctionComponent, ReactElement, Suspense } from "react"

export type ModelAndTextProperties = {
    model: ReactElement,
    text: ReactElement
};

export const ModelAndTextLayout: FunctionComponent<ModelAndTextProperties> = (props: ModelAndTextProperties) => {

    return <div className="model-and-text">
        <Suspense fallback={<Loader />}>
            <div className="model-view">
                {props.model}
            </div>
            <div className="text-view">
                {props.text}
            </div>
        </Suspense>
    </div>
}