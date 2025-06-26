import React from 'react'

function Contacts() {
  return (
    <div className='flex justify-center items-center p-[5rem]' id="#contact">
        <form class="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md space-y-6">
    <h2 class="text-2xl font-bold text-center text-gray-800">Contact Us</h2>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1" for="name">Name</label>
      <input id="name" type="text" placeholder="John Doe"
             class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1" for="email">Email</label>
      <input id="email" type="email" placeholder="john@example.com"
             class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1" for="phone">Phone</label>
      <input id="phone" type="tel" placeholder="123-456-7890"
             class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1" for="message">Message</label>
      <textarea id="message" rows="4" placeholder="Your message here..."
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
    </div>

    <button type="submit"
            class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300">
      Send Message
    </button>
  </form>
    </div>
  )
}

export default Contacts