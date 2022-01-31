import React from "react"; // React
import { useRecoilValue } from "recoil"; // Recoil
import { watchHistoryAtom, searchHistoryAtom } from "./store/atoms"; // Atoms
import { UploadPage } from "./pages/UploadPage"; // Component Page
import { DashboardPage } from "./pages/DashboardPage"; // Component Page

export const App = () => {
  const watchHistory = useRecoilValue(watchHistoryAtom);
  const searchHistory = useRecoilValue(searchHistoryAtom);

  return <>{!watchHistory?.length ? <UploadPage /> : <DashboardPage />}</>;
};
