import React from 'react';
import { useFormik } from 'formik';
import styles from "./styles.module.css";
import Label from '../../components/label';
import Button from '../../components/button';
import { userSchema } from '../../helper/yup.js';

const TicketForm = () => {
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            age: '',
            idNO: '',
            email: '',
            address: '',
            subject: '',
            applyReason: ''
        },
        validationSchema: userSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
    
            <form className={styles.form} onSubmit={handleSubmit}>
            <main className={styles.main}>
                <div className={styles.formLeft}>
                    <Label label="Ad" />
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className={styles.formInput}
                        onChange={handleChange}
                        value={values.firstName}
                    />
                    <Label label="Soyad" />

                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className={styles.formInput}
                        onChange={handleChange}
                        value={values.lastName}
                    />
                    <Label label="TC" />
                    <input
                        id="idNo"
                        name="idNO"
                        type="text"
                        className={styles.formInput}
                        onChange={handleChange}
                        value={values.idNO}
                    />
                 
                    <Label label="Adres" />
                    <textarea name="address" className={styles.txtArea}></textarea>

                    <Button text="Dosya Ekle" type="submit" />

                </div>
                <div className={styles.formRight}>
                {errors.age && <span> {errors.age} </span>}
                    <Label label="Yaş" />
                    <input
                        id="age"
                        name="age"
                        type="text"
                        className={styles.formInput}
                        onChange={handleChange}
                        value={values.age}
                    />
                    {errors.email && <span> {errors.email} </span>}
                    <Label label="Email" />
                    <input
                        id="email"
                        name="email"
                        type="text"
                        className={styles.formInput}
                        onChange={handleChange}
                        value={values.email}
                    />
                    <Label label="Başvuru Konusu" />
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        className={styles.formInput}
                        onChange={handleChange}
                        value={values.subject}
                    />
                    
                     <Label label="Başvuru Nedeni" />
                     <textarea className={styles.txtArea}></textarea>
                    <Button name="applyReason" text="Başvur" type="submit" />
                     
                </div>
            </main>


        </form>
    
    );
};
export default TicketForm;