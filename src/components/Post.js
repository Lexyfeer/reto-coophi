import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>
                <div className="card border-primary mb-3">
                    <div className="card-header text-primary">{this.props.post.title}</div>
                    <div className="card-body">
                        <p className="card-text">{this.props.post.message}</p>
                    </div>
                    <button type="submit" className="btn btn-warning">Editar</button>
                    <button type="submit" className="btn btn-danger">Eliminar</button>
                </div>
            </div>
        );
    }
}

export default Post;