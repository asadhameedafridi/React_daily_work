
import React, {Component} from 'react'
import Axios from '../api/coin'
import CoinListClass from './coinListClass'
import SearchCoinClass from './searchCoinClass'
class AppClass extends Component{
 constructor(props){
     super(props)
     this.state={coins:[]}
 }

  onSearchCoin= async (coinId)=>{
      const res = await Axios.get(`/markets?vs_currency=usd&ids=${coinId}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        this.setState({coins:res.data})
  }

  async  componentDidMount(){
        const res= await Axios.get("markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false");
        this.setState({coins:res.data})
        }
 
    render(){
        return <div className="ui  container">
            <SearchCoinClass onSubmit={this.onSearchCoin} />
            <CoinListClass coins={this.state.coins} />
        
        </div>
    }
}

export default AppClass