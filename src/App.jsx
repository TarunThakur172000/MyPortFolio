import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import resume from './assets/Tarun_Thakur_web_developer.pdf'
import './App.css'

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen px-6">
      {/* Hero */}
      <section className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-bold">Tarun Thakur</h1>
        <p className="text-xl mt-2 text-black-400">
          Junior Full-Stack Developer (MERN)
        </p>
        <p className="mt-4 text-black-300">
        I build secure and scalable full-stack web applications using React, Node.js, Express, and MongoDB, with a strong focus on authentication, APIs, and clean architecture.

        </p>

        <div className="mt-6 flex gap-4">
          <a className="bg-blue-600 text-white hover:font-semibold px-4 py-2 rounded" href='#projects' >Projects</a>
          <a className="border px-4 py-2 rounded hover:font-semibold" target='_blank' href='https://github.com/TarunThakur172000'>GitHub</a>
          <a className="border px-4 py-2 rounded hover:font-semibold" target='_blank' href='https://www.linkedin.com/in/tarun-thakur/'>Linkdin</a>
          <a className="border px-4 py-2 rounded hover:font-semibold" target='_blank' href={resume}>Resume</a>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <p className="text-black-300">
          React, JavaScript, Node.js, Express, MongoDB, JWT, Tailwind CSS, Git
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        <div className="space-y-6" id="projects">
          <div className="border p-5 rounded">
             <div className="mt-6 flex gap-4">
            <h3 className="text-xl font-bold">CSS Generator Tool for Developers
</h3>
          <a className="border px-4 py-2 rounded" target='_blank' href='https://github.com/TarunThakur172000/CSSworld'>View Code</a>
          <a className="border px-4 py-2 rounded" target='_blank' href='https://cssworld.in/'>Live demo</a>
            
        </div>
            <p className="text-black-400 mt-2">
              An interactive tool to generate CSS code snippets. Help designers
              and developers quickly create styles.
            </p>
            <p className="text-sm mt-2 text-black-500">
              React • Tailwind CSS • Vite • Git
            </p>
          </div>

          <div className="border p-5 rounded">
            <div className="mt-6 flex gap-4">
            <h3 className="text-xl font-bold">Full Stack Website : NPPNagina</h3>
            <a className="border px-4 py-2 rounded" target='_blank' href='https://nppnagina.in/'>Live demo</a>
            </div>
            <p className="text-black-400 mt-2">
              Developed NPPNagina.in, an official municipal website using React, CSS, and Firebase to deliver civic information, public notices, and municipal services through a clean, responsive, and user-friendly interface.
            </p>
            <p className="text-sm mt-2 text-black-500">
              React • firebase • css 
            </p>
          </div>
        <div className="border p-5 rounded">
            <div className="mt-6 flex gap-4">
            <h3 className="text-xl font-bold">Freelancer Portfolio Platform with Booking Integration
</h3>
            <a className="border px-4 py-2 rounded" target='_blank' href='https://neemhari.com/'>Live demo</a>
            </div>
            <p className="text-black-400 mt-2">
             Neemhari.com – Built with React, Tailwind CSS, and Calendly API. A professional portfolio website for Ajay Bishnoi, showcasing his freelance video editing work and allowing clients to book appointments seamlessly.
            </p>
            <p className="text-sm mt-2 text-black-500">
              React • firebase • css 
            </p>
          </div>
        </div>  
        
         
       
        
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-black-300">
          <a href="mailto:tarunt5555@email.com" className='hover:underline'>tarunt5555@email.com</a>
          </p>
        <p className="text-black-300">
            <a  target='_blank' href='https://github.com/TarunThakur172000' className='hover:underline'>GitHub</a> / 
          <a  target='_blank' href='https://www.linkedin.com/in/tarun-thakur/' className='hover:underline'> Linkdin</a>
          </p>
      </section>
    </div>
  );
}
