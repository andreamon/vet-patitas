import React, {useState} from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import Calendar from 'react-calendar';
// import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddPetForm = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();
  const [image, setImg] = useState(null);
  const [date, setDate] = useState(new Date());

  const inputImage = (event) => {
    if(event.target.files[0]){
      setImg(event.target.files[0])
    }
  };

  const savePet = (data, e) => {
    console.log(data);
    
    console.log(`Fecha seleccionada ${date}`);
    // props.addPetHandler(data, image);
    // e.target.reset();
    // history.push("/");
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col md={5}>
          <h3>
            <strong>Nuevo paciente</strong>
          </h3>
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
                    message: <div><FontAwesomeIcon icon="exclamation-circle" size="lg"/> &nbsp; Su mascota no tiene nombre </div>,
                  },
                })}
              />
              <Form.Text className="text-danger mb-3 pt-1">
                <strong>{errors?.name?.message}</strong>
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="inputAge">
              <Form.Label>Fecha de nacimiento</Form.Label><br />
              {/* <Calendar onChange={date => setDate(date)} value={date} maxDate={new Date()}/> */}
              <DatePicker
              name="date"
              dateFormat="dd/MM/yyyy"
              selected={date}
              onChange={date => {
                setDate(date);
                console.log(date)}}
              maxDate={new Date()}
              inline />
              
              <Form.Text className="text-danger mb-3 pt-1">
                <strong>{errors?.date?.message}</strong>
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="inputType">
              <Form.Label>Especie animal</Form.Label>
              <Form.Control
                as="select"
                name="type"
                ref={register({
                  required: {
                    value: true,
                    message: <div><FontAwesomeIcon icon="exclamation-circle" size="lg"/> &nbsp; Debe seleccionar una especie </div>,
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
              <Form.Text className="text-danger mb-3 pt-1">
                <strong>{errors?.type?.message}</strong>
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="inputImage">
              <Form.Label>Agregar foto</Form.Label>
              <Form.File id="file" name="file" onChange={inputImage} />
            </Form.Group>
            <div className="text-right pt-3">
              <Link to="/" className="btn btn-danger mr-1">
                Cancelar
              </Link>
              <Button variant="success" type="submit">
                Agregar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AddPetForm;
