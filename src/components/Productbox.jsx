import React, {useState, useEffect} from "react";
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { promos,collins, mojitos, destilledsours, aperitivos, clasicosinternacionales,clasicosdelacasa,mocktails,detumenteatusmanos,birritasartesanales,birritasindustriales,burguers,pizzas,medidas,parapicotear,bebidassinalcohol,franui,vinos,combos,gintoneria
} from ".././data.json";
import Categorie from "./utils/Categorie";

import {Categories, Products} from "../api"
const categoriesCtrl = new Categories();

function Productbox(props) {

    // Modal open state
    const [modal, setModal] = React.useState(false);

    // Toggle for Modal
    const toggle = () => setModal(!modal);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        (async () =>{
          const categories = await categoriesCtrl.obtain();
          setCategories(categories)
        })()
      }, [])

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
                           {categories && categories.map((category) => props.title === category.name &&  <Categorie categoryName={category.name} />)}
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