import './globals.css'

export const metadata = {
  title: 'TODOアプリ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
