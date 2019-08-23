import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Control } from 'react-redux-form';


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
                <h1>Crea una nueva CoophiNota</h1>
                <form className="createNote" model="data" onSubmit={(val) => this.handleSubmit(val)}>
                    <div className="form-group">
                        <label>Titulo</label>
                        <Control.text required 
                        type="text" 
                        model="data.title"
                        className="form-control" 
                        placeholder="titulo de la nota" 
                        ref={(input) => this.getTitle = Control.text} 
                    />
                    </div>
                    <div className="form-group">
                        <label>Example textarea</label>
                        <Control.textarea required
                        model="data.message"
                        className="form-control" 
                        rows="3" 
                        cols="25" 
                        placeholder="Agrega una nota" 
                        ref={(input) => this.getMessage = Control.textarea} 
                    />
                    </div>
                    <button type="submit" 
                    className="btn btn-primary">Crear</button>
                </form>
            </div>
        );
    }
}

export default connect()(PostForm);