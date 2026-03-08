interface PageParams {
    params: {
        teachername: string,
        teachermajor: string,
    }
}


export default async function Page({params}:PageParams) {
    const {teachername, teachermajor} = await params
    return (
        <div>
            IDteacher: {teachername}
            <br/>
            major: {teachermajor}
            <br/>
            HeLOOOO
        </div>
    );
}