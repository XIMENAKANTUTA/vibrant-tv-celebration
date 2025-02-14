
const Home = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat animate-fadeIn"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507502707872-893971d1b493?q=80&w=2073&auto=format&fit=crop')",
      }}
    >
      <div className="text-center px-4">
        <h1 className="glowing-title mb-4">
          FELIZ CUMPLEAÑOS
        </h1>
        <h2 className="glowing-title">
          MAMITA VALENTINA
        </h2>
      </div>
    </div>
  );
};

export default Home;
