import React, { useContext, useState, useEffect, createContext } from "react";
import FilmPhotosData from "./../../datas/FilmPhotos";

export const ReposContext = createContext();

export function GitHubReposContextProvider({ children }) {
  const [gitHubRepos, setgitHubRepos] = useState([]);
  useEffect(() => {
    const myRepos = FilmPhotosData;
    const filteredRepos = myRepos?.filter((repo) => repo);
    setgitHubRepos(filteredRepos);
  }, []);
  return (
    <ReposContext.Provider value={{ gitHubRepos }}>
      {children}
    </ReposContext.Provider>
  );
}

export function useGitHubRepos() {
  const context = useContext(ReposContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
