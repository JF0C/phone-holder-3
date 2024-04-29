import { FunctionComponent } from "react"
import { StlView } from "../StlViewer/StlView"
import { Link } from "react-router-dom"
import { Assemble } from "../Assemble/Assemble"
import { Vector3 } from "three"
import { Dispatch } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { setCurrentLocation } from "../../store/state"

export const StartMenu: FunctionComponent = () => {

    const dispatch : Dispatch<any> = useDispatch();
    return <>
        <StlView 
            source="/cad/AssemblyPhoneHolderBase.stl" 
            height='80vh'
            position={new Vector3(0, 0, 0)}
            rotation={new Vector3(90, 0, 0)}
            cameraPosition={new Vector3(100, 50, 0)}
            lightOrigin={new Vector3(100, 100, 0)}
            showAxes={false}
        />
            <div className="start-menu-container">
            <div className="menu-button">
                <Link to="assemble" onClick={() => dispatch(setCurrentLocation('/assemble'))}>
                    Assemble
                </Link>
            </div>
            <div className="menu-button">
                <Link to="adjust" onClick={() => dispatch(setCurrentLocation('/adjust'))}>
                    Adjust
                </Link>
            </div>
        </div>
    </>
}