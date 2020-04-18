import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

const AddPetForm = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const savePet = (data, e) => {
    props.addPetHandler(data);
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit(savePet)} className="mb-4">
      <Form.Group controlId="inputName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Ingrese aquí el nombre del paciente"
          autoFocus
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
          placeholder="Ingrese aquí la edad de la mascota"
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

      {/* <Form.Check as={Row} type="switch" id="custom-switch" label="Check this switch" /> */}
      {/* <fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={10}>
            Tiene todas sus vacunas?
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Sí"
              name="yes"
              id="yes"
            />
            <Form.Check
              type="radio"
              label="No"
              name="not"
              id="not"
            />
          </Col>
        </Form.Group>
      </fieldset> */}

      <Button variant="success" type="submit">
        Agregar mascota
      </Button>
    </Form>
  );
};

export default AddPetForm;
