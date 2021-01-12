import React from 'react';
import { Field, Form } from 'react-final-form';
<<<<<<< HEAD
import { maxLength } from '../../utils/validators/validators';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import TextareaAutosize from 'react-textarea-autosize';
import profilePic from '../../img/profilePic.png'


const Dialogs = ({ messagesProfiles, dialogsMessages, onAddMessage, currentConversation, ownerProfile, ownerId, conversationsSet },) => {

    if (!messagesProfiles || !dialogsMessages || !ownerProfile) return <div>loading</div>;

    let arrayFromSet = Array.from(conversationsSet);

    let orderedMessagesProfiles = messagesProfiles.sort(function(a, b){ 
        return arrayFromSet.indexOf(a.userId) - arrayFromSet.indexOf(b.userId);
      });

    let conversations = orderedMessagesProfiles.map((p) =>
        <DialogItem key={p.userId} name={p.fullName} id={p.userId} media_src={p.photos.small || profilePic} />)

    let messages = dialogsMessages.map((m) => m.userId == currentConversation.userId ?
        <Message key={m.id} profile={m.fromId == ownerProfile.userId ?
            ownerProfile
            : messagesProfiles.find((profiles) => profiles.userId == m.fromId)
        } message={m.message} fromId={m.fromId} ownerId={ownerId} profilePic={profilePic} date={m.date} /> : null)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {conversations}
            </div>
            {conversationsSet.has(+currentConversation.userId) ? <div className={s.messagesWrapper}>
                <div className={s.messagesForm}>
                    <AddMessageForm currentConversation={currentConversation} ownerId={ownerId} onAddMessage={onAddMessage} />
                </div>
                <div className={s.messages}>
                    {messages}
                </div>
            </div> 
            : null}
            
=======
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
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
        </div >
    )
}

const AddMessageForm = (props) => {
<<<<<<< HEAD

    const onSubmit = (values) => {
        props.onAddMessage(props.currentConversation, props.ownerId, values.newMessageBody);
=======
    const onSubmit = (values) => {
        props.onAddMessage(values.newMessageBody)
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
    }

    return (
        <Form
<<<<<<< HEAD
        initialValues={{newMessageBody: ''}}
            onSubmit={onSubmit}
            render={({ handleSubmit, values, form }) =>
                <form onSubmit={handleSubmit}>
                    <div className={s.sendForm}>
                        {values.newMessageBody ? <button className={s.messageButton} type="submit" onClick={()=>{onSubmit(values); form.reset()}}>Send</button> : null}
                        <div className={s.message_area}>
                            <Field validate={maxLength(1000)} className={s.formInputText}
                                name='newMessageBody'
                            >{({ input, meta }) => (
                                <div>
                                    <TextareaAutosize placeholder="Enter your message" {...input} maxRows='5' minRows='2' />
                                    <div>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                </div>
                            )}
                            </Field>
=======
            onSubmit={onSubmit}
            render={({ handleSubmit }) =>
                <form onSubmit={handleSubmit}>
                    <div className={s.sendButton}>
                        <button className={s.message_button} type="submit">Send</button>
                        <button className={s.message_button} type="button">add file</button>
                        <div className={s.message_area}>
                            <Field name="newMessageBody" validate={ composeValidators(required, maxLength(100))} component={Textarea} placeholder="Enter your message" />
>>>>>>> d44ff18a5c7427420ddd9648024489b0ea2c8091
                        </div>
                    </div>
                </form>}
        />

    )
}

export default Dialogs;