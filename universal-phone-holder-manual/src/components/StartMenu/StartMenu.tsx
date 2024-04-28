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
            position={new Vector3(0, 0, -150)}
            rotation={new Vector3(40, -50, 10)}
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