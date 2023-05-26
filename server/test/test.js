// import and execute the following modules
let chai = require('chai');
let chaiMoment = require ('chai-moment');
let chaiHttp = require('chai-http');
let server = require('../app');
const { response } = require('../app');

var expect = chai.expect; //import the expect library
var should = chai.should(); //import the should library

chai.use(chaiHttp);
chai.use(chaiMoment);

describe('Unit tests for ToDo API', () => {

    
        //test the GET endpoint
        describe("Get endpoint", () => {
            it("it should GET all the tasks", (done) => {
                chai.request(server)
                .get("/tasks")
                .end((err, response) => {
                    response.should.have.status(200);//test should pass
                    response.body.should.be.a('array'); //JSON payload should be an array
                    done();
                });
            });
//Tests to display most recent task
            it("it should GET most recent task", (done) => { 
                chai.request(server)
                .get("/tasks/tasks/TaskOrder")
                .end((err, response) => {
                    response.should.have.status(200);//test should pass
                    response.body.should.be.a('array'); //JSON payload should be an array
                    done();
                });
            });

            it("it should NOT GET most recent task", (done) => {  
                chai.request(server)
                .get("/tasks/TasksOrder")
                .end((err, response) => {
                    response.should.have.status(400);//test should fail
                    done();
                });
            });

            it("it should NOT GET all the tasks",(done) => {
                chai.request(server)
                .get("/task")
                .end((err, response) => {
                    response.should.have.status(404); //test should fail
                    done();
                });
            });
        });




    }); // End of tests for getAll Task Functions

        
        //Test the getById Task function

    describe("Test the getById function", () => {
        it("it should GET a task by ID", (done)=> {
            const taskId = 124;
            chai.request(server)
            .get("/tasks/" + taskId)
            .end((err,response) =>{
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.be.property('id');
                response.body.should.be.property('task_name');
                response.body.should.be.property('description');
                response.body.should.be.property('task_status_id');
                response.body.should.have.property('task_date');
                response.body.should.be.property('task_time');
                response.body.should.be.property('id').eq(124);
                done();
                

            });
        });

        it("it should NOT GET a task by ID ", (done)=> {
            const taskId = 9999;
            chai.request(server)
            .get("/tasks/" + taskId)
            .end((err,response) => {
                response.should.have.status(400);
                done();
            });
        });

    });
        //Tests the CRUD Functions 
    describe('Unit tests for CRUD ToDo API', () => {
//Tests the create function
         describe('Test the create function', () =>{
              it('it should POST a new task',(done) => {
                 const task = {
                        task_name: "Mocha and Chai POST Test",
                        description: "Description TEST",
                        task_status_id: 1,
                        task_date: '2023/01/15',
                        task_time: '13:00:00'
                    }
                     chai.request(server)
                      .post('/tasks')
                      .send(task)
                       .end((err,response) => {
                                 response.should.have.status(201); //test should pass
                                 response.body.should.have.a('object'); 
                                 response.body.should.have.property('task_name').eq('Mocha and Chai POST Test');
                                 response.body.should.have.property('description').eq('Description TEST');
                                 response.body.should.have.property('task_status_id').eq(1);
                                 response.body.should.have.property('task_date').eq('2023/01/15');
                                 response.body.should.have.property('task_time').eq('13:00:00');
                            done();
                        }) ;
            });
             it("It should not POST a new Task record", async () =>{
                    const res = await chai.request(server)
                        .post('/tasks')
                        .field('task_name', 'Mocha and Chai POST Test')            
                        .field('description', 'test')
                        .field('task_status_id', '1')
                        .field('task_date', '')
                        .field('task_time', '')
                    expect(res.status).to.equal(400);     //Test should fail      
            });
        });


        describe("Test the del getById function", () => {
             it("it should GET a task by ID", (done)=> {
                    const taskId = 140; //get Task by the id 
                        chai.request(server)
                        .delete("/tasks/" + taskId)
                        .end((err,response) =>{
                            response.should.have.status(200); //test should pass
                            response.body.should.be.a('object');
                        done();


            });
        });

            it("it should NOT  del GET a task by ID ", (done)=> {
                 const taskId = 9999;
                 chai.request(server)
                 .get("/tasks/" + taskId)
                 .end((err,response) => {
                        response.should.have.status(400); //task should fail
                   done();
            });
        });

    });

// Testing the update function 
    describe('Test the UPDATE/PUT function', () =>{
        it('it should UPDATE a new task',(done) => {

            const task = {
                id: 127,
                task_name: "Mocha and Chai UPDATE/PUT Test",
                description: "Description PUT TEST",
                task_status_id: 2,
                task_date: '2023/01/16',
                task_time: '15:16:00'
            }
                chai.request(server)
                 .put('/tasks' )
                 .send(task)
                 .end((err,response) => {
                        response.should.have.status(200); //Test should pass
                        response.body.should.have.a('object');
                        response.body.should.be.property('id').eq(127);
                        response.body.should.have.property('task_name').eq('Mocha and Chai POST Test');
                        response.body.should.have.property('description').eq('Description TEST');
                        response.body.should.have.property('task_status_id').eq(1);
                        response.body.should.have.property('task_date').eq('2023/01/15');
                        response.body.should.have.property('task_time').eq('13:00:00');
                    done();

                //NOTE FOR READER: The slightly update works as it updates record with id 127 from database, however returns AssertionError when running 'npm test'
                //For testing purposes may need to change ID thats inside the database. 

            }) ;
        });

        it("it should NOT UPDATE/PUT GET a task by ID ", (done)=> {
              const taskId = 9999;
              chai.request(server)
                .put("/tasks/" + taskId)
                .end((err,response) => {
                        response.should.have.status(404); //Test should fail
                    done();
            });
        });

    });
});

    describe('Unit tests for Priority ToDo API', () => {

    
        //test the GET endpoint
        describe("Get endpoint", () => {
            it("it should GET all low priority the tasks", (done) => {
                chai.request(server)
                .get("/tasks/pri/1")
                .end((err, response) => {
                    response.should.have.status(200);//test should pass
                    response.body.should.be.a('array'); //JSON payload should be an array
                    done();
                });
            });
            it("it should GET all medium priority the tasks", (done) => {
                chai.request(server)
                .get("/tasks/pri/2")
                .end((err, response) => {
                    response.should.have.status(200);//test should pass
                    response.body.should.be.a('array'); //JSON payload should be an array
                    done();
                });
            });
            it("it should GET all high priority the tasks", (done) => {
                chai.request(server)
                .get("/tasks/pri/3")
                .end((err, response) => {
                    response.should.have.status(200);//test should pass
                    response.body.should.be.a('array'); //JSON payload should be an array
                    done();
                });
            });

            it("it should NOT GET all the tasks",(done) => {
                chai.request(server)
                .get("/task/pri/99")
                .end((err, response) => {
                    response.should.have.status(404); //Test should 
                    done();
                });
            });
        });

    });

    //Test the Avatar Endpoint 

    describe('Unit tests for Avatar ToDo API', () => {

        describe("Get endpoint", () => {
            it("it should GET all avatar", (done) => {
                chai.request(server)
                .get("/avatars")
                .end((err, response) => {
                    response.should.have.status(200);//test should pass
                    response.body.should.be.a('array'); //JSON payload should be an array
                    done();
                });

            });
            it("it should GET all low priority the tasks", (done) => {
                chai.request(server)
                .get("/avatarss")
                .end((err, response) => {
                    response.should.have.status(404);//test should pass
                    response.body.should.be.a('array'); //JSON payload should be an array
                    done();
                });

            });
        });
    });