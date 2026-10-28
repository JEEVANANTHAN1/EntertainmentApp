import React from 'react';
import { useCountUp } from '../../../hooks/useCountUp';
import './StatsCounter.scss';

const StatBadge = ({ target, suffix, label }) => {
  const { count, elementRef } = useCountUp(target, 2000);

  return (
    <div className="orange-stat-item" ref={elementRef}>
      <div className="orange-stat-item__circle">
        <span className="orange-stat-item__num">{count}{suffix}</span>
      </div>
      <span className="orange-stat-item__label">{label}</span>
    </div>
  );
};

export const StatsCounter = () => {
  const stats = [
    { target: 8, suffix: '+', label: 'Years of Experience' },
    { target: 25, suffix: '+', label: 'Concerts' },
    { target: 15, suffix: '+', label: 'Corporate Events' },
    { target: 20, suffix: '+', label: 'DJ Events' }
  ];

  return (
    <section className="orange-stats-ribbon" aria-label="Key Milestones">
      <div className="orange-stats-ribbon__container">
        {stats.map((s, idx) => (
          <StatBadge key={idx} target={s.target} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
