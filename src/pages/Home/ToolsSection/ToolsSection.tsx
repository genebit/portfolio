import { HTMLAttributes } from "react"

import { useTheme } from "@/hooks/useTheme"
import { Star } from "lucide-react"
import { skills } from "@/lib/content"
import Marquee from "react-fast-marquee"

const ToolsSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  const SkillsCarousel = () => {
    const { theme } = useTheme()

    return (
      <Marquee
        pauseOnHover={true}
        gradient={true}
        gradientColor={`${theme === "light" ? "white" : "#0C0A09"}`}
        gradientWidth={75}
      >
        {skills.map((skill, index) => (
          <div key={index} className="basis-1/12 min-w-[4.5rem] max-w-[4.5rem] select-none *:min-w-14 relative">
            <img
              src={`https://go-skill-icons.vercel.app/api/icons?i=${skill.name.toString()}&theme=${theme}`}
              alt={skill.name.toString()}
            />
            <div className="static w-full">
              {skill.primary === true ? (
                <span className="absolute top-0 z-20 w-3 h-3 right-3.5">
                  <Star fill={theme === "light" ? "#000" : "#FFDF20"} stroke="#000" strokeWidth={1} size={18} />
                </span>
              ) : null}
              <small className="block mx-auto mt-2 tracking-widest uppercase font-artegra w-max text-slate-400 truncate max-w-[7ch]">
                {skill.label}
              </small>
            </div>
          </div>
        ))}
      </Marquee>
    )
  }

  return (
    <section className={className} {...props}>
      <div className="flex flex-col gap-5">
        <header>
          <h3 className="mb-3 font-bold tracking-widest uppercase font-artegra">LANGUAGES • TOOLS • FRAMEWORKS</h3>
          <p>
            Throughout years of experience learning software application technologies, I have used various software
            tools to create applications such as:
          </p>
        </header>
        <SkillsCarousel />
      </div>
    </section>
  )
}

export default ToolsSection
