import React from "react";
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { novedades,autoria, cocteles, pintas, individuales, cervezaindustrial,mocktails,burguers,pizzas,medidas,parapicotear,vinos,combos,gintoneria
} from ".././data.json";
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
                    <h4>{props.title}</h4>
                    <button className='productbox-button' onClick={toggle}>Ver más</button>
                    <Modal isOpen={modal} toggle={toggle} {...props} className="special_modal">
                        <ModalHeader
                            toggle={toggle}>{props.title}</ModalHeader>
                        <ModalBody>
                           {props.title === "Novedades" && 
                               <Categorie meals={novedades} />
                            }
                           {props.title === "Para Picotear" && 
                               <Categorie meals={parapicotear} />
                            }
                            {props.title === "Pizzas" && 
                                <Categorie meals={pizzas} />
                            }
                            {props.title === "Burguers" && 
                               <Categorie meals={burguers} />
                            }
                            {props.title === "Autoría" && 
                               <Categorie meals={autoria} />
                            }
                            {props.title === "Cocktails" && 
                               <Categorie meals={cocteles} />
                            }
                            {props.title === "Pintas" && 
                               <Categorie meals={pintas} />
                            }
                            {props.title === "Individuales" && 
                               <Categorie meals={individuales} />
                            }
                            {props.title === "Mocktails" && 
                               <Categorie meals={mocktails} />
                            }
                            {props.title === "Gintoneria" && 
                               <Categorie meals={gintoneria} />
                            }
                            {props.title === "Birritas Industriales" && 
                               <Categorie meals={cervezaindustrial} />
                            }
                            {props.title === "Combos" && 
                               <Categorie meals={combos} />
                            }
                           {props.title === "Medidas" && 
                               <Categorie meals={medidas} />
                            }
                            {props.title === "Vinos" && 
                               <Categorie meals={vinos} />
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