import { HTMLAttributes, RefObject, useEffect, useRef, useState } from "react"

import ImageGallery from "react-image-gallery"
import { ChevronLeft, ChevronRight, Maximize, Pause, Play } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Screenshot } from "@/types/Screenshot"

interface ProjectGalleryProps extends HTMLAttributes<HTMLElement> {
  thumbnails: Screenshot[]
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

const FullScreenButton = ({
  galleryRef,
  setFullScreen,
}: {
  galleryRef: RefObject<ImageGallery>
  setFullScreen: (val: boolean) => void
}) => {
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      galleryRef.current?.fullScreen()
      setFullScreen(true)
    } else {
      document.exitFullscreen()
      setFullScreen(false)
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreen = !!document.fullscreenElement
      setFullScreen(isFullscreen)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
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
  const [isFullscreen, setIsFullscreen] = useState(false)
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
          showFullscreenButton={isFullscreen}
          onSlide={(currentIndex: number) => setCurrentIndex(currentIndex)}
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
            <FullScreenButton galleryRef={galleryRef} setFullScreen={setIsFullscreen} />
          </div>
        </div>
      </TooltipProvider>
    </>
  )
}

export default ProjectGallery
