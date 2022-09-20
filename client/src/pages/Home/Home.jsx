import styles from "./Home.module.css";
import heroImage from "../../assets/heroImage.png";
import heroBgImage from "../../assets/heroBgImage.jpg";
import aboutImage from "../../assets/aboutImage.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <article className={styles.hero__article}>
          <h1 className={styles.hero__h1}>We make <span className="red">posible</span> connect with your <span className="green">friends</span></h1>
          <p className={styles.hero__p}>In this place, you will be connected to your friends by more that messages, you will be connected by feelings printed in text</p>
        </article>
        <img className={styles["hero__bg-img"]} src={heroBgImage} alt="Messages RedWriters Connecting the pepole" />
        <img className={styles.hero__img} src={heroImage} alt="Messages RedWriters Connecting the pepole" />
      </section>
      <section className={styles.about}>
        <article className={styles.about__article}>
          <h2 className={styles.about__h2}>About</h2>
          <p className={styles.about__p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem suscipit, nisi pariatur deserunt sequi distinctio esse iure explicabo qui voluptates optio, officiis quas consequuntur amet perspiciatis incidunt vero. Molestiae, repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam natus officiis id explicabo blanditiis. Dicta perspiciatis tempora, a praesentium nemo aut voluptatum, voluptas enim atque veritatis exercitationem accusamus sequi perferendis.</p>
          <h4 className={styles.about__h4}>We able to our users to share them feelings...</h4>
        </article>
        <img src={aboutImage} className={styles.about__img} alt="Our user sharing them feelings" />
      </section>
      <section className={styles.features}>

      </section>
    </main>
  )
}