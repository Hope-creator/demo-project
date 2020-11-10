import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus, savePhoto } from '../../redux/profile-reducer'
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prepProps,prevState) {
        if (this.props.match.params.userId != prepProps.match.params.userId) this.refreshProfile();
    }

    render() {
        return (!this.props.match.params.userId && !this.props.isAuth 
        ? <Redirect to="/login" /> 
        : <Profile {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        profileOwner = {!this.props.match.params.userId}
        savePhoto={this.props.savePhoto}
         />)
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        id: state.auth.id,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth
    }
}

let mapDistpatchToProps = { getProfile, getStatus, updateStatus, savePhoto }

export default compose(
    connect(mapStateToProps, mapDistpatchToProps),
    withRouter,
)(ProfileContainer);