import React from 'react';
import { Field, Form } from 'react-final-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { maxLength, required, composeValidators } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsContol/FormsControl'
import { FormCreator } from '../../../hoc/FormCreator';

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => <Post message={p.message} likes={p.likesCount} />);

    let onAddPost = (newPostText) => {
        props.addPost(newPostText);
    }

    return (
        <div>
            <AddPostForm onAddPost={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    const onSubmit = (values) => {
        props.onAddPost(values.newPostBody);
    }
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) =>
                <form onSubmit={handleSubmit}>
                    <div className={s.postsWrapper}>
                        <button className={s.post_button} type="submit">Send</button>
                        <button class className={s.post_button} type="button">add file</button>
                        <div className={s.post_area}>
                            <Field name="newPostBody" validate={ composeValidators(required, maxLength(10))} component={Textarea} placeholder="Enter your post" />
                        </div>
                    </div>
                </form>}
        />
    )
}

export default MyPosts;