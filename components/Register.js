import React from 'react';
import '../index.css';
import {connect} from 'react-redux'
import {adddata} from '../action/action'

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      phone:'',
      password:''
    }
  }
  
  onChangeName = (e) =>{
    this.setState({name:e.target.value})
  }

  onChangeEmail = (e) =>{
    this.setState({email:e.target.value})
  }

  onChangePhone = (e) =>{
    this.setState({phone:e.target.value})
  }

  onChangePassword = (e) =>{
    this.setState({password:e.target.value})
  }

  onSubmit = (e) =>{
    e.preventDefault()
    const { data } = this.props;
    let ob = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
    }
    let olddata = localStorage.getItem('formdata');
    data.push(ob)
    this.props.newdata(data);
    this.props.history.push('/login')
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} required />
        </div>
        <button type="submit" className="btn btn-primary btn-block" onClick={this.props.onRegister}>Register</button>
      </form>
    )
  }
}

const mapStatetoProps = (state) => {
  return{
    data:state.data
  }
}

const mapDispatchtoProps = (dispatch) => {
  return{
    newdata:(data) => {dispatch(adddata(data))}
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Register);