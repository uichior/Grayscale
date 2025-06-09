import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle } from 'lucide-react'

export function QuickContact() {
  const contactMethods = [
    {
      icon: Phone,
      label: '電話で相談',
      sublabel: '080-1011-7531',
      action: () => {
        if (typeof window !== 'undefined') {
          window.location.href = 'tel:080-1011-7531';
        }
      },
      color: 'hover:bg-gray-100',
    },
    {
      icon: Mail,
      label: 'メールで相談',
      sublabel: 'info@grayscale.jp',
      action: () => {
        if (typeof window !== 'undefined') {
          window.location.href = 'mailto:info@grayscale.jp';
        }
      },
      color: 'hover:bg-gray-100',
    },
    {
      icon: MessageCircle,
      label: 'チャットで相談',
      sublabel: 'すぐに返信します',
      action: () => {
        try {
          if (typeof window !== 'undefined' && (window as any).$crisp) {
            (window as any).$crisp.push(['do', 'chat:open']);
          }
        } catch (error) {
          console.log('Crisp chat is not loaded yet');
        }
      },
      color: 'hover:bg-gray-100',
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="font-mono text-2xl font-bold text-gray-900">
          お気軽にお問い合わせください
        </h3>
        <p className="mt-2 font-mono text-sm text-gray-600">
          ご都合の良い方法でご連絡ください
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {contactMethods.map((method, index) => {
          const Icon = method.icon
          
          return (
            <motion.button
              key={method.label}
              onClick={method.action}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-left transition-all ${method.color}`}
            >
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-900">
                  <Icon className="h-6 w-6 text-gray-600 transition-colors group-hover:text-white" />
                </div>
                
                <h4 className="font-mono text-lg font-semibold text-gray-900">
                  {method.label}
                </h4>
                
                <p className="mt-1 font-mono text-sm text-gray-500">
                  {method.sublabel}
                </p>
              </div>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
              />
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}