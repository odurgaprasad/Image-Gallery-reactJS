import React from "react";

function Gallery({ data }) {
  return (
    <div className="image-gallery">
      {data.map((photo) => {
        console.log(photo);
        const srcPath = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`; // URL construction
        return (
          <div key={photo.id} className="image-item">
            <img src={srcPath} alt={photo.title} />
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
