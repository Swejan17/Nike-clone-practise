import ServiceCard from "../components/ServiceCard.jsx"
import { services } from "../constants.js"

const Services = () => {
  return (
    <section className="flex max-container justify-center dlex-wrap gap-9">
      {services.map((service)=>(
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
    
  )
}

export default Services
