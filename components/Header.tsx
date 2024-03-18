import profileImg from "../assets/images/profile.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="header flex gap-6 items-center">
      <div className="imageContainer w-[92px] h-[92px] rounded-full overflow-hidden flex items-center justify-center border border-secondary cursor-pointer">
        <Image
          src={profileImg}
          alt="Daniel Endaylalu"
          className="w-[95%] bg-center"
        />
      </div>

      <div className="header-content flex flex-col gap-2 py-4">
        <h1 className="header-title text-primary text-3xl">Daniel Endaylalu</h1>
        <h3 className="text-secondary text-base px-1">
          Full-stack web developer.
        </h3>
      </div>
    </div>
  );
};

export default Header;
