import { useSelector } from "react-redux";
import { ReactComponent as HeartSVG } from "./heart.svg";
import { ReactComponent as HeartFillSVG } from "./heart-fill.svg";

function HeartFavorite() {
  const favorites = useSelector((state) => state.favorites.items);
  const isFavoritesEmpty = favorites.length === 0;
  return (
    <div>
      {isFavoritesEmpty ? (
        <HeartSVG />
      ) : (
        <HeartFillSVG />
      )}
    </div>
  );
}
  
export default HeartFavorite;
