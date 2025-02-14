
const ForYou = () => {
  return (
    <div className="pt-16 min-h-screen bg-deepBlack">
      <div className="relative w-full h-full" style={{ height: "calc(100vh - 4rem)" }}>
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/UO-lWrL7XjE"
          title="Para Ti Mamita"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default ForYou;
