import GalleryItem from "../GalleryItem";

const Gallery = ({ itemData }) => {
    return (
      <div className="gallery">
        {itemData.map((item) => (
          <GalleryItem
            key={item.img}
            image={item.img}
            title={item.title}
            description={item.author}
          />
        ))}
      </div>
    );
  };

export default Gallery;
