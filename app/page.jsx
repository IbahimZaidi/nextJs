import RightContainerHome from "@/src/ComponentsLayout/dashbord/helpComponentDashbord/home/rightContainer";
import Image from "next/image";
export default function Home() {
  return (
    <main className="h-100%  w-80vw m-auto p-2 bg-green-400 flex flex-col lg:flex-row gap-x-2 gap-6">
      <RightContainerHome />
      <div className=" bg-red-400 border border-black  flex-1 hidden  lg:flex  items-center justify-center">
        <Image
          // src="/images/about.png"
          src="/images/hero.gif"
          alt="Error 404"
          className=" border border-black h-100%"
          width="445"
          height="450"
        />
      </div>
    </main>
  );
}
