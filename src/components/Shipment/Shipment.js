import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';

const Shipment = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = () => {
    alert('Your order is placed');
  };

  return (
    <div className="shipment-block">
      <h4 style={{ marginTop: '20px' }}>Enter your shipment details</h4>
      <div className="row">
        <div style={{ display: 'block' }} className="col-md-6">
          <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              name="name"
              ref={register({ required: true })}
              placeholder="Your Name"
            />
            {errors.name && <span className="error">Name is required</span>}

            <input
              name="email"
              ref={register({ required: true })}
              placeholder="Your Email"
            />
            {errors.email && <span className="error">Email is required</span>}

            <input
              name="address"
              ref={register({ required: true })}
              placeholder="Your Address"
            />
            {errors.address && (
              <span className="error">Address is required</span>
            )}

            <input
              name="phone"
              ref={register({ required: true })}
              placeholder="Your Phone Number"
            />
            {errors.phone && (
              <span className="error">Phone Number is required</span>
            )}

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
