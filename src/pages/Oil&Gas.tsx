"use client"

import { ArrowRight, Droplet, Map, BarChart3, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"

const OilAndGas = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[220px] sm:h-[300px] md:h-[400px] flex items-center">
        <img
          src="https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Oil and Gas Operations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-left pt-8 pb-6 md:py-0">
            <h1 className="text-xl sm:text-2xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
              Oil &amp; Gas
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-blue-100 max-w-xs sm:max-w-md md:max-w-2xl break-words">
              Powering Australia's future through responsible resource development.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Australia's Energy Leadership</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Australia has a long history of oil and gas production. The ongoing development of its substantial
              reserves is strengthening the country's position as a leading global player in the sector. Oil and gas
              exports are a major contributor to the Australian economy, earning A$23.2 billion in 2015.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Conventional Gas</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Oil remained the largest primary energy source in Australia, at 38 per cent in 2013–14. Gas is
                Australia's third largest energy resource after oil and coal, accounting for 24 per cent. By the end of
                the decade, Australia should be home to ten operational LNG projects with a combined nameplate capacity
                of 86 million tonnes per annum (mtpa).
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This will put Australia on track to become the world's largest exporter of LNG by the end of the decade.
                Australia's competitive position is underpinned by a strong economy, abundant resources, supportive
                government policies, mature trade links with key markets, and the participation of the world's major oil
                and gas companies at all stages of the supply chain.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Resources</h4>
              <p className="text-gray-700 mb-4">
                Australia has substantial conventional gas resources. Australia's proved and probable gas reserves stood
                at 126,000 petajoules, comprising 83,000 petajoules of conventional gas. Australia produced 2,460
                petajoules of gas in 2014–15, of which 50 per cent was exported as liquefied natural gas (LNG).
              </p>
              <p className="text-gray-700">
                Around 92 per cent of Australia's conventional gas resources are located in the Carnarvon, Browse and
                Bonaparte basins off the coast of Western Australia and the Northern Territory. There are also resources
                in offshore basins along Australia's southern margin as well as in onshore basins. The potential for
                additional commercial discoveries is large.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resource Distribution</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Australia's oil and gas resources are strategically distributed across key basins, providing a diverse and
              robust energy portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Map className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Key Basins</h3>
              <p className="text-gray-700">
                The Carnarvon, Browse, and Bonaparte basins contain the majority of Australia's conventional gas
                resources, offering significant opportunities for exploration and development.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Droplet className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Oil Resources</h3>
              <p className="text-gray-700">
                Australia's oil resources are primarily condensate and naturally occurring liquefied petroleum gas (LPG)
                associated with large offshore gas fields, with additional crude oil reserves and potential for new
                discoveries.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Potential</h3>
              <p className="text-gray-700">
                There is significant scope for growth in Australia's oil reserves in existing fields, and for new oil
                discoveries in proven basins and in underexplored frontier basins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LNG Export Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/2581940/pexels-photo-2581940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="LNG Export Facility"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">LNG Export Leadership</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The growing global demand for energy, led mainly by China and India over the past decade, coupled with
                the shift in energy transition has driven a strong increase in gas demand, particularly LNG due to its
                suitability for long-distance transportation.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Australia's geographic/geological positioning, ability to attract foreign investors/oil and gas majors
                and key Asian LNG buyers has enabled Australia to meet the various demands and emerge as one of the
                world's largest LNG exporters.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-bold">Third largest exporter:</span> Australia remained the world's third
                      largest LNG exporter in 2014 and accounted for 10 per cent of world LNG trade.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-bold">Projected growth:</span> The strongest growth in Australia's export
                      earnings will be in LNG, which is projected to increase from 23.2 million tonnes in 2013–14 to
                      about 80 million tonnes in 2019–20.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-bold">Future leadership:</span> By the end of this decade Australia is
                      expected to be the world's largest LNG exporter, generating estimated export earnings of almost
                      $45 billion in 2019–20 compared to just over $17 billion in 2014–15.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Future Outlook</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Large gas fields in the Carnarvon, Bonaparte and Browse basins and the vast CSG reserves in Australia's
              eastern onshore basins underpin a growing LNG sector.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">126,000</div>
                <p className="text-sm">Petajoules of Proved & Probable Gas Reserves</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">80M</div>
                <p className="text-sm">Tonnes of Projected LNG Exports by 2020</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$45B</div>
                <p className="text-sm">Estimated Export Earnings by 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore Investment Opportunities</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Join us in developing Australia's oil and gas resources responsibly, contributing to global energy security
            while creating sustainable value for stakeholders.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact Our Energy Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/projects/oil-and-gas/resources"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              View Resource Map
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OilAndGas
