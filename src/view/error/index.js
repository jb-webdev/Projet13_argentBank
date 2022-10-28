import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error() {
  var navigate = useNavigate()

  setTimeout(() => {
    navigate(`/`)
  }, 3000)

  return (
    <main className="main bg-dark centerElement">
      <section className="sign-in-content">
        <h1>404</h1>
        <p>La page que vous demandez n'hexiste pas</p>
        <p>Vous aller être rediriger dans 3 secondes</p>
      </section>
    </main>
  )
}
