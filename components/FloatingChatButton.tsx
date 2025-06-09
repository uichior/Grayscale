import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export function FloatingChatButton() {
  const [isVisible, setIsVisible] = useState(true)

  const openCrispChat = () => {
    if (typeof window !== 'undefined' && (window as any).$crisp) {
      // Crispチャットを開く
      (window as any).$crisp.push(['do', 'chat:open']);
    }
  }

  // Crispが読み込まれているかチェック
  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={openCrispChat}
        className="fixed bottom-8 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 sm:right-8"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-20 z-40 hidden rounded-lg bg-gray-900 px-3 py-2 text-sm font-mono text-white sm:right-24 sm:block"
      >
        チャットで相談
        <div className="absolute -right-2 top-1/2 h-0 w-0 -translate-y-1/2 border-b-4 border-l-8 border-t-4 border-b-transparent border-l-gray-900 border-t-transparent" />
      </motion.div>
    </>
  )
}