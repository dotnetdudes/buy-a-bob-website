import GalleryItem from "../GalleryItem";

const Gallery = ({ itemData }) => {
    return (
      <div className="gallery">
        {itemData.map((item) => (
          <GalleryItem
            key={item.id}
            image={item.imageUrl}
            title={item.name}
            description={item.description}
          />
        ))}
      </div>
    );
  };

export default Gallery;
