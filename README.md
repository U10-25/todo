# TODOアプリ

Next.js (App Router) 製のシンプルなTODOアプリ。データはブラウザの localStorage に保存されます。

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

`next.config.js` で `output: 'export'` を指定した静的サイトとして `out/` にビルドされ、GitHub Pages・Vercel の両方にデプロイできます。
