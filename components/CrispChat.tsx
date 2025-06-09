import { useEffect } from 'react'

interface CrispChatProps {
  websiteId?: string
}

export function CrispChat({ websiteId = "32d7e31d-c241-4e17-bfb9-afbbcb03ddd7" }: CrispChatProps) {
  useEffect(() => {
    // SSRチェック
    if (typeof window === 'undefined') return;
    
    // 既に読み込まれている場合はスキップ
    if ((window as any).CRISP_WEBSITE_ID === websiteId) return;
    
    try {
      // Crispの設定
      (window as any).$crisp = [];
      (window as any).CRISP_WEBSITE_ID = websiteId;
      
      // 既存のスクリプトがあれば削除
      const existingScript = document.querySelector('script[src="https://client.crisp.chat/l.js"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Crispスクリプトの読み込み
      const script = document.createElement('script');
      script.src = 'https://client.crisp.chat/l.js';
      script.async = true;
      script.id = 'crisp-chat-script';
      
      // エラーハンドリング
      script.onerror = () => {
        console.error('Failed to load Crisp chat');
      };
      
      // 初期設定
      script.onload = () => {
        try {
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
        } catch (error) {
          console.error('Crisp configuration error:', error);
        }
      };
      
      document.head.appendChild(script);
    } catch (error) {
      console.error('Crisp initialization error:', error);
    }
    
    // クリーンアップはしない（ページ遷移時に問題を起こす可能性があるため）
  }, [websiteId]);

  return null; // このコンポーネントは何もレンダリングしない
}