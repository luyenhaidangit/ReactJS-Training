import React from 'react';

class DisplayInfo extends React.Component{
   
    render(){
        console.log(this.props);
        const {name,age} = this.props;
        return(
           
            <div>
                <br></br>
                <br></br>
                <span>My name is {name}</span>
                <br></br>
                <span>My age is {age}</span>
            </div>
        );
    }
}

export default DisplayInfo;