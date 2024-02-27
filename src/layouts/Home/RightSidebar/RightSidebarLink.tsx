import { ReactNode } from "react"

interface RightSidebarLinkProps {
  jumpTo: string
  label: string
  icon?: ReactNode
}

/**
 * Renders a link for the right sidebar.
 * @param jumpTo - The ID of the element to jump to.
 * @param label - The label for the link.
 * @returns The rendered link component.
 */
const RightSidebarLink = ({ jumpTo, label, icon }: RightSidebarLinkProps) => {
  const onScrollSpyNavigate = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()

    const target = window.document.getElementById(e.currentTarget.href.split("#")[1])
    if (target) {
      const headerOffset = 65
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition - headerOffset

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <a href={`#${jumpTo}`} onClick={(e) => onScrollSpyNavigate(e)}>
      <div
        data-to-scrollspy-id={jumpTo}
        className="px-5 py-2 text-sm no-underline transition-all ps-5 font-meltow sm:text-base"
      >
        <span className="sm:hidden">{icon}</span>
        <span className="hidden sm:inline-block">{label}</span>
      </div>
    </a>
  )
}

export default RightSidebarLink
