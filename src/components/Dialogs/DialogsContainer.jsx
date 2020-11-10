import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage,
        newDialogMessage: state.dialogsPage.newDialogMessage,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        addMessage: (message) => {
            dispatch(addMessageActionCreator(message));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);