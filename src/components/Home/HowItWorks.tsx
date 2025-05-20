'use client';

import { Workflow, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading and Paragraph Side-by-Side */}
        <div className="md:flex md:items-start md:justify-between mb-12">
          <h2 className="text-3xl md:text-6xl font-semibold md:w-1/3 mb-6 md:mb-0 Poppins">
            How does it work?
          </h2>
          <p className="text-gray-600 md:w-2/3 font-medium">
            BlueScope simplifies ESG due diligence by automating supply chain tracking, enabling real-time risk assessments, and delivering clear ESG reports. With seamless integration and intelligent workflows, your teams gain control and insight while staying ahead of regulations and expectations.
          </p>
        </div>

        {/* Two Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Box */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Workflow className="w-5 h-5 text-blue-600 mr-2" />
              Streamline Your Due Diligence Workflow
            </h3>
            <p className="text-gray-600 text-sm">
              Automate ESG data collection, supplier onboarding, and risk tracking with our end-to-end compliance engine. BlueScope helps you move from manual spreadsheets to intelligent automation that scales across your global operations.
            </p>
            <a href="#" className="text-blue-500 text-sm mt-4 inline-block hover:underline">
              Learn more →
            </a>
          </div>

          {/* Right Box */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
              Insights That Drive Better Decisions
            </h3>
            <p className="text-gray-600 text-sm">
              Our powerful analytics engine helps you visualize ESG metrics, track compliance progress, and generate audit-ready reports with a few clicks. Whether for stakeholders or regulators, BlueScope equips you with actionable insights.
            </p>
            <a href="#" className="text-blue-500 text-sm mt-4 inline-block hover:underline">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
