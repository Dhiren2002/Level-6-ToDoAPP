import { useState } from 'react';
import { Form, Container, Button, Alert } from 'react-bootstrap';
import { addTask } from '../actions/actions';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import {motion as m} from 'framer-motion';


import './AddTasks.css';

function AddTasks() {

    //Uses UseState to store data into variables
    const [task_name, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [task_status_id, setTaskStatusId] = useState(0);
    const [task_date, setTaskDate] = useState('');
    const [task_time, setTaskTime] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    
    //Function to submit data into the database
    const submitData = async (task) => {
        try {
            let response = await addTask(task);

            if (response) {
                setSuccess(true);




            }
        }
        catch (e) {
                setError(e.message);
                


        }
    }







//Function to check if the input task is valid
//Task needs to contain the name, description and task_status_id inorder to submit the task
    const submitTask = (e) => {
        e.preventDefault();

        setSuccess(false);
        setError('');

        if(task_name && description && task_status_id) {
            let task = {
                task_name: task_name,
                description: description,
                task_status_id: task_status_id,
                task_date: task_date,
                task_time: task_time

                
            };

                submitData(task);
            

        


        }
        else {
                setError('All fields need to be filled');
                
            
        }
    }
    return (
        <m.div className='add-tasks'
        initial= {{ y: '100%' }}
        animate={{ y: '0%'}}
        transition= {{ duration: 0.75 }}
        exit={{ opacity: 1}}>
            <h1>Add Tasks</h1>
            <Container>
            <Alert show={success} variant="success">
                <Alert.Heading>Success!</Alert.Heading>
                <p>You have successfully added a new task to the service!</p>
                </Alert>


                <Form onSubmit={submitTask}>
                    <Form.Group className='mb-4' controlId='task_name'>
                        <Form.Label> Task </Form.Label>
                        <Form.Control 
                        type='text' 
                        placeholder='Enter Task' 
                        onChange={e => setTask(e.target.value)} 
                        required/>
                    </Form.Group>

                    <Form.Group className='mb-4' controlId='description'>
                        <Form.Label> Description </Form.Label>
                        <Form.Control 
                        type='text' 
                        placeholder='Enter Description' 
                        onChange={e => setDescription(e.target.value)} 
                        required/>
                    </Form.Group>


                    <Form.Group className='mb-4' controlId='task_status_id'>        
                        <FormControl>
                             <RadioGroup
                               aria-labelledby="demo-radio-buttons-group-label"
                              
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
                            onChange={e => setTaskDate(e.target.value)}
                            required />

                    </Form.Group>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                    <Form.Group className='mb-5' controlId='task_time'>
                    <Form.Label> Time</Form.Label>         
                        <Form.Control
                            type='time'
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
export default AddTasks;