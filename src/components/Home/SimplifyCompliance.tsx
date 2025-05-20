import { Plus, Minus } from "lucide-react";
import ArrowIconImg from "../../assets/arrow-icon.png";

const SimplifyCompliance = () => {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 Poppins">
            Streamline regulatory compliance while driving sustainable innovation in steel production.
          </h2>
        </div>

        {/* Flex row: Arrow icon (larger) + 3 images (smaller, side by side) */}
        <div className="flex items-center mb-10 space-x-6">
          <span className="text-gray-700 mr-2 text-sm font-medium whitespace-nowrap">
            How BlueScope Supports Compliance:
          </span>
          <img
            src={ArrowIconImg}
            className="h-auto w-50"
            alt="Arrow"
            draggable="false"
          />
          <div className="flex space-x-3">
            <img
              src="https://images.pexels.com/photos/185039/pexels-photo-185039.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Industrial facility"
              className="w-52 h-52 object-cover rounded-lg"
            />
            <img
              src="https://images.pexels.com/photos/236086/pexels-photo-236086.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Steel materials"
              className="w-52 h-52  object-cover rounded-lg"
            />
            <img
              src="https://images.pexels.com/photos/3855964/pexels-photo-3855964.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Sustainable infrastructure"
              className="w-52 h-52  object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Accordion Section */}
        <div className="space-y-0">
          <details className="group border-t border-gray-200 py-5" open>
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <div className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-3 text-3xl font-bold text-zinc-400">01</span>
                <div className="font-medium">Material Traceability</div>
              </div>
              <span className="transition">
                <Minus className="h-5 w-5 group-open:block hidden" />
                <Plus className="h-5 w-5 group-open:hidden block" />
              </span>
            </summary>
            <div className="text-gray-600 mt-3 group-open:animate-fadeIn">
              <p className="text-sm">
                Our digital systems enable end-to-end traceability of steel materials—from raw input to finished
                product—ensuring compliance with regional and global regulations like EPD and ISO 14040 standards.
              </p>
            </div>
          </details>

          <details className="group border-t border-gray-200 py-5">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <div className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-3 text-3xl font-bold text-zinc-400">02</span>
                <span className="font-medium">Environmental Monitoring</span>
              </div>
              <span className="transition">
                <Minus className="h-5 w-5 group-open:block hidden" />
                <Plus className="h-5 w-5 group-open:hidden block" />
              </span>
            </summary>
            <div className="text-gray-600 mt-3 group-open:animate-fadeIn">
              <p className="text-sm">
                BlueScope integrates real-time monitoring systems to track emissions, energy usage, and waste outputs—
                helping ensure compliance with environmental regulations and carbon reduction goals.
              </p>
            </div>
          </details>

          <details className="group border-t border-gray-200 py-5">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <div className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-3 text-3xl font-bold text-zinc-400">03</span>
                <span className="font-medium">Supplier Due Diligence</span>
              </div>
              <span className="transition">
                <Minus className="h-5 w-5 group-open:block hidden" />
                <Plus className="h-5 w-5 group-open:hidden block" />
              </span>
            </summary>
            <div className="text-gray-600 mt-3 group-open:animate-fadeIn">
              <p className="text-sm">
                Our procurement systems include compliance checkpoints for suppliers, ensuring ethical sourcing and alignment
                with human rights, labor, and environmental standards across the entire value chain.
              </p>
            </div>
          </details>

          <details className="group border-t border-gray-200 py-5">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <div className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-3 text-3xl font-bold text-zinc-400">04</span>
                <span className="font-medium">Policy Alignment</span>
              </div>
              <span className="transition">
                <Minus className="h-5 w-5 group-open:block hidden" />
                <Plus className="h-5 w-5 group-open:hidden block" />
              </span>
            </summary>
            <div className="text-gray-600 mt-3 group-open:animate-fadeIn">
              <p className="text-sm">
                We help our clients align operations with global sustainability frameworks like the UN SDGs, GRI, and TCFD—
                turning compliance obligations into long-term competitive advantage.
              </p>
            </div>
          </details>

          <details className="group border-t border-gray-200 py-5">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <div className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-3 text-3xl font-bold text-zinc-400">05</span>
                <span className="font-medium">Audit-Ready Reports</span>
              </div>
              <span className="transition">
                <Minus className="h-5 w-5 group-open:block hidden" />
                <Plus className="h-5 w-5 group-open:hidden block" />
              </span>
            </summary>
            <div className="text-gray-600 mt-3 group-open:animate-fadeIn">
              <p className="text-sm">
                Generate detailed audit-ready compliance documentation for local and international regulators, from ISO
                certifications to ESG performance and voluntary disclosures—backed by verified data.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default SimplifyCompliance;