import { Center } from "../Elements/Center";

const ProfileImage = ({ name, fontSize }) => {

  let initials = name.slice(0, Math.min(2, name.length));
  if (name.split(" ").length >= 2) {
    const names = name.split(" ");
    initials = names[0][0] + names[1][0];
  }

  return (
    <Center className="h-full w-full rounded-full bg-[#c6ccfa]">
      <p className={`${fontSize} font-medium tracking-wider text-blue-600`}>{initials.toUpperCase()}</p>
    </Center>
  );
};

export default ProfileImage;
