import React, {useState} from 'react'
const SearchBox =(props)=>{
const [searchCoin , setSearchCoin]=useState('')
   const onFormSubmit=(event)=>{
       event.preventDefault()
       const coinId= searchCoin.replace(/ +/g, "").toLowerCase()
        props.onSearchCoin(coinId)
    }
    return <div className="ui segment">
        <form className="ui form" onSubmit={onFormSubmit}>
            <div className="field">
                <label>Search Coin on function Component</label>
                <input type="text" hint="Search a coin"
                onChange={e=>setSearchCoin(e.target.value)}
                ></input>
            </div>
        </form>
    </div>
}
export default SearchBox