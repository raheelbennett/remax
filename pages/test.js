export default function Test({ subNavProps }) {
  console.log("subnav", subNavProps);
  return <div>Hello!</div>;
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/categories/featured");
  const subNavProps = await res.json();
  console.log("test12", subNavProps);
  // Pass data to the page via props
  return { props: { subNavProps } };
}
