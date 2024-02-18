import { useState } from 'react'
import { Container } from "react-bootstrap";
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
        <Header />
          <main className="py-3 bg-dark text-light">
          <Container>
            Content
          </Container>
      </main>
        <Footer />
    </>

  )
}

export default App
