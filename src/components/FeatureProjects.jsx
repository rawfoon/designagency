async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/FeaturedProject");
    if(!res.ok){
        throw new Error("FeaturedProjects Calling Fail");
    }
    return res.json();
}

const FeatureProjects = async () => {
    const data = await getData()
    return (
        <div>
            
        </div>
    );
};

export default FeatureProjects;