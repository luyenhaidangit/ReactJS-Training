import React from 'react';
import DisplayInfo from './DisplayInfo';
import UserInfo from './UserInfo';

class MyComponents extends React.Component{
    render(){
        const age = 26;
        return(
            <div>

                <UserInfo></UserInfo>
                <DisplayInfo name="Luyen Hai Dang" age={age}></DisplayInfo>
            </div>
        );
    }
}

export default MyComponents;