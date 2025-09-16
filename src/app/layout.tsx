export const metadata = {
  title: 'SnapNfit – Fitness at your Snap',
  description: 'Book certified trainers who come to you — home, office, or park.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
