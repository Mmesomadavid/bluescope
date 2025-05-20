'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Shield, BarChart2, Globe, Zap } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: "Exclusive Investor Membership",
    description: "Gain access to a private investment community focused on safeguarding and enhancing wealth through diverse opportunities.",
    image: "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-blue-500" />,
    title: "Real Estate Tokenization",
    description: "Invest in tokenized real estate assets, offering enhanced transparency, liquidity, and efficient capital raising.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-500" />,
    title: "Global Investment Opportunities",
    description: "Access exclusive investment opportunities in mining, agriculture, and oil & gas sectors across major global markets.",
    image: "https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-500" />,
    title: "Philanthropic Initiatives",
    description: "Participate in projects that enhance the well-being of individuals and communities, reflecting our commitment to social responsibility.",
    image: "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];


const KeyFeatures = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Trigger animations when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Autoplay functionality
   useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Handle manual navigation
  const nextSlide = () => {
    setAutoplay(false);
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setAutoplay(false);
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="h-1 w-20 bg-blue-500"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 Poppins">Key Features</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our platform provides powerful tools to streamline compliance, enhance transparency, 
            and drive sustainable practices throughout your supply chain.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Features List */}
          <motion.div variants={itemVariants} className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`flex p-6 rounded-xl transition-all duration-300 ${
                  currentSlide === index 
                    ? "bg-white shadow-lg scale-105" 
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: currentSlide !== index ? 1.03 : 1 }}
                variants={itemVariants}
              >
                <div className="mr-4 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Carousel */}
          <motion.div 
            variants={itemVariants}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            ref={carouselRef}
          >
            <div className="absolute inset-0 bg-blue-900/10 z-10 rounded-2xl"></div>
            
            {/* Carousel Images */}
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ 
                  opacity: currentSlide === index ? 1 : 0,
                  scale: currentSlide === index ? 1 : 1.1,
                  zIndex: currentSlide === index ? 1 : 0
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            ))}

            {/* Navigation Arrows */}
            <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
              <button
                onClick={prevSlide}
                className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 text-gray-800" />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 left-4 flex space-x-2 z-20">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrentSlide(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? "bg-white w-6" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div 
            className="w-1.5 h-16 bg-gray-200 rounded-full relative overflow-hidden"
            animate={{ 
              backgroundColor: ["#e5e7eb", "#3b82f6", "#e5e7eb"],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <motion.div 
              className="w-full bg-blue-500 absolute top-0 left-0"
              animate={{ 
                height: ["0%", "100%", "0%"],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures;
