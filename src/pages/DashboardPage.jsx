import React from "react"; // React
import { useRecoilValue } from "recoil"; // Recoil
import { watchHistoryAtom } from "../store/atoms"; // Atoms
import { mostViewedVideosList, mostViewedChannelsList } from "../store/selectors"; // Selectors

export const DashboardPage = () => {
  const watchHistory = useRecoilValue(watchHistoryAtom);
  const data1 = useRecoilValue(mostViewedVideosList);
  const data2 = useRecoilValue(mostViewedChannelsList);

  return (
    <main>
      <h1>Dashboard</h1>
      <button onClick={() => console.log(watchHistory)}>Click Here For watchHistory</button>
      <button onClick={() => console.log(data1)}>Click Here For mostViewedVideosList</button>
      <button onClick={() => console.log(data2)}>Click Here For mostViewedChannelsList</button>
    </main>
  );
};
