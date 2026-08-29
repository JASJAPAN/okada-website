# 株式会社オカダ ホームページ

熊本の飲食店向けに、厨房機器・店舗設計/内装・飲食店トータルコンサルティングを主軸にしたSEO対応サイトです。

## 公開

- Node.js 18+ 推奨
- `npm install`
- `npm run build`
- NetlifyのPublish directoryは `_site`
- Netlifyは本番URLを環境変数 `URL` として自動提供するため、canonical / sitemap / robots.txt は本番ドメインで生成されます。

## 問い合わせフォーム

フォームはNetlify Forms対応です。送信内容を `okada250421@gmail.com` に通知するには、サイト公開後にNetlifyで次を1回だけ設定してください。

1. Netlifyの対象サイトを開く
2. `Project configuration` → `Notifications` → `Emails and webhooks`
3. `Form submission notifications` を追加
4. Formは `contact` を選択
5. 通知先メールに `okada250421@gmail.com` を設定

フォームには `email` フィールドがあるため、Netlify通知メールのReply-Toに問い合わせ者のメールアドレスが設定されます。

## ブログ投稿

`/admin/` がブログ・実績の管理画面です。Decap CMS + Netlify Git Gatewayを使用する構成です。

管理画面から以下を編集できます。
- 記事タイトル
- SEOタイトル
- 検索結果説明
- カテゴリー
- アイキャッチ画像
- altテキスト
- URL
- 本文
- 施工・支援実績の追加・編集

## SEO実装済み

- 各ページ固有のtitle / meta description
- canonical
- Open Graph / Twitter Card
- WebSite / Organization / ProfessionalService / Service 構造化データ
- 熊本×厨房機器、熊本×店舗内装、熊本×飲食店コンサルの専用サービスページ
- 絶対URLのXML sitemap
- robots.txt
- ブログ・実績・サービスページ間の内部リンク
- 施工・支援実績一覧＋業態別対応事例6ページ
- SEOブログ13本（既存3本＋新規10本）
- semantic HTML / alt / mobile responsive
- 管理画面のnoindex

## 公開後にやること

1. 独自ドメインを設定（可能なら会社名に近いドメイン推奨）
2. Google Search Consoleで所有権確認
3. `/sitemap.xml` を送信
4. トップページと主要3サービスページをURL検査からインデックス登録リクエスト
5. Googleビジネスプロフィールのウェブサイト欄に本サイトを設定
6. ブログを月2〜4本程度、実体験・事例・具体的な数字を含めて継続更新
7. 掲載許諾が取れた案件は、実績ページの匿名事例を実店舗写真・具体的な支援内容へ順次差し替え
