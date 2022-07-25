import React, { useContext, useEffect, useState } from "react";
import { database } from "../firebase";
import { storage } from "../firebase";
import { ref as refS, getDownloadURL, listAll } from "firebase/storage";
import { onValue, ref } from "firebase/database";

const DatabaseContext = React.createContext();

export function useDatabase() {
  return useContext(DatabaseContext);
}

export function DatabaseProvider({ children }) {
  const refDb = ref(database, "/" + process.env.REACT_APP_FIREBASE_UID + "/");

  const refStorage = refS(
    storage,
    "/" + process.env.REACT_APP_FIREBASE_UID + "/first_tab/"
  );

  const refProfilePictureStorage = refS(
    storage,
    "/" + process.env.REACT_APP_FIREBASE_UID + "/"
  );

  const [data, setData] = useState(null);
  const [imageUrlList, setImageUrlList] = useState([]);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    const urlList = [];
    //counter for storing the number of images whose urls has loaded
    var counter = 0;
    listAll(refStorage)
      .then((res) => {
        var resCount = res.items.length;
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            urlList.push(url);
            setImageUrlList(urlList);
            counter += 1;
          }).finally(() => {
            if (counter === resCount) {
              setLoadingImages(false);
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
    onValue(refDb, (snapshot) => {
      const value = snapshot.val();
      setData(value);
      setLoadingData(false);
    });
    listAll(refProfilePictureStorage).then((res) => {
      getDownloadURL(res.items[0]).then((url) => {
        setProfilePictureUrl(url);
      });
    });
  }, []);

  const value = {
    data,
    loadingData,
    imageUrlList,
    loadingImages,
    profilePictureUrl,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}
