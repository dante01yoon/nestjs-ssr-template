import { SSRPage } from "../types";

const About: SSRPage = () => {
    return (<div>About</div>)
}

About.getPageProps = async () => {
    return Promise.resolve({ initialProps: [1,2,3,4,5,6]});
}

export default About;