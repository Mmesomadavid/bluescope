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
    link: "/case-studies",
  },
  {
    name: "About Us",
    hasDropdown: true,
    dropdownCategory: {
      title: "Our Services",
      description: "Explore our range of professional services",
      items: [
        {
          name: "Web Development",
          link: "/services/web-development",
          image: "/placeholder.svg?height=56&width=56",
          description: "Custom websites and web applications",
        },
        {
          name: "UI/UX Design",
          link: "/services/ui-ux-design",
          image: "/placeholder.svg?height=56&width=56",
          description: "User-centered design solutions",
        },
        {
          name: "Digital Marketing",
          link: "/services/digital-marketing",
          image: "/placeholder.svg?height=56&width=56",
          description: "Grow your online presence",
        },
        {
          name: "Consulting",
          link: "/services/consulting",
          image: "/placeholder.svg?height=56&width=56",
          description: "Expert advice for your business",
        },
      ],
    },
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
