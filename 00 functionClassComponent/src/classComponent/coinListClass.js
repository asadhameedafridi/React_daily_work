import React, {Component} from 'react'

class CoinListClass extends Component{

    renderCoins(){  
        console.log(this.props)
      return  this.props.coins.map(c=>{
            return <li key={c.id} >{c.name}</li>
        })
    }
    render(){
        
        return <div className="ui segment">{this.renderCoins()}</div>
    }
}

export default CoinListClass