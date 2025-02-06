import React from 'react'

export default function WelcomeMessage() {
  const name = "Albert"
  const today = new Date()

  return (
    <div className="">
        <h1>Hello, {name}!</h1>
        <p>Welcome to learning JSX! {today.getDate()}</p>
    </div>
  )
}
