import styles from './stats.module.scss';
import { Statistic_strapi } from '@/src/lib/api-types/home-page';

const stats = [
  { value: '12+', label: 'Years experience' },
  { value: '60+', label: 'Clients' },
  { value: '240+', label: 'Completed projects' },
  { value: '20+', label: 'Achievements' },
];

type StatsProps = {
  statistics: Statistic_strapi[];
};

const Stats = ({ statistics }: StatsProps) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.blurCard}>
        {statistics.map((item) => (
          <div key={item.id} className={styles.item}>
            <h3 className={styles.value}>{item.value}</h3>
            <p className={styles.label}>{item.title}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Stats;
