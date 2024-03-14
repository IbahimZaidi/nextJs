import RightContainerHome from "@/src/ComponentsLayout/dashbord/helpComponentDashbord/home/rightContainer";
import Image from "next/image";
export default function Home() {
  return (
    <main className="h-100%  w-80vw m-auto p-2 bg-green-400 flex flex-col lg:flex-row space-x-2 space-y-2 lg:space-y-0">
      <RightContainerHome />
      <div className=" bg-red-400 border border-black  w-50% hidden  lg:flex  items-center justify-center">
        <Image
          // src="/images/about.png"
          src="https://images.pexels.com/photos/20498979/pexels-photo-20498979/free-photo-of-mongolian-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Error 404"
          className=" border border-black h-100%"
          width="445"
          height="450"
        />
      </div>
    </main>
  );
}
