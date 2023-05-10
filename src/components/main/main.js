import { fetchData } from "../../api";

export default function mainScript(main) {
  fetchData().then((data) => {
    console.log(data.image.url);
  });
}
