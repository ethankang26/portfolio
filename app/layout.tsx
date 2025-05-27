import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ethan Portfolio',
  description: 'Created by Ethan Kang',
  generator: 'ethan.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
