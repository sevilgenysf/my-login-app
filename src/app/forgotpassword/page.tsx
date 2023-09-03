"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ForgotPassword = () => {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Geçerli bir e-posta adresi giriniz.")
      .required("E-posta zorunludur."),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Unutulan şifre sıfırlama işlemi burada yapılabilir
      console.log(values);
    } catch (error) {
      console.error("Şifre sıfırlama hatası:", error);
    } finally {
      setSubmitting(false);
    }
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
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Şifremi Sıfırla
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
