import React from 'react'

function Footer() {
  return (
    <section className="cta py-12 bg-gray-100 text-black text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Next Adventure?</h2>
      <p className="text-xl mb-8">Sign up now and start planning your perfect trip with ease.</p>
      <a href="/signup" className="bg-black hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full">Sign Up Now</a>
    </div>
  </section>
  )
}

export default Footer