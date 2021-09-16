import { useDebugValue } from "react";
import "../styles.css";
import RecommendationsContainer from "./recommendations/RecommendationsContainer";
import WatchlistContainer from "./watchlist/WatchlistContainer";

// state for movie cards will reside here:

// movie title
// movie released date
// movie image
// watch later
// watched
// edit notes
// note

export default function App() {
  return (
    <div className="App">
      <RecommendationsContainer />
      <WatchlistContainer />
    </div>
  );
}
