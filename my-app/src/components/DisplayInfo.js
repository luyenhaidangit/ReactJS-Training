import React from "react";

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
    console.log(users);
    return (
      <div>
        <div>
            <span onClick={()=>{this.hideUser()}}>
                {this.state.statusUsers === true ? "hide users" : "show users"}
            </span>
        </div>
        {
            this.state.statusUsers && <div>
            {users.map((user) => {
              return (
                <div key={user.id} className={user.age > 22 ? "red" : "blue"}>
                  ID:{user.id}--Name:{user.name}--Age:{user.age}
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
