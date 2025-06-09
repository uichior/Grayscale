import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send, Check, X } from 'lucide-react'

interface ContactFormProps {
  onClose?: () => void
}

export function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // シミュレート送信
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    setTimeout(() => {
      setSubmitStatus('idle')
      setFormData({ email: '', message: '' })
      if (onClose) onClose()
    }, 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full max-w-md mx-auto"
    >
      <AnimatePresence mode="wait">
        {submitStatus === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center justify-center space-y-4 py-12 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <p className="font-mono text-lg text-gray-900">送信完了しました！</p>
            <p className="font-mono text-sm text-gray-600">すぐにご連絡いたします</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="relative space-y-6"
          >
            <div className="space-y-2">
              <h3 className="font-mono text-2xl font-bold text-gray-900">
                お気軽にお問い合わせください
              </h3>
              <p className="font-mono text-sm text-gray-600">
                アイデアから実装まで、なんでもご相談ください
              </p>
            </div>
            
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="メールアドレス"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="font-mono"
                disabled={isSubmitting}
              />
              
              <Textarea
                placeholder="どんなことでもお聞かせください..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[120px] resize-none font-mono"
                disabled={isSubmitting}
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 font-mono hover:bg-gray-800"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Send className="h-4 w-4" />
                </motion.div>
              ) : (
                <>
                  送信する
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  )
}