"use client"

import { useState } from "react"
import { ChevronRight, ChevronLeft, ArrowRight, Search, Download, Clock, DollarSign } from "lucide-react"


const sections = [
  {
    id: "how",
    title: "HOW WE WORK",
    content: {
      mainText: [
        "Blue Scope PTY is an independent Australian company with a proud history in mineral exploration and agro-farming.",
        "We focus on sustainable development of mineral resources, pioneering mining technologies, and expanding agricultural interests.",
      ],
      quote: "Innovation isn't just what we do, it's who we are at our core.",
      attribution: "Research & Development Team",
    },
  },
  {
    id: "where",
    title: "WHERE WE ARE",
    content: {
      mainText: [
        "Headquartered in Perth, Western Australia, with major mining sites across the Pilbara region.",
        "We operate Australia's largest iron ore mines and support global markets through our integrated infrastructure.",
      ],
      quote: "From the red earth of the Pilbara to global markets, we connect resources to the world.",
      attribution: "Operations Team",
    },
  },
]

const businessAreas = [
  {
    id: "agriculture",
    title: "Agriculture Product & Engagement",
    image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/Atlas-HomepageProducts-Sand.jpg",
    description:
      "Blue Scope Partners boasts a robust agribusiness portfolio, comprising over 25 properties and ranking as the country's second-largest beef producer, with a total herd capacity exceeding 340,000. With a rich heritage deeply rooted in agriculture, Blue Scope is dedicated to investing in local rural communities, pioneering innovative farming practices, and fostering export growth.",
  },
  {
    id: "mining",
    title: "Mining Investment & Engagement",
    image: "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/Atlas-HomepageProducts-Logistics-2.jpg",
    description:
      "Evaluate the global mining sector, monitor the volatile metals market, mitigate risk, and align ESG goals with essential data, analytics, and insights.",
  },
  {
    id: "oil-gas",
    title: "Oil and Gas",
    image:
      "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/Atlas-HomepageProducts-Split-Top-Investors.jpg",
    description:
      "Bluescope Society, with substantial conventional gas resources concentrated in key basins, such as the Carnarvon, Browse, and Bonaparte basins, alongside potential for additional discoveries, Bluescopepty offers a promising investment landscape for those seeking exposure to the oil and gas sector.",
  },
  {
    id: "philanthropy",
    title: "Philanthropy",
    image:
      "https://bluescopeptyltd.club/homelink/wp-content/uploads/2023/10/Atlas-HomepageProducts-Split-Bottom-JobOpenings.jpg",
    description:
      "Bluescope Society, showcases its dedication to investing in initiatives that enhance the well-being of individuals and communities nationwide.",
  },
]

interface Transaction {
  name: string
  hash: string
  amount: number
  date: string
  status: string
}

const transactions: Transaction[] = [
  {
    name: "Olivier Gauthier",
    hash: "9666872d19284f1e8a84a3909ab41ce6d171d748fd6943f723a7d76b3e3bd519",
    amount: 2521.11134379,
    date: "2023-10-15",
    status: "Completed",
  },
  {
    name: "Macit Mertoğlu",
    hash: "0dccbc71990959ec9a1fb076529ff9fd513e8e02c07f3c6a781355052282ab6f",
    amount: 15036.9132357276,
    date: "2023-10-14",
    status: "Completed",
  },
  {
    name: "Van Dufour",
    hash: "f4613ee40a153cc40c323cd0259cb34d67b6b302ee4382f8f802090f707e31a4",
    amount: 9945.7574023554,
    date: "2023-10-12",
    status: "Completed",
  },
  {
    name: "Nikolaj Rasmussen",
    hash: "f2c19d5bdf44baaf62c6a3f29f2bb33dfde6ada48f38e0c555df5e06930b428c",
    amount: 8443.1134955256,
    date: "2023-10-10",
    status: "Completed",
  },
  {
    name: "Anthony Wheeler",
    hash: "bd77bdb51c4525b68e5e98db6ca3be33fc51f171beb0a0238a057bcdbc6d2326",
    amount: 12800.2091503753,
    date: "2023-10-08",
    status: "Completed",
  },
  {
    name: "Stefania Große",
    hash: "daf27b33e4f85c858ad536ae24c0e13a556f85960de69f6f9f044f62a1419939",
    amount: 9561.9369428582,
    date: "2023-10-05",
    status: "Completed",
  },
  {
    name: "Deepak Prabhu",
    hash: "aa4faae0b3394ef03a104d886ef030f34534fb74574a12310549ca0cc7209598",
    amount: 2530.3029601048,
    date: "2023-10-03",
    status: "Completed",
  },
  {
    name: "Alexander Petersen",
    hash: "c606597c122ce491aadf7edde5c8724dcf6760eeefb7b718fb8fef4ae332526f",
    amount: 21295.71826664,
    date: "2023-09-30",
    status: "Completed",
  },
  {
    name: "Sofia Pedersen",
    hash: "f14ebb96b97e6e905fbba07b4cab460efc0949e7e09507ff3f0313cd23a226d2",
    amount: 2302.217457136,
    date: "2023-09-28",
    status: "Completed",
  },
  {
    name: "Joel Hiltunen",
    hash: "0453fa323e03a01f05b7a458f8eb47bc20fdcd730f5cd9fb639cceea5e6d1672",
    amount: 7689.1469258447,
    date: "2023-09-25",
    status: "Completed",
  },
]

const Home = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

  const nextSection = () => {
    setActiveSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1))
  }

  const prevSection = () => {
    setActiveSection((prev) => (prev === 0 ? sections.length - 1 : prev - 1))
  }

  const currentSection = sections[activeSection]

  // Filter transactions based on search query
  const filteredTransactions = transactions.filter(
    (tx) =>
      tx.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.hash.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Format hash for display (truncate)
  const formatHash = (hash: string): string => {
    return `${hash.substring(0, 8)}...${hash.substring(hash.length - 8)}`
  }

  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center bg-[url('https://bluescopeptyltd.club/homelink/wp-content/uploads/2022/08/webinar.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 h-full flex items-center px-8 md:px-16 lg:px-24">
          <div className="text-white max-w-4xl">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
              <span className="block md:inline whitespace-nowrap">
                Pioneering Australia's Mineral Future
              </span>
            </h1>
             <p className="text-base md:text-lg text-gray-200 mb-6">
              Leading innovation in mineral exploration, bringing vital resources from discovery to global markets.
            </p>
            <button className="bg-blue-600 flex items-center hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Learn More <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Sections Carousel */}
      <section className="max-w-7xl mx-auto my-16 px-6">
        <div className="relative bg-white rounded-lg overflow-hidden">
          {/* Navigation buttons */}
          <button
            onClick={prevSection}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous section"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={nextSection}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next section"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              {/* Left column - Main content */}
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">{currentSection.title}</h2>
                <div className="space-y-4">
                  {currentSection.content.mainText.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right column - Quote */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="text-blue-500 text-6xl font-serif mb-4">"</div>
                <blockquote className="text-xl md:text-2xl text-gray-800 font-medium mb-4">
                  "{currentSection.content.quote}"
                </blockquote>
                <div className="font-serif text-gray-600 italic">{currentSection.content.attribution}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas Section */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-semibold text-center mb-12">Our Business Areas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessAreas.map((area) => (
              <div
                key={area.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img src={area.image || "/placeholder.svg"} alt={area.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col h-64">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{area.title}</h3>
                  <p className="text-gray-700 flex-grow line-clamp-5">{area.description}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors">
                      Click Here for full details
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Transactions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-blue-600 text-white p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold">Bluescope PTY LTD Recent Bulk Transactions</h2>
                  <p className="text-blue-100 mt-1">Showing the latest verified transactions</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md flex items-center text-sm font-medium transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </button>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
                    <input
                      type="text"
                      placeholder="Search transactions..."
                      className="bg-white/10 hover:bg-white/20 focus:bg-white/20 text-white pl-10 pr-4 py-2 rounded-md text-sm w-full md:w-64 outline-none transition-colors"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction List */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction Hash
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount (USD)
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredTransactions.map((tx, index) => (
                    <tr key={tx.hash} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium">
                            {tx.name.charAt(0)}
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">{tx.name}</div>
                            <div className="text-xs text-gray-500 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {tx.date}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 font-mono">{formatHash(tx.hash)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 flex items-center">
                          <DollarSign className="w-4 h-4 text-green-500 mr-1" />
                          {formatCurrency(tx.amount)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
