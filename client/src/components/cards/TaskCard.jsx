import { Card } from "react-bootstrap";
import {Button} from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {motion as m} from 'framer-motion';
import './TaskCard.css';
import { Link } from "react-router-dom";
import { deleteTask } from "../../actions/actions";






function TaskCard(props) {


    //This function used for dynamic styling, allows to cross text and lower opacity
    const handleClick = event => {
        
        
                if (event.target.style.textDecoration) {
                  event.target.style.removeProperty('text-decoration');
                  event.target.style.removeProperty('opacity');
                } else {
                  event.target.style.setProperty('text-decoration', 'line-through');
                  event.target.style.setProperty('opacity', '0.5');
                }
              };



        




    return (


      


        <Stack direction="row" spacing={1}>
            <m.div 
            Layout 
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0}}
            transition={{ duration: 1.75 }}
            delay={{duration: 4}}
            >

        <Card 

        key={props.id}
   
        >

            <Card.Body >
              
                <Card.Header onClick={handleClick} as="h3" >{props.task_name}</Card.Header>
               
                <Card.Text>Description: {props.description}</Card.Text>
                <Card.Text>Priority: {props.priority}</Card.Text>
                <Card.Text>Date {props.task_date} </Card.Text>
                <Card.Text>Time {props.task_time} </Card.Text>

                
                <Link as={Link} to={`/update/${props.id}`} >
                
                <Button aria-label="update" variant="outlined" color="primary"> 
                    <EditIcon />    
                 </Button>
                     </Link>
                

                <Button onClick={()=>{deleteTask(props.id)}}  aria-label="delete" variant="outlined" color="error">                     
                    <DeleteIcon color="error"/>
                </Button >
            </Card.Body>
        </Card>
            </m.div>
                </Stack>
    )
}

export default TaskCard;