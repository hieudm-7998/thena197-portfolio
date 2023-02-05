import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGitHubRepos } from "./datacontext";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import Masonry from "@mui/lab/Masonry";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function FilmPhotosDetail() {
  const { gitHubRepos } = useGitHubRepos();
  const [currentRepo, setCurrentRepo] = useState([]);
  const params = useParams();

  const [selectedImage, setSelectedImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
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
          <h2>Repo name:{currentRepo.tag}</h2>
          <span>Id: {currentRepo.id}</span>
          <Masonry>
            {currentRepo.gallery &&
              currentRepo.gallery.map &&
              currentRepo.gallery.map((image, index) => (
                <div key={index} onClick={() => handleClick(image.url)}>
                  <img src={image.url} alt={`img-${index}`} />
                </div>
              ))}
          </Masonry>
          {selectedImage && (
            <CustomModal
              currentImage={selectedImage}
              onClose={() => setSelectedImage(null)}
              openModal={openModal}
            />
          )}
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
}

function CustomModal({ openModal, currentImage }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    outline: 0,
  };

  return (
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img src={currentImage} alt="abc" />
      </Box>
    </Modal>
  );
}
