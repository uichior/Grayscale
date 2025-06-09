import { useEffect } from 'react'

interface CrispChatProps {
  websiteId?: string
}

export function CrispChat({ websiteId = "32d7e31d-c241-4e17-bfb9-afbbcb03ddd7" }: CrispChatProps) {
  useEffect(() => {
    // Crispの設定
    if (typeof window !== 'undefined') {
      (window as any).$crisp = [];
      (window as any).CRISP_WEBSITE_ID = websiteId;
      
      // Crispスクリプトの読み込み
      const script = document.createElement('script');
      script.src = 'https://client.crisp.chat/l.js';
      script.async = true;
      document.getElementsByTagName('head')[0].appendChild(script);
      
      // Crispの初期設定
      script.onload = () => {
        if ((window as any).$crisp) {
          // チャットウィジェットの設定
          (window as any).$crisp.push(['set', 'session:segments', [['website']]]);
          (window as any).$crisp.push(['set', 'user:company', 'Grayscale']);
          
          // 日本語設定
          (window as any).$crisp.push(['set', 'session:data', {
            'language': 'ja'
          }]);
          
          // カスタムカラー設定（Grayscaleテーマに合わせて）
          (window as any).$crisp.push(['set', 'appearance:color', '#1f2937']);
        }
      };
    }
    
    // クリーンアップ
    return () => {
      const script = document.querySelector('script[src="https://client.crisp.chat/l.js"]');
      if (script) {
        script.remove();
      }
      if (typeof window !== 'undefined') {
        delete (window as any).$crisp;
        delete (window as any).CRISP_WEBSITE_ID;
      }
    };
  }, [websiteId]);

  return null; // このコンポーネントは何もレンダリングしない
}