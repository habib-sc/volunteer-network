import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/vn-logo.png';
import auth from '../../../firebase.init';
import useUserInfo from '../../../hooks/useUserInfo';
import './Header.css';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const email = user?.email;
    const [userInfo, setUserInfo] = useUserInfo(email);
    console.log(userInfo);

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" id='vn-navbar' variant="light">
                <Container>
                    <Link to='/'>
                        <img src={logo} style={{height: '50px'}} alt="" />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <Link className='text-decoration-none text-dark' style={{marginRight: '10px'}} to='/'>Home</Link>
                            <Link className='text-decoration-none text-dark' style={{marginRight: '10px'}} to='/events'>Events</Link>
                            <Link className='text-decoration-none text-dark' style={{marginRight: '10px'}} to='/'>Blogs</Link>

                            {user?
                            <button onClick={() => {signOut(auth)}} className='btn btn-light' style={{marginRight: '10px'}}>Logout</button>
                            :
                            <Link to='/login'>
                                <button className='btn btn-primary' style={{marginRight: '10px'}}>Login</button>
                            </Link>
                            }
                            
                            {userInfo?
                            <Link to='/'>{userInfo.fullName}</Link>
                            :
                            <Link to='/register'>
                                <button className='btn btn-info text-white'>Register</button>
                            </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;