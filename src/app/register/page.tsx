"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Kullanıcı adı zorunludur."),
    email: Yup.string()
      .email("Geçerli bir e-posta adresi giriniz.")
      .required("E-posta zorunludur."),
    password: Yup.string()
      .min(6, "Şifre en az 6 karakter olmalıdır.")
      .required("Şifre zorunludur."),
  });

  const handleSubmit = (values: any, { setSubmitting }) => {
    // Kayıt işlemi burada yapılabilir
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-gray-700">
                Kullanıcı Adı
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 border rounded w-full text-gray-700"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700">
                E-posta Adresi
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border rounded w-full text-gray-700"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700">
                Şifre
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 border rounded w-full text-gray-700"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Kayıt Ol
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
