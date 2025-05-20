interface DropdownItem {
  name: string
  link: string
  image: string
  description?: string
}

interface DropdownCategory {
  title: string
  description: string
  items: DropdownItem[]
}

export interface NavItem {
  name: string
  link?: string
  hasDropdown?: boolean
  dropdownCategory?: DropdownCategory
}

export const navItems: NavItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Our projects",
    link: "/about",
  },
  {
    name: "Bsp Annual Report",
    link: "/career",
  },
  {
    name: "Events",
    link: "/blog",
  },
  {
    name: "Contact",
    link: "/contact",
  },
]
