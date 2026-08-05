import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard.jsx";
// src/pages/Home.jsx ※追加：既存のimportの下
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
import { Link } from "react-router-dom";


const INITIAL_COUNT = 9;
const STEP = 9;

export default function Home({ favorites, cart }) {
  const [items, setItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDocs(collection(db, "items")).then((snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p className="loading">読み込み中...</p>;
  }

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  return (
    <div className="home">
      <section className="home__hero">
        <p className="home__eyebrow">Burmese Bookshelf · Tokyo</p>
        <div className="home__hero-copy">
          <h1>本棚に、<br /><em>新しい余白を。</em></h1>
          <p>読み終えたあとも、手元に残しておきたくなる本を集めました。</p>
          <Link to="/about">私たちについて <span>→</span></Link>
        </div>
        <div className="home__hero-art" aria-hidden="true">
          <span className="home__hero-book home__hero-book--one">READ</span>
          <span className="home__hero-book home__hero-book--two">SLOWLY</span>
          <span className="home__hero-book home__hero-book--three">NOMA</span>
          <span className="home__hero-seal">01<br />BOOKS</span>
        </div>
      </section>
      <div className="home__heading">
        <h2 className="home__title">Shelf selection</h2>
        <p>{items.length} books in the collection</p>
      </div>
      <ul className="home__list">
        {visibleItems.map((item) => (
          <li key={item.id}>
            <ItemCard item={item} favorites={favorites} cart={cart} />
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          className="home__more"
          onClick={() => setVisibleCount((c) => c + STEP)}
        >
          more
        </button>
      )}
    </div>
  );
}
