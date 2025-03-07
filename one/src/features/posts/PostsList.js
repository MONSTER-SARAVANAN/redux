import {useSelector} from 'react-redux';
import React from 'react'
import { selectPostIds,getPostsError,getPostsStatus } from './postsSlice';
import PostsExcerpts from './PostsExcerpts';


const PostsList = () => {
    const orderedPostsIds = useSelector(selectPostIds);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

     
    let content;
    if(postStatus === 'loading'){
        content = <p>"Loading...</p>;
    } else if (postStatus === 'succeede') {
       content = orderedPostsIds.map(postId => <PostsExcerpts key={postId}  postId={postId}/>)
    }else if(postStatus === 'failed') {
        content = <p>{error}</p>;
    }
    return (<section>
        {content}
    </section> )
}

export default PostsList;