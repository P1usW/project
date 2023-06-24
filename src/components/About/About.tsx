import { FC, useEffect, useState } from 'react';

const About: FC = () => {
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    console.log(1);
  }, [anim])

  return (
    <div>
      <button onClick={() => setAnim(prev => !prev)}>123</button>
    </div>
  );
};

export default About;