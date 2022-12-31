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

    changeInput = (event)=>{
        this.setState({
            name: event.target.value,
        });
    }

    onSubmitForm = (event)=>{
        event.preventDefault();
        console.log(this.state);
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
                <form onSubmit={(event)=>{this.onSubmitForm(event)}}>
                    Name:
                    <input onChange={(event)=>{this.changeInput(event)}} type="text"/>
                    <button onClick={()=>{this.clickButton()}}>Submit</button>
                </form>
                
            </span>
        );
    }
}

export default MyComponents;