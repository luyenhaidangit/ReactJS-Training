import React from 'react';

class MyComponents extends React.Component{
    state = {
        name: "luyenhaidangit",
        andress: "hung yen",
        age: 21,
    }

    clickButton = ()=>{
        console.log("ok");
        console.log(this.state.name);
        this.setState({
            name: "luyen hai dang",
        });
    }

    render(){
        return(
            <span>
                {this.state.name}
                <br></br>
                {this.state.andress}
                <br></br>
                {this.state.age}
                <br></br>
                <button onClick={(event)=>{this.clickButton(event)}}>Click me</button>
            </span>
        );
    }
}

export default MyComponents;