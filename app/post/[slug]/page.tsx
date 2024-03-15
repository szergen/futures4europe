export default async function PostPage({ params }: any) {
  return (
    <>
      <div className="relative">test Post page name:</div>
      <div>{params?.slug}</div>
    </>
  );
}
