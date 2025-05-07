export const metadata = {
  title: 'Services by Oz - Concrete and Construction Solutions',
  description: 'Explore the concrete and construction services offered by Oz in Australia.',
};

export default function Services() {
  return (
    <div className="container">
      <h1>Our Services</h1>
      <p className="mb-8">
        At Oz, we offer a wide range of concrete and construction services to meet your needs. From foundations to finishing, we’ve got you covered.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="project-card">
          <h2>Concrete Foundations</h2>
          <p>
            We provide durable and reliable concrete foundations for residential, commercial, and industrial projects.
          </p>
        </div>
        <div className="project-card">
          <h2>Slab Construction</h2>
          <p>
            Expert slab construction services for all types of buildings, ensuring strength and longevity.
          </p>
        </div>
        <div className="project-card">
          <h2>Custom Concrete Work</h2>
          <p>
            Specialized concrete solutions tailored to your unique project requirements.
          </p>
        </div>
      </div>
    </div>
  );
}