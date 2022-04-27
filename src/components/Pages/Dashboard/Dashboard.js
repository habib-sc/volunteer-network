import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import plusIcon from '../../../assets/images/plus 1.png';
import usersIcon from '../../../assets/images/users-alt 1.png';
import './Dashboard.css';

const Dashboard = () => {
    return (
       <div className='container'>
            <Row className='justify-content-between'>
                <Col md={3} className='dashboard-left'>
                    <div className='d-flex flex-column mt-3'>
                        <Link to='/dashboard/volunteers' className='text-decoration-none d-flex align-items-center my-1 text-black '>
                            <img src={usersIcon} style={{height: '25px', marginRight: '5px'}} alt="" />                          
                            Volunteer Registe List
                        </Link>
                       <Link to='/dashboard/add-event' className='text-decoration-none d-flex align-items-center my-1 text-black '>
                            <img src={plusIcon} style={{height: '25px', marginRight: '5px'}} alt="" />   
                            Add Event
                        </Link>
                    </div>
                </Col>

                <Col md={9} className='dashboard-right'>
                    <div className='mt-3'>
                        <Outlet></Outlet>
                    </div>
                </Col>
            </Row>
       </div>
    );    
};

export default Dashboard;