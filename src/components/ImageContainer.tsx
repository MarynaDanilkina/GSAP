"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import { memo, MutableRefObject, RefObject, useEffect, useRef, useState } from "react"

import type { ISlide } from "@/constants/main"

import styles from "./ImageContainer.module.scss"

interface ImageContainerProps {
  mainSlideRef: HTMLImageElement | null
  slide: ISlide
  slideRefs: (HTMLDivElement | null)[]
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


    /*useGSAP(
      () => {
        if (setImageRef.current) {
          gsap.to(setImageRef.current, {
            scrollTrigger: {
              trigger: index === 0 ? mainSlideRef : slideRefs[index - 1],
              start: "top top",
              end: "bottom center",
              scrub: true,
              markers: true,
            },
            opacity: 1,
          })
        }
      },
      { scope: imageContainerRef }
        )*/
        
        useEffect(() => {
            gsap.to(setImageRef.current, {
              scrollTrigger: {
                trigger: slideRefs[index - 1],
                start: "top top",
                end: "bottom center",
                scrub: true,
                
              },
              opacity: 1,
            })
        }, [])

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
