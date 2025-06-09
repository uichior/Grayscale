import React from 'react'
import Head from 'next/head'
import { MouseFollower } from '@/components/MouseFollower'
import { CrispChat } from '@/components/CrispChat'
import { InteractiveHeader } from '@/components/InteractiveHeader'
import { InteractiveHero } from '@/components/InteractiveHero'
import { ContactForm } from '@/components/ContactForm'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ServicesCarousel } from '@/components/ServicesCarousel'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Grayscale - デジタルクリエイティブスタジオ</title>
        <meta name="description" content="アイデアを形に。革新的なデザインとテクノロジーで、新しい体験を創造します" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MouseFollower />
      <CrispChat />
      <InteractiveHeader />
      
      <main className="relative bg-white">
        <InteractiveHero />

        <section className="relative px-4 py-32">
          <div className="mx-auto max-w-7xl">
            <ScrollRevealText
              text="私たちは デジタルの 可能性を 追求し 革新的な ソリューションを 提供します"
              className="mx-auto max-w-4xl text-center font-mono text-4xl font-light leading-relaxed text-gray-800 md:text-5xl"
            />
          </div>
        </section>
        
        <section id="services" className="relative overflow-hidden bg-gray-50 px-4 py-24">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="font-mono text-5xl font-bold text-gray-900">SERVICES</h2>
              <div className="mx-auto mt-4 h-px w-24 bg-gray-400" />
            </div>
            
            <ServicesCarousel />
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="bg-gray-50 px-4 py-32">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-mono text-4xl font-bold text-gray-900 md:text-5xl">
                さあ、始めましょう
              </h2>
              
              <p className="mt-6 font-mono text-lg text-gray-600">
                どんな小さなアイデアでも大歓迎です
              </p>
              
              <div className="mt-12">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 px-4 py-8">
          <div className="mx-auto max-w-7xl text-center">
            <p className="font-mono text-sm text-gray-500">
              © 2024 Grayscale. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}