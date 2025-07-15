import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Tech Lead at TechCorp',
      content: 'An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.',
      image: 'https://ui-avatars.com/api/?name=John+Doe&background=random'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Project Manager at InnovateCo',
      content: 'Working with them was a pleasure. They have excellent communication skills and always meet deadlines while maintaining high standards.',
      image: 'https://ui-avatars.com/api/?name=Jane+Smith&background=random'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'CTO at StartupX',
      content: 'Their technical expertise and innovative approach to problem-solving have been invaluable to our projects. Highly recommended!',
      image: 'https://ui-avatars.com/api/?name=Mike+Johnson&background=random'
    }
  ];

  return (
    <section id="testimonials" className="fade-in">
      <h2>What People Say</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-content">
              <p>"{testimonial.content}"</p>
            </div>
            <div className="testimonial-author">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="testimonial-image"
              />
              <div className="testimonial-info">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}