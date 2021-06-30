import React, { useState } from 'react'
import styles from '../../../styles/tab.module.scss'
import LinkedIn from '../../assets/icons/linkedin.svg'
import GitHub from '../../assets/icons/github.svg'
import { Button } from '../ui'
import Image from 'next/image'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { useToasts } from 'react-toast-notifications'
// import WriteToCloudFirestore from '../cloudFireStore/Write'
interface Props {
  data: string
  image_url: string
}
interface MyFormProps {
  email: string
}

const HomeTab = (props: Props): JSX.Element => {
  const { addToast } = useToasts()
  const [loading, setLoading] = useState(false)

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  })

  const handleSubmit = (value: MyFormProps, actions: FormikHelpers<MyFormProps>): void => {
    setLoading(true)
    actions.setSubmitting(false)
    const data = {
      email: value.email,
    }
    fetch('/api/connect', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        setLoading(false)
        // console.log('Response received')
        if (res.status === 200) {
          // console.log('Response succeeded!')
          addToast('Thanks for connecting..', { appearance: 'success', autoDismiss: true })
          actions.resetForm({
            values: {
              email: '',
            },
          })
        }
      })
      .catch(() => {
        setLoading(false)
        // console.log(err)
        addToast('Sorry! something went wrong.', { appearance: 'error', autoDismiss: true })
      })
  }

  return (
    <div className={styles.homeTabContainer}>
      {/* <WriteToCloudFirestore /> */}
      <div className={styles.profile}>
        <div className={styles.user_info}>
          <div className={styles.profile_pic}>
            <Image
              width="100%"
              height="100%"
              src={props.image_url}
              layout="responsive"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/+v/ZAAJhQONY7moDwAAAABJRU5ErkJggg=="
            />
          </div>
          <div className={styles.socialIcons}>
            <div className={styles.s_icon}>
              <a href="https://www.linkedin.com/in/souravlayek/">
                <LinkedIn />
              </a>
            </div>
            <div className={styles.s_icon}>
              <a href="https://github.com/souravlayek">
                <GitHub />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heading}>Hi I’m Sourav.</div>
      <div className={styles.tagline}>{props.data}</div>
      <div className={styles.cta}>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            // same shape as initial values
            // console.log(values)
            handleSubmit(values, actions)
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field className={styles.input} name="email" placeholder="Email Address" />
              {errors.email && touched.email && (
                <div className={styles.errorMessage}>{errors.email}</div>
              )}
              <Button title="Connect With Me" type="submit" loading={loading} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default HomeTab
