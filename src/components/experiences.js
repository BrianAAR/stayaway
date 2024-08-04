import React from 'react';
import './experiences.css';

function Experiences() {
  const experiences = [
    {
      id: 1,
      title: 'Experiencia en la Mansión X',
      host: 'Jubilee',
      price: '704 MXN por huésped',
      date: 'Convocatoria abierta',
      image: '/path-to-image1.jpg',
    },
    {
      id: 2,
      title: 'Disfruta como VIP con Kevin Hart',
      host: 'Kevin Hart',
      price: '',
      date: 'Se abre el 21 de agosto',
      image: '/path-to-image2.jpg',
    },
    {
      id: 3,
      title: 'Únete a una sesión exclusiva con Doja Cat',
      host: 'Doja Cat',
      price: '',
      date: 'Abre: octubre',
      image: '/path-to-image3.jpg',
    },
  ];

  return (
    <div className="experiences">
      <h2>Experiencias</h2>
      <div className="experience-list">
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-card">
            <img src={experience.image} alt={experience.title} />
            <h3>{experience.title}</h3>
            <p>{experience.host}</p>
            <p>{experience.price || experience.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
