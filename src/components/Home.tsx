import HomeBackground from "./ui/HomeBackground";

const Home = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <HomeBackground />
      <div className="absolute z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Random Text</h1>
      </div>
    </section>
  );
};

export default Home;