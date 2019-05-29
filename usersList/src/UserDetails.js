import react from 'react';
import React, { Component } from 'react';
import './App.css';

class UserDetails extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  componentWillMount(){
    let userObj = this.props.location && this.props.location.state&&this.props.location.state.selectedUser?this.props.location.state.selectedUser:{};
    this.setState({user:userObj});
  }
  render(){
  var user = this.state.user?this.state.user:{};
  let userData=[];
  if(Object.keys(user).length>0){
   var keysList = Object.keys(user);
   for(var i = 0;i<keysList.length;i++){
     if(user[keysList[i]]){
        userData.push(
        <table className ="table">
			<tbody className ="table-body">
            <tr className ="table-row">
			 <td className ="table-column">{keysList[i]}</td>
             <td className ="table-column">{user[keysList[i]]}</td>
             </tr>
			</tbody>
		</table>
        ) 
     }
   }
  }
    return(
          <div className="user-details">
          <div className ="user-data">
          <span className="user-image"><img className = "image" src={user.avatar_url}/></span>  
          <span className="name">{user.login}</span>  
          </div>
          {userData}
          </div>
      );
  }
}
export default UserDetails;