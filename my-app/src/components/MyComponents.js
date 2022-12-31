import React from 'react';

class MyComponents extends React.Component{
    state = {
        name: "luyenhaidangit",
        andress: "hung yen",
        age: 21,
    }

    render(){
        return(
            <div>
                {this.state.name}
                <br></br>
                {this.state.andress}
                <br></br>
                {this.state.age}
            </div>
        );
    }
}

export default MyComponents;