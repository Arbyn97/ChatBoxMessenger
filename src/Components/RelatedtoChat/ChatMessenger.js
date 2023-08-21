
import React,{Component} from 'react'
import{ v1 as UUID }  from "uuid"
import {BsFillMicFill,BsFolderSymlink,BsSend} from 'react-icons/bs'
class ChatMessenger extends Component {
    
    
state={
    messages:[],inputvalue:''
}
 setMessage=(e)=>{
     this.setState({inputvalue:e.target.value})
     console.log(e.target.value)
    //   if(this.props.send){ this.setState({inputvalue:this.props.send})}

}

render(){

 
    const sendText=(e)=>{
    
      let list={content:this.state.inputvalue,key:UUID()}
      let templist=[];
      
     if(this.state.messages){templist=this.state.messages}
      templist.push(list);
      this.setState({messages:templist,inputvalue:''})
      e.preventDefault();
    }
    const alltext=this.state.messages.map((row)=>{
        return(<div id={row.key} key={row.key}>{row.content}</div>)
    })
    return (

        
        <>
        <div>{alltext}</div>
        <div>{this.props.send}</div>
     
        <div>
           
            <input type='text' onChange={this.setMessage} value={this.state.inputvalue} />
            <button onClick={(e)=>sendText(e)}><BsSend/></button>
        </div>
        </>
    );
}
}
 
export default ChatMessenger;