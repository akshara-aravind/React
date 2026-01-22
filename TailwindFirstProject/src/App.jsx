import { useState } from "react"

function App() {
  const [open,setOpen] = useState(false);
  const[theme,setTheme] = useState('light')
  return (
    // <div className="bg-gray-400 p-8">
    //  <h1 className="text-3xl font-bold text-red-800 text-center">Hello world</h1>
    // </div>
  <div className={`${theme} min-h-screen dark:bg-background dark:text-primary`}>
    <div className="flex items-center justify-between  p-6 shadow-xl">
      <div className="font-bold">Logo</div>
      {/* Desktop Nav */}
      <div className="hidden sm:flex gap-2">
        <span className="">Home</span>
        <span>About</span>
        <span>Contact</span>
        <button onClick={() => setTheme(theme === 'light'? 'dark':'light')}>{theme === 'light'? '🌙':'🌞' }</button>
      </div>

      <button className="text-xl cursor-pointer sm:hidden" onClick={()=> setOpen(!open)}>☰</button>
    </div>
      {/* Mobile Nav */}
      {open && <div className="flex flex-col gap-2 p-4 text-center  dark:bg-slate-900 dark:text-white sm:hidden">
        <span className="">Home</span>
        <span>About</span>
        <span>Contact</span>
        <button onClick={()=> setTheme(theme === 'light' ? 'dark' :'light')}>{theme === 'light' ? '🌙':'🌞' }</button>
      </div>}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 text-primary dark:bg-background p-6 gap-6 text-center">
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-300">Feature One</div>
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature Two</div>
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature Three</div>
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature Four</div>
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature Five</div>
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature Six</div>
    </div>
    </div>
  )
}

export default App