import React from 'react';

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">New Journal Entry</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="scripture" className="block text-gray-700 font-bold mb-2">
              Scripture
            </label>
            <textarea
              id="scripture"
              name="scripture"
              rows={3}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              placeholder="Enter scripture..."
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="observation" className="block text-gray-700 font-bold mb-2">
              Observation
            </label>
            <textarea
              id="observation"
              name="observation"
              rows={5}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              placeholder="What do you observe?"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="application" className="block text-gray-700 font-bold mb-2">
              Application
            </label>
            <textarea
              id="application"
              name="application"
              rows={5}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              placeholder="How can you apply this?"
            ></textarea>
          </div>
          <div className="mb-6">
            <label htmlFor="prayer" className="block text-gray-700 font-bold mb-2">
              Prayer
            </label>
            <textarea
              id="prayer"
              name="prayer"
              rows={5}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              placeholder="Enter your prayer..."
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
