import styles from './stats.module.scss';

const stats = [
  { value: '12+', label: 'Years experience' },
  { value: '60+', label: 'Clients' },
  { value: '240+', label: 'Completed projects' },
  { value: '20+', label: 'Achievements' },
];

const StatsBlur = () => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.blurCard}>
        {stats.map((item, index) => (
          <div key={index} className={styles.item}>
            <h3 className={styles.value}>{item.value}</h3>
            <p className={styles.label}>{item.label}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default StatsBlur;
