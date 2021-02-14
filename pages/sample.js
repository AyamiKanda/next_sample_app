function Sample({ data }) {
  return (
    <div>
      <h1>{data.answer}</h1>
      <img src={data.image}></img>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://yesno.wtf/api`)
  const data = await res.json()

  console.log(data)
  return { props: { data } }
}

export default Sample