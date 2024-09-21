/* eslint-disable react/prop-types */
import React from "react";
import { Formik, Form } from "formik";
import Input from "../Input";
import Modal from "../Modals/Modal";
import FileUploader from "../FileUploader";
import Button from "../Button";
import useAgentStore from "../../../stores/useAgentStore";
import { agentValidationSchema } from "../../../validation/agentValidationSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateAgent({ showModal, handleClose }) {
  const { addAgent } = useAgentStore();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await addAgent(values);
      resetForm();
      handleClose();
      toast.success("აგენტი წარმატებულად დაემატა!");
    } catch (error) {
      toast.error("Failed to add agent.");
    }
    setSubmitting(false);
  };

  return (
    <>
      <Modal isModalOpen={showModal} onClose={handleClose} padding="87px 105px">
        <div className="flex flex-col gap-[22px]">
          <h2 className="font-firago font-bold text-[32px] leading-[38.4px] text-secondary text-center">
            აგენტის დამატება
          </h2>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              phone: "",
              avatar: null,
            }}
            validationSchema={agentValidationSchema}
            onSubmit={handleSubmit}
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              setFieldValue,
            }) => (
              <Form className="flex items-end flex-col gap-[28px]">
                <div className="flex gap-[22px]">
                  <Input
                    label="სახელი"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name}
                    touched={touched.name}
                    initialMessage="სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს"
                  />
                  <Input
                    label="გვარი"
                    id="surname"
                    name="surname"
                    value={values.surname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.surname}
                    touched={touched.surname}
                    initialMessage="გვარი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს"
                  />
                </div>
                <div className="flex gap-[22px]">
                  <Input
                    label="ელ-ფოსტა"
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    touched={touched.email}
                    initialMessage="ელ-ფოსტა უნდა მთავრდებოდეს @redberry.ge-თ"
                  />
                  <Input
                    label="ტელეფონის ნომერი"
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.phone}
                    touched={touched.phone}
                    initialMessage="მხოლოდ რიცხვები"
                  />
                </div>
                <FileUploader
                  onFileChange={(file) => setFieldValue("avatar", file)}
                  error={touched.avatar && errors.avatar}
                />
                <div className="flex gap-[15px] ">
                  <Button
                    title="გაუქმება"
                    variant="secondary"
                    onClick={handleClose}
                  />
                  <Button
                    title="დაამატე აგენტი"
                    variant="primary"
                    type="submit"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
}
