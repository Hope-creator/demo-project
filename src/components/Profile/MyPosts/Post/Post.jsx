import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://i0.wp.com/star-magazine.ru/wp-content/uploads/2019/05/12857324-6971663-Stone_sober_Ava_Max_has_revealed_that_unlike_the_Californian_pop-m-20_1556538926699-min.jpg?resize=399%2C591&ssl=1' />
                {props.message}
            <div>
                <span>like {props.likes}</span>
            </div>
        </div>
    )
}

export default Post;