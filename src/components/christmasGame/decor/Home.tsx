import DynamicSvg from '../../common/DynamicSvg.tsx';
import ExtrudedSvg from '../../common/ExtrudedSvg.tsx';
import type { Shape, Vector3 } from 'three';
import { DoubleSide, Euler } from 'three';
import FakeGlowMaterial from '../../common/material/FakeGlowMaterial.tsx';
import React from 'react';
import { RoundedBoxGeometry } from '@react-three/drei';
import { MessageBoard } from './StartZone.tsx';
import { Wind } from './Wind.tsx';


export function Home(props: { position?:Vector3 }) {
    function customProcess(shape: Shape[], shapeIndex: number, svgData: any) {
        return {
            depth: svgData.paths[shapeIndex].color.getHSL({}).l,
            bevelEnabled: false,
            steps: 1,
        };
    }

    function customProcessMaterial(shape: any, shapeIndex: number, svgData: any): any {
        return <meshStandardMaterial color={"grey"} side={DoubleSide}/>
    }


    return <group {...props}>
        <group rotation={[0, 0, -Math.PI]} position={[0, -0.5, -2]} scale={[3, 0.25, 0.25]}>
            <ExtrudedSvg svgPath={"./christmas/home.svg"}
                         customProcessMaterial={customProcessMaterial}
                         customProcess={customProcess} symmetric={true}></ExtrudedSvg>
        </group>
        <mesh position={[0, 1.2, 0.5]}>
            <RoundedBoxGeometry args={[3, 1.35, 1]}></RoundedBoxGeometry>
            <meshBasicMaterial color={"orange"} transparent={true} opacity={0.7} side={DoubleSide}></meshBasicMaterial>
        </mesh>
        <mesh position={[-1, 1.25, 0.5]}>
            <boxGeometry args={[1, 1.5, 1]}></boxGeometry>
            <meshStandardMaterial color={"black"} side={DoubleSide} ></meshStandardMaterial>
        </mesh>
        <MessageBoard scale={0.5}
            position={[2, 0.5, 1.5]}
            rotation={new Euler(0, Math.PI/2, 0)}
            text={"Meaning of\nchristmas"}>

        </MessageBoard>
        <MessageBoard scale={0.5}
                      position={[2, 0, -0.5]}
                      rotation={new Euler(0, Math.PI/2, 0)}
                      text={"(no I haven't time\n to do\n a real ending)"}>

        </MessageBoard>
        <Wind rotation={new Euler(Math.PI/2,0,0)}></Wind>
    </group>
}
