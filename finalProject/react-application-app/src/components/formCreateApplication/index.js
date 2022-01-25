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
            applyReason: '',
        },
        validationSchema: userSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log("selam")
        },

    });
    return (
    
            <form className={styles.form} onSubmit={handleSubmit}>
            <main className={styles.main}>
                <div className={styles.formLeft}>
                    <Label label="Ad" error={errors.firstName} />
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className={styles.formInput}
                        onChange={handleChange}
                        value={values.firstName}
                    />
                    <Label label="Soyad" error={errors.lastName}/>

                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className={styles.formInput}
                        onChange={handleChange}
                        value={values.lastName}
                    />
                    <Label label="TC"  error={errors.idNO}/>
                    <input
                        id="idNo"
                        name="idNO"
                        type="number"
                        className={styles.formInput}
                        onChange={handleChange}
                        value={values.idNO}
                    />
                 
                    <Label label="Adres" error={errors.address} />
                    <textarea name="address" className={styles.txtArea}    onChange={handleChange}
                        value={values.address}></textarea>

                    <Button text="Dosya Ekle" type="button"/>

                </div>
                <div className={styles.formRight} >
                
                    <Label label="Yaş" error={errors.age} />
                    <input
                        id="age"
                        name="age"
                        type="number"
                        className={styles.formInput}
                        onChange={handleChange}
                        value={values.age}
                    />
                   
                    <Label label="Email" error={errors.email} />
                    <input
                        id="email"
                        name="email"
                        type="text"
                        className={styles.formInput}
                        onChange={handleChange}
                        value={values.email}
                    />
                    <Label label="Başvuru Konusu" error={errors.subject}/>
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        className={styles.formInput}
                        onChange={handleChange}
                        value={values.subject}
                    />
                    
                     <Label label="Başvuru Nedeni"  error={errors.applyReason}/>
                     <textarea  name="applyReason" className={styles.txtArea} onChange={handleChange}
                        value={values.applyReason}></textarea>
                    <Button text="Başvur" type="submit" onSubmit={handleSubmit} />
                     
                </div>
            </main>


        </form>
    
    );
};
export default TicketForm;