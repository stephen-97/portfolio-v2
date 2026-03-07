import styles from './stats.module.scss';
import { Statistic_strapi } from '@/src/lib/api-types/home-page';

type StatsProps = {
  statistics: Statistic_strapi[];
};

const Stats = ({ statistics }: StatsProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.blurCard}>
        {statistics.map((item) => (
          <div key={item.id} className={styles.item}>
            <p className={styles.value}>{item.value}</p>
            <p className={styles.label}>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
