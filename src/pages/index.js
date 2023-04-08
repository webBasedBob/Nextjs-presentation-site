import fs from "fs/promises";
import path from "path";
export default function Home(props) {
  return <h1>{props.header}</h1>;
}

export async function getStaticProps() {
  let datapath = path.join(process.cwd(), "data", "dummy-data.json");
  let jsonData = await fs.readFile(datapath);
  let data = JSON.parse(jsonData);
  return {
    props: data.homePage[0],
  };
}
