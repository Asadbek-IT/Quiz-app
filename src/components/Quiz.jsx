import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Quiz = () => {

  return (
    <div>
      <div className='position-absolute top-50 start-50 translate-middle w-50 m-auto border border-warning-subtle p-4 form-control mb-3 d-grid gap-2 text-center' >
            <h2 className='text-warning'>Quiz game</h2>
            <div class="progress">
                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-valuenow="25" aria-valuemin="" aria-valuemax="100"></div>
            </div>
            <p className='fs-4'>Question?</p>
            <Button variant="" className='mt-3 btn btn-outline-warning w-100' type="submit">Option1</Button>
            <Button variant="" className='mt-3 btn btn-outline-success w-100' type="submit">Option1</Button>
            <Button variant="" className='mt-3 btn-outline-primary w-100' type="submit">Option1</Button>
            <Button variant="" className='mt-3 btn btn-outline-danger w-100' type="submit">Option1</Button>
            <p className='mt-4'>Score: 0/4</p>
            <Button variant="" className=' m-auto btn btn-warning w-50 text-white' type="submit">Option1</Button>
        </div>
    </div>
  )
}

export default Quiz;
