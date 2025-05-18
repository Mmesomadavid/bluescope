"use client"

import { useState } from "react"
import { ArrowUp, Download, Printer, Share2, Info, DollarSign, BarChart3, PieChart, TrendingUp } from 'lucide-react'

const AnnualReport = () => {
  const [activeTab, setActiveTab] = useState("overview")

  // Financial data
  const financialData = {
    totalSales: {
      value: 161.5,
      change: 4.5,
      percentage: 2.8,
      positive: true,
    },
    productSales: {
      value: 125.9,
      change: 11.1,
      percentage: 9.6,
      positive: true,
    },
    serviceSales: {
      value: 35.6, // Calculated from the context
      change: 4.5,
      percentage: 14.2,
      positive: true,
    },
    costOfSales: {
      value: 71.3,
      change: 4.5,
      percentage: 6.9,
      positive: false,
    },
    sgaExpenses: {
      value: 15.1,
      change: 2.3,
      percentage: 18.2,
      positive: false,
    },
    netIncome: {
      value: 87.4,
      change: null,
      percentage: null,
      positive: true,
    },
    adjustedEBITDA: {
      value: 58.3,
      change: null,
      percentage: null,
      positive: true,
    },
    liquidity: {
      value: 442.7,
      cashAndEquivalents: 268.4,
      positive: true,
    },
  }

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <div 
        className="relative text-white py-12 sm:py-16 md:py-20"
        style={{
          backgroundImage: "url('https://bluescopeptyltd.club/homelink/wp-content/uploads/2022/08/webinaarrr.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
              Q3 2023 Annual Report
            </h1>
            <p className="text-blue-200 text-base sm:text-lg md:text-xl">
              Bluescopepty's Performance Overview
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex space-x-3">
            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md flex items-center text-sm font-medium transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md flex items-center text-sm font-medium transition-colors">
              <Printer className="w-4 h-4 mr-2" />
              Print
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md flex items-center text-sm font-medium transition-colors">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>
        </div>
    
        {/* Added subtitle */}
        <div className="mt-8 max-w-3xl">
          <p className="text-base sm:text-lg text-blue-100">
            Delivering strong financial results through strategic investments and operational excellence in our diversified portfolio.
          </p>
        </div>
      </div>
    </div>

      {/* Financial Highlights */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Financial Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Sales */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Sales</p>
                  <h3 className="text-2xl font-bold text-gray-900">${financialData.totalSales.value}M</h3>
                </div>
                <div className="bg-blue-100 p-2 rounded-md">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center">
                <ArrowUp className="w-4 h-4 text-green-600 mr-1" />
                <span className="text-green-600 font-medium text-sm">
                  ${financialData.totalSales.change}M ({financialData.totalSales.percentage}%)
                </span>
                <span className="text-gray-500 text-sm ml-1">vs Q2</span>
              </div>
            </div>

            {/* Product Sales */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Product Sales</p>
                  <h3 className="text-2xl font-bold text-gray-900">${financialData.productSales.value}M</h3>
                </div>
                <div className="bg-green-100 p-2 rounded-md">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <div className="flex items-center">
                <ArrowUp className="w-4 h-4 text-green-600 mr-1" />
                <span className="text-green-600 font-medium text-sm">
                  ${financialData.productSales.change}M ({financialData.productSales.percentage}%)
                </span>
                <span className="text-gray-500 text-sm ml-1">vs Q2</span>
              </div>
            </div>

            {/* Net Income */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Net Income</p>
                  <h3 className="text-2xl font-bold text-gray-900">${financialData.netIncome.value}M</h3>
                </div>
                <div className="bg-purple-100 p-2 rounded-md">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 text-sm">Q3 2023 Performance</span>
              </div>
            </div>

            {/* Adjusted EBITDA */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Adjusted EBITDA</p>
                  <h3 className="text-2xl font-bold text-gray-900">${financialData.adjustedEBITDA.value}M</h3>
                </div>
                <div className="bg-amber-100 p-2 rounded-md">
                  <PieChart className="w-5 h-5 text-amber-600" />
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 text-sm">Q3 2023 Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Navigation */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto" aria-label="Report sections">
            {[
              { id: "overview", name: "Overview" },
              { id: "sales", name: "Sales Analysis" },
              { id: "expenses", name: "Expenses" },
              { id: "liquidity", name: "Liquidity" },
              { id: "outlook", name: "Future Outlook" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Report Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Q3 2023 Performance Overview</h2>

              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    In the third quarter of 2023, Bluescopepty achieved a solid growth trajectory, with total sales
                    increasing by $4.5 million, a 2.8% rise compared to the previous quarter, bringing the total to
                    $161.5 million. Product sales experienced a robust surge, rising by $11.1 million, reflecting a 9.6%
                    increase over Q2 2023, reaching $125.9 million. This performance was primarily driven by favorable
                    market conditions and higher sales prices across our portfolio, particularly in oil, agriculture,
                    and real estate tokenization investments.
                  </p>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Despite maintaining a positive outlook, the company experienced a slight price regression during
                    this period, primarily due to the expiration of higher-priced short-term contracts. These were
                    replaced with new contracts at lower rates, along with periodic pricing adjustments on certain
                    agreements. Nevertheless, service sales saw a significant uplift, increasing by $4.5 million, or
                    14.2%, compared to Q2 2023. This growth was fueled by a rise in active projects across our
                    portfolio, bolstered by the allocation of additional resources and continued customer demand for our
                    diversified investment offerings.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Info className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-blue-700">
                          Bluescopepty delivered a strong financial performance in Q3 2023, achieving a net income of
                          $87.4 million and an Adjusted EBITDA of $58.3 million. As of August 20, 2023, the company's
                          liquidity remained robust at $442.7 million, comprising $268.4 million in cash and
                          equivalents.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    However, this strong growth was partially offset by a slight contraction in contract durations, as
                    client activity concentrated around key asset locations during the quarter. The cost of sales for Q3
                    2023 (excluding depreciation, depletion, and accretion expenses) increased by $4.5 million, or 6.9%,
                    compared to the prior quarter, totaling $71.3 million. This was primarily driven by higher logistics
                    and operational costs as we expanded our asset management capabilities.
                  </p>
                </div>
              </div>

              {/* Financial Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-medium text-gray-900">Quarterly Sales Comparison</h3>
                  </div>
                  <div className="p-6 h-64 flex items-center justify-center bg-gray-50">
                    <div className="text-center text-gray-500">
                      <BarChart3 className="h-12 w-12 mx-auto text-gray-400" />
                      <p className="mt-2">Sales comparison chart would appear here</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-medium text-gray-900">Revenue Breakdown</h3>
                  </div>
                  <div className="p-6 h-64 flex items-center justify-center bg-gray-50">
                    <div className="text-center text-gray-500">
                      <PieChart className="h-12 w-12 mx-auto text-gray-400" />
                      <p className="mt-2">Revenue breakdown chart would appear here</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expenses Section */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-medium text-gray-900">Expenses Analysis</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Selling, general, and administrative expenses (SG&A) for Q3 2023 increased by $2.3 million, or
                    18.2%, from the previous quarter, amounting to $15.1 million. The rise in SG&A was mainly attributed
                    to $3.5 million in non-recurring transaction costs associated with the ongoing optimization of our
                    portfolio and the refinancing of strategic investment vehicles.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Expense Category
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Q3 2023 ($M)
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Q2 2023 ($M)
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Change ($M)
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Change (%)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Cost of Sales
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">71.3</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">66.8</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4.5</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">+6.9%</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            SG&A Expenses
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15.1</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12.8</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.3</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">+18.2%</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Non-recurring Costs
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.5</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.0</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.5</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">N/A</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-blue-900 text-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Conclusion</h3>
                  <p className="text-blue-100 leading-relaxed">
                    In conclusion, Bluescopepty delivered a strong financial performance in Q3 2023, achieving a net
                    income of $87.4 million and an Adjusted EBITDA of $58.3 million. As of August 20, 2023, the
                    company's liquidity remained robust at $442.7 million, comprising $268.4 million in cash and
                    equivalents. This solid financial position underscores our commitment to long-term investment growth
                    and capital appreciation for our stakeholders.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "sales" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sales Analysis</h2>
              <p className="text-gray-500 italic">Detailed sales analysis would appear in this section.</p>
            </div>
          )}

          {activeTab === "expenses" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Expenses</h2>
              <p className="text-gray-500 italic">Detailed expenses analysis would appear in this section.</p>
            </div>
          )}

          {activeTab === "liquidity" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Liquidity</h2>
              <p className="text-gray-500 italic">Detailed liquidity analysis would appear in this section.</p>
            </div>
          )}

          {activeTab === "outlook" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Future Outlook</h2>
              <p className="text-gray-500 italic">Future outlook and projections would appear in this section.</p>
            </div>
          )}
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Download the Full Annual Report</h3>
              <p className="text-gray-600">
                Get access to detailed financial statements, management discussion, and analysis.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md flex items-center font-medium transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AnnualReport
