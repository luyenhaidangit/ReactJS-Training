import React from 'react';
import DisplayInfo from './DisplayInfo';
import UserInfo from './UserInfo';

class MyComponents extends React.Component{
    state = {
        users : [
            {id:1,name:"Luyen Hai Dang",age:21},
            {id:2,name:"luyenhaidangit",age:22},
            {id:3,name:"luyenhaidang",age:23},
        ]
    }
    render(){
        return(
            <div>

                <UserInfo></UserInfo>
                <DisplayInfo name="Luyen Hai Dang" users={this.state.users}></DisplayInfo>
            </div>
        );
    }
}

export default MyComponents;