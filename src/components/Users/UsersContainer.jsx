import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsersCount, unfollow, toggleFollowingProgress, requestUsers } from '../../redux/users-reducer';
import Preloader from '../common/preloader/Preloader';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize,getTotalUsersCount,getUsers, getUsersSelector } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.users.length == 0 && 
        this.props.requestUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber,this.props.pageSize)
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

let mapDispatchToProps = { 
    follow, unfollow,
    setUsersCount, setCurrentPage,
    toggleFollowingProgress, requestUsers
}

const UsersConainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)



export default UsersConainer;