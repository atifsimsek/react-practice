import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <Formik
        initialValues={{
          name: "",
          email: "",
          agree: false,
          favoriteColor: ""
        }}
        validationSchema={
          Yup.object().shape({
            name: Yup.string().required("This area cannot be empty"),
            email: Yup.string().email().required("Email cannot be empty"),
            agree: Yup.boolean().oneOf([true],"Please read and accept the rules"),
            favoriteColor: Yup.string().required("Please choose color").oneOf(["yellow", "red"])
          })}

        onSubmit={(values, { resetForm, setSubmitting }) => {

          console.log(values)
          setTimeout(() => {
            resetForm()

          }, 3000);
        }}


      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          handleReset,
          dirty,
          isSubmitting,
          touched,
          submitForm
        }
        ) => (
          <form onSubmit={handleSubmit} >
            <h3>Register</h3>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder='Name...'
              value={values.name}
              onChange={handleChange}
            />
            {
              errors.name && touched.name && (
                <h4>
                  {errors.name}
                </h4>

              )
            }
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder='Email...'
              value={values.email}
              onChange={handleChange}
            />
            {
              errors.email && touched.email && (
                <h4>
                  {errors.email}
                </h4>

              )}
            <br />
            <br />
            <label htmlFor="favoriteColor">Color</label>
            <select
              id="favoriteColor"
              value={values.favoriteColor}
              onChange={handleChange}
            >
              <option value="" label='Choose Color' />
              <option value="red" label='Yellow' />
              <option value="yellow" label='Red' />
            </select>

            {
              errors.favoriteColor && touched.favoriteColor && (
                <h4>
                  {errors.favoriteColor}
                </h4>

              )}

            <br />
            <br />

            <input
              type="checkbox"
              id='agree'
              value={values.agree}
              onChange={handleChange}

            />
            {
             console.log(errors)

              }
            <label htmlFor="agree">I have read and accept the rules</label>
            {
              errors.agree && touched.agree && (
                <h4>
                  {errors.agree}
                </h4>

              )}
            <br />
            <br />
            <button
              type='submit'
              disabled={!dirty || isSubmitting}

            >Register
            </button>


          </form>
        )}

      </Formik>


    </div>
  )
}

export default App