import React, { useEffect, useState } from 'react';
import './BenefitsInfo.css';

function BenefitsInfo() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Define isMounted como true após o componente ser montado
  }, []);

  return (
    <section id="counter" className={isMounted ? 'counter-enter' : ''}>
      <ul className="container counter__container">
        <li>
          <h3>+reciclagem<small>+ Premios</small></h3>
        </li>
        <li>
          <h3>+ de 15<small>premios diferentes</small></h3>
        </li>
      </ul>
    </section>
  );
}

export default BenefitsInfo;