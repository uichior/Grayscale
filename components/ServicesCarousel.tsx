import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { InteractiveCard } from '@/components/InteractiveCard'
import { ChevronLeft, ChevronRight, Code, Globe, ShoppingCart, Database, Palette, PenTool, Zap, LineChart } from 'lucide-react'

// アイコンコンポーネントをインポートして確実に利用可能にする
const icons = { Code, Globe, ShoppingCart, Database, Palette, PenTool, Zap, LineChart };

const services = [
  {
    title: "システム受託開発",
    description: "基幹システム構築",
    iconName: "Code",
    details: "業務効率化を実現する、オーダーメイドのシステムを開発します。"
  },
  {
    title: "ホームページ制作",
    description: "コーポレートサイト",
    iconName: "Globe",
    details: "ブランドの価値を最大限に引き出す、洗練されたWebサイトを制作。"
  },
  {
    title: "ECサイト構築",
    description: "オンラインストア",
    iconName: "ShoppingCart",
    details: "売上を最大化する、使いやすいECプラットフォームを構築。"
  },
  {
    title: "データベース設計",
    description: "DB最適化",
    iconName: "Database",
    details: "大規模データに対応する、効率的なデータベース設計を実施。"
  },
  {
    title: "UI/UXデザイン",
    description: "ユーザー体験設計",
    iconName: "Palette",
    details: "ユーザー中心の、直感的で美しいインターフェースを設計。"
  },
  {
    title: "ブランディング",
    description: "VI/CI設計",
    iconName: "PenTool",
    details: "企業の本質を表現する、統一感のあるブランド戦略を構築。"
  },
  {
    title: "DX推進支援",
    description: "デジタル変革",
    iconName: "Zap",
    details: "業務プロセスのデジタル化で、競争力を強化します。"
  },
  {
    title: "データ分析",
    description: "BI/可視化",
    iconName: "LineChart",
    details: "データから価値ある洞察を導き出し、意思決定を支援。"
  },
  {
    title: "Accessシステム改修",
    description: "既存DB改善",
    iconName: "Database",
    details: "Microsoft Accessシステムの最適化と機能拡張を実施。"
  }
]

export function ServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  // 自動スクロール用
  useEffect(() => {
    const container = scrollRef.current
    if (!container || isPaused) return

    const scrollSpeed = 1 // ピクセル/フレーム
    let animationId: number

    const animate = () => {
      // 半分まで到達したら最初に戻る（シームレスなループ）
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += scrollSpeed
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isPaused])

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative">
      {/* スクロールボタン */}
      <button
        onClick={() => scroll('left')}
        className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800/90 p-2 shadow-lg backdrop-blur transition-opacity hover:bg-gray-700 ${
          showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        onClick={() => scroll('right')}
        className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800/90 p-2 shadow-lg backdrop-blur transition-opacity hover:bg-gray-700 ${
          showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* カルーセルコンテナ */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-6 scrollbar-hide"
      >
        {/* サービスを2回繰り返して無限ループ風に */}
        {[...services, ...services].map((service, index) => {
          const Icon = icons[service.iconName as keyof typeof icons]
          return (
            <motion.div
              key={`${service.title}-${index}`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: (index % services.length) * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="w-80">
                <InteractiveCard
                  title={service.title}
                  description={service.description}
                  content={
                    <div className="space-y-4">
                      {Icon && <Icon className="h-8 w-8 text-gray-300" />}
                      <p className="font-mono text-sm text-gray-400">
                        {service.details}
                      </p>
                    </div>
                  }
                />
              </div>
            </motion.div>
          )
        })}
      </div>
      
      {/* スワイプインジケーター（モバイル） */}
      <div className="mt-4 flex justify-center gap-1 md:hidden">
        {Array.from({ length: Math.ceil(services.length / 2) }).map((_, i) => (
          <div
            key={i}
            className="h-1 w-8 rounded-full bg-gray-300"
          />
        ))}
      </div>
    </div>
  )
}