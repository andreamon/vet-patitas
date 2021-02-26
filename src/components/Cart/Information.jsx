import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import AppContext from "../../context/AppContext";

const Information = () => {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);

  const saveBuy = (data, e) => {
    addToBuyer(data);
    console.log(data);
    e.target.reset();
    history.push("/success");
  };

  return (
    <>
      <Row>
        <Col md={6}>
          <h4>
            <strong>Información de contacto</strong>
          </h4>
          <Form onSubmit={handleSubmit(saveBuy)} className="mb-4">
            <Form.Group controlId="inputName">
              <Form.Control
                type="text"
                name="name"
                placeholder="Nombre y Apellido"
                size="sm"
                // ref={register({
                //   required: {
                //     value: true,
                //     message: (
                //       <div>
                //         <i className="fas fa-exclamation-circle" />
                //         &nbsp; Ingresar nombre{" "}
                //       </div>
                //     ),
                //   },
                // })}
              />
              <Form.Text className="text-danger mb-3 pt-1">
                <strong>{errors?.name?.message}</strong>
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="inputContact">
              <Form.Control
                type="text"
                name="contact"
                placeholder="Teléfono de contacto"
                size="sm"
                // ref={register({
                //   required: {
                //     value: true,
                //     message: (
                //       <div>
                //         <i className="fas fa-exclamation-circle" />
                //         &nbsp; Debe completar este campo{" "}
                //       </div>
                //     ),
                //   },
                // })}
              />
              <Form.Text className="text-danger mb-3 pt-1">
                <strong>{errors?.contact?.message}</strong>
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="inputEmail">
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                size="sm"
                // ref={register({
                //   required: {
                //     value: true,
                //     message: (
                //       <div>
                //         <i className="fas fa-exclamation-circle" />
                //         &nbsp; Ingresar email{" "}
                //       </div>
                //     ),
                //   },
                // })}
              />
              <Form.Text className="text-danger mb-3 pt-1">
                <strong>{errors?.email?.message}</strong>
              </Form.Text>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="inputAddress">
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Calle"
                  size="sm"
                  ref={register({
                    required: {
                      value: true,
                      message: (
                        <div>
                          <i className="fas fa-exclamation-circle" />
                          &nbsp; Ingresar una dirección{" "}
                        </div>
                      ),
                    },
                  })}
                />
                <Form.Text className="text-danger mb-3 pt-1">
                  <strong>{errors?.address?.message}</strong>
                </Form.Text>
              </Form.Group>
              <Form.Group as={Col} controlId="inputNumber">
                <Form.Control
                  type="text"
                  name="number"
                  placeholder="Altura"
                  size="sm"
                  ref={register({
                    required: {
                      value: true,
                      message: (
                        <div>
                          <i className="fas fa-exclamation-circle" />
                          &nbsp; Campo obligatorio{" "}
                        </div>
                      ),
                    },
                  })}
                />
                <Form.Text className="text-danger mb-3 pt-1">
                  <strong>{errors?.number?.message}</strong>
                </Form.Text>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="inputCity">
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="Ciudad"
                  size="sm"
                  ref={register({
                    required: {
                      value: true,
                      message: (
                        <div>
                          <i className="fas fa-exclamation-circle" />
                          &nbsp; Debe completar este campo{" "}
                        </div>
                      ),
                    },
                  })}
                />
                <Form.Text className="text-danger mb-3 pt-1">
                  <strong>{errors?.city?.message}</strong>
                </Form.Text>
              </Form.Group>
              <Form.Group as={Col} controlId="inputCountry">
                <Form.Control
                  type="text"
                  name="country"
                  placeholder="País"
                  size="sm"
                  ref={register({
                    required: {
                      value: true,
                      message: (
                        <div>
                          <i className="fas fa-exclamation-circle" />
                          &nbsp; Debe completar este campo{" "}
                        </div>
                      ),
                    },
                  })}
                />
                <Form.Text className="text-danger mb-3 pt-1">
                  <strong>{errors?.country?.message}</strong>
                </Form.Text>
              </Form.Group>
            </Form.Row>
            <div className="text-right">
              <Link to="/checkout" className="btn btn-back mr-1">
                Volver
              </Link>
              <button className="btn btn-confirm" type="submit">
                Confirmar compra
              </button>
            </div>
          </Form>
        </Col>
        <Col md={4} className="ml-1">
          <h5>
            <strong>Detalles del pedido</strong>
          </h5>
          <div className="title-detail">
            <span>Producto</span>
            <span>Precio</span>
          </div>
          {cart.map((item) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "30px",
              }}
              key={item.id}
            >
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Information;
