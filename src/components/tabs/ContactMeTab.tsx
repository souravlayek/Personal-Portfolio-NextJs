import React from 'react'
import { HeadingText, IconCard, Button } from '../ui'
import LocationIcon from '../../assets/icons/location.svg'
import MailIcon from '../../assets/icons/mail.svg'
import CallIcon from '../../assets/icons/call.svg'
import FreelanceIcon from '../../assets/icons/freelance.svg'
import { Formik, Form, Field } from 'formik'

import * as Yup from 'yup'

import styles from '../../../styles/tab.module.scss'

const ContactMeTab = (): JSX.Element => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    subject: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().min(5, 'Too Short!').max(450, 'Too Long!').required('Required'),
  })
  return (
    <div className={styles.contactTab}>
      <HeadingText title="let's talk" />
      <div className={styles.content}>
        <div className={styles.leftCards}>
          <IconCard icon={<LocationIcon />} title="MTPS, Bankura, West Bengal,India" />
          <IconCard icon={<CallIcon />} title="+91 8617 552 545" />
          <IconCard icon={<MailIcon />} title="hello@souravlayek.com" />
          <IconCard icon={<FreelanceIcon />} title="Freelance Available" />
        </div>
        <div className={styles.data}>
          <HeadingText title="I am open to discuss about projects." subheading />
          <div className={styles.form}>
            <Formik
              initialValues={{
                name: '',
                email: '',
                subject: '',
                message: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values)
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="row">
                    <div className="col_6">
                      <Field className={styles.input} name="name" placeholder="Full Name" />
                      {errors.name && touched.name && (
                        <div className={styles.errorMessage}>{errors.name}</div>
                      )}
                    </div>
                    <div className="col_6">
                      <Field className={styles.input} name="email" placeholder="Email Address" />
                      {errors.email && touched.email && (
                        <div className={styles.errorMessage}>{errors.email}</div>
                      )}
                    </div>
                    <div className="col_12">
                      <Field
                        className={styles.input}
                        name="subject"
                        placeholder="Topic to discuss"
                      />
                      {errors.subject && touched.subject && (
                        <div className={styles.errorMessage}>{errors.subject}</div>
                      )}
                    </div>
                    <div className="col_12">
                      <Field
                        as="textarea"
                        className={styles.textArea}
                        name="message"
                        placeholder="How Can I help You?"
                      />
                      {errors.message && touched.message && (
                        <div className={styles.errorMessage}>{errors.message}</div>
                      )}
                    </div>
                    <div style={{ marginTop: '10px' }} className="col_4">
                      <Button type="submit" title="Send Message" />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMeTab
