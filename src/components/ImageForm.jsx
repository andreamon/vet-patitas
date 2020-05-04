import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Container, Button } from "react-bootstrap";

const ImageForm = () => {
  const { handleSubmit } = useForm();
  const [img, setImg] = useState(null);

  useEffect(() => console.log(img), [img]);

  const inputImage = (event) => {
    setImg(event.target.files[0].name);
    console.log(event.target.files[0].name);
  };

  const onSubmit = (data) => {
    setImg("/img/" + data.file[0].name);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="inputImage">
          <Form.Label>Agregar foto</Form.Label>
          <Form.File
            id="file"
            name="file"
            onChange={inputImage}
            label="Seleccionar imagen"
            data-browse="Click aquí"
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Agregar
        </Button>
      </Form>
    </Container>
  );
};

export default ImageForm;
