import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';

let InputForm=(props)=>{
    return (
      <form onSubmit={props.handleSubmit}>
        <label>
          Name:
          <input type="text" value={props.sub} onChange={props.handleChange} />
        </label>
        <input type="submit" value="Search" />
      </form>
    );
}

class ReactReddit extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data_reddit: [],
      sub:'pics'
    }
  }

  handleChange=(event)=> {
    this.setState({sub: event.target.value});
  }

  handleSubmit=(event)=> {
    console.log('A subreddit was submitted: ' + this.state.sub);
    this.setState({sub: this.state.sub});
    this.componentDidMount();
    event.preventDefault();
  }

  async componentDidMount(){
    let response = await fetch(`https://www.reddit.com/r/${this.state.sub}/hot/.json?`)
    let res = await response.json();
    let data_reddit=[];
    try{
      for(let i=0;i<res.data.children.length;i++){
        data_reddit.push(res.data.children[i].data);
        this.setState({ data_reddit});
      }
    } catch (error) {
      this.setState({ error });
    }
  }

  render(){
    const {data_reddit,error}=this.state;
    if (error) {
      return <h1><span>/r/</span>{this.state.sub} doesn't exist..</h1>
    }
    return(
      <div>
          <div className='formcontainer'>
          <InputForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            sub={this.state.sub}/>
            <h2 className='headbanner'><span>/r/</span>{this.state.sub}</h2>
          </div>
          

          <div className='container'>
          { data_reddit.map((value,index) => 
          <figure className='grid-fig'>
            <a href={value.url} target='_blank'>
              <img src={value.thumbnail} alt={value.title}/> 
              <figcaption>{value.title}</figcaption>
            </a>
          </figure>
            )
          }
          </div>
      </div>
      
      );
  }
}

ReactDOM.render(
  <ReactReddit/>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
