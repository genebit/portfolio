import { HTMLAttributes, RefObject, useEffect, useRef, useState } from "react"

import ImageGallery from "react-image-gallery"
import { ChevronLeft, ChevronRight, Maximize, Pause, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { Gallery } from "../../types/Gallery"
import { cn } from "@/lib/utils"

interface ProjectGalleryProps {
  thumbnails: Gallery[]
}

interface GalleryButtonProps extends HTMLAttributes<HTMLElement> {
  galleryRef: RefObject<ImageGallery>
}

const PreviousButton = ({ galleryRef }: GalleryButtonProps) => {
  const previous = () => {
    galleryRef.current?.slideToIndex(galleryRef.current.getCurrentIndex() - 1)
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={"ghost"} size={"icon"} onClick={previous}>
          <ChevronLeft size={20} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Previous</p>
      </TooltipContent>
    </Tooltip>
  )
}

const NextButton = ({ galleryRef }: GalleryButtonProps) => {
  const next = () => {
    galleryRef.current?.slideToIndex(galleryRef.current.getCurrentIndex() + 1)
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={"ghost"} size={"icon"} onClick={next}>
          <ChevronRight size={20} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Next</p>
      </TooltipContent>
    </Tooltip>
  )
}

const AutoPlayButton = ({ galleryRef }: GalleryButtonProps) => {
  const [play, setPlay] = useState(false)

  const toggleAutoPlay = () => {
    if (play) {
      galleryRef.current?.pause()
      setPlay(false)
    } else {
      galleryRef.current?.play()
      setPlay(true)
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={"ghost"} size={"icon"} onClick={toggleAutoPlay}>
          {play ? <Pause size={20} /> : <Play size={20} />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Autoplay</p>
      </TooltipContent>
    </Tooltip>
  )
}

const FullScreenButton = ({ galleryRef }: GalleryButtonProps) => {
  const fullscreen = () => {
    galleryRef.current?.fullScreen()
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={"ghost"} size={"icon"} onClick={fullscreen}>
          <Maximize size={20} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Fullscreen</p>
      </TooltipContent>
    </Tooltip>
  )
}

interface BulletIndicatorProps extends HTMLAttributes<HTMLElement> {
  totalItems: number
  galleryRef: React.RefObject<ImageGallery>
  currentIndex: number
}

const BulletIndicator = ({ totalItems, currentIndex, className, ...props }: BulletIndicatorProps) => {
  const compCn = cn("flex gap-1 w-max", className)

  return (
    <div className={compCn} {...props}>
      {Array.from({ length: totalItems }).map((_, i) => {
        const isActive = i === currentIndex
        return (
          <span
            key={i}
            className={`block w-2 h-2 rounded-full transition-all shadow-md ${
              isActive ? "bg-primary w-4" : "bg-white"
            }`}
          ></span>
        )
      })}
    </div>
  )
}

const ProjectGallery = ({ thumbnails }: ProjectGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const galleryRef = useRef<ImageGallery>(null)

  useEffect(() => {
    if (galleryRef.current) {
      setTotalItems(galleryRef.current.props.items.length || 0)
    }
  }, [thumbnails])

  return (
    <>
      <div className="relative">
        <ImageGallery
          ref={galleryRef}
          slideDuration={1}
          showPlayButton={false}
          showNav={false}
          items={thumbnails}
          lazyLoad={true}
          showFullscreenButton={false}
          onSlide={setCurrentIndex}
        />
        <BulletIndicator totalItems={totalItems} currentIndex={currentIndex} className="absolute bottom-20 left-4" />
      </div>
      <TooltipProvider delayDuration={100}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <PreviousButton galleryRef={galleryRef} />
            <NextButton galleryRef={galleryRef} />
          </div>
          <div className="flex items-center gap-1">
            <AutoPlayButton galleryRef={galleryRef} />
            <FullScreenButton galleryRef={galleryRef} />
          </div>
        </div>
      </TooltipProvider>
    </>
  )
}

export default ProjectGallery
