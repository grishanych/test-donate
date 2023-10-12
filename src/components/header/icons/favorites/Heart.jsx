import { ReactComponent as HeartSVG } from "./heart.svg";
import { ReactComponent as HeartFillSVG } from "./heart-fill.svg";
import { useSelector } from "react-redux";

const HeartFavorite = () => {
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
  };
  
export default HeartFavorite;