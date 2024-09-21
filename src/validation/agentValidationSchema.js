import * as Yup from "yup";

export const agentValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("სახელი სავალდებულოა")
    .min(2, "მინიმუმ ორი სიმბოლო"),
  surname: Yup.string()
    .required("გვარი სავალდებულოა")
    .min(2, "მინიმუმ ორი სიმბოლო"),
  email: Yup.string()
    .required("ელ-ფოსტა სავალდებულოა")
    .email("ჩაწერეთ ვალიდური მონაცემები")
    .matches(/@redberry.ge$/, "ელ-ფოსტა უნდა მთავრდებოდეს @redberry.ge-თ"),
  phone: Yup.string()
    .required("ტელეფონის ნომერი სავალდებულოა")
    .matches(/^\d+$/, "მხოლოდ რიცხვები")
    .matches(/^5\d{8}$/, "ტელეფონის ნომერი უნდა იყოს ფორმატის 5XXXXXXXX"),
  avatar: Yup.mixed()
    .required("ავატარი სავალდებულოა")
    .test(
      "fileType",
      "ავატარი უნდა იყოს სურათის ტიპის",
      (value) => value && value.type.startsWith("image/")
    ),
});
