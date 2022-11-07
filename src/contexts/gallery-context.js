import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const GalleryContext = createContext();

const fakeData = [
  {
    id: 1,
    url: "https://picsum.photos/200/300?grayscale",
    isLike: false,
  },
  {
    id: 2,
    url: "https://picsum.photos/200/300?grayscale",
    isLike: false,
  },
  {
    id: 3,
    url: "https://picsum.photos/200/300?grayscale",
    isLike: false,
  },
  {
    id: 4,
    url: "https://picsum.photos/200/300?grayscale",
    isLike: false,
  },
  {
    id: 5,
    url: "https://picsum.photos/200/300?grayscale",
    isLike: false,
  },
  {
    id: 6,
    url: "https://picsum.photos/200/300?grayscale",
    isLike: false,
  },
];

function GalleryProvider(props) {
  const { setValue: setValueP, storedValue: storedValueP } = useLocalStorage(
    "photos",
    fakeData
  );
  const [photos, setPhotos] = useState(storedValueP);
  const { setValue: setValueC, storedValue: storedValueC } = useLocalStorage(
    "cartItems",
    []
  );
  const [cart, setCart] = useState(storedValueC);
  const values = {
    photos,
    setPhotos,
    cart,
    setCart,
    toggleLike,
    handleAddToCart,
    handleRemoveFromCart,
  };

  function toggleLike(photoId) {
    const updateLike = photos.map((photo) => {
      if (photo.id === photoId) return { ...photo, isLike: !photo.isLike };
      return photo;
    });
    setPhotos(updateLike);
    setValueP(updateLike);
  }

  function handleAddToCart(newItem) {
    if (cart.some((item) => item.id === newItem.id)) return;
    setCart([...cart, newItem]);
    setValueC([...storedValueC, newItem]);
  }

  function handleRemoveFromCart(newItem) {
    const updateCart = storedValueC.filter((item) => item.id !== newItem.id);
    setCart(updateCart);
    setValueC(updateCart);
  }

  return (
    <GalleryContext.Provider
      value={values}
      {...props}
    ></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined") throw new Error("useContext is error!");
  return context;
}

export { GalleryProvider, useGallery };
