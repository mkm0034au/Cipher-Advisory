import './globals.css'

export const metadata = {
  title: 'Cipher Advisory Group',
  description: 'Supply chain consulting and custom software solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
