import React from "react";
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { gintoneria, birras, burguers, pizzas, entradas, bebidasfresh, bebidassinalcohol, champagnes, franui, vinos, combos, cocktails, sours, promos} from ".././data.json";
import Categorie from "./utils/Categorie";


function Productbox(props) {

    // Modal open state
    const [modal, setModal] = React.useState(false);

    // Toggle for Modal
    const toggle = () => setModal(!modal);

    return(
        <div className='products'>
            <div className='a-box'>
                <div className='a-b-img'>
                    <img src={props.image} alt=''/>
                </div>
                <div className='a-b-text'>
                    <h2>{props.title}</h2>
                    <button className='productbox-button' onClick={toggle}>Ver más</button>
                    <Modal isOpen={modal} toggle={toggle} {...props}>
                        <ModalHeader className="my-modal"
                            toggle={toggle}>{props.title}</ModalHeader>
                        <ModalBody>
                           {props.title === "Promos" && 
                               <Categorie meals={promos} />
                            }
                            {props.title === "Gintoneria" && 
                                <Categorie meals={gintoneria} />
                            }
                            {props.title === "Birras" && 
                               <Categorie meals={birras} />
                            }
                            {props.title === "Burguers" && 
                               <Categorie meals={burguers} />
                            }
                            {props.title === "Pizzas" && 
                               <Categorie meals={pizzas} />
                            }
                            {props.title === "Entradas" && 
                               <Categorie meals={entradas} />
                            }
                            {props.title === "Vinos" && 
                               <Categorie meals={vinos} />
                            }
                            {props.title === "Franui" && 
                               <Categorie meals={franui} />
                            }
                            {props.title === "Bebidas Fresh" && 
                               <Categorie meals={bebidasfresh} />
                            }
                            {props.title === "Bebidas Sin Alcohol" && 
                               <Categorie meals={bebidassinalcohol} />
                            }
                            {props.title === "Champagnes" && 
                               <Categorie meals={champagnes} />
                            }
                            {props.title === "Cachengo Combos" && 
                               <Categorie meals={combos} />
                            }
                            {props.title === "Cocktails" && 
                               <Categorie meals={cocktails} />
                            }
                            {props.title === "Cachengo Sours" && 
                               <Categorie meals={sours} />
                            }

                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>Cerrar</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
export default Productbox