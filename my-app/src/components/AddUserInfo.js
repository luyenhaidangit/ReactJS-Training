import React, { useState } from 'react';

// class AddUserInfo extends React.Component{
//     state = {
//         name: "luyenhaidangit",
//         andress: "hung yen",
//         age: 21,
//     }

//     clickButton = ()=>{
//         // console.log("ok");
//         // console.log(this.state.name);
//         // this.setState({
//         //     name: "luyen hai dang",
//         // });
//         this.props.HandleAddUSer({
//             id: (Math.floor(Math.random() * 100) + 1)+"-random",
//             name: this.state.name,
//             age: this.state.age,

//         });
//     }

//     changeInput = (event)=>{
//         this.setState({
//             name: event.target.value,
//         });
//     }

//     onSubmitForm = (event)=>{
//         event.preventDefault();
//         console.log(this.state);
//     }

//     render(){
//         return(
//             <div>
//                 <span>{this.state.name}</span>
//                 <br></br>
//                 <span>{this.state.andress}</span> 
//                 <br></br>
//                 <span>{this.state.age}</span>
//                 <br></br>
//                 <form onSubmit={(event)=>{this.onSubmitForm(event)}}>
//                     Name:
//                     <input onChange={(event)=>{this.changeInput(event)}} value={this.state.name} type="text"/>
//                     <button onClick={()=>{this.clickButton()}}>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

const AddUserInfo = (props) => {
    //State
    const [name, setName] = useState("");
    const [andress, setAndress] = useState("Hung Yen");
    const [age, setAge] = useState("21");

    //Function
    const changeInput = (event) => {
        setName(event.target.value);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        props.HandleAddUSer({
            id: (Math.floor(Math.random() * 100) + 1) + "-random",
            name: name,
            age: age,
        });
    }

    return (
        <div>
            <form onSubmit={(event) => { onSubmitForm(event) }}>
                Name:
                <input onChange={(event) => { changeInput(event) }} value={name} type="text" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddUserInfo;