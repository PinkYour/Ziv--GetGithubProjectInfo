import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { rootState } from '../../store'
import { IAdmin, IAdminActionTypes } from '../../store/reducers/admin';
import { IUser, IUserActionTypes } from '../../store/reducers/user';

interface Props {
  admin?: IAdmin,
  user?: IUser,
  changeUserName?(): void,
  changeAdminName?(): void,
}
class Login extends Component<Props> {
  changeUserName=()=> {
    this.props.changeUserName && this.props.changeUserName()
  }
  changeAdminName=()=> {
    this.props.changeAdminName && this.props.changeAdminName()
  }
  render() {
    return (
      <div>
        <span>{this.props.admin?.name}</span>
        <br />
        <span>{this.props.user?.name}</span>
        <br />
        <button onClick={this.changeUserName}>user</button>
        <br />
        <button onClick={this.changeAdminName}>Admin</button>
      </div>
    )
  }
}
const mapStateToProps = (state: rootState) => {
  return { ...state.admin, ...state.user }
  // return state
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeUserName: () => {
    dispatch({
      type: IUserActionTypes.CHANGE,
      payload: {user:{name:'张学友'}}
    })
  },
  changeAdminName: () => {
    dispatch({
      type: IAdminActionTypes.CHANGE,
      payload: {admin:{name:'刘德华'}}
    })
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)