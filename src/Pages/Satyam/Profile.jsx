import { Flex } from "../../Elements/Flex";
// import NotificationBell from "./../../assets/img/icons/notification.svg";

const Profile = () => {
  return (
    <Flex className="items-center gap-6">
      <div className="relative ">
        <img src={NotificationBell} className="relative aspect-square w-6" />
        <span className="absolute left-3/4 top-[10%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-red-600" />
      </div>
      <Flex className="items-center gap-4">
        <img
          // src={User}
          className="aspect-auto w-10 rounded-full border-[.05rem] border-darkgrey object-contain object-top "
        />
        <p className="text-base tracking-wider text-darkgrey">Shelly Chopra</p>
      </Flex>
    </Flex>
  );
};

export default Profile;
