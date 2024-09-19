/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Formik, Form } from "formik";
import Input from "../Input";
import Modal from "../Modals/Modal";
import FileUploader from "../FileUploader";
import PlusIcon from "../Icons/Plus";
import Button from "../Button";

export default function CreateAgent({ showModal, handleClose }) {
  return (
    <Modal isModalOpen={showModal} onClose={handleClose}>
      <div className="p-4">
        <h2 className="font-firago font-bold text-[32px] leading-[38.4px] text-secondary mb-4">
          აგენტის დამატება
        </h2>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            phone: "",
            file: null,
          }}
          onSubmit={(values) => {}}
        >
          {({
            values,
            handleChange,
            handleBlur,
            errors,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-7">
                <Input
                  label="სახელი"
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name}
                  touched={touched.name}
                  isValid={touched.name && !errors.name}
                />
                <Input
                  label="გვარი"
                  id="surname"
                  type="text"
                  value={values.surname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.surname}
                  touched={touched.surname}
                  isValid={touched.surname && !errors.surname}
                />
              </div>
              <div className="flex gap-7">
                <Input
                  label="ელ-ფოსტა"
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  touched={touched.email}
                  isValid={touched.email && !errors.email}
                />
                <Input
                  label="ტელეფონის ნომერი"
                  id="phone"
                  type="text"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.phone}
                  touched={touched.phone}
                  isValid={touched.phone && !errors.phone}
                />
              </div>
              <FileUploader
                onFileChange={(file) =>
                  handleChange({ target: { name: "file", value: file } })
                }
              />

              <Button title="Create" variant="primary" icon={PlusIcon} />
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
}
