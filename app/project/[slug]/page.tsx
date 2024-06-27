export default async function ProjectPage({ params }: any) {
  return (
    <>
      <div className="relative">test PROJECT page name:</div>
      <div>{params?.slug}</div>
    </>
  );
}
