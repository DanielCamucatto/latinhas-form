'use client'
import Image from 'next/image'
import Form from './components/Form'
import DemandItem from './components/DemandsItem'
import DemandsList from './components/DemandsList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello voce</h1>
      <Form/>
      <DemandsList/>
    </main>
  )
}
