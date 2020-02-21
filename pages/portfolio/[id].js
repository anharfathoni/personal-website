// import React, { useEffect } from 'react';
// import { useRouter } from 'next/router';

// import BaseLayout from '../../components/layouts/BaseLayout'

// function Portfolio(props) {
//   const router = useRouter();

//   useEffect(() => {
//     console.log('props', props);
//     console.log('router', router.query);
//   }, [router, props]);

//   const click = () => {
//     router.push('/');
//   };

//   return (
//     <BaseLayout>
//       <p>My Portfolio</p>
//       <p>{router.query.id}</p>
//       <button onClick={click}>Go Home</button>
//     </BaseLayout>
//   );
// }

// export default Portfolio;

import React, { useEffect } from 'react';
import { withRouter } from 'next/router';

import BaseLayout from '../../components/layouts/BaseLayout'

function Portfolio(props) {
  // const router = useRouter();

  useEffect(() => {
    console.log('props', props);
    console.log('router', props.router.query);
  }, [props]);

  const click = () => {
    props.router.push('/');
  };

  return (
    <BaseLayout>
      <p>My Portfolio</p>
      <p>{props.router.query.id}</p>
      <button onClick={click}>Go Home</button>
    </BaseLayout>
  );
}

export default withRouter(Portfolio);
