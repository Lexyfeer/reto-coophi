import React, { Component } from 'react';
import { connect } from 'react-redux';


class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing:false
        }
        // console.log(data)
        this.props.dispatch({
            type: 'ADD_POST',
            data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    render() {
        return (   
            <div className="contentCreateNewNote">
                <h2>Crea una nueva</h2>
                <form className="createNote" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Titulo</label>
                        <input required type="text" className="form-control" placeholder="titulo de la nota" ref={(input) => this.getTitle = input} />
                    </div>
                    <div className="form-group">
                        <label>Example textarea</label>
                        <textarea required className="form-control" rows="3" cols="25" placeholder="Agrega una nota" ref={(input) => this.getMessage = input} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Crear</button>
                </form>
            </div>
        );
    }
}

export default connect()(PostForm);