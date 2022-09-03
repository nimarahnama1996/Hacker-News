import React, { Fragment } from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {

    const {handleSearch,query} = useGlobalContext()

  return (
    <Fragment>
        <form className='search-form' onSubmit={(e) => e.preventDefault()}>

        <h2>Search hacker news</h2>

        <input 
        type='text' 
        className='form-input' 
        placeholder='Search...' 
        value={query}
        onChange={(e) => handleSearch(e.target.value)}    
        />

        </form>
    </Fragment>
  )
}

export default SearchForm