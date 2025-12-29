import { Vector3 } from "three";
import { RoundedBoxGeometry, useTexture } from '@react-three/drei';

import { extend } from '@react-three/fiber';
import { CustomTubeGeometry } from '../../common/CustomTubeGeometry.tsx';
import { RigidBody } from '@react-three/rapier';
import { RandomCircleDistribution } from '../../common/RandomCircleDistribution.tsx';
import { hexaSize, labSize } from '../constant.tsx';
import IntrinsicElements = React.JSX.IntrinsicElements;


extend({CustomTubeGeometry});

export function GreenSapin(props: { position: [number, number, number] }) {

    return <group {...props}>
        <mesh position={[0, 0, 0]}>
            <coneGeometry args={[1.8, 3, 24]}></coneGeometry>
            <meshStandardMaterial color={"green"}></meshStandardMaterial>
        </mesh>
        <mesh position={[0, 1, 0]}>
            <coneGeometry args={[1.5, 3, 24]}></coneGeometry>
            <meshStandardMaterial color={"green"}></meshStandardMaterial>
        </mesh>
        <mesh position={[0, 2, 0]}>
            <coneGeometry args={[1.4, 3, 24]}></coneGeometry>
            <meshStandardMaterial color={"green"}></meshStandardMaterial>
        </mesh>
    </group>
}

export function GiftBox(props: {
    paperMaterial?: any,
    rubanMaterial?: any,
    sizes?: [number, number, number],
    rubanWidth: number,
    rubanEpaisseur: number
} & IntrinsicElements['mesh']) {
    const {
        paperMaterial = <meshStandardMaterial color={"red"}></meshStandardMaterial>,
        rubanMaterial = <meshStandardMaterial color={"gold"}></meshStandardMaterial>,
        sizes = [1, 1, 1],
        rubanWidth = 0.1,
        rubanEpaisseur = 0.05
    } = props;
    return <RigidBody type="fixed">
        <group {...props}>
            <group position={[0, sizes[1] / 2, 0]}>
                <mesh position={[0, 0, 0]}>
                    <RoundedBoxGeometry args={sizes}></RoundedBoxGeometry>
                    {paperMaterial}
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <RoundedBoxGeometry
                        args={[0 + rubanWidth, sizes[1] + rubanEpaisseur, sizes[2] + rubanEpaisseur]}></RoundedBoxGeometry>
                    {rubanMaterial}
                </mesh>
                <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
                    <RoundedBoxGeometry
                        args={[sizes[0] + rubanEpaisseur, 0 + rubanWidth, sizes[2] + rubanEpaisseur]}></RoundedBoxGeometry>
                    {rubanMaterial}    </mesh>
                <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
                    <RoundedBoxGeometry
                        args={[sizes[0] + rubanEpaisseur, sizes[1] + rubanEpaisseur, 0 + rubanWidth]}></RoundedBoxGeometry>
                    {rubanMaterial} </mesh>
            </group>
        </group>
    </RigidBody>
}


export const Moon = (props: { position?: Vector3, onPointerDown: () => void }) => {

    const texture = useTexture("./ivoryLeather.jpg");
    return <group {...props} >
        <mesh>
            <sphereGeometry args={[5]}></sphereGeometry>
            <meshStandardMaterial fog={false} color={"white"}></meshStandardMaterial>
        </mesh>
    </group>
}

export function BackgroundMountains() {
    return <>
        <RandomCircleDistribution position={new Vector3(0, 0, 0)}

                                  radius={hexaSize * labSize}
                                  count={hexaSize * labSize / 2}>
            <mesh>
                <octahedronGeometry args={[hexaSize * Math.random() * 2, 0]}></octahedronGeometry>
            </mesh>
        </RandomCircleDistribution>

        <RandomCircleDistribution position={new Vector3(0, 0, 0)}
                                  radius={hexaSize * labSize * 2} count={4}>
            <mesh>
                <octahedronGeometry args={[16 + hexaSize * 2, 0]}></octahedronGeometry>
            </mesh>
        </RandomCircleDistribution></>;
}
