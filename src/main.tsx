import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import { KeyboardControls } from '@react-three/drei';
import { ChristmasScene } from './components/christmasGame/christmasScene.tsx';
import { Stats } from '@react-three/drei'
function Main() {


    return <React.StrictMode>
        <KeyboardControls
            map={[
                {name: "forward", keys: ["ArrowUp", "w", "W"]},
                {name: "backward", keys: ["ArrowDown", "s", "S"]},
                {name: "left", keys: ["ArrowLeft", "a", "A"]},
                {name: "right", keys: ["ArrowRight", "d", "D"]},
                {name: "jump", keys: ["Space"]},
            ]}>

            <Canvas camera={{fov:25}} >
              <Stats></Stats>
                <Suspense>
                <ChristmasScene></ChristmasScene>
                </Suspense>
            </Canvas>

            <img id="screenshot" style={{display: 'none'}}/>
            <div className="dot"/>
        </KeyboardControls>
    </React.StrictMode>;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    Main()
)
