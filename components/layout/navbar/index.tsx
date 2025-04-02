export default async function Navbar(){
    const menu = await getMenu("Main menu")
    
    return(
        <>
        <nav></nav>
        </>
    );
}