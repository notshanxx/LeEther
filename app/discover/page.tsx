import FeatureLists from "./_components/FeatureLists";
import MiniTestList from "./_components/MiniTestList";


export default function DiscoverPage() {
  

  return (
    <div className="flex flex-col items-center mt-24 pb-24">
      <h1 className="text-4xl font-bold mb-10">Discover Page</h1>
      <div className="flex flex-col sm:flex-row gap-4 mx-5 max-w-2xl">
        {/* list here */}
        <FeatureLists />
        <MiniTestList />
        
      </div>
    </div>
  );
}
