import React from 'react';

const AddEvent = () => {

    return (
        <div className='volunteer-list-wrapper d-flex justify-content-center py-4'>
            <div className='volunteer-list-container p-3'>
                <div>
                    <h3 className=' ml-3 pb-3'>Add Event</h3>
                </div>
                <div>
                    <form className='row row-cols-md-2'>
                        <div className='mb-3'>
                            <label htmlFor="title" className='mb-1'>Event Title</label><br />
                            <input type="text" name='title' placeholder='Enter Title' style={{width: '90%'}}/><br />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="date" className='mb-1'>Event Date</label><br />
                            <input type="datetime-local" name='date' style={{width: '90%'}}/><br />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="description" className='mb-1'>Description</label><br />
                            <textarea type="text" name='description' placeholder='Description' style={{width: '90%', resize: 'none', height: '80px'}}/> <br />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="banner" className='mb-1'>Banner</label><br />
                            <input type="file" name='banner' accept='image/*' style={{width: '90%'}}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;