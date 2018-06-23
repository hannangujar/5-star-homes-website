import React, { Component } from 'react';
import headerImage from '/home/hannan/Code/ReactJs/five2/src/Home/HeaderHome.jpg';
import {Grid,Row,Col,Button,Thumbnail} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import img1 from '/home/hannan/Code/ReactJs/five2/src/Home/img1.jpeg';
import img2 from '/home/hannan/Code/ReactJs/five2/src/Home/img2.jpeg';
import img3 from '/home/hannan/Code/ReactJs/five2/src/Home/img3.jpeg';
import '/home/hannan/Code/ReactJs/five2/src/Home/Home.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div id="header-image" >
          <img src={headerImage} alt="This is Header" />
          <div id="centered">Five Star Homes</div>
        </div>
        <span>
        <br/>
        <hr/>
        <Grid>
          <Row>
            <hr/>
            <Col xs={6} md={4}>
            <h3>The Attic Loft</h3>
            <br/>
            <br/>
              <Thumbnail src={img1} alt="242x200">
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.<br/> Sed posuere consectetur est at lobortis. Donec id elit non mi porta.</p>
                <p>
                  <br/>
                  <Link to="/accomudation1">
                  <Button bsStyle="primary">More Info</Button>&nbsp;
                  </Link>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <h3>The Woodhouse</h3>
              <br/>
              <br/>
              <Thumbnail src={img2} alt="242x200">
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula,<br/> eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                <p>
                <br/>
                <Link to="/accomudation2">
                  <Button bsStyle="primary">More Info</Button>&nbsp;
                </Link>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
                <h3>The Country Annex</h3>
                <br/>
                <br/>
                <Thumbnail src={img3} alt="242x200">
                <p>Cras mattis consectetur purus sit amet fermentum.Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum. </p>
                <br/>
                <p>
                  <Link to="/accomudation3">
                    <Button bsStyle="primary">More Info</Button>&nbsp;
                  </Link>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
            <h3>The Attic Loft</h3>
            <br/>
            <br/>
              <Thumbnail src={img1} alt="242x200">
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.<br/> Sed posuere consectetur est at lobortis. Donec id elit non mi porta.</p>
                <p>
                  <br/>
                  <Link to="/accomudation1">
                  <Button bsStyle="primary">More Info</Button>&nbsp;
                  </Link>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <h3>The Woodhouse</h3>
              <br/>
              <br/>
              <Thumbnail src={img2} alt="242x200">
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula,<br/> eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                <p>
                <br/>
                <Link to="/accomudation2">
                  <Button bsStyle="primary">More Info</Button>&nbsp;
                </Link>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
                <h3>The Country Annex</h3>
                <br/>
                <br/>
                <Thumbnail src={img3} alt="242x200">
                <p>Cras mattis consectetur purus sit amet fermentum.Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum. </p>
                <br/>
                <p>
                  <Link to="/accomudation3">
                    <Button bsStyle="primary">More Info</Button>&nbsp;
                  </Link>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>;
        <Grid>
          
            <Link to="/testimonial">
              <Button bsStyle="default" bsSize="large" id="footerButton">Testimonials</Button>&nbsp;
            </Link>
        
        </Grid>
        </span>
      </div>
    )
  }
}
