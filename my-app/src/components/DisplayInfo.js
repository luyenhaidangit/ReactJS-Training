import React from 'react';

class DisplayInfo extends React.Component{
   
    render(){
        const {users} = this.props;
        console.log(users);
        return(
           <div>
            {
                users.map((user)=>{
                    return(
                        <div key={user.id}>
                            ID:{user.id}--Name:{user.name}--Age:{user.age}
                        </div>
                    );
                })
            }
           </div>
        );
    }
}

export default DisplayInfo;