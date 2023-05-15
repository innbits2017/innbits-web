import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import InputMask from 'react-input-mask';
import { Formik } from 'formik';
import * as Yup from 'yup';
import "yup-phone";


const blogContactForm = () => {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const initialData = { name: '', email: '', phone: '', message: '' };
    const schema = Yup.object().shape({
        name: Yup.string().required('Name is required.'),
        email: Yup.string().email('Email is invalid.').required('Email is required.'),
        message: Yup.string().required('Please write your message'),
        phone: Yup.string().required('Phone is required.')
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(6, "too short")
        .max(20, "too long"),
    });

    const handleSubmit = async (enquiryData) => {
        fetch('/api/send-blog-enquiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: enquiryData.name, email: enquiryData.email, phone: enquiryData.phone, message: enquiryData.message }),
        });
        await toast("Your data has been saved succesfully! Our team will be in touch");
        setTimeout(() => {
           window.location.reload();
        }, 3000)
    };

    return (
        <div className="container py-2 bg-secondary">
            <h5>Request a Quote</h5>
            <Formik initialValues={initialData} validationSchema={schema} onSubmit={handleSubmit}>
                {({ values, errors, handleChange, handleSubmit }) => (
                    <form className='needs-validation js-validate' noValidate onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-12 '>
                                <label htmlFor='name' className='form-label fs-base'>
                                    Name<span className="text-danger">*</span>
                                </label>
                                <input type='text' id='name' pattern="[A-Za-z]+" autofocus className='form-control ' name='name' placeholder='John Smith' value={values.name} onChange={handleChange} />
                                {errors.name && <small className='text-danger mt-2 ms-1 '>{errors.name}</small>}
                            </div>
                            <div className='col-12 '>
                                <label htmlFor='phone' className='form-label fs-base'>
                                    Phone
                                </label>
                                {/* <InputMask
                                    className='form-control '
                                    id='phone'
                                    mask='(+1) 999 999 9999'
                                    value={values.phone}
                                    onChange={handleChange}>
                                </InputMask> */}
                                <input type='tel' id='phone' className='form-control ' data-format='custom' data-delimiter='-' data-blocks='2 3 4' data-numeral='9' placeholder='000000000' name='phone' value={values.phone} onChange={handleChange} />
                                {errors.phone && <small className='text-danger mt-2 ms-1 '>{errors.phone}</small>}
                            </div>
                            <div className='col-12'>
                                <label htmlFor='email' className='form-label fs-base'>
                                    Email <span className="text-danger">*</span>
                                </label>
                                <input type='email' id='email' className='form-control' placeholder='john@gmail.com' name='email' value={values.email} onChange={handleChange} />
                                {errors.email && <small className='text-danger mt-2 ms-1 '>{errors.email}</small>}
                            </div>
                            <div className='col-12 mb-2'>
                                <label htmlFor='message' className='form-label fs-base'>
                                    Message <span className="text-danger">*</span>
                                </label>
                                <textarea id='message' className='form-control ' rows='2' name='message' placeholder='message' value={values.message} onChange={handleChange} ></textarea>
                                {errors.message && <small className='text-danger mt-2 ms-1 '>{errors.message}</small>}
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type='submit' className='btn btn-primary btn-sm shadow-primary text-center'>
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
            <ToastContainer />
        </div>
    )

}

export default blogContactForm