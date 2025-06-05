import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const companyInfo = [
    { label: '会社名', value: '株式会社Grayscale' },
    { label: '所在地', value: '茨城県水戸市' },
    { label: '設立', value: '2025年' },
    { label: '代表者', value: '代表取締役' },
  ]

  return (
    <section id="about" className="py-24 relative bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50/50"></div>
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
            About Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            私たちについて
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            茨城県水戸市から、テクノロジーで地域の未来を切り拓く
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-bold text-gray-900">
              地域と共に創る<span className="gradient-text">イノベーション</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              株式会社Grayscaleは、地域に根付いた企業として、茨城県水戸市を中心に活動しています。
              私たちは、地元企業が抱える課題を深く理解し、最適なデジタルソリューションを提供することで、
              地域経済の活性化に貢献します。
            </p>
            <p className="text-gray-600 leading-relaxed">
              DXコンサルティング、システムの受託開発、業務管理アプリの製作・販売を通じて、
              お客様のビジネスを次のステージへと導きます。
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-6 pt-4"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-4xl font-bold gradient-text"
                >
                  100+
                </motion.div>
                <p className="text-sm text-gray-600 mt-1">プロジェクト実績</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-4xl font-bold gradient-text"
                >
                  5年+
                </motion.div>
                <p className="text-sm text-gray-600 mt-1">業界経験</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="text-4xl font-bold gradient-text"
                >
                  24/7
                </motion.div>
                <p className="text-sm text-gray-600 mt-1">サポート体制</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-gray-300/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-soft border border-gray-200">
              <h4 className="text-2xl font-display font-bold mb-8 text-gray-900">企業情報</h4>
              <dl className="space-y-6">
                {companyInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center group"
                  >
                    <dt className="font-medium text-gray-700 w-32 group-hover:text-gray-900 transition-colors">{info.label}</dt>
                    <dd className="text-gray-600 flex-1 pl-4 border-l-2 border-gray-200 group-hover:border-gray-400 transition-colors">{info.value}</dd>
                  </motion.div>
                ))}
              </dl>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 mt-8 text-gray-700 font-medium hover:text-gray-900 transition-colors"
              >
                お問い合わせはこちら
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
