import BaseLayout from '../components/layouts/BaseLayout';

export default function CV() {
  return (
    <BaseLayout>
      <div>
        <p>This is CV page</p>
      </div>
      <style jsx>{`
        p {
          font-family: 'Raleway', sans-serif;
          color: red;
          font-weight: 800;
        }
        .tes {
          font-family: 'Raleway', sans-serif;
          color: blue;
        }
      `}</style>
    </BaseLayout>
  );
}
