import { useState } from "react"

export default  function Navbar({movies}){
      const [query, setQuery] = useState('')
      const movieCount = movies.length
    return(
        <>
            <nav className="nav-bar">
                <div className="logo">
                    <span role="img">🍿</span>
                    <h1>usePopcorn</h1>
                </div>
                <input
                    className="search"
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <p className="num-results">Found <strong>{movieCount}</strong> results</p>
            </nav>
        </>
    )
}