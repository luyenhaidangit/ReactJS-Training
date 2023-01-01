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

    HandleAddUSer = (newUser) =>{
        console.log(newUser);
        this.setState({
            users : [newUser,...this.state.users],
        })
    };

    render(){
        console.log(this.state.users);
        return(
            <>

                <AddUserInfo HandleAddUSer={this.HandleAddUSer}></AddUserInfo>
                <DisplayInfo name="Luyen Hai Dang" users={this.state.users}></DisplayInfo>
            </>
        );
    }
}

export default MyComponents;