import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image1 from "../assets/images/1.png"
import Image2 from "../assets/images/2.png"
import Image3 from "../assets/images/3.png"
import Image4 from "../assets/images/4.png"
import Image5 from "../assets/images/5.png"

function AllProjects() {
return (
    <div className='bg-dark'> 
         
         <div className="container " style={{marginTop:"6rem"}}>
            <div className="row pt-5 pb-5 " style={{paddingLeft:"7rem"}}>
                <div className="col-sm-12 col-md-6 col-lg-4 pb-5  ">
                <Card style={{ width: '18rem' , borderRadius:"2rem 2rem 0 0" }}>
                  <Card.Img variant="top" style={{width:"18rem", height:"10rem"}} src={Image1} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                       
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 pb-5 ">
                <Card style={{ width: '18rem', borderRadius:"2rem 2rem 0 0" }}>
                  <Card.Img variant="top" style={{width:"18rem", height:"10rem"}} src={Image2} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                       
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 pb-5 ">
                <Card style={{ width: '18rem' , borderRadius:"2rem 2rem 0 0"}}>
                  <Card.Img variant="top" style={{width:"18rem", height:"10rem"}} src={Image3}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                       
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <Card style={{ width: '18rem', borderRadius:"2rem 2rem 0 0" }}>
                  <Card.Img variant="top" style={{width:"18rem", height:"10rem"}} src={Image4} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                       
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <Card style={{ width: '18rem', borderRadius:"2rem 2rem 0 0"}} >
                  <Card.Img variant="top" style={{width:"18rem", height:"10rem"}} src={Image5} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                       
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <Card style={{ width: '18rem' , borderRadius:" 2rem 2rem 0 0" }}>
                  <Card.Img variant="top" style={{width:"18rem", height:"10rem "}} src={Image1}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                       
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 pb-5  ">
                <Card style={{ width: '18rem' , borderRadius:"2rem 2rem 0 0" }} className='mt-5'>
                  <Card.Img variant="top" style={{width:"18rem", height:"10rem"}} src={Image1} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                       
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 pb-5 ">
                <Card style={{ width: '18rem', borderRadius:"2rem 2rem 0 0" }} className='mt-5'>
                  <Card.Img variant="top" style={{width:"18rem", height:"10rem"}} src={Image2} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                       
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 pb-5 ">
                <Card style={{ width: '18rem' , borderRadius:"2rem 2rem 0 0" }} className='mt-5'>
                  <Card.Img variant="top" style={{width:"18rem", height:"10rem"}} src={Image3}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                       
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 pb-5">
                <Card style={{ width: '18rem', borderRadius:"2rem 2rem 0 0" }}>
                  <Card.Img variant="top" style={{width:"18rem", height:"10rem"}} src={Image4} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                       
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 pb-5">
                <Card style={{ width: '18rem', borderRadius:"2rem 2rem 0 0"}} >
                  <Card.Img variant="top" style={{width:"18rem", height:"10rem"}} src={Image5} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                       
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 pb-5">
                <Card style={{ width: '18rem' , borderRadius:" 2rem 2rem 0 0" }}>
                  <Card.Img variant="top" style={{width:"18rem", height:"10rem "}} src={Image1}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                       
                </div>
               
            </div>
         </div>
      
    </div>
)
}

export default AllProjects;