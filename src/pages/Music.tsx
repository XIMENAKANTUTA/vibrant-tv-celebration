
const Music = () => {
  return (
    <div className="pt-20 pb-8 min-h-screen bg-deepBlack">
      <div className="container mx-auto px-4">
        <div className="relative w-full" style={{ height: "calc(100vh - 12rem)" }}>
          <iframe
            title="SoundCloud Playlist"
            width="100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1757599191&color=%23ff1b8d&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
          />
        </div>
      </div>
    </div>
  );
};

export default Music;
