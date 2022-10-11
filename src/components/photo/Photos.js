import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = async (page) => {
  try {
    const Response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return Response.data;
  } catch (error) {
    console.log(error);
  }
};

// const getRandomPhotosAsync = async (page) => {
//   const Response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
//   return Response.data;
// };

// const getPhotos = () => {
//   return fetch("https://picsum.photos/v2/list")
//     .then((Response) => {
//       return Response.json();
//     })
//     .then((images) => {
//       // console.log(images);
//       var html = images.map((image, index) => {
//         return `
//           <div key ${index}>
//             <img src="${image.download_url}" alt="huy"/>
//             <h3>${image.author}</h3>
//           </div>
//         `;
//       });
//       html = html.join("\n");
//       console.log(html);
//       setTimeout(() => {
//         document.querySelector(".root").innerHTML = html;
//       }, 1000);
//       return html;
//     })
//     .catch((error) => console.Console.log(error));
// };

const Photos = () => {
  // useEffect(callback, [dependencies])
  const [randomImages, setRandomImages] = useState([]);

  const [nextPage, setNextPage] = useState(1);
  useEffect(function callback() {
    // side-effects
    // getPhotos().then((data) => {
    //   setRandomImages(data);
    // });

    handleLoadMorePhotosAsync();
  }, []);

  // const handleLoadMorePhotos = () => {
  //   getRandomPhotos(nextPage).then((images) => {
  //     const newImages = [...randomImages, ...images];
  //     setRandomImages(newImages);
  //     setNextPage(nextPage + 1);
  //   });
  // };

  const handleLoadMorePhotosAsync = async () => {
    const images = await getRandomPhotos(nextPage);
    const newImages = [...randomImages, ...images];
    setRandomImages(newImages);
    setNextPage(nextPage + 1);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5 cursor-pointer">
        {randomImages.length > 0 &&
          randomImages.map((image, index) => (
            <div
              key={image.id}
              className="p-3 bg-white shadow-md rounded-lg h-[200px] hover:opacity-50"
            >
              <img
                src={image.download_url}
                alt={image.author}
                title={image.author}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={handleLoadMorePhotosAsync}
          className="inline-block px-8 py-4 bg-primary-gradient text-white font-bold rounded-lg hover:opacity-50"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Photos;
