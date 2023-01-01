import React from 'react';
import DisplayInfo from './DisplayInfo.js';
import AddUserInfo from './AddUserInfo.js';

class MyComponents extends React.Component{
    state = {
        users : [
            {id:1,name:"Luyen Hai Dang",age:21},
            {id:2,name:"luyenhaidangit",age:22},
            {id:3,name:"luyenhaidang",age:23},
        ]
    }

    // Add User
    HandleAddUSer = (newUser) =>{
        console.log(newUser);
        this.setState({
            users : [newUser,...this.state.users],
        })
    };

    // Delete User
    HandleDeleteUser = (idUser) =>{
        let usersClone = [...this.state.users];
        usersClone  = usersClone.filter(user => user.id !== idUser);
        this.setState({
            users: usersClone,
        });
    }

    render(){
        console.log(this.state.users);
        return(
            <>

                <AddUserInfo HandleAddUSer={this.HandleAddUSer}></AddUserInfo>
                <DisplayInfo name="Luyen Hai Dang" users={this.state.users} HandleDeleteUser={this.HandleDeleteUser}></DisplayInfo>
            </>
        );
    }
}

export default MyComponents;