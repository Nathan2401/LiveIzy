import Link from 'next/link';
import Layout from '../components/Layout';
import PropertyDetails from '../components/PropertyDetails';


const MyPropertiesSecond = ()=> (
<Layout>
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
            <h5>MY PROPERTIES</h5>
            <PropertyDetails/>
            </div>
        </div>
        <div className='row propIcon'>
            <div className='col-12'><p className='prop-iconT'>NO 3 CHEVRON DRIVE</p></div> 
            <div className='col-md-5 col-12'>
            
            <h4>CREATE PROPERTY</h4>
            <img src='clean.jpg'className='img-fluid'alt='layer1'/>
            <Link href ="/myProperties.js" >
            <a className='propLink'><div>property contact info</div></a>
            </Link>
            </div>
            <div className='col-md-6 col-12'>
                <form className='form-1'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="form-group">
                                <label for="sel1">Select Payment Frequency</label>
                                <select className="form-control" id="sel1">
                                    <option>Select Unit</option>
                                    <option>Select unit 2</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-4 col-12'>
                            <div className="form-group">
                                <label for="Apartment Name">Apartment Name</label>
                                <input type="text" className="form-control" placeholder='e.g Suite 101'/>
                            </div>
                        </div>
                        <div className='col-md-8 col-12'>
                            <label for="ApartmentDetails">Apartment Details</label>
                            <div className="input-group">
                                <input type="text" className="form-control border-right-0"/>
                                    <div className="input-group-append">
                                        <div className="input-group-text bg-transparent">
                                        <i className='fa fa-bars'></i>
                                        </div>
                                    </div>

                            </div>
                        </div>
                        <div className='col-md-4 col-12'>
                            <div className="form-group">
                                <label for="Apartment Name">Rent</label>
                                <input type="text" className="form-control" placeholder='100000'/>
                            </div>
                        </div>
                        <div className='col-md-4 col-12'>
                            <div className="form-group">
                                <label for="Apartment Name">Apartment Floor</label>
                                <input type="text" className="form-control" placeholder='2nd Floor'/>
                            </div>
                        </div>
                        <div className='col-md-4 col-12'>
                            <div class="form-group">
                                <label for="Apartment Name">Entrance</label>
                                <input type="text" class="form-control" placeholder='4'/>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="form-group">
                                <label for="Avail1">Availability Of Property</label>
                                <select className="form-control" id="Avail1">
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='col-md-1 col-12'></div>
        </div>
    </div>
    <style global jsx>{`
        body{
            background:#f4f5f7;
        }
    `}
    </style>
</Layout>
);
export default MyPropertiesSecond;