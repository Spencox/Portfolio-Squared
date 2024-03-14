import React from 'react';
import { Container } from 'react-bootstrap';

export default function AboutMe() {
  return (
    <Container>
      <div>
        <h1 className="py-5">About Page</h1>
        <p className="py-3 fs-5">
          Hello, I'm Spencer Cox, a passionate and driven web developer on a mission to turn my love for coding into a rewarding career. With a background in computer science and ongoing education through coding boot camps and certification programs at the University of Texas at Austin, I'm well-equipped with the technical knowledge and skills needed to excel in web development. At 37 years old, I've embarked on an exciting career shift, dedicating myself to the ever-evolving world of web development.
        </p>
        <p className="py-3 fs-5">
          I find immense joy in crafting immersive web experiences, from pixel-perfect front-end designs to robust back-end functionalities. What sets me apart is my unique blend of theoretical computer science knowledge and hands-on development expertise. I've honed my skills through real-world projects and have built a diverse portfolio that showcases my ability to create dynamic and responsive websites. Whether it's enhancing user experiences or solving complex technical challenges, I'm committed to pushing the boundaries of what's possible in web development.
        </p>
        <p className="py-3 fs-5">
          As I continue to learn and grow in this dynamic field, I'm eager to collaborate with like-minded professionals, contribute to innovative projects, and make a meaningful impact on the digital landscape. Join me on this exciting journey as we explore the limitless possibilities of web development together.
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <img src="/assets/mugshot.png" alt="Your Image" style={{ width: '500px', height: 'auto' }} />
      </div>
    </Container>
  );
}
