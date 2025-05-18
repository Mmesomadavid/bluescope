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
  link: string
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
    link: "/projects",
    hasDropdown: true,
    dropdownCategory: {
      title: "Our Projects",
      description: "Explore BlueScope's diverse portfolio of projects across mining, agriculture, and energy sectors.",
      color: "bg-green-700",
      image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/projects-bg.jpg",
      items: [
        {
          name: "Mining",
          link: "/projects/mining",
          image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/mining.jpg",
        },
        {
          name: "Agriculture",
          link: "/projects/agriculture",
          image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/agriculture.jpg",
        },
        {
          name: "Oil & Gas",
          link: "/projects/energy",
          image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/energy.jpg",
        },
        {
          name: "Philantropy",
          link: "/projects/infrastructure",
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
    link: "/login",
    hasDropdown: true,
    dropdownCategory: {
      title: "Members Area",
      description: "Access exclusive resources and services available only to BlueScope members.",
      color: "bg-purple-700",
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
    link: "/support",
    hasDropdown: true,
    dropdownCategory: {
      title: "Support",
      description: "Find the assistance you need with our comprehensive support resources and contact options.",
      color: "bg-orange-700",
      image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/support-bg.jpg",
      items: [
        {
          name: "Help Center",
          link: "/support/help",
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
