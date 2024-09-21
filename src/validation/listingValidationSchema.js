import * as Yup from "yup";

export const listingValidationSchema = Yup.object().shape({
  address: Yup.string()
    .required("მისამართი სავალდებულოა")
    .min(2, "მინიმუმ ორი სიმბოლო"),
  image: Yup.mixed()
    .required("სურათი სავალდებულოა")
    .test(
      "fileSize",
      "სურათის ზომა არ უნდა აღებმატებოდეს 1mb-ის ზომაში",
      (value) => value && value.size <= 1024 * 1024
    )
    .test(
      "fileType",
      "სურათი უნდა იყოს სურათის ტიპის",
      (value) => value && value.type.startsWith("image/")
    ),
  region_id: Yup.string().required("რეგიონი სავალდებულოა"),
  city_id: Yup.string().required("ქალაქი სავალდებულოა"),
  zip_code: Yup.string()
    .required("საფოსტო ინდექსი სავალდებულოა")
    .matches(/^\d+$/, "მხოლოდ რიცხვები"),
  price: Yup.number()
    .required("ფასი სავალდებულოა")
    .typeError("მხოლოდ რიცხვები"),
  area: Yup.number()
    .required("ფართობი სავალდებულოა")
    .typeError("მხოლოდ რიცხვები"),
  bedrooms: Yup.number()
    .required("საძინებლების რაოდენობა სავალდებულოა")
    .typeError("მხოლოდ რიცხვები")
    .integer("საძინებლების რაოდენობა უნდა იყოს მთელი რიცხვი"),
  description: Yup.string()
    .required("აღწერა სავალდებულოა")
    .min(5, "მინიმუმ 5 სიტყვა"),
  agent_id: Yup.string().required("აგენტი სავალდებულოა"),
});
