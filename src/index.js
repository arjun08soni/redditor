import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';


class ReactReddit extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data_reddit: [],
      sub:''
    };
  }

  handleChange=(event)=> {
    this.setState({sub: event.target.value});
  }

  handleSubmit=(event)=> {
    console.log('A subreddit was submitted: ' + this.state.sub);
    let query=this.state.sub;
    this.setState({sub: this.state.sub});
    this.loadData(query);
    event.preventDefault();
  }
  
  loadData = async (query='pics')=>{
    let data_reddit=[];
      try{
        console.log(`query ${query}`)
        let response = await fetch(`https://www.reddit.com/r/${query}/hot/.json?`);
        let res = await response.json();
        res.data.children.map((val)=>{     
          data_reddit.push(val.data)
          this.setState({ data_reddit});
      })}
      catch(error){ this.setState({ error });}
  }

 
  render(){
    const {data_reddit,error}=this.state;
    let subreddit=['nasa','spacex','wallpaper','interestingasfuck','pics','spaceporn','earthporn','unixporn'];

    if (error) {
      return (
        <div>
          <h2 className='headbanner'><span>/r/</span>{this.state.sub} doesn't exist..</h2>
          <a id='goto_top' href="top">Search something else</a>
        </div>);
    }

    return(
      <div>
        <div className='formcontainer' id='top'>
          <InputForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            sub={this.state.sub}
            />
            <h2 className='headbanner'><span>/r/</span>{this.state.sub}</h2>
            <div className='suggestionContainer'>
              {subreddit.map(val=>
                <div className='suggestion' onClick={()=>{        //recommended subs
                this.loadData(val)
                console.log(`div clicked : ${val}`)}}> <a href="#cont">/r/{val}</a></div>
              )}
            </div>
          </div>
  
          <div className='container' id='cont'>
          { data_reddit.map((value,index) => 
          <figure className='grid-fig'>
            <a href={value.url} target='_blank'>
              <img src={value.thumbnail} alt={value.title}/> 
              <figcaption>{value.title}
              <i className="fas fa-heart"> {value.ups}</i>
              </figcaption>
            </a>
          </figure>
            )
          }
          </div>
          <a id='goto_top' href="#top">Search something else</a>

      </div>
      
      );
  }
}

let InputForm=(props)=>{ //COMPONENT FOR FORM
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        <input type="text" value={props.sub} onChange={props.handleChange} placeholder='search your favorite subreddit..'/>
      </label>
      <input type="submit" value="Search" />
    </form>
  );
}





ReactDOM.render(
  <ReactReddit/>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
