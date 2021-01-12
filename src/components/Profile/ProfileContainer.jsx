import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { getProfile, getStatus, updateStatus, savePhoto, updateProfile, getFriends } from '../../redux/profile-reducer'
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import ProfileContactForm from './ProfileInfo/ProfileChangeForm';
=======
import { getProfile, getStatus, updateStatus, savePhoto } from '../../redux/profile-reducer'
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091


class ProfileContainer extends React.Component {

<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state = {editMode: false}
    }


=======
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
<<<<<<< HEAD
        this.props.getFriends();
    }

    setEditMode() {
        this.setState({editMode: !this.state.editMode})
=======
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
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
<<<<<<< HEAD
        : this.state.editMode ?
        <ProfileContactForm 
        profile={this.props.profile}
        setEditMode={this.setEditMode.bind(this)}
        updateProfile={this.props.updateProfile}
        />
        :
        <Profile {...this.props}
=======
        : <Profile {...this.props}
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        profileOwner = {!this.props.match.params.userId}
        savePhoto={this.props.savePhoto}
<<<<<<< HEAD
        setEditMode={this.setEditMode.bind(this)}
        friends={this.props.friends}
=======
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
         />)
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        id: state.auth.id,
        status: state.profilePage.status,
<<<<<<< HEAD
        isAuth: state.auth.isAuth,
        friends: state.profilePage.friends
    }
}

let mapDistpatchToProps = { getProfile, getStatus, updateStatus, savePhoto, updateProfile, getFriends }
=======
        isAuth: state.auth.isAuth
    }
}

let mapDistpatchToProps = { getProfile, getStatus, updateStatus, savePhoto }
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091

export default compose(
    connect(mapStateToProps, mapDistpatchToProps),
    withRouter,
)(ProfileContainer);