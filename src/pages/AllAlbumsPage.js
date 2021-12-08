import { useEffect, useState } from "react";
import PicturePreview from "../components/AllPictures/PicturePreview";

const AllAlbumsPage = () => {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    const fetchPictures = async () => {
      const response = await fetch(
        "https://react-photography-default-rtdb.europe-west1.firebasedatabase.app/pictures.json"
      );
      const responseData = await response.json();

      const loadedAlbums = [];

      for (const key in responseData) {
        if(loadedAlbums.category !== responseData[key].category){

        }
        loadedAlbums.push({
          id: key,
          url: responseData[key].url,
          category: responseData[key].category,
        });
      }
      setAlbum(loadedAlbums);
    };
    fetchPictures();
  }, []);
  const categoryList = album.map((picture) => (
    <PicturePreview
      key={picture.id}
      id={picture.id}
      url={picture.url}
      category={picture.category}
    />
  ));

  return (
    <>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {categoryList}
          </div>
        </div>
      </div>
    </>
  );
};
export default AllAlbumsPage;
