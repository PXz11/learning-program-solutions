import React from 'react';
import { useParams } from 'react-router-dom';
import TrainersMock from "./TrainersMock";

function TrainerDetail() {
  const { id } = useParams();
  const Trainer = TrainersMock.find(t => t.id.toString() === id);

  if (!Trainer) {
    return <p>Trainer not found</p>;
  }

  return (
    <div style={{ border: "1px solid black", padding: "20px", width: "300px" }}>
      <h2>Trainers Details</h2>
      <p><strong>{Trainer.name} ({Trainer.technology})</strong></p>
      <p>{Trainer.email}</p>
      <p>{Trainer.phone}</p>
      <ul>
        {Trainer.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default TrainerDetail;