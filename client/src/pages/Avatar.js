import './ViewTasks.css';

import { Alert, CardGroup, Container } from 'react-bootstrap';
import { useEffect , useState} from 'react';
import {  getAvatar } from '../actions/actions';
import AvatarCard from '../components/cards/AvatarCard';
import { motion as m} from 'framer-motion';
import { Typography } from "@mui/material";


function HomePage() {
    const [avatars, setAvatars] = useState([]);
    const [error, setError] = useState([null]);
    

    
    
    useEffect(() => {
        if(avatars.length <=0) {
            const fetchData = async () => {
                try{
                    let data = await getAvatar();
                    setAvatars(data);
                    console.log(data)
                    
                }
                catch (e) {
                    setError(e.message);
                }
            }
            fetchData();
        }
    }, [avatars])

    



        
    if (avatars.length > 0 ){ 

          



    return (

     
      

        
        <m.div className='view-tasks'
        initial= {{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition= {{ duration: 0.75 }}>


            <Container>
                
                
                <Typography className="header" variant="h3"> Avatar Card</Typography>


               
                <CardGroup>
                    
                    {
                        avatars.map((avatar) => {
                            return <AvatarCard 
                            
                            key={avatar.id}
                            id={avatar.id}
                            userid={avatar.id}
                            name={avatar.name}
                            img={avatar.image}


                            />
                            
                            
                            
                        })
                        
                        
                        
                    }
                    
                </CardGroup>
                 

            </Container>

        </m.div>

        
    );
    }



    else if (error || avatars.length === 0 ){ 
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