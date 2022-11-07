import React from "react";
import { useGallery } from "../../contexts/gallery-context";
import PropTypes from "prop-types";

const PhotoList = () => {
  const { photos } = useGallery();

  return (
    <div className="py-10 px-5">
      <div className="grid grid-cols-4 gap-5">
        {photos.length > 0 &&
          photos.map((photo) => (
            <PhotoItem key={photo.id} {...photo}></PhotoItem>
          ))}
      </div>
    </div>
  );
};

const PhotoItem = ({ id, url, isLike, ...props }) => {
  const { toggleLike, handleAddToCart } = useGallery();
  return (
    <div className="relative h-[300px] cursor-pointer group">
      <img src={url} alt="" className="w-full h-full object-cover rounded-lg" />
      <span
        className="absolute right-3 top-3 cursor-pointer invisible group-hover:visible transition-all"
        onClick={() => toggleLike(id)}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16663 17.5C4.16611 14.4798 5.37993 11.5863 7.53499 9.47045C9.69005 7.35458 12.6053 6.19405 15.625 6.24998C19.2027 6.23098 22.6166 7.74826 25 10.4166C27.3833 7.74826 30.7972 6.23098 34.375 6.24998C37.3946 6.19405 40.3099 7.35458 42.4649 9.47045C44.62 11.5863 45.8338 14.4798 45.8333 17.5C45.8333 28.6583 32.5437 37.0833 25 43.75C17.4729 37.0271 4.16663 28.6666 4.16663 17.5Z"
            fill={`${isLike ? "#ff6bcb" : "#fff"}`}
          />
        </svg>
      </span>
      <button
        onClick={() => handleAddToCart({ id, url, isLike })}
        className="absolute bottom-3 py-2 px-4 font-medium text-black bg-white rounded-lg left-2/4 -translate-x-2/4 invisible group-hover:visible group-hover:shadow-lg transition-all"
      >
        Add to cart
      </button>
    </div>
  );
};

PhotoItem.propTypes = {
  url: PropTypes.string,
  id: PropTypes.number,
  isLike: PropTypes.bool,
};

export default PhotoList;
