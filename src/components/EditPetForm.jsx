import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";

const EditPetForm = (props) => {
  const {id} = useParams();
  const history = useHistory();
  const petFind = props.sendPetId(id);

  const { register, errors, handleSubmit, setValue } = useForm({defaultValues: petFind});

  // setValue("id", petFind.id);
  setValue("name", petFind.name);
  setValue("age", petFind.age);
  setValue("type", petFind.type);

  const onSubmit = (data, e) => {
    let id = petFind.id;
    props.confirmChangeHandler(id, data);
    e.target.reset();
    history.push('/');
  };

  return (
    <Row className="justify-content-center">
    <Col md={6}>
    <h3><strong>Modificar datos de {petFind.name}</strong></h3>
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
