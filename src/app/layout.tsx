import "./globals.css"
import Footer from "./components/Footer"
import Nav from "./components/Nav"


export const metadata = {
  title: 'Blog etuve',
  description: 'my blog',
  icons: {
    icon: './public/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body>
        <header className="bg-zinc-800  text-center p-5 h-auto">
          <Nav/>
        </header>
        <main >{children}</main>
        <footer className="w-full text-2xl text-white  text-center  capitalize font-bold">
          <Footer/>
        </footer>
        
        </body>
    </html>
  )
}
