
const Videos = () => {
  const videoData = [
    {
      id: "BtaWsOlxGQI",
      title: "Un Regalo Especial"
    },  
    {
      id: "CdiwMwEcQh4",
      title: "Momentos Mágicos"
    },
    {
      id: "--Q5UfJjlNU",
      title: "Recuerdos Felices"
    },
    {
      id: "gEx_gSZUXdA",
      title: "Sonrisas Compartidas"
    },
    {
      id: "",
      title: "Instantes Únicos"
    },
    {
      id: "T4wlrUqfi6o",
      title: "Celebración Especial"
    }
  ];

  return (
    <div className="pt-20 pb-8 min-h-screen bg-deepBlack videos-page">
      <div className="container mx-auto">
        <div className="video-grid">
          {videoData.map((video) => (
            <div key={video.id} className="flex flex-col items-center">
              <h3 className="glowing-title text-3xl mb-4">{video.title}</h3>
              <div className="video-container">
                <iframe
                  className="video-iframe"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
