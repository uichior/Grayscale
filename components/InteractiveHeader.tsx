import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Menu, X, Building2, Users, Mail, MapPin, User, DollarSign, Phone, Facebook, Instagram, Twitter } from 'lucide-react'

const menuItems = [
  { label: 'About', japanese: '会社概要', icon: Building2 },
  { label: 'Services', japanese: 'サービス', section: 'services' },
  { label: 'Contact', japanese: 'お問い合わせ', section: 'contact' }
]

export function InteractiveHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md bg-white/80 border-b border-gray-200' : ''
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-mono text-xl font-bold tracking-tighter cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              GRAY<span className="text-gray-400">SCALE</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {/* メニュー項目 */}
              <div className="flex items-center gap-8">
                {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.button
                    className="relative font-mono text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
                    onClick={() => {
                      if (item.label === 'About') {
                        setIsAboutOpen(true)
                      } else if (item.section) {
                        scrollToSection(item.section)
                      }
                    }}
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gray-900"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.button>
                  
                  {/* 日本語ツールチップ */}
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-gray-900 text-white text-xs font-mono rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200"
                    initial={{ y: -5 }}
                    animate={{ y: 0 }}
                  >
                    {item.japanese}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                  </motion.div>
                </motion.div>
                ))}
              </div>
              
              {/* SNSアイコン */}
              <div className="flex items-center gap-3 ml-4 border-l border-gray-300 pl-4">
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Facebook className="h-4 w-4" />
                </motion.a>
                
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Instagram className="h-4 w-4" />
                </motion.a>
                
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Twitter className="h-4 w-4" />
                </motion.a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative h-8 w-8 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    className="block w-full text-left font-mono text-gray-600 hover:text-gray-900 py-2"
                    onClick={() => {
                      if (item.label === 'About') {
                        setIsAboutOpen(true)
                        setIsMenuOpen(false)
                      } else if (item.section) {
                        scrollToSection(item.section)
                      }
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="block text-sm">{item.label}</span>
                    <span className="block text-xs text-gray-400">{item.japanese}</span>
                  </motion.button>
                ))}
                
                {/* モバイル用SNSアイコン */}
                <div className="flex items-center gap-4 pt-4 mt-4 border-t border-gray-200">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* About Dialog */}
      <Dialog open={isAboutOpen} onOpenChange={setIsAboutOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto mx-4 sm:mx-auto">
          <DialogHeader>
            <DialogTitle className="font-mono text-2xl pr-8">About Grayscale</DialogTitle>
            <DialogDescription className="font-mono text-gray-600">
              現場で生まれた実践型DXをあなたの現場にも
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 font-mono">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">会社名</h3>
                    <p className="text-sm text-gray-600">株式会社Grayscale</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">代表取締役</h3>
                    <p className="text-sm text-gray-600">星 雄一郎</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">所在地</h3>
                    <p className="text-sm text-gray-600">茨城県水戸市笠原町728-4</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">設立</h3>
                    <p className="text-sm text-gray-600">2025年7月7日</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">資本金</h3>
                    <p className="text-sm text-gray-600">100万円</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">電話番号</h3>
                    <p className="text-sm text-gray-600">080-1011-7531</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">メール</h3>
                  <a 
                    href="mailto:info@grayscale.jp"
                    className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors cursor-pointer"
                  >
                    info@grayscale.jp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-semibold text-gray-900 mb-2">ミッション</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                製造業で10年間かけて培ったDX体験を地域の皆様に寄り添いながら、圧倒的なスピードと低価格でお届けし、地域の発展の為に貢献し、共に成長していく事を使命としています。
              </p>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-semibold text-gray-900 mb-2">ビジョン</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                茨城のすべての企業にDXの第一歩を
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}