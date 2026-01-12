
import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  value: string;
  label: string;
  subtext?: string;
}

const Counter: React.FC<CounterProps> = ({ value, label, subtext }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, value]);

  const animateValue = () => {
    // Basic logic for visual animation
    const target = value;
    let current = 0;
    const increment = 1;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    // We just show the value after a slight delay for aesthetic purposes
    setTimeout(() => {
      setDisplayValue(value);
    }, 300);
  };

  return (
    <div ref={ref} className="text-center group p-6 rounded-2xl transition-all hover:bg-white hover:shadow-xl">
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 transition-transform group-hover:scale-110">
        {displayValue}
      </div>
      <div className="text-lg font-semibold text-slate-800 mb-1">{label}</div>
      {subtext && <div className="text-xs text-slate-500 uppercase tracking-widest">{subtext}</div>}
    </div>
  );
};

export default Counter;
