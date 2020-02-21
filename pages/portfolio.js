import BaseLayout from '../components/layouts/BaseLayout';
import { useRouter } from 'next/router';

export default function IndexPage() {
  //   const router = useRouter();
  const { query } = useRouter();

  return (
    <>
      <BaseLayout>
        <p>portfolio page</p>
        <p>{query.id}</p>
      </BaseLayout>
    </>
  );
}
