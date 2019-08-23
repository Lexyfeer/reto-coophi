import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './Post';
import EditComponent from './EditComponent';
//import PostFomr from './PostForm'

class AllPost extends Component {
    render() {
        //console.log(this.props);
        return (
            <React.Fragment>
                <div className="contentAllPost">
                    <h1>Todas las Notas</h1>
                        {this.props.posts.map((post) => (
                            <div key={post.id}>
                                {post.editing 
                                    ? <EditComponent post={post} key={post.id} /> 
                                    : <Post key={post.id} post={post} />}
                            </div>
                        ))}
                
                </div>
            </React.Fragment>
        );


    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);