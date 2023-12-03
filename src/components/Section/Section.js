import styles from "./Section.module.scss";

const Section = ({ id, children }) => {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  );
};

export default Section;
