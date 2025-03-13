import TypeAnimationComp from "../components/molecule/TypeAnimationComp";

export default function Home() {
  return (
    <div className="h-full">
      <div className=" grid slg:grid-cols-2 xl:grid-cols-4 w-full gap-4">
        <div className="h-96 w-full bg-my-color"></div>
        <div className="h-96 w-full bg-red-700"></div>
        <div className="h-96 w-full bg-red-700"></div>
        <div className="h-96 w-full bg-red-700"></div>
        <div className="h-96 w-full bg-red-700"></div>
        <div className="h-96 w-full bg-red-700"></div>
        <TypeAnimationComp/>
      </div>
    </div>
  );
}
