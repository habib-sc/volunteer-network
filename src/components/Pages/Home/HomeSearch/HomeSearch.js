import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const HomeSearch = () => {
    return (
        <div style={{"minHeight": '400px'}} className='border d-flex align-items-center'>
            <div className='mx-auto'>
                <h1>I Grow By Helping People In Need.</h1>
                <div>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="rounded-0"
                        aria-label="Search"
                        />
                        <Button className='rounded-0'>Search</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default HomeSearch;