import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CaravanBest',
  description: 'Developed by Dimitrios Malkotsis',
  generator: '-',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  )
}
