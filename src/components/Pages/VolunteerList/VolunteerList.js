import React from 'react';
import { Table } from 'react-bootstrap';
import './VolunteerList.css';

const VolunteerList = () => {
    return (
        <div className='volunteer-list-wrapper d-flex justify-content-center py-4'>
            <div className='volunteer-list-container p-3'>
                <div>
                    <h3 className=' ml-3 pb-3'>Volunteer List</h3>
                </div>
                <div>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Registered Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>date</td>
                                <td><button>d</button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default VolunteerList;