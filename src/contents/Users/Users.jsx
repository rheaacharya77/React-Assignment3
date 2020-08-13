import React from 'react';
import './Users.css';


class Users extends React.Component{

    
        constructor(props) {
            super(props);
        
            this.state = {
              item: [],
            }
          }


          componentDidMount() {
            fetch("http://dummy.restapiexample.com/api/v1/employees")
              .then((response) => {
                console.log({ response });
                return response.json();
              })
              .then((data) => {
                console.log({ data });
                this.setState({ item: data.data});
                console.log(this.state.item)
              });
          }
        
          render() {
            return (
                 <div className="users">       
                 <div className="employee-content">
                <h1>Employee Details</h1>
                <table className="employees">
                    <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>SALARY</th>
                    <th>AGE</th>
                    </tr>
                </table>
                    {this.state.item.map((value) => (
                      <table className="employee">
                    <tr>
                     <td>{value.id}</td>
                      <td>{value.employee_name}</td>
                      <td>{value.employee_salary}</td>
                      <td>{value.employee_age}</td>
                    </tr>
                    </table>
                  
                ))
                } 
              </div>
              </div>
          
            );
          }
        }

export default Users;
