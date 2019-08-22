import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    render() {
        return (
            <div>
                <h1>Editar CoophiNota</h1>

                <form className="createNote" onSubmit={this.handleEdit}>
                    <div className="form-group">
                        <label>Titulo</label>
                        <input required type="text" className="form-control" placeholder="titulo de la nota" ref={(input) => this.getTitle = input} />
                    </div>
                    <div className="form-group">
                        <label>Example textarea</label>
                        <textarea required className="form-control" rows="3" cols="25" placeholder="Agrega una nota" ref={(input) => this.getMessage = input} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger">Cancelar</button>
                    <button type="submit" className="btn btn-success">Guardar</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditComponent);