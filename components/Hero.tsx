import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-gray-300/30 to-gray-400/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-gray-400/20 to-gray-300/30 rounded-full blur-3xl"
      />
      <div className="absolute inset-0 gradient-gray-radial"></div>
      
      <div className="max-width-container section-padding relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 text-sm font-medium text-gray-700"
          >
            <span className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"></span>
            茨城県水戸市から、日本の未来をデザイン
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-gray-900 leading-tight"
          >
            地域と共に創る
            <br />
            <span className="gradient-text">次世代のDX</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            株式会社Grayscaleは、最新のテクノロジーと地域の温かさを融合し、
            <br className="hidden md:block" />
            企業の持続的な成長とイノベーションを実現します
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#services"
              className="button-primary group relative overflow-hidden"
            >
              <span className="relative z-10">サービスを探索</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <a
              href="#contact"
              className="button-secondary group"
            >
              <span className="flex items-center gap-2">
                お問い合わせ
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center gap-8 mt-12"
          >
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">50+</p>
              <p className="text-sm text-gray-600">導入実績</p>
            </div>
            <div className="w-px h-10 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">98%</p>
              <p className="text-sm text-gray-600">顧客満足度</p>
            </div>
            <div className="w-px h-10 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">24/7</p>
              <p className="text-sm text-gray-600">サポート体制</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
