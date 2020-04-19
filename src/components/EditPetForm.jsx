import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const EditPetForm = (props) => {
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.currentPet,
  });

  setValue("id", props.currentPet.id);
  setValue("name", props.currentPet.name);
  setValue("age", props.currentPet.age);
  setValue("type", props.currentPet.type);

  const onSubmit = (data, e) => {
    data.id = props.currentPet.id;
    props.confirmChangeHandler(props.currentPet.id, data);
    e.target.reset();
  };

  return (
    <Row className="justify-content-center">
    <Col md={6}>
    <h3><strong>Modificar datos</strong></h3>
    <Form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <Form.Group controlId="inputName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          ref={register({
            required: {
              value: true,
              message: "Su mascota no tiene nombre",
            },
          })}
        />
        <Form.Text className="text-danger mb-3">
          <strong>{errors?.name?.message}</strong>
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="inputAge">
        <Form.Label>Edad</Form.Label>
        <Form.Control
          type="text"
          name="age"
          ref={register({
            required: {
              value: true,
              message: "Debe ingresar la edad del animal",
            },
          })}
        />
        {errors.age && (
          <Form.Text className="text-danger mb-3">
            <strong>{errors.age.message}</strong>
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group controlId="inputType">
        <Form.Label>Especie animal</Form.Label>
        <Form.Control
          as="select"
          name="type"
          ref={register({
            required: {
              value: true,
              message: "Debe seleccionar una especie",
            },
          })}
        >
          <option label="Seleccionar" />
          <option label="Canino" value="Canino" />
          <option label="Felino" value="Felino" />
          <option label="Roedor" value="Roedor" />
          <option label="Reptil" value="Reptil" />
          <option label="Ave" value="Ave" />
          <option label="Otro" value="Otro" />
        </Form.Control>
        {errors.type && (
          <Form.Text className="text-danger mb-3">
            <strong>{errors.type.message}</strong>
          </Form.Text>
        )}
      </Form.Group>

      <Button variant="success" type="submit" className="m-1">Confirmar cambios</Button>
      <Link to="/" className="btn btn-danger">Cancelar edición</Link>
    </Form>
    </Col>
    </Row>
  );
};

export default EditPetForm;
