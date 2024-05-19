// Third party imports
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import styled, { keyframes } from "styled-components";
import { toast } from "react-toastify";

// User imports
import { FlexCenter, FlexCol } from "../Elements/Flex";
import ProfileImage from "./ProfileImage";
import { reset, update } from "../store/userslice";
import { removeItem } from "../Functions/storage";
import { useEffect } from "react";
import { useRef } from "react";
import isOutDimensionsClick from "../Functions/isOutsideDimensionsClick";
import { useCallback } from "react";

const slideInUp = keyframes`
from{
    transform : translate(0,.5rem);
    opacity : 0;
}
 to{
    transform : translate(0,0);
    opacity : 1;
}
`;

const slideOutDown = keyframes`
   to{
        transform : translate(0,.5rem);
        opacity : 0;
        display : none;
    }
`;

const hidden = keyframes`
    from{
        display: none;
    }
    to{
        display:none
    }
`;

const AnimationContainer = styled(FlexCol)`
  animation: ${(props) =>
      props.$state === "load"
        ? hidden
        : props.$state === "open"
          ? slideInUp
          : slideOutDown}
    200ms linear forwards;
`;

const ProfileImageConstructor = ({ image, name }) => {
  return image ? (
    <img
      src={image}
      alt={name}
      className="aspect-square w-full rounded-full object-cover object-center"
    />
  ) : (
    <ProfileImage name={name} fontSize="text-base" />
  );
};

const Options = ({ Icon, name, link, onClickHandler = () => {} }) => {
  return (
    <FlexCenter
      onClick={onClickHandler}
      className="my-[.85rem] gap-3 text-darkgrey hover:text-blackGrey"
    >
      <Icon className="text-xl" />
      <Link to={link}>{name}</Link>
    </FlexCenter>
  );
};

const ProfileDropDown = () => {
  const dropDownRef = useRef();
  const profileIconRef = useRef();
  const [dropDownState, setDropDownState] = useState("load"); // "load" or "hidden" or "open"
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const dropDownStateHandler = () =>
    setDropDownState((prev) => (prev !== "open" ? "open" : "hidden"));

  const handleOutSideClick = (event) => {
    const { clientX, clientY } = event;
    const dropDownDimensions = dropDownRef?.current?.getBoundingClientRect();
    const profileIconDimensions =
      profileIconRef?.current?.getBoundingClientRect();

    if (
      dropDownState === "open" &&
      isOutDimensionsClick(dropDownDimensions, clientX, clientY) &&
      isOutDimensionsClick(profileIconDimensions, clientX, clientY)
    ) {
      setDropDownState("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutSideClick);
    return () => window.removeEventListener("click", handleOutSideClick);
  }, [handleOutSideClick]);

  return (
    <div className="relative ">
      <div
        ref={profileIconRef}
        className="aspect-square w-14 sm:w-16"
        onClick={dropDownStateHandler}
      >
        <ProfileImageConstructor image={user.image} name={user.name} />
      </div>

      <AnimationContainer
        ref={dropDownRef}
        $state={dropDownState}
        className="absolute right-0 top-full z-50 mt-3 rounded-xl bg-white px-6 py-4 shadow-[0_0_10px_1px_rgba(0,0,0,.1)] transition-all"
      >
        <FlexCenter className="justify-start gap-3 border-b-[1px] border-stone-200 py-2 pr-8">
          <div className="aspect-square w-14 ">
            <ProfileImageConstructor image={user.image} name={user.name} />
          </div>
          <FlexCol className="gap-1">
            <h4 className="text-[#02020a]">{user.name}</h4>
            <p className="text-grey">{user.email}</p>
          </FlexCol>
        </FlexCenter>

        <FlexCol className="border-b-[1px]  border-stone-200">
          <Options
            Icon={IoSettingsOutline}
            name="Account Settings"
            link="/account/settings"
          />
          {user.default_role.startsWith("satyam") ? (
            <Options
              Icon={IoSettingsOutline}
              name="Admin Console"
              link="/satyam"
            />
          ) : (
            <>
              <Options
                Icon={IoSettingsOutline}
                name="Author console"
                link="/author"
                onClickHandler={() => {
                  dispatch(update({ current_role: "author" }));
                }}
              />
              <Options
                Icon={IoSettingsOutline}
                name="Reviewer console"
                link="/reviewer"
                onClickHandler={() => {
                  dispatch(update({ current_role: "reviewer" }));
                }}
              />
            </>
          )}
        </FlexCol>
        <div>
          <Options
            Icon={FiLogOut}
            name="Logout"
            link={"/"}
            onClickHandler={() => {
              dispatch(reset());
              removeItem("info");
              removeItem("l_id");
              toast.success("Logout successfully");
            }}
          />
        </div>
      </AnimationContainer>
    </div>
  );
};

export default ProfileDropDown;
