import React from "react";
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { promos,collins, mojitos, destilledsours, aperitivos, clasicosinternacionales,clasicosdelacasa,mocktails,detumenteatusmanos,birritasartesanales,birritasindustriales,burguers,pizzas,medidas,parapicotear,bebidassinalcohol,franui,vinos,combos,gintoneria
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
                           {props.title === "Para Picotear" && 
                               <Categorie meals={parapicotear} />
                            }
                            {props.title === "Pizzas" && 
                                <Categorie meals={pizzas} />
                            }
                            {props.title === "Burguers" && 
                               <Categorie meals={burguers} />
                            }
                            {props.title === "Collins" && 
                               <Categorie meals={collins} />
                            }
                            {props.title === "Mojitos" && 
                               <Categorie meals={mojitos} />
                            }
                            {props.title === "Destilled Sours" && 
                               <Categorie meals={destilledsours} />
                            }
                            {props.title === "Aperitivos" && 
                               <Categorie meals={aperitivos} />
                            }
                            {props.title === "Clásicos Inter." && 
                               <Categorie meals={clasicosinternacionales} />
                            }
                            {props.title === "De la casa" && 
                               <Categorie meals={clasicosdelacasa} />
                            }
                            {props.title === "Mocktails" && 
                               <Categorie meals={mocktails} />
                            }
                            {props.title === "Gintoneria" && 
                               <Categorie meals={gintoneria} />
                            }
                            {props.title === "De tu mente a tus manos" && 
                               <Categorie meals={detumenteatusmanos} />
                            }
                            {props.title === "Birritas Art." && 
                               <Categorie meals={birritasartesanales} />
                            }
                            {props.title === "Birritas Industriales" && 
                               <Categorie meals={birritasindustriales} />
                            }
                            {props.title === "Combos" && 
                               <Categorie meals={combos} />
                            }
                           {props.title === "Medidas" && 
                               <Categorie meals={medidas} />
                            }
                            {props.title === "Bebidas S/Alc" && 
                               <Categorie meals={bebidassinalcohol} />
                            }
                            {props.title === "Franui" && 
                               <Categorie meals={franui} />
                            }
                            {props.title === "Vinos" && 
                               <Categorie meals={vinos} />
                            }
                            {props.title === "St Patrick's Day" && 
                               <Categorie meals={promos} />
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