import { Card } from "react-bootstrap";
import Stack from '@mui/material/Stack';
import {motion as m} from 'framer-motion';
import './TaskCard.css';






function AvatarCard(props) {

    //Allows the image stored in the database to be displayed
    function transformImageToURL(image) {
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }




    return (


        // Stack from MUI used to seperate the cards (if more than one)
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
        <Card.Img variant ='top' src={transformImageToURL(props.img)} />
        <Card.Body >
          
            <Card.Header as="h3" >User ID:{props.userid}</Card.Header>
           
            <Card.Text>Username: {props.name}</Card.Text>


        </Card.Body>
    </Card>
        </m.div>
            </Stack>


         
            
    )
}

export default AvatarCard;