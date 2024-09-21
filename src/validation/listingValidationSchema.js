import * as Yup from "yup";

export const listingValidationSchema = Yup.object().shape({
  address: Yup.string()
    .required("მისამართი სავალდებულოა")
    .min(2, "მისამართი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს"),
  image: Yup.mixed()
    .required("სურათი სავალდებულოა")
    .test(
      "fileSize",
      "სურათის ზომა არ უნდა აღებმატებოდეს 1mb-ის ზომაში",
      (value) => value && value.size <= 1024 * 1024
    ),
  region_id: Yup.string().required("რეგიონი სავალდებულოა"),
  city_id: Yup.string().required("ქალაქი სავალდებულოა"),
  zip_code: Yup.string()
    .required("საფოსტო ინდექსი სავალდებულოა")
    .matches(/^\d+$/, "საფოსტო ინდექსი უნდა იყოს რიცხობრივი"),
  price: Yup.number()
    .required("ფასი სავალდებულოა")
    .typeError("ფასი უნდა იყოს რიცხობრივი"),
  area: Yup.number()
    .required("ფართობი სავალდებულოა")
    .typeError("ფართობი უნდა იყოს რიცხობრივი"),
  bedrooms: Yup.number()
    .required("საძინებლების რაოდენობა სავალდებულოა")
    .typeError("საძინებლების რაოდენობა უნდა იყოს რიცხობრივი")
    .integer("საძინებლების რაოდენობა უნდა იყოს მთელი რიცხვი"),
  description: Yup.string()
    .required("აღწერა სავალდებულოა")
    .min(5, "აღწერა უნდა შეიცავდეს მინიმუმ 5 სიტყვას"),
  agent_id: Yup.string().required("აგენტი სავალდებულოა"),
});
