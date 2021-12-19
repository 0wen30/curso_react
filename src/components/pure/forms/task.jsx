import React from 'react';
import PropTypes from 'prop-types';
import { Tarea } from '../../../models/task.class';

const TaskComponent = ({tarea}) => {
    return (
        <div>
            <h2>Nombre: {tarea.name}</h2>
            <h3>Descripcion: {tarea.description}</h3>
            <h4>level: {tarea.level}</h4>
            <h5>completado: {tarea.completed ? 'completado' : 'pendiente'}</h5>
        </div>
    );
};

TaskComponent.propTypes = {
    tarea: PropTypes.instanceOf(Tarea)
};

export default TaskComponent;