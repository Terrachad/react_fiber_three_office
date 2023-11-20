import { Scroll, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
    return(
        <section className={`h-screen flex flex-col justify-center p-10 ${props.right ? 'items-end': 'items-start'}`} style={{opacity: props.opacity}}>
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="bg-white rounded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Overlay = () => {
    const scroll = useScroll();

    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityThirdSection, setOpacityThirdSection] = useState(1);


    useFrame(() => {
        setOpacityFirstSection(1-scroll.range(0, 1/3));
        setOpacitySecondSection(1-scroll.range(1/3, 1/3));
        setOpacityThirdSection(1-scroll.range(2/3, 1/3));
    })

    return (
    
        <Scroll html>
           <div className="w-screen">
           <Section opacity={opacityFirstSection}>
            <h1 className="font-serif text-2xl">Hello world</h1>
            </Section>
            <Section right opacity={opacitySecondSection}>
            <h1 className="font-serif text-2xl">Hello world1</h1>
            </Section>
            <Section opacity={opacityThirdSection}>
            <h1 className="font-serif text-2xl">Hello world2</h1>
            </Section>
           </div>
        </Scroll>
    )


}