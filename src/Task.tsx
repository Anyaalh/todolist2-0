// @flow
import * as React from 'react';
import {TaskType} from "./Todolist";

type LocalTaskType={
    tasks: Array<TaskType>
}

export const Task = ({tasks}: LocalTaskType) => {
    return (
        <div>
            {
                tasks.map(t => {
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                        </li>
                    )
                })
            }
        </div>
    );
};