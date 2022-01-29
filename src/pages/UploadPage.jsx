import React from "react"; // React
import { useRecoilState } from "recoil"; // Recoil
import { watchHistoryAtom, searchHistoryAtom } from "../store/atoms"; // Atoms
import { watchHistoryParser } from "../utils/watchHistoryParser"; // Parser util
import { searchHistoryParser } from "../utils/searchHistoryParser"; // Parser util
import { Dropzone } from "../components/UploadPageComponents/Dropzone"; // Component

export const UploadPage = () => {
  const [, setWatchHistory] = useRecoilState(watchHistoryAtom);
  const [, setSearchHistory] = useRecoilState(searchHistoryAtom);

  return (
    <>
      <Dropzone
        title="Watch History"
        desc="this is a dropzone for watch-history.json"
        fileNeeded="watch-history.json"
        fileParser={watchHistoryParser}
        setState={setWatchHistory}
      />

      <Dropzone
        title="Search History"
        desc="this is a dropzone for search-history.json"
        fileNeeded="search-history.json"
        fileParser={searchHistoryParser}
        setState={setSearchHistory}
      />
    </>
  );
};
