"use client"
import { motion } from "framer-motion"
import { ArrowUp, ArrowDown, TrendingUp, DollarSign, BarChart3, Users } from "lucide-react"

export default function Reports() {
  // Financial data
  const financialData = {
    totalSales: {
      value: 161.5,
      change: 2.8,
      previous: 157.0,
      unit: "million",
      isPositive: true,
    },
    productSales: {
      value: 125.9,
      change: 9.6,
      previous: 114.8,
      unit: "million",
      isPositive: true,
    },
    serviceSales: {
      value: 35.6,
      change: 14.2,
      previous: 31.1,
      unit: "million",
      isPositive: true,
    },
    costOfSales: {
      value: 71.3,
      change: 6.9,
      previous: 66.8,
      unit: "million",
      isPositive: false,
    },
    sgaExpenses: {
      value: 15.1,
      change: 18.2,
      previous: 12.8,
      unit: "million",
      isPositive: false,
    },
    netIncome: {
      value: 87.4,
      unit: "million",
    },
    adjustedEbitda: {
      value: 58.3,
      unit: "million",
    },
    liquidity: {
      value: 442.7,
      unit: "million",
    },
    cashEquivalents: {
      value: 268.4,
      unit: "million",
    },
  }

  // Chart data (simplified for this example)
  const quarterlyData = [
    { quarter: "Q1 2023", sales: 145.2 },
    { quarter: "Q2 2023", sales: 152.8 },
    { quarter: "Q3 2023", sales: 157.0 },
    { quarter: "Q4 2023", sales: 159.3 },
    { quarter: "Q1 2024", sales: 155.6 },
    { quarter: "Q2 2024", sales: 157.0 },
    { quarter: "Q3 2024", sales: 161.5 },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  // Helper function to format numbers
  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Key Metrics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500" variants={itemVariants}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-500">Total Sales</p>
                <h3 className="text-3xl font-bold text-gray-900">${formatNumber(financialData.totalSales.value)}M</h3>
              </div>
              <div
                className={`flex items-center ${
                  financialData.totalSales.isPositive ? "text-green-500" : "text-red-500"
                }`}
              >
                {financialData.totalSales.isPositive ? (
                  <ArrowUp className="h-5 w-5" />
                ) : (
                  <ArrowDown className="h-5 w-5" />
                )}
                <span className="ml-1 font-medium">{financialData.totalSales.change}%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Compared to ${formatNumber(financialData.totalSales.previous)}M in Q2 2024
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500" variants={itemVariants}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-500">Product Sales</p>
                <h3 className="text-3xl font-bold text-gray-900">${formatNumber(financialData.productSales.value)}M</h3>
              </div>
              <div
                className={`flex items-center ${
                  financialData.productSales.isPositive ? "text-green-500" : "text-red-500"
                }`}
              >
                {financialData.productSales.isPositive ? (
                  <ArrowUp className="h-5 w-5" />
                ) : (
                  <ArrowDown className="h-5 w-5" />
                )}
                <span className="ml-1 font-medium">{financialData.productSales.change}%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Compared to ${formatNumber(financialData.productSales.previous)}M in Q2 2024
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500" variants={itemVariants}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-500">Net Income</p>
                <h3 className="text-3xl font-bold text-gray-900">${formatNumber(financialData.netIncome.value)}M</h3>
              </div>
              <div className="text-blue-500">
                <DollarSign className="h-5 w-5" />
              </div>
            </div>
            <p className="text-sm text-gray-600">Strong performance across all business segments</p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500" variants={itemVariants}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-500">Liquidity</p>
                <h3 className="text-3xl font-bold text-gray-900">${formatNumber(financialData.liquidity.value)}M</h3>
              </div>
              <div className="text-blue-500">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Including ${formatNumber(financialData.cashEquivalents.value)}M in cash
            </p>
          </motion.div>
        </motion.div>

        {/* Quarterly Performance Chart */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-md mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quarterly Sales Performance</h3>
          <div className="h-64 relative">
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-48">
              {quarterlyData.map((data, index) => (
                <div key={index} className="flex flex-col items-center w-1/7">
                  <motion.div
                    className="bg-blue-500 w-12 rounded-t-md"
                    style={{
                      height: `${(data.sales / 170) * 100}%`,
                    }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(data.sales / 170) * 100}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                  <p className="text-xs text-gray-600 mt-2">{data.quarter}</p>
                  <p className="text-xs font-medium">${data.sales}M</p>
                </div>
              ))}
            </div>
            {/* Horizontal grid lines */}
            <div className="absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none">
              {[0, 1, 2, 3, 4].map((_, index) => (
                <div key={index} className="border-t border-gray-200 w-full h-0"></div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Detailed Report */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="bg-white p-8 rounded-lg shadow-md" variants={itemVariants}>
            <div className="flex items-center mb-6">
              <BarChart3 className="h-6 w-6 text-blue-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Q3 2024 Highlights</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <p className="text-gray-700">
                  Total sales increased by $4.5 million (2.8%) compared to Q2 2024, reaching $161.5 million.
                </p>
              </li>
              <li className="flex">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <p className="text-gray-700">
                  Product sales surged by $11.1 million (9.6%) over Q2 2024, reaching $125.9 million.
                </p>
              </li>
              <li className="flex">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <p className="text-gray-700">Service sales increased by $4.5 million (14.2%) compared to Q2 2024.</p>
              </li>
              <li className="flex">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <p className="text-gray-700">
                  Cost of sales increased by $4.5 million (6.9%) compared to the prior quarter, totaling $71.3 million.
                </p>
              </li>
              <li className="flex">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <p className="text-gray-700">
                  SG&A expenses increased by $2.3 million (18.2%) from the previous quarter, amounting to $15.1 million.
                </p>
              </li>
            </ul>
          </motion.div>

          <motion.div className="bg-white p-8 rounded-lg shadow-md" variants={itemVariants}>
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-blue-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Market Analysis</h3>
            </div>
            <p className="text-gray-700 mb-4">
              In the third quarter of 2024, Bluescopepty achieved a solid growth trajectory driven by favorable market
              conditions and higher sales prices across our portfolio, particularly in oil, agriculture, and real estate
              tokenization investments.
            </p>
            <p className="text-gray-700 mb-4">
              Despite maintaining a positive outlook, the company experienced a slight price regression during this
              period, primarily due to the expiration of higher-priced short-term contracts. These were replaced with
              new contracts at lower rates, along with periodic pricing adjustments on certain agreements.
            </p>
            <p className="text-gray-700">
              As of August 20, 2024, the company's liquidity remained robust at $442.7 million, comprising $268.4
              million in cash and equivalents. This solid financial position underscores our commitment to long-term
              investment growth and capital appreciation for our stakeholders.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="/financial-reports"
            className="inline-flex items-center bg-blue-500 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors"
          >
            View Full Financial Report
          </a>
        </motion.div>
      </div>
    </section>
  )
}
