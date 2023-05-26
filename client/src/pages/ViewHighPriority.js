import './ViewTasks.css';

import { Alert, Button, CardGroup, Container } from 'react-bootstrap';
import { useEffect , useState} from 'react';
import { HighPriorityTask } from '../actions/actions';
import TaskCard from '../components/cards/TaskCard';
import { motion as m } from 'framer-motion';

function ViewHighTasks() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState([null]);

    useEffect(() => {
        if(tasks.length <=0) {
            const fetchData = async () => {
                try{
                    let data = await HighPriorityTask();
                    setTasks(data);
                    console.log(data)
                    
                }
                catch (e) {
                    setError(e.message);
                }
            }
            fetchData();
        }
    }, [tasks])
    if (tasks.length > 0 ){ 
    return (
        <div className='view-tasks'>
            <Container>
                <h1>High Priority Task</h1>

                <p> You Currently Have {tasks.length} High Priority Tasks </p>

                <CardGroup>
                    {
                        tasks.map((task) => {
                            return <TaskCard 
                            key={task.id}
                            task_name={task.task_name}
                            description={task.description}
                            img={task.image}
                            priority={task.task_status.priority}
                            task_date={task.task_date}
                            task_time={task.task_time}

                            />
                        })
                    }
                    
                </CardGroup>
            </Container>
        </div>
    );
    }
    else if (error || tasks.length === 0 ){ 
        return (
            <m.div className='view-tasks'
            initial={{opacity:0}}
            transition={{ duration:0.75}}    
            exit={{opacity:1}}  
            >  
                <Container>
                    <h1>View High Priority Tasks</h1>
                    <Alert variant='danger'>
                        <Alert.Heading> An Error Has Occured</Alert.Heading>
                        <p>{ (error !== null) ? error : "You  currently have no tasks"}</p>
                    </Alert>
                </Container>
            </m.div>
        );
        }
}


export default ViewHighTasks;