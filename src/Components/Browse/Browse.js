import React from 'react';
import './Browse.css';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import BrowseCategory from './Browsecategory';

function Browse() {
    return (
        <div className='browsebody'>
            <Container>
                <Row>
                    <Col md={1} xs={2}>
                        <img src='/assets/images/icon4.png' alt='browse' className='browseicon' />
                    </Col>
                    <Col md={6} xs={10}>
                        <h1 className='browsetext'>Browse our latest case studies on various Brands</h1>
                    </Col>
                    <Col md={3} xs={2}></Col>
                    <Col md={2} xs={6}>
                        <Button variant='light' className='browsebutton'>
                            <span style={{fontFamily: "'Nunito', sans-serif",fontWeight:'500'}}>More case studies </span>
                            <ExpandCircleDownIcon style={{ transform: 'rotate(270deg)', color: 'blue' }} />
                        </Button>
                    </Col>
                </Row>

                <Row style={{ marginTop: '5rem' }}>
                    <Col md={6}>
                        <BrowseCategory />
                    </Col>
                    <Col md={6}>
                        <div className='gradientbackground'>
                            <img src='/assets/images/photo.jpg' alt='' className='photoo' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Browse