import { useState, useEffect } from 'react';
import { Form, Container, Button, Alert } from 'react-bootstrap';
import { getTaskById, updateTask } from '../actions/actions';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import {motion as m} from 'framer-motion';


import './AddTasks.css';
import { useParams } from 'react-router-dom';

function UpdateTasks() {
    const [id, setID] = useState('');
    const [task_name, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [task_status_id, setTaskStatusId] = useState(0);
    const [task_date, setTaskDate] = useState('');
    const [task_time, setTaskTime] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const { taskId } = useParams();

    useEffect(() => {
        if(!task_name) {
            const fetchData = async () => {
                try{
                    let data = await getTaskById(taskId);

                    setTask(data.task_name);
                    setDescription(data.description);
                    setTaskStatusId(data.task_status_id);
                    setTaskDate(data.task_date);
                    setTaskTime(data.task_time);


                }
                catch (e) {
                    setError(e.message);
                }
            }
            fetchData();
        }
    }, [taskId])




    const submitData = async (task) => {
        try {
            let response = await updateTask(task);

            if (response) {
                setSuccess(true);




            }
        }
        catch (e) {
                setError(e.message);
                


        }
    }








    const submitTask = (e) => {
        e.preventDefault();

        setSuccess(false);
        setError('');

        if(id || task_name || description || task_status_id) {
            let task = {
                id: taskId,
                task_name: task_name,
                description: description,
                task_status_id: task_status_id,
                task_date: task_date,
                task_time: task_time


                
            };

                submitData(task);
            

        


        }

    }
    return (
        <m.div className='add-tasks'
        initial= {{ y: '100%' }}
        animate={{ y: '0%'}}
        transition= {{ duration: 0.75 }}
        exit={{ opacity: 1}}>
            <h1>Update Tasks</h1>
            <Container>
            <Alert show={success} variant="success">
                <Alert.Heading>Success!</Alert.Heading>
                <p>You have successfully Updated a new task to the service!</p>
                </Alert>


                <Form onSubmit={submitTask}>

                <Form.Group className='mb-4' controlId='id'>
                        <Form.Label> ID </Form.Label>
                        <Form.Control 
                        type='text' 
                       value={taskId}
                        onChange={e => setID(e.target.value)} 
                        required
                        disabled />
                    </Form.Group>

                    <Form.Group className='mb-4' controlId='task_name'>
                        <Form.Label> Task </Form.Label>
                        <Form.Control 
                        type='text' 
                        value={task_name}
                        placeholder='Enter Task' 
                        onChange={e => setTask(e.target.value)} 
                        required/>
                    </Form.Group>

                    <Form.Group className='mb-4' controlId='description'>
                        <Form.Label> Description </Form.Label>
                        <Form.Control 
                        type='text' 
                        value={description}
                        onChange={e => setDescription(e.target.value)} 
                        required/>
                    </Form.Group>

               

                    <Form.Group className='mb-4' controlId='task_status_id'>        
                        <FormControl>
                             <RadioGroup
                               aria-labelledby="demo-radio-buttons-group-label"
                               value={task_status_id }
                               name="radio-buttons-group"
                               onChange={e => setTaskStatusId(e.target.value)}     >
                              <FormControlLabel style={ {color: "#1bacbf"}} value="1" control={<Radio  style={ {color: "#1bacbf"} }/>} label="Low Priority" />
                              <FormControlLabel style={ {color: "#FFA500"}} value="2" control={<Radio  style={ {color: "#FFA500"}}/>} label="Medium Priority" />
                              <FormControlLabel style={ {color: "#DC143C"}} value="3" control={<Radio  style={ {color: "#DC143C"}}/>} label="High Priority" />
                            </RadioGroup>
                        </FormControl>

                    </Form.Group>
                    <Stack direction="row" spacing={1}>
                    <Form.Group className='mb-5' controlId='task_date'>
                    <Form.Label> Task Date </Form.Label>
                       <Form.Control 
                            type='date'
                            value={task_date}
                            onChange={e => setTaskDate(e.target.value)}
                            required />

                    </Form.Group>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                    <Form.Group className='mb-5' controlId='task_time'>
                    <Form.Label> Time</Form.Label>         
                        <Form.Control
                            type='time'
                            value={task_time}
                            onChange={e => setTaskTime(e.target.value)}
                            required />
                            
                    </Form.Group>
                </Stack>


                    <Button style = {{backgroundColor: "#ad1457"}}variant='success' type='submit'>
                        <CheckIcon/>
                    </Button>
                    
                </Form>
            </Container>
        </m.div>
    );


}
export default UpdateTasks;