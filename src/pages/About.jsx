export default function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <header className="about__hero">
        <div>
          <p className="about__eyebrow">About Burmese Bookshelf</p>
          <h1 id="about-title">本がつなぐ、<br /><em>遠くて近い世界。</em></h1>
        </div>
        <div className="about__hero-copy">
          <p>
            Burmese Bookshelf は、ミャンマーにまつわる本と、
            読む人の毎日に静かに寄り添う本を集める小さなオンライン書店です。
          </p>
          <p>一冊との出会いが、新しい景色への入口になると信じています。</p>
        </div>
        <div className="about__spines" aria-hidden="true">
          <span>READ</span><span>SHARE</span><span>KEEP</span>
        </div>
      </header>

      <section className="about__statement">
        <p className="about__section-label">Our point of view</p>
        <p>読むことは、<br />世界を少し広げること。</p>
      </section>

      <section className="about__story">
        <div>
          <p className="about__section-label">The shelf</p>
          <h2>誰かの大切な一冊を、<br />次の読者へ。</h2>
        </div>
        <div>
          <p>
            古書には、以前の読者が過ごした時間が残っています。少し色あせた表紙や、
            何度も開かれたページも、その本だけが持つ物語の一部です。
          </p>
          <p>
            私たちは装丁、内容、そして読み終えたあとに残る感覚まで大切にしながら、
            手元に置きたくなる本を一冊ずつ選んでいます。
          </p>
        </div>
      </section>

      <section className="about__values" aria-label="Burmese Bookshelf values">
        <article>
          <span>01</span>
          <h3>Curated</h3>
          <p>時間をかけて、個性と余韻のある本を選びます。</p>
        </article>
        <article>
          <span>02</span>
          <h3>Considered</h3>
          <p>本の状態や背景が伝わる、誠実な情報を届けます。</p>
        </article>
        <article>
          <span>03</span>
          <h3>Connected</h3>
          <p>本を通して、人と文化のあいだに小さな橋をつくります。</p>
        </article>
      </section>
    </section>
  );
}
