import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Office } from "./WawaOffice"
import { Overlay } from "./Overlay"

export const Experience = () => {
    return (
        <>
        <ambientLight instensity={1}/>
        <ScrollControls pages={3} damping={0.25}>
            <Overlay/>
            <Office />

        </ScrollControls>
        </>    
        )
}