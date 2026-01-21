function App() {
  return (
    // <div className="bg-gray-400 p-8">
    //  <h1 className="text-3xl font-bold text-red-800 text-center">Hello world</h1>
    // </div>
  <div className="h-screen">
    <div className="flex items-center justify-between bg-slate-900 text-white p-6 shadow-xl">
      <div className="font-bold">Logo</div>
      <div className="flex flex-row gap-2">
        <span className="">Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
    <div className="grid sm:grid-cols-2 text-white p-6">
      <div className="bg-slate-500 p-4 rounded mr-4 mb-4">Feature One</div>
      <div className="bg-slate-500 p-4 rounded mr-4 mb-4">Feature Two</div>
      <div className="bg-slate-500 p-4 rounded mr-4 mb-4">Feature Three</div>
      <div className="bg-slate-500 p-4 rounded mr-4 mb-4">Feature Four</div>
      <div className="bg-slate-500 p-4 rounded mr-4 mb-4">Feature Five</div>
      <div className="bg-slate-500 p-4 rounded mr-4 mb-4">Feature Six</div>
    </div>
    </div>
  )
}

export default App