"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import { memo, MutableRefObject, RefObject, useRef } from "react"

import type { ISlide } from "@/constants/main"

import styles from "./ImageContainer.module.scss"

interface ImageContainerProps {
  mainSlideRef: RefObject<HTMLImageElement>
  slide: ISlide
  slideRefs: MutableRefObject<(HTMLDivElement | null)[]>
  index: number
  imageContainerRef: RefObject<HTMLDivElement>
}

export const ImageContainer = memo(
  ({
    mainSlideRef,
    slideRefs,
    slide,
    index,
    imageContainerRef,
  }: ImageContainerProps) => {
        const setImageRef = useRef<HTMLDivElement>(null)
        
        //console.log(index)
if (index === 0) {
            console.log("mainSlideRef", mainSlideRef)
            console.log("mainSlideRef.current", mainSlideRef.current)
        } else {
           console.log("slideRefs", slideRefs)
           console.log(
             "slideRefs.current[index - 1]",
             slideRefs.current[index - 1]
           ) 
        }
    useGSAP(() => {
      const slideRef =
            index === 0 ? mainSlideRef.current : slideRefs.current[index - 1]
        
        
        //console.log(mainSlideRef)
        // console.log(slideRefs)

      //if (index === 1) {
      //  console.log(slideRef)
      //}

      if (setImageRef.current) {
        gsap.to(setImageRef.current, {
          scrollTrigger: {
            trigger: slideRef,
            start: "top top",
            end: "bottom center",
            scrub: true,
            markers: true,
          },
          opacity: 1,
        })
      }
    }, [{ scope: imageContainerRef }, index])

    return (
      <div key={index} className={styles.imageContainer} ref={setImageRef}>
        <Image
          src={slide.image}
          alt={"project image"}
          className={styles.image}
          priority
        />
      </div>
    )
  }
)

ImageContainer.displayName = "ImageContainer"
