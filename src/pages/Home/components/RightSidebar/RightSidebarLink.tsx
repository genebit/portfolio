import { Link } from "react-router-dom"

interface RightSidebarLinkProps {
  jumpTo: string
  label: string
}

const RightSidebarLink = ({ jumpTo, label }: RightSidebarLinkProps) => {
  return (
    <Link className="py-2 no-underline transition-all ps-5 font-meltow" data-to-scrollspy-id={jumpTo} to={`#${jumpTo}`}>
      {label}
    </Link>
  )
}

export default RightSidebarLink
