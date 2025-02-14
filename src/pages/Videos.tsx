
const Videos = () => {
  const videoData = [
    {
      id: "dQw4w9WgXcQ",
      title: "Un Regalo Especial"
    },
    {
      id: "Y2V6yjjPbX0",
      title: "Momentos Mágicos"
    },
    {
      id: "jNQXAC9IVRw",
      title: "Recuerdos Felices"
    },
    {
      id: "8CEJoCr_9UI",
      title: "Sonrisas Compartidas"
    },
    {
      id: "31g0YE61PLQ",
      title: "Instantes Únicos"
    },
    {
      id: "2Z4m4lnjxkY",
      title: "Celebración Especial"
    }
  ];

  return (
    <div className="pt-20 pb-8 min-h-screen bg-deepBlack">
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
