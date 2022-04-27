import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './HomeSearch.css';

const HomeSearch = () => {
    return (
        <div style={{"minHeight": '400px'}} className='vn-hero-section d-flex align-items-center'>
            <div className='mx-auto'>
                <h1 className='text-uppercase'>I Grow By Helping People In Need.</h1>
                <div>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="vn-search-bar rounded-0"
                        aria-label="Search"
                        />
                        <Button className='vn-search-btn rounded-0'>Search</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default HomeSearch;