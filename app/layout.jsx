import "@/styles/globals.scss";

export const metadata = {
  title: 'The Hunter Wilhelm INDEX',
  description: 'Explore and discover the world of Hunter Wilhelm.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
