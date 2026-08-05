// src/components/ItemCard.jsx
import { Link } from "react-router-dom";

export default function ItemCard({ item, favorites, cart }) {
  const isSoldOut = item.status === "soldout";
  const handleFavorite = (e) => {
    if (isSoldOut) return;
    if (favorites.has(item.id)) {
      favorites.remove(item.id);
    } else {
      favorites.add(item.id);
    }
  };
  const handleAddToCart = (e) => {
    if (isSoldOut) return;
    cart.add(item.id);
  };

  return (
    <article className={isSoldOut ? "item-card is-soldout" : "item-card"}>
      <Link to={`/items/${item.id}`} className="item-card__link">
        <div className="item-card__image">
          <img src={item.image} alt={item.name} />
          {isSoldOut && <span className="item-card__badge">sold out</span>}
        </div>
        <p className="item-card__category">{item.category}</p>
        <h3 className="item-card__name">{item.name}</h3>
        <p className="item-card__price">¥{item.price.toLocaleString()}</p>
      </Link>
      <div className="item-card__actions">
        <button type="button" className="item-card__cart" onClick={handleAddToCart} disabled={isSoldOut}>
          {isSoldOut ? "在庫なし" : "読書リストに入れる"}
        </button>
        <button
          type="button"
          className={favorites.has(item.id) ? "item-card__save is-active" : "item-card__save"}
          onClick={handleFavorite}
          disabled={isSoldOut}
          aria-label={favorites.has(item.id) ? "保存を解除" : "あとで読む本に保存"}
        >
          {favorites.has(item.id) ? "Saved" : "Save"}
        </button>
      </div>
    </article>
  );
}
