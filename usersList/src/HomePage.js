import react from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import history from './History';


class HomePage extends Component{
   constructor(props){
       super(props);
       this.state = {

       };
       this.handleUserDetails = this.handleUserDetails.bind(this);
   }
   componentWillMount(){
     axios.get(`https://api.github.com/users`)
        .then(response => response)
         .then(result =>  {
            this.setState({ users: result.data });
         })
   }
   handleUserDetails(user,index){
    let usersList = this.state.users?this.state.users:[];
    usersList&&usersList.length>0?usersList.forEach((element ,j)=>{
           if(user.id.toString() === element.id.toString()){
               this.setState({selectedUser :element},function(){
                   console.log(this.state.selectedUser)
                   history.push({
                    pathname: "/userDetails",
                    state: { selectedUser: this.state.selectedUser }
                   });
               })
           }
    }):""
   }
   render(){
       if(this.state.users){
           var usersData =[];
           this.state.users&&this.state.users.length>0?this.state.users.forEach((user,index)=>{
            usersData.push(
                <div key = {index} className="user"   onClick = {(e) => this.handleUserDetails(user,index)}>
                 <span className="user-image"><img className = "image" src={user.avatar_url}/></span>  
                 <span className="user-name">{user.login}</span>  
                </div>
            );
           }):"";
        return (
            <div className="git-hub-users">
            <div className="users-list">Users List</div>
              { usersData}
            </div>
           );
       }else{
           return (
               <div className="loading">Loading</div>
           )
       }
   }
}
export default HomePage;