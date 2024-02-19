import { Link } from "react-router-dom"

interface RightSidebarLinkProps {
  jumpTo: string
  label: string
}

/**
 * Renders a link for the right sidebar.
 * @param jumpTo - The ID of the element to jump to.
 * @param label - The label for the link.
 * @returns The rendered link component.
 */
const RightSidebarLink = ({ jumpTo, label }: RightSidebarLinkProps) => {
  return (
    <Link
      className="py-2 text-sm no-underline transition-all ps-5 font-meltow sm:text-base"
      data-to-scrollspy-id={jumpTo}
      to={`#${jumpTo}`}
    >
      {label}
    </Link>
  )
}

export default RightSidebarLink
