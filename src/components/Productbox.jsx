import React from "react";
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Categorie from "./utils/Categorie";
import {useCategories} from "../hooks"

function Productbox(props) {

    // Modal open state
    const [modal, setModal] = React.useState(false);

    // Toggle for Modal
    const toggle = () => setModal(!modal);
    const {categories, loading, error, getCategories} = useCategories();

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
                           {loading ? (
                              <p>Loading...</p>
                           ):(
                              categories && categories.map((category) => props.title === category.name &&  <Categorie categoryName={category.name} />)
                           )}
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