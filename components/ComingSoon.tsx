import Image from "next/image";
import handWave from "../assets/gifs/handwave.gif";

const ComingSoon = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-6">
      <Image src={handWave} alt="hand wave" className="w-[62px]" />
      <h1 className="text-green-300 text-center text-xl">coming soon...</h1>
    </div>
  );
};

export default ComingSoon;
