import { createContext, useState, useEffect } from "react";
import Modal from "../shared/Modal";
import { fetchDataFromApi } from "../utility/api";

export const Context = createContext();


export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalMsg, setModalMsg] = useState('');

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);


  const fetchSelectedCategoryData = (query) => {

    setLoading(true);
    fetchDataFromApi("/search/?q=" + query)
      .then(({ contents }) => {

        setSearchResults(contents);
        setLoading(false);
        setModal(false);
      })

      .catch((err) => {
        setModalMsg(err.message);
        setModal(true);
        
      });
    
  };

  return (
    <>
      
      <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
        isDark,
        setIsDark,
        modal,
        setModal,
        modalMsg,
        setModalMsg
      }}
    >
      {modal && (<Modal message={modalMsg}/>)}
      {props.children}
    </Context.Provider>
    </>
    
  );
};
