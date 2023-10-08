import '../app/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import Navbar from './components/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Latinhas LCC',
  description: 'Olá bem vindo ao Latinhas LCC',
}

const CustomToastContainer = () => {
  return <ToastContainer position='top-center' autoClose={3000}/>
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CustomToastContainer/>
      <body className={inter.className}>
      <Navbar/>
        {children}
        </body>
    </html>
  )
}
