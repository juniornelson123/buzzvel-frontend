'use client'

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ email, message });
    }
    // Clear form
    setEmail('');
    setMessage('');
  };

  return (
    <div className="mx-auto px-4 py-4 flex h-[610px] lg:h-[779px] justify-center items-center bg-orange-600 flex-col relative">
      <h2 className="text-center text-4xl lg:text-5xl text-white font-extrabold relative">Ready for your next project?</h2>
      <p className="text-center mt-8 lg:w-2/4 text-white text-2xl font-extralight">Sit elit feugiat turpis sed integer integer accumsan turpis.</p>
      <form onSubmit={handleSubmit} className="w-full lg:w-1/4 mt-8 items-center">
        
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none "
          placeholder="Enter your email"
        />

        <label htmlFor="message" className="block text-sm font-medium text-white mt-4">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
          placeholder="What are you say ?"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-8 px-8 py-3 items-center border-2 border-gray-900 bg-gray-900 text-white font-semibold rounded-lg hover:border-2 hover:bg-transparent hover:text-orange-600 text-lg"
          >
            Request Demo
          </button>
        </div>
      </form>
    </div>
  );
}
