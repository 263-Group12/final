import React, {useEffect, useRef, useState} from "react";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import useEventListener from '@use-it/event-listener';
import "./styles/Background.css"
import {Vector3} from "three";

function Camera(props: any) {
    const {camera} = useThree();
    const [rad, setRad] = useState(3.1415 / 2);
    const [rot, setRot] = useState(false);

    const translation = (angle: any) => {
        return [4 * Math.cos(angle), 4 * Math.sin(angle), 4 * Math.cos(angle)];
    }

    const mouseWheelHandler = (event: any) => {
        let delta = (event.deltaY / 500);

        let [deltaY, deltaZ, deltaX] = translation(delta + rad);

        if (camera.position.z < 0) {
            camera.position.set(-deltaX, -deltaY, deltaZ);
            camera.lookAt(new Vector3(0, 0, 0));
            if (!rot) camera.rotateZ(2 * 3.1415);
            setRot(true);
        } else {
            camera.position.set(-deltaX, deltaY, deltaZ);
            camera.lookAt(new Vector3(0, 0, 0));
            if (rot) camera.rotateZ(2 * 3.1415);
            setRot(false);
        }

        setRad(delta + rad);
    };

    useEventListener("mousewheel", mouseWheelHandler);
    // @ts-ignore
    useEffect(() => camera.position.set(0, 0, 4), [camera.position]);

    return <mesh {...props}/>
}

function Box(props: any) {
    const mesh = useRef();
    const [right, setRight] = useState(props.right);
    useFrame(() => {
        // @ts-ignore
        right ? mesh.current.rotation.x += 0.01 : mesh.current.rotation.x -= 0.01;
        // @ts-ignore
        mesh.current.rotation.y += 0.005;
    });

    return (
        <mesh
            {...props}
            ref={mesh}>
            <boxGeometry args={[.15, .15, .15]}/>
            <meshStandardMaterial color={'orange'}/>
        </mesh>
    );
}

function Background() {
    let positions: any[] = [];

    for (let i = -4; i < 5; i++)
        for (let j = -4; j < 5; j++)
            for (let k = -4; k < 5; k++)
                positions.push([0.3 * i, 0.3 * j, 0.3 * k]);

    return (
        <Canvas className={"Background2"}>
            <Camera className={"Camera"}/>
            <pointLight position={[10, 0, 0]}/>
            <pointLight position={[-10, 0, 0]}/>
            <pointLight position={[0, 10, 0]}/>
            <pointLight position={[0, -10, 0]}/>
            {positions.map(arr => <Box className="Box" position={[arr[0], arr[1], arr[2]]} right={true}/>)}
        </Canvas>
    );
}

export default Background;