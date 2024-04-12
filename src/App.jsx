import { useState } from 'react'
import './App.css'

function App() {
  return(
    <>
    <h1 className="bg-green-400">
      Hello world!
    </h1>

<figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
<img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://plus.unsplash.com/premium_photo-1672109350933-a8ad553f4758?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="384" height="512" />
<div class="pt-6 md:p-8 text-center md:text-left space-y-4">
  <blockquote>
    <p class="text-lg font-medium">
      “Tailwind CSS is the only framework that I've seen scale
      on large teams. It’s easy to customize, adapts to any design,
      and the build size is tiny.”
    </p>
  </blockquote>
  <figcaption class="font-medium">
    <div class="text-sky-500 dark:text-sky-400">
      Sarah Dayan
    </div>
    <div class="text-slate-700 dark:text-slate-500">
      Staff Engineer, Algolia
    </div>
  </figcaption>
</div>
</figure>

</>
  )
}

export default App;
