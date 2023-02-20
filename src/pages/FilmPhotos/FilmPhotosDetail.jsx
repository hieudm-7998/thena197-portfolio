import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGitHubRepos } from "./datacontext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Masonry from "@mui/lab/Masonry";
import { CSSTransition } from "react-transition-group";
import Modal from "react-modal";

export default function FilmPhotosDetail() {
  const { gitHubRepos } = useGitHubRepos();
  const [currentRepo, setCurrentRepo] = useState([]);
  const params = useParams();

  const [selectedImage, setSelectedImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "100%",
      height: "100%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleClick = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    // eslint-disable-next-line
    const res = gitHubRepos?.find((repo) => {
      if (repo?.tag.toLowerCase() === params.projectName) {
        setCurrentRepo(repo);
        document.title = `${repo.title} | theNa197 Portfolio`;
      }
    });
    return res;
  }, [gitHubRepos, params.projectName]);

  return (
    <>
      {currentRepo ? (
        <>
          <h2 className="text-center text-2xl text-cyan-800 mb-10">
            {currentRepo.title}
          </h2>
          {/* <span>Id: {currentRepo.id}</span> */}
          <Masonry
            columns={{ xs: 2, sm: 2, md: 3 }}
            spacing={{ xs: 1, sm: 1, md: 2 }}
          >
            {currentRepo.gallery &&
              currentRepo.gallery.map &&
              currentRepo.gallery.map((image, index) => (
                <div key={index} onClick={() => handleClick(image.url)}>
                  <LazyLoadImage
                    className="cursor-pointer hover:opacity-80 transition"
                    src={image.url}
                    alt={`img-${index}`}
                  />
                </div>
              ))}
          </Masonry>
        </>
      ) : (
        "Loading..."
      )}
      {selectedImage && (
        <CSSTransition in={openModal} timeout={300}>
          <Modal
            isOpen={openModal}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
          >
            <div>
              <div className="flex flex-row-reverse">
                <button onClick={closeModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <img
                className="gallery-modal-image block mx-auto"
                src={selectedImage}
                alt={selectedImage}
              />
            </div>
          </Modal>
        </CSSTransition>
      )}
    </>
  );
}

// function CustomModal({ openModal, currentImage }) {
//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 400,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
//     outline: 0,
//   };

//   return (
//     <Modal
//       open={openModal}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box sx={style}>
//         <img src={currentImage} alt="abc" />
//       </Box>
//     </Modal>
//   );
// }
