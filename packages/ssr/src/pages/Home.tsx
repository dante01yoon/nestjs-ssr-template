import { SSRPage } from "../types";

const Home: SSRPage = () => {
    return(
        <div>Home</div>
    )
}

Home.getPageProps = async () => {
    return Promise.resolve(["home"])
}

export default Home;