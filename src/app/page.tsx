'use client'
import Image from 'next/image'
import Form from './components/Form'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello voce</h1>
      <Form/>
    </main>
  )
}
