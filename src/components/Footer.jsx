export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <p className="site-footer__message">A considered<br />place for books.</p>
        <ul className="site-footer__sns">
        <li>
          <a href="#" aria-label="Instagram">
            IG
          </a>
        </li>
        <li>
          <a href="#" aria-label="X (Twitter)">
            X
          </a>
        </li>
        <li>
          <a href="#" aria-label="Facebook">
            f
          </a>
        </li>
        </ul>
      </div>
      <p className="site-footer__copy">© Burmese Bookshelf 2026 · Independent bookseller</p>
    </footer>
  );
}
