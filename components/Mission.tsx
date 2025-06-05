import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Mission: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      title: '地域貢献',
      description: '茨城県水戸市を拠点に、地域企業の発展と共に成長します',
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: '信頼と実績',
      description: 'お客様との長期的な信頼関係を築き、確かな成果を提供します',
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: '革新的ソリューション',
      description: '最新技術を活用し、お客様に最適な解決策を提案します',
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: '持続可能な成長',
      description: '地域社会と共に持続可能な発展を目指します',
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="mission" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"
      />
      
      <div className="max-width-container section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium"
          >
            Our Mission
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            私たちの<span className="gradient-text">ミッション</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            地域に根ざし、共に成長する。それが私たちGrayscaleの使命です
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200/10 to-gray-300/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white p-10 md:p-16 rounded-3xl shadow-soft border border-gray-200">
            <h3 className="text-3xl font-display font-bold text-center mb-8 text-gray-900">私たちの想い</h3>
            <p className="text-gray-600 text-center text-lg max-w-4xl mx-auto leading-relaxed">
              「地域企業の課題解決のお手伝いができれば」という想いから、私たちGrayscaleは生まれました。
              茨城県水戸市という地域に根を下ろし、地元企業の皆様と共に歩み、共に成長していくことが私たちの願いです。
              デジタル技術を通じて、地域経済の活性化と持続可能な発展に貢献してまいります。
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group text-center"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300/20 to-gray-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-dark transition-all">
                  {value.icon}
                </div>
              </div>
              <h4 className="text-xl font-display font-bold mb-3 text-gray-900">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mission
