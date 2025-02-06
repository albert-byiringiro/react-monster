import React from 'react'

export default function MainContent() {
  const usersInfo = [
    {
      "username": "TechGuru88",
      "email": "techguru88@example.com",
      "location": "San Francisco, CA"
    },
    {
      "username": "DigitalNomad2025",
      "email": "nomad.online@domain.net",
      "location": "Bali, Indonesia"
    },
    {
      "username": "CodeQueen",
      "email": "codequeen@sample.org",
      "location": "London, UK"
    },
    {
      "username": "AdventureDude",
      "email": "adventure.guy@provider.co",
      "location": "Banff, Canada"
    },
    {
      "username": "SunriseLover",
      "email": "sun.shine@email.info",
      "location": "Sydney, Australia"
    }
  ]

  return (
    <main>
      {usersInfo.map((user, i) => (
        <ul key={i}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </main>
  )
}
