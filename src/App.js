import React from 'react'
import ReactDOM from 'react-dom'
import TweetButton from './TweetButton'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.handleRequest = this.handleRequest.bind(this)
        this.state = {
            author: '',
            quoteText: ''
        }
    }

    componentDidMount(){
        this.handleRequest()
    }

    handleRequest() {
        fetch('https://api.quotable.io/random')
            .then((res) => {
                if (!res.status === 200) {
                    console.log('Cannot Fetch Data');
                }
                return res.json()
            })
            .then((data) => {
                this.setState({
                    quoteText: data.content,
                    author: data.author
                })
            })
            .catch((error) => console.log(error))
    }

    render () {
        return (
            <div className='app'>
                <div className='title-container'>
                    <h1 className='title'>Get inspired or something</h1>
                </div>
                <div id='quote-box'>
                    <p id='text'>{this.state.quoteText}</p>
                    <h3 id='author'>- {this.state.author}</h3>
                    <div className='buttons-container'>
                        <TweetButton author={this.state.author} quoteText={this.state.quoteText} />
                        <button onClick={this.handleRequest} id='new-quote'>New Quote</button>
                    </div>
                </div>
            </div>
        )    
    }
}