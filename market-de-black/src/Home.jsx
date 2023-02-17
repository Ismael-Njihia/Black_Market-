import React from 'react'
import TextField from '@mui/material/TextField'

const Home = () => {
  return (
    <div>
        <h1>Market De Black</h1>
        <h3>Discover a Treasure Trove of Second Hand Finds on Market De Black!</h3>
        <div className="search">
            <TextField id="outlined-search" label="Search field" type="search" />
        
            </div>
    </div>
  )
}

export default Home
