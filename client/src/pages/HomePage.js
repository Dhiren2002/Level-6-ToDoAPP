import './ViewTasks.css';

import { Alert, CardGroup, Container } from 'react-bootstrap';
import { useEffect , useState} from 'react';
import {  UpcomingTasks } from '../actions/actions';
import TaskCard from '../components/cards/TaskCard';
import { motion as m} from 'framer-motion';
import { Typography } from "@mui/material";


function HomePage() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState([null]);
    

    
    
    useEffect(() => {
        if(tasks.length <=0) {
            const fetchData = async () => {
                try{
                    let data = await UpcomingTasks();
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

     
      

        
        <m.div className='view-tasks'
        initial= {{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition= {{ duration: 0.75 }}>


            <Container>
                
                
                <Typography className="header" variant="h3"> Welcome Back,</Typography>


            <m.div className='counter'
                    initial= {{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition= {{ duration: 3 }}
                    delay = {{ duration: 2}}>
                <Typography variant ="h5"> Here is your Most Recent Tasks </Typography>

            </m.div>

               
                <CardGroup>
                    
                    {
                        tasks.map((task) => {
                            return <TaskCard 
                            
                            key={task.id}
                            id={task.id}
                            task_name={task.task_name}
                            description={task.description}
                            priority={task.task_status.priority}
                            task_date={task.task_date}
                            task_time={task.task_time}

                            />
                            
                            
                            
                        })
                        
                        
                        
                    }
                    
                </CardGroup>
                 

            </Container>

        </m.div>

        
    );
    }



    else if (error || tasks.length === 0 ){ 
        return (
            <m.div className='view-tasks'       
             initial= {{ opacity: 0 }}
              animate={{ opacity: 1 }}
              delay={{duration: 10}}
               >
                <Container>
                    <h1>Welcome</h1>
                    <Alert variant='danger'>
                        <Alert.Heading> You Currently Have No Tasks</Alert.Heading>
                        <p>{ (error !== null) ? error : "You  currently have no tasks"}</p>
                    </Alert>
                </Container>
            </m.div>
        );
        }
}

export default HomePage;