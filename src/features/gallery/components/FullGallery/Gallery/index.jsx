import GalleryItem from "../GalleryItem";

const Gallery = ({ itemData }) => {
    return (
      <div className="gallery">
        {itemData.map((item) => (
          <GalleryItem
            key={item.id}
            image={item.imageUrl}
            title={item.name}
            id={item.id}
          />
        ))}
      </div>
    );
  };

export default Gallery;
