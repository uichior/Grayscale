import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-0 right-0 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl"
      />
      
      <div className="max-width-container section-padding relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.svg"
                alt="Grayscale Logo"
                width={40}
                height={40}
                className="brightness-0 invert opacity-90"
              />
              <h3 className="text-2xl font-display font-bold">Grayscale</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              地域と共に歩むDXパートナーとして、茨城県水戸市から日本の未来を創造します
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-6 text-lg">サービス</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-white transition-colors"></span>
                  DXコンサルティング
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-white transition-colors"></span>
                  システム受託開発
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-white transition-colors"></span>
                  業務管理アプリ
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-6 text-lg">会社情報</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-white transition-colors"></span>
                  会社概要
                </a>
              </li>
              <li>
                <a href="#mission" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-white transition-colors"></span>
                  ミッション
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-white transition-colors"></span>
                  お問い合わせ
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-6 text-lg">Contact</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>茨城県水戸市</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@grayscale.co.jp" className="hover:text-white transition-colors">
                  info@grayscale.co.jp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} 株式会社Grayscale. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                プライバシーポリシー
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                利用規約
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
