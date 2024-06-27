export default async function OrganizationPage({ params }: any) {
  return (
    <>
      <div className="relative">test Organization page name:</div>
      <div>{params?.slug}</div>
    </>
  );
}
