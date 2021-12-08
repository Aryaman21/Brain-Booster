import React,{useState} from 'react'
import { useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'font-awesome/css/font-awesome.min.css';
import { HashLink as Link } from 'react-router-hash-link';

function HomeNavbar({Sticky}) {
    const {uid} = useParams();
    var x = uid;
    var path = "/Cart";
    if(x){
        path = "/Cart/"+ uid;
    }
    // const[path,setPath] = useState("");
    // if(path==="/UserLogin"){
    //     return <Redirect to = '/UserLogin'
    // }
    return (
        <div>
                <Navbar sticky={Sticky} collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container style={{paddingLeft:"0px"}}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={{textAlign:"center"}}>Today's Gifts</Nav.Link>
                        <Nav.Link href="#features" style={{textAlign:"center"}}>Category</Nav.Link>
                        <Nav.Link href="#pricing" style={{textAlign:"center"}}>Brand</Nav.Link>
                        <Nav.Link href="#pricing" style={{textAlign:"center"}}>Gender</Nav.Link>
                        <Nav.Link href="#pricing" style={{textAlign:"center"}}>Goal</Nav.Link>
                        <Nav.Link href="#pricing" style={{textAlign:"center"}}>Bestsellers</Nav.Link>
                        <Nav.Link href="#pricing" style={{textAlign:"center"}}>Deals</Nav.Link>
                    </Nav>

                    <Nav className="ms-auto">
                        <Nav.Link href="#" style={{paddingLeft:"10px"}}><Link to="/ProductList">
                        <button className="btn btn-info" 
                        style={{width:"100%",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",color:"white"}}><span style={{textDecoration:"none !important"}}>BB Consult</span></button>
                        </Link></Nav.Link>
                        <Nav.Link href="#" style={{paddingLeft:"10px"}}><button className="btn btn-warning" 
                        style={{width:"100%",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",color:"white"}}>
                        Find Stores
                        </button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                    <Form className="d-flex" style={{paddingLeft:"10px"}}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success" style={{marginLeft:"10px"}}>Search</Button>
                    </Form>
                </Container>
            </Navbar>

        <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{padding:"0px 0px"}}>
            <Container style={{paddingLeft:"10px"}}>
            <Navbar.Brand style={{fontWeight:"bolder",fontStyle:"italic"}}><Link to="/">BrainBooster</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="ms-auto">
                <Nav.Link><Link to={path}><i class="fa fa-shopping-cart"></i><span style={{marginLeft:"7px"}}>Cart</span></Link></Nav.Link>

                <NavDropdown title="My account & orders" id="collasible-nav-dropdown" style={{display:"inline-block"}}>
                <NavDropdown.Item><Link to="/UserLogin"> <Button style={{width:"100%"}}>Login / Sign-up</Button> </Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"><Link to="/AdminPg"><Button style={{width:"100%",border:"2px solid blue",borderRadius:"5px",backgroundColor:"white",color:"black"}}>Administrator Login</Button></Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <div style={{display:"flex",flexDirection:"row"}}>
                    <div style={{width:"50%",display:"flex",flexDirection:"column"}}>
                    <NavDropdown.Item><span style={{fontWeight:"bold"}}>My Account</span></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Orders</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Wishlist</NavDropdown.Item>
                    </div>
                    <div style={{width:"50%",display:"flex",flexDirection:"column"}}>
                    <NavDropdown.Item><span style={{fontWeight:"bold"}}>Health Profile</span></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Diet Plan</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Consultations</NavDropdown.Item>
                    </div>
                </div>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" style={{textAlign:"center"}}>Account Settings</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Customer Support" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Chat with us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Track your order</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">FAQs</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"><span style={{fontSize:"13px"}}>Call us at:</span><br/><span>0124-123456</span></NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
        </div>
    )
}

export default HomeNavbar
