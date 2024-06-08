import React from 'react'

function Footer() {
  return (
    <section className="cta py-12 bg-gray-100 text-black text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Next Adventure?</h2>
      <p className="text-xl mb-8">Sign up now and start planning your perfect trip with ease.</p>
      <a href="/register" className="bg-black hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full">Sign Up Now</a>
    </div>
  </section>
  )
}

export default Footer

// https://api.mapbox.com/search/searchbox/v1/retrieve/{id}?session_token=[GENERATED-UUID]&access_token=pk.eyJ1Ijoibm9uZW1lIiwiYSI6ImNsd3QwdXVjNDAxbzAyanNrdnNmM2l6c2UifQ.yYthI8__O4Oq2POcbCvDnw