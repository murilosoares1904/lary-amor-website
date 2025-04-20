
import React from "react";
import { Heart, Star, Flower } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFDEE2] to-[#FDE1D3]">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#ea384c] mb-4">
            Lary
          </h1>
          <div className="flex justify-center gap-2 mb-6">
            <Heart className="text-[#ea384c]" />
            <Star className="text-[#ea384c]" />
            <Flower className="text-[#ea384c]" />
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto mb-12"
        >
          <img 
            src="/lovable-uploads/9ee26edb-3a44-4514-ae4d-4dfbc4850e7a.png"
            alt="Lary"
            className="rounded-lg shadow-xl w-full hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Love Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed">
            "Para a pessoa mais especial do mundo, aquela que ilumina meus dias com seu sorriso e faz meu coração bater mais forte com sua presença."
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[...Array(3)].map((_, i) => (
              <Heart 
                key={i}
                className="text-[#ea384c] animate-bounce" 
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </motion.div>

        {/* Love Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "Seu sorriso é a minha alegria",
            "Seu olhar é minha inspiração",
            "Seu amor é minha força",
            "Você é meu mundo inteiro"
          ].map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + (i * 0.2) }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-lg text-gray-700">{quote}</p>
              <Flower className="text-[#ea384c] mt-2 mx-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
