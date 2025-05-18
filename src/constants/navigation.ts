export interface DropdownItem {
  name: string
  link: string
  description?: string
  image?: string
}

export interface NavCategory {
  title: string
  description: string
  items: DropdownItem[]
  color: string
  image?: string
}

export interface NavItem {
  name: string
  link?: string // Made optional for dropdown-only items
  hasDropdown?: boolean
  dropdownCategory?: NavCategory
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
    name: "Our Projects",
    // Removed link for dropdown-only items
    hasDropdown: true,
    dropdownCategory: {
      title: "Our Projects",
      description: "Explore BlueScope's diverse portfolio of projects across mining, agriculture, and energy sectors.",
      color: "bg-blue-400",
      image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/projects-bg.jpg",
      items: [
        {
          name: "Mining",
          link: "/mining",
          image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/mining.jpg",
        },
        {
          name: "Agriculture",
          link: "/agriculture",
          image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/agriculture.jpg",
        },
        {
          name: "Oil & Gas",
          link: "/oil-and-gas",
          image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/energy.jpg",
        },
        {
          name: "Philanthropy",
          link: "/philanthropy",
          image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/infrastructure.jpg",
        },
      ],
    },
  },
  {
    name: "BSP Annual Report",
    link: "/annual-report",
  },
  {
    name: "Members Area",
    // Removed link for dropdown-only items
    hasDropdown: true,
    dropdownCategory: {
      title: "Members Area",
      description: "Access exclusive resources and services available only to BlueScope members.",
      color: "bg-blue-400",
      image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/members-bg.jpg",
      items: [
        {
          name: "Login",
          link: "/login",
          image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/login.jpg",
        },
        {
          name: "Sign Up",
          link: "/signup",
          image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/signup.jpg",
        },
      ],
    },
  },
  {
    name: "Support",
    // Removed link for dropdown-only items
    hasDropdown: true,
    dropdownCategory: {
      title: "Support",
      description: "Find the assistance you need with our comprehensive support resources and contact options.",
      color: "bg-blue-400",
      image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/support-bg.jpg",
      items: [
        {
          name: "Contact",
          link: "/support",
          image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/help.jpg",
        },
      ],
    },
  },
  {
    name: "Events",
    link: "/events",
  },
]
