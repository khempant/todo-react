import React, {Component} from 'react'
import Plan from './plan'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// creating UI for todo

class App extends Component {
  // storing todos in array items and manage through state.
  state = {
    items:[],
    text:""
  }
  // creating event handlers to track user entered
  // value in input feild and listen onClick event on button.
  
  handleChange = e => {
    this.setState({text: e.target.value})
  }
  //using onclick event in button, i am adding input value
  // that i stored in state to the items array.
  handleAdd = e => {
    if (this.state.text !==""){
      const items = [...this.state.items, this.state.text];
      this.setState({items: items, text:""});
    }
  }
  handleDelete = id => {
    console.log("Deleted", id);
    const Olditems = [...this.state.items]
    console.log("Olditems", Olditems);
    const items = Olditems.filter((element, i) =>{
      return i !== id
    })
    console.log("Newitems", items);
    this.setState({items: items});
  }
  
  render(){
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-5">
          <h2 className="text-center">Todays Plan</h2>
          <div className="row">
            <div className="col-9">

              
              <input type="text" className="form-control" placeholder="Write Plan Here " value={this.state.text}onChange={this.handleChange} />
            </div>
            <div className="col-2">
              <button className="btn btn-warning px-5 font-weight-bold"onClick={this.handleAdd}> Add </button>
            </div>
            <div className="container-fluid">
              <ul className="list-unstyled row m-5">

               
              {
                this.state.items.map((value, i)=>{
                  return <Plan key={i} id={i} value=
                  {value} sendData={this.handleDelete}/>
                })
              }
               
              </ul>
            </div>
          </div>


          </div>
        </div>
       </div>
       
    )
  }
}

export default App;