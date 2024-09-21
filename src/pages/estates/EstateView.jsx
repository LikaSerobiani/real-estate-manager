import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useEstateStore from "../../stores/useEstateStore";
import { formatDate } from "../../utils/dateUtils";

import LeftArrow from "../../components/common/Icons/LeftArrow";
import Phone from "../../components/common/Icons/Phone";
import Email from "../../components/common/Icons/Email";
import LocationMarker from "../../components/common/Icons/LocationMarker";
import Bed from "../../components/common/Icons/Bed";
import PostSign from "../../components/common/Icons/PostSign";
import Resize from "../../components/common/Icons/Resize";
import City from "../../components/common/Icons/City";

import Button from "../../components/common/Button";
import Tag from "../../components/specific/estates/Tag";
import Loading from "../../components/common/Loading";
import Carousel from "../../components/specific/estates/Carousel";
import DeleteModal from "../../components/common/Modals/Delete";
import SuccessModal from "../../components/common/Modals/Success";

const LARI_SYMBOL = "\u20BE";

export default function EstateView() {
  const { id } = useParams();

  const navigate = useNavigate();
  const {
    currentEstate,
    fetchEstateById,
    deleteEstate,
    estates,
    fetchEstates,
  } = useEstateStore();

  const [filteredEstates, setFilteredEstates] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    if (id) {
      fetchEstateById(id);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id, fetchEstateById]);

  useEffect(() => {
    fetchEstates();
  }, [fetchEstates]);

  useEffect(() => {
    if (currentEstate && estates.length > 0) {
      const regionName = currentEstate.city?.region?.name;
      if (regionName) {
        const filtered = estates.filter(
          (estate) =>
            estate.city?.region?.name === regionName &&
            estate.id !== currentEstate.id
        );
        setFilteredEstates(filtered);
      }
    }
  }, [currentEstate, estates]);

  if (!currentEstate) {
    return <Loading />;
  }

  const handleDelete = async () => {
    try {
      await deleteEstate(id);

      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error deleting estate:", error);
    }
  };

  const {
    image,
    price,
    address,
    area,
    bedrooms,
    zip_code,
    description,
    created_at,
    is_rental,
    agent: { avatar, name, surname, email, phone } = {},
    city: { name: cityName } = {},
  } = currentEstate;

  return (
    <>
      <DeleteModal
        showModal={showModal}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
      <SuccessModal
        title="ლისტინგი წარმატებით წაიშალა!"
        showModal={showSuccessModal}
        handleClose={() => setShowSuccessModal(false)}
      />

      <button onClick={() => navigate(-1)}>
        <LeftArrow />
      </button>
      <div className="flex gap-[68px] w-full mt-[30px]">
        <div className="flex flex-col items-end gap-[11px]">
          <div className="relative">
            <img
              src={image}
              alt="estate image"
              className="w-[839px] h-[670px] rounded-t-[14px] object-cover"
            />
            <div
              className="absolute top-[41px] left-[41px]"
              style={{ zIndex: 1 }}
            >
              <Tag is_rental={is_rental === 1} />
            </div>
          </div>
          <p className="font-firago text-[16px] leading-[19.2px] font-normal text-lightGray">
            გამოქვეყნების თარიღი {formatDate(created_at)}
          </p>
        </div>

        <div className="pt-[30px] flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[24px]">
            <div>
              <span className="font-bold font-firago text-[48px] leading-[57.6px] text-secondary">
                {price} {LARI_SYMBOL}
              </span>
            </div>
            <div className="flex flex-col gap-[16px] text-lightGray text-[24px] leading-[28.8px] font-normal font-firago">
              <div className="flex gap-1 items-center">
                <LocationMarker />
                <span>{address}</span>
              </div>
              <div className="flex gap-1 items-center">
                <City />
                <span>{cityName}</span>
              </div>
              <div className="flex gap-1 items-center">
                <Resize />
                <div className="flex gap-1">
                  <p>
                    <span>ფართი</span> {area} მ
                  </p>
                  <span className="text-[11px] leading-3 font-normal">2</span>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <Bed />
                <p>
                  <span>საძინებელი</span> {bedrooms}
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <PostSign />
                <p>
                  <span> საფოსტო ინდექსი</span> {zip_code}
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="font-firago text-[16px] leading-[26px] font-normal text-lightGray">
              {description}
            </span>
          </div>
          <div className="w-[503px] h-[174px] border border-border rounded-lg py-[24px] px-[20px] flex flex-col gap-[16px]">
            <div className="flex items-center gap-2">
              <img
                src={avatar}
                alt="agent"
                className="w-[72px] h-[72px] rounded-[100px] object-cover"
              />

              <div className="flex flex-col gap-1">
                <p className="font-firago font-normal text-[16px] leading-[19.2px] text-secondary">
                  {name} {surname}
                </p>
                <p className="text-darkGray text-[14px] leading-[16.8px] font-firago font-normal">
                  აგენტი
                </p>
              </div>
            </div>

            <div className="text-lightGray font-firago text-[14px] leading-[16.8px] font-normal flex flex-col gap-1">
              <div className="flex gap-[5px] items-center">
                <Email />
                <span>{email}</span>
              </div>
              <div className="flex gap-[5px] items-center">
                <Phone />
                <span>{phone}</span>
              </div>
            </div>
          </div>
          <Button
            onClick={handleShow}
            variant="remove"
            title="ლისტინგის წაშლა"
          />
        </div>
      </div>

      {filteredEstates.length > 0 ? (
        <>
          <h1 className="text-[32px] text-secondary font-firago font-medium leading-[38.4px] my-[52px]">
            ბინები მსგავს ლოკაციაზე
          </h1>
          <Carousel estates={filteredEstates} />
        </>
      ) : null}
    </>
  );
}
