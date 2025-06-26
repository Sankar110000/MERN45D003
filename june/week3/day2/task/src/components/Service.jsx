import React from "react";

function Service() {
  return (
    <div className="h-screen w-screen flex justify-center items-center p-[5rem]">
      <form class="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg space-y-6">
        <h2 class="text-2xl font-bold text-gray-800 text-center">
          Add New Service
        </h2>

        <div>
          <label
            for="serviceName"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Service Name
          </label>
          <input
            id="serviceName"
            type="text"
            placeholder="e.g. Web Development"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            for="description"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            placeholder="Brief description of the service"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label
            for="price"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Price (USD)
          </label>
          <input
            id="price"
            type="number"
            step="0.01"
            placeholder="e.g. 199.99"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            for="category"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          <select
            id="category"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            <option value="web">Web Development</option>
            <option value="design">UI/UX Design</option>
            <option value="seo">SEO</option>
            <option value="marketing">Digital Marketing</option>
          </select>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Add Service
        </button>
      </form>
    </div>
  );
}

export default Service;
