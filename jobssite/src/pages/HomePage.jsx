import Hero  from "../assets/components/Hero"
import Cards from "../assets/components/Cards"
import JobsList from "../assets/components/JobsList"
import ViewJobs from "../assets/components/ViewJobs"

function HomePage(){
    return(
        <>
        <Hero title="Become a React Dev"  subtitle="Find the React jobs that fits your skills and needs"/>
        <Cards />
        <JobsList isHome={false}/>
        <ViewJobs /> 
        </>
        
    )

}
export default HomePage 