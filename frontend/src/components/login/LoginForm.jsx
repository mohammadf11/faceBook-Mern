import { useFormik } from 'formik'
import * as Yup from 'yup'
import ErrorMessage from './ErrorMessage'
import useScreenSize from '../../hooks/screenSize'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";


function LoginForm() {
  const { isLG } = useScreenSize()
  const loginValidation = Yup.object({
    email: Yup.string()
      .required('Email address is required')
      .email('Invalid email address'),
    password: Yup.string().required('Password is required'),
  })
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidation,
    onSubmit: (values) => {},
  })

  return (
    <div className="shadow-md p-4 rounded-md bg-gray-100">
      <div className="w-80">
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div className={`${isLG ? '' : 'space-y-4'}  relative`}>
            {formik.touched.email && formik.errors.email ? (
              <ErrorMessage
                message={formik.errors.email}
                position={isLG ? 'left' : ''}
                arrowDir="down"
              />
            ) : null}
            <div className="relative">
              <input
                className={`textInput ${
                  formik.touched.email && formik.errors.email
                    ? 'ring-red-400'
                    : ''
                } `}
                id="email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                placeholder="Email or phone number"
              />
              {formik.touched.email && formik.errors.email ? (
                <ExclamationCircleIcon className="errorInfo" />
              ) : null}
            </div>
          </div>
          <div className={`${isLG ? '' : 'space-y-4'}  relative `}>
            <div className="relative">
              <input
                className={`textInput ${
                  formik.touched.password && formik.errors.password
                    ? 'ring-red-400'
                    : ''
                } `}
                id="password"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                type="password"
                placeholder="password or phone number"
              />
              {formik.touched.password && formik.errors.password ? (
                <ExclamationCircleIcon className="errorInfo" />
              ) : null}
            </div>
            {formik.touched.password && formik.errors.password ? (
              <ErrorMessage
                message={formik.errors.password}
                position={isLG ? 'left' : ''}
                arrowDir="up"
              />
            ) : null}
          </div>
          <button
            disabled={!(formik.isValid && formik.dirty)}
            className="blue-btn disabled:cursor-not-allowed disabled:opacity-70"
            type="submit"
          >
            Log In
          </button>
        </form>
        <Link
          className="block text-center text-blue-500 text-lg hover:underline p-6 "
          to="/reset"
        >
          Forgotten password?
        </Link>
        <div className="divider"></div>
        <div className="flex justify-center items-center p-4 mt-4">
          <button className="green-btn">
            Create Account
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default LoginForm
