import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import { Link, useLocation } from 'react-router-dom';

export const AdminNav = () => {
    const location = useLocation();
    return (
        <>
            <Container>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" className={location.pathname === "/admincategory" ? "Active" : "deactive"}>
                        <Link to={'/admincategory'} className='text-black'>Category</Link>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className={location.pathname === "/adminproduct" ? "Active" : "deactive"}>
                        <Link to={'/adminproduct'} className='text-black'>Product</Link>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" disdeactiveled>
                        Morbi leo risus
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        Porta ac consectetur ac
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </>
    );
}


