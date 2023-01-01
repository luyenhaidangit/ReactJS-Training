import React from 'react';

class AddUserInfo extends React.Component{
    state = {
        name: "luyenhaidangit",
        andress: "hung yen",
        age: 21,
    }

    clickButton = ()=>{
        // console.log("ok");
        // console.log(this.state.name);
        // this.setState({
        //     name: "luyen hai dang",
        // });
        this.props.HandleAddUSer({
            id: (Math.floor(Math.random() * 6) + 1)+"-random",
            name: this.state.name,
            age: this.state.age,
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
            <div>
                <span>{this.state.name}</span>
                <br></br>
                <span>{this.state.andress}</span> 
                <br></br>
                <span>{this.state.age}</span>
                <br></br>
                <form onSubmit={(event)=>{this.onSubmitForm(event)}}>
                    Name:
                    <input onChange={(event)=>{this.changeInput(event)}} value={this.state.name} type="text"/>
                    <button onClick={()=>{this.clickButton()}}>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfo;