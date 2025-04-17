"use client"
import React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export const BackgroundBeams = React.memo(({ className }: { className?: string }) => {
  // Reduced to just 10 paths instead of 50+
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
    "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
    "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
    "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
    "M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675",
    "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
    "M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595",
    "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
    "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
  ]

  return (
    <div
      className={cn(
        "absolute inset-0 flex h-full w-full items-center justify-center [mask-repeat:no-repeat] [mask-size:40px] overflow-hidden",
        className
      )}
    >
      <svg
        className="absolute z-0 w-full h-full pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515"
          stroke="url(#paint0_radial_242_278)"
          strokeOpacity="0.05"
          strokeWidth="0.5"
        ></path>

        {paths.map((path, index) => (
          <motion.path
            key={`path-` + index}
            d={path}
            stroke={`url(#linearGradient-${index})`}
            strokeOpacity="0.4"
            strokeWidth="0.5"
          ></motion.path>
        ))}
        <defs>
          {paths.map((path, index) => (
            <motion.linearGradient
              id={`linearGradient-${index}`}
              key={`gradient-${index}`}
              initial={{
                x1: "0%",
                x2: "0%",
                y1: "0%",
                y2: "0%",
              }}
              animate={{
                x1: ["0%", "100%"],
                x2: ["0%", "95%"],
                y1: ["0%", "100%"],
                y2: ["0%", `${93 + Math.random() * 8}%`],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                ease: "easeInOut",
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="32.5%" stopColor="#6344F5"></stop>
              <stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          ))}

          <radialGradient
            id="paint0_radial_242_278"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
          >
            <stop offset="0.0666667" stopColor="#d4d4d4"></stop>
            <stop offset="0.243243" stopColor="#d4d4d4"></stop>
            <stop offset="0.43594" stopColor="white" stopOpacity="0"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
})

BackgroundBeams.displayName = "BackgroundBeams"
