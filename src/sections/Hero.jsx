import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
// import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import {calculateSizes} from '../constants/index.js'
import Target from '../components/Target.jsx'
import ReactLogo from '../components/ReactLogo.jsx'
import Cube from '../components/Cube.jsx'
import Rings from '../components/Ring.jsx'
import HeroCamera from '../components/HeroCamera.jsx'
import Button from '../components/Button.jsx'

const Hero = () => {

const isSmall = useMediaQuery({  maxWidth: 480 })
const isMobile = useMediaQuery({  maxWidth: 768 })
const isTablet = useMediaQuery({  minWidth: 768, maxWidth: 1024 })

const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // const controls = useControls('HackerRoom',{
  //   positionX: { 
  //      value: 2.5, 
  //      min: -10, 
  //      max: 10
  //     },
  //     positionY: { 
  //       value: 2.5, 
  //       min: -10, 
  //       max: 10
  //      },
  //      positionZ: { 
  //       value: 2.5, 
  //       min: -10, 
  //       max: 10
  //      },
  //      rotationX: {
  //       value: 0, 
  //       min: -10, 
  //       max: 10
  //      },
  //      rotationY: {
  //       value: 0, 
  //       min: -10, 
  //       max: 10
  //      },
  //      rotationZ: {
  //       value: 0, 
  //       min: -10, 
  //       max: 10
  //      },
  //      scale: {
  //         value: 1, 
  //         min: 0.1, 
  //         max: 10
  //      }
  // })

  return (
    <section className='min-h-screen w-full flex flex-col relative' id='home'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl text-gray-300 text-center font-medium font-generalsans'>Hi, I'm Akshat
          <span className='waving-hand'>🖐</span></p>
        <p className='hero_tag text-gray_gradient'>Building WebSites and WebApps</p>
      </div>
      <div className='w-full h-full absolute inset-0'>

      {/* Leva: A lightweight, open-source GUI library for React that allows developers to create intuitive and customizable user interfaces. */}
      {/* <Leva/> */}
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0, 0, 18]} />
            <HeroCamera isMobile={isMobile}>
            <HackerRoom 
            //scale={0.07} 
            position={sizes.deskPosition}
            rotation={[0,-Math.PI, 0]}
            scale={sizes.deskScale}
            />
            </HeroCamera>
           

            <group>
              <Target position ={sizes.targetPosition}/>
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={1}/>
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
        <div className='absolute bottom-7 left-0 right-20 w-[400px] mx-auto z-10 c-space'>
          <a href='#about' className='w-fit'>
            <Button name="Let's Work Together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero