import './globals.css'

export const metadata = {
  title: 'Sapataria Paraná',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={''}>{children}</body>
    </html>
  )
}
