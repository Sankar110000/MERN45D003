import React from "react";

function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <section class="py-24">
        <div class="max-w-5xl mx-auto px-6 text-center">
          <h1 class="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
           This is the{" "}
            <span class="text-blue-600">Home component</span>
          </h1>
          <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            This is the Home Component description
          </p>
          <div class="flex justify-center gap-4">
            <a
              href="#services"
              class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              class="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-100 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
