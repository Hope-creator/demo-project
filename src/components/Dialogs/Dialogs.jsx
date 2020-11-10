import React from 'react';
import { Field, Form } from 'react-final-form';
import { Redirect } from 'react-router-dom';
import { composeValidators, maxLength, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsContol/FormsControl';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
    let dialogsPage = props.dialogsPage

    let dialogsElements = dialogsPage.dialogsItems.map((d) =>
        <DialogItem name={d.name} id={d.id} media_src={d.media_src} />)

    let messagesElements = dialogsPage.dialogsMessages.map((m) =>
        <Message message={m.message} />)

   let onAddMessage = (values) => {
        props.addMessage(values);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />;

    
    return (
        <div className={s.dialogs}>

            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messagesWrapper}>
                <AddMessageForm onAddMessage={onAddMessage}/>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div >
    )
}

const AddMessageForm = (props) => {
    const onSubmit = (values) => {
        props.onAddMessage(values.newMessageBody)
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) =>
                <form onSubmit={handleSubmit}>
                    <div className={s.sendButton}>
                        <button className={s.message_button} type="submit">Send</button>
                        <button className={s.message_button} type="button">add file</button>
                        <div className={s.message_area}>
                            <Field name="newMessageBody" validate={ composeValidators(required, maxLength(100))} component={Textarea} placeholder="Enter your message" />
                        </div>
                    </div>
                </form>}
        />

    )
}

export default Dialogs;