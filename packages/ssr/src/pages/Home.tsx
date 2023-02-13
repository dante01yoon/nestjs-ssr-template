import { SSRPage } from "../types";
const Home: SSRPage = () => {
    return(
        <>
            <div>Home</div>
            <div>
                {/* <Button onClick={console.log}>click me</Button>    */}
            </div>
        </>
    )
}

Home.getPageProps = async () => {
    return Promise.resolve(["home"])
}

export default Home;