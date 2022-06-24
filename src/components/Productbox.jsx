import React from "react";
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { gintoneria, birras, burguers, pizzas, entradas, bebidasfresh, bebidassinalcohol, champagnes, franui, vinos, combos, cocktails, sours} from ".././data.json";
import Gintoneria from "./categories/Gintoneria";
import Birras from "./categories/Birras";
import Burguers from "./categories/Birras";
import Entradas from "./categories/Entradas";
import Pizzas from "./categories/Pizzas";
import Vinos from "./categories/Vinos";
import Cocktails from "./categories/Cocktails";
import BebidasFresh from "./categories/BebidasFresh";
import BebidasSinAlc from "./categories/BebidasSinAlc";
import Franui from "./categories/Franui";
import Sours from "./categories/Sours";
import Champagnes from "./categories/Champagnes";
import Combos from "./categories/Combos";


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
                        <ModalHeader
                            toggle={toggle}>{props.title}</ModalHeader>
                        <ModalBody>
                            {props.title === "Gintoneria" && 
                                <Gintoneria meals={gintoneria} />
                            }
                            {props.title === "Birras" && 
                               <Birras meals={birras} />
                            }
                            {props.title === "Burguers" && 
                               <Burguers meals={burguers} />
                            }
                            {props.title === "Pizzas" && 
                               <Pizzas meals={pizzas} />
                            }
                            {props.title === "Entradas" && 
                               <Entradas meals={entradas} />
                            }
                            {props.title === "Vinos" && 
                               <Vinos meals={vinos} />
                            }
                            {props.title === "Franui" && 
                               <Franui meals={franui} />
                            }
                            {props.title === "Bebidas Fresh" && 
                               <BebidasFresh meals={bebidasfresh} />
                            }
                            {props.title === "Bebidas Sin Alcohol" && 
                               <BebidasSinAlc meals={bebidassinalcohol} />
                            }
                            {props.title === "Champagnes" && 
                               <Champagnes meals={champagnes} />
                            }
                            {props.title === "Cachengo Combos" && 
                               <Champagnes meals={combos} />
                            }
                            {props.title === "Cocktails" && 
                               <Cocktails meals={cocktails} />
                            }
                            {props.title === "Cachengo Sours" && 
                               <Sours meals={sours} />
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