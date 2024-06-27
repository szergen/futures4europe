export default async function PersonPage({ params }: any) {
  return (
    <>
      <div className="relative">test Person page name:</div>
      <div>{params?.slug}</div>
    </>
  );
}
