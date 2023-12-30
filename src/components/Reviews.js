import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Reviews() {
return (
<div> 
    <Tabs defaultActiveKey="BuyerReviews" id="uncontrolled-tab-example"   style={{marginTop:"2rem", marginBottom:"1rem", paddingLeft:"4rem"}}>
      <Tab eventKey="SellerReviews" title="SellerReviews" style={{ marginBottom:"10rem" , paddingLeft:"30rem", paddingTop:"5rem"}}>
             <h1>Seller Reviews</h1>
      </Tab>
      <Tab eventKey="BuyerReviews" title="BuyerReviews" style={{ marginBottom:"8rem",paddingLeft:"30rem",paddingTop:"5rem"}}>
           <h1>Buyer Reviews</h1>
      </Tab>
      
    </Tabs>
</div>
)
}

export default Reviews