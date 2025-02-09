// const page = () => {
//     return <h1>API / PRODUCTS</h1>;
// };

// export default page;

export async function GET() {
    return Response.json ({ response: "Ok"}) ;
}