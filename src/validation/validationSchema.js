import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("სახელი სავალდებულოა")
    .min(2, "სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს"),
  surname: Yup.string()
    .required("გვარი სავალდებულოა")
    .min(2, "გვარი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს"),
  email: Yup.string()
    .required("ელ-ფოსტა სავალდებულოა")
    .email("ჩაწერეთ ვალიდური მონაცემები")
    .matches(/@redberry.ge$/, "ელ-ფოსტა უნდა მთავრდებოდეს @redberry.ge-თ"),
  phone: Yup.string()
    .required("ტელეფონის ნომერი სავალდებულოა")
    .matches(/^\d+$/, "მხოლოდ რიცხვები")
    .matches(/^5\d{8}$/, "ტელეფონის ნომერი უნდა იყოს ფორმატის 5XXXXXXXX"),
  avatar: Yup.mixed().required("ავატარი სავალდებულოა"),
});
