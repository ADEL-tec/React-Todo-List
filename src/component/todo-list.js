import React, { useState } from 'react';
import moment from 'moment';
import Stats from './stats';
import Checkbox from './checkbox';

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [enableFilter, setEnableFilter] = useState(false);



    const addTask = () => {
        if (newTask.trim() !== '') {
            let currentDate = moment().format("MMM Do YY");
            setTasks([...tasks, { text: newTask, date: currentDate, checked: false }]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const filteredTasks = enableFilter ? tasks.filter((task) =>
        task.checked) : tasks.filter((task) =>
            task.text.toLowerCase().includes(searchQuery.toLowerCase())
        );

    const onChecked = (e, index) => {
        filteredTasks[index].checked = e.target.checked;
        setTasks(filteredTasks);
    }

    return (
        <div className="App">
            <h1 className='app-name'>Todo List</h1>
            <div className='content'>
                <div className='left-content'>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter a new task"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                        />
                        <button onClick={addTask}>Add Task</button>
                    </div>
                    <ul>
                        {filteredTasks.map((task, index) => (
                            <li key={index}>
                                <Checkbox onChange={onChecked} value={task.checked} index={index}>
                                    <h4>{task.text}</h4>
                                    <h4>{task.date}</h4>
                                    <button onClick={() => removeTask(index)}>Remove</button>
                                </Checkbox>

                            </li>
                        ))}
                    </ul>
                </div>
                <div class="vl"></div>
                <Stats
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    enableFilter={enableFilter}
                    setEnableFilter={setEnableFilter}
                    allTasks={tasks.length}
                    selectedTasks={tasks.filter((task) => task.checked).length}
                    unselectedTasks={tasks.filter((task) => !task.checked).length} />
            </div>
        </div>
    );
};