import React ,{Component} from 'react'

class SearchCoinClass extends Component{
    constructor(props){
        super(props)
        this.state={coin:''}
    }

    onFormSubmit=(event)=>{
        event.preventDefault();
        const coinId= this.state.coin.replace(/ +/g , "").toLowerCase();
        console.log(coinId)
        this.props.onSubmit(coinId)
    }

    renderSearchCoin(){
        return <div className="ui segement">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Search Coin </label>
                    <input type="text" hints="search coin" onChange={e=>this.setState({coin:e.target.value})}></input>
                </div>
            </form>
        </div>
    }

    render(){
        return <div>{this.renderSearchCoin()}</div>
    }
}

export default SearchCoinClass