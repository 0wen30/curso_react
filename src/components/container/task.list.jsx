import React from 'react';
import { Tarea } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/forms/task';
import { useState } from 'react';

const TaskList = () => {

    const defaultTask = new Tarea('php','programar',true,LEVELS.URGENT)

    return (
        <section>
            <TaskComponent tarea={defaultTask}/>
        </section>
    );
};

export default TaskList;
