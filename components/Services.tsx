import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: 'DXコンサルティング',
      description: 'お客様のビジネス課題を分析し、最適なデジタル化戦略を提案。業務効率化から新規事業創出まで幅広くサポートします。',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ['業務プロセス分析', 'デジタル化戦略立案', '導入支援・教育']
    },
    {
      title: 'システム受託開発',
      description: 'お客様のニーズに合わせたオーダーメイドのシステムを開発。要件定義から保守まで一貫してサポートします。',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: ['Webアプリケーション開発', 'モバイルアプリ開発', 'システム統合・API連携']
    },
    {
      title: '業務管理アプリ',
      description: '中小企業向けの使いやすい業務管理アプリを開発・販売。日々の業務を効率化し、生産性向上を実現します。',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      features: ['在庫管理システム', '顧客管理システム', '勤怠管理システム']
    }
  ]

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
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
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            ビジネスを加速する<span className="gradient-text">3つのソリューション</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            最新技術と豊富な経験を活かし、お客様のデジタル変革を全面的にサポートします
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white p-8 rounded-2xl shadow-soft card-hover border border-gray-200"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-200/30 to-gray-300/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-dark transition-shadow">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-gray-300 transition-colors">
                        <svg className="w-3 h-3 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm group-hover/item:text-gray-900 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 text-gray-700 font-medium text-sm flex items-center gap-2 group/btn hover:text-gray-900"
                >
                  詳しく見る
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
