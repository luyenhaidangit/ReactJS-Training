import React from "react";
import './DisplayInfo.scss'

class DisplayInfo extends React.Component {
    state = {
        statusUsers : true,
    }

    hideUser = ()=>{
        this.setState({
            statusUsers : !this.state.statusUsers,
        });
    }

  render() {
    const { users } = this.props;
    console.log(this.props);
    return (
      <div className="display-info">
        <div>
            <span onClick={()=>{this.hideUser()}}>
                {this.state.statusUsers === true ? "hide users" : "show users"}
            </span>
        </div>
        {
            this.state.statusUsers && <div>
            {users.map((user) => {
              return (
                <div key={user.id} className={user.age > 22 ? "red" : "white"} style={{fontSize:'16px',paddingTop:'4px',}}>
                  ID:{user.id}--Name:{user.name}--Age:{user.age} 
                  <button onClick={()=>this.props.HandleDeleteUser(user.id)}>Delete</button>
                </div>
              );
            })}
          </div>
        }
        
      </div>
    );
  }
}

export default DisplayInfo;
