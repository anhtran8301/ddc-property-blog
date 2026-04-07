import {useEffect, useState, type ReactNode} from 'react';
import {animated, useSpring} from '@react-spring/web';

import styles from './styles.module.css';

const PATH_MORPH_A =
  'M122.4 -230.4C149.8 -196.2 157.2 -145.6 177.9 -104.5C198.7 -63.3 232.8 -31.7 243.5 6.2C254.2 44 241.4 88 220.1 128.1C198.8 168.3 168.9 204.5 130.8 217.3C92.7 230.2 46.3 219.6 4.1 212.5C-38.2 205.4 -76.3 201.9 -103.4 182.7C-130.5 163.5 -146.4 128.6 -162 95.6C-177.6 62.5 -192.8 31.3 -202.2 -5.5C-211.7 -42.2 -215.4 -84.3 -202.7 -122.3C-189.9 -160.3 -160.7 -194 -124.2 -222.9C-87.7 -251.8 -43.8 -275.9 1.8 -279.1C47.5 -282.3 95 -264.5 122.4 -230.4';

const PATH_MORPH_B =
  'M125.6 -199.6C168.2 -192.9 211.8 -170.2 238.2 -134.3C264.7 -98.3 273.8 -49.2 267.8 -3.5C261.7 42.2 240.4 84.3 213.2 119C186.1 153.6 153 180.7 116.5 199.5C80 218.2 40 228.6 4.2 221.4C-31.7 214.2 -63.3 189.4 -96.1 168.4C-128.9 147.5 -162.7 130.5 -186.7 103.1C-210.7 75.7 -224.9 37.8 -233.8 -5.2C-242.8 -48.2 -246.5 -96.3 -231.7 -139.6C-216.9 -182.9 -183.4 -221.4 -141.7 -228.5C-100 -235.7 -50 -211.6 -4.3 -204.2C41.5 -196.9 83 -206.3 125.6 -199.6';

export default function HomepageHeroBlob(): ReactNode {
  const [active, setActive] = useState(false);
  const {x} = useSpring({
    x: active ? 1 : 0,
    config: {
      duration: 4000,
      tension: 120,
      friction: 14,
    },
  });

  useEffect(() => {
    const id = setTimeout(() => {
      setActive((v) => !v);
    }, 4000);
    return () => clearTimeout(id);
  }, [active]);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <svg
      className={styles.heroBlobAnimated}
      width={1000}
      height={1300}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      aria-hidden>
      <animated.path
        transform="translate(414.756822946785 313.7476382623813)"
        fill="#333"
        opacity={0.2}
        d={x.to({
          range: [0, 1],
          output: [PATH_MORPH_A, PATH_MORPH_B],
        })}
      />
    </svg>
  );
}
