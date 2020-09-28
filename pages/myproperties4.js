import Layout from '../components/Layout';
import PropertyDetails from '../components/PropertyDetails';
import Link from 'next/link';
const MyPropertiesFourth = ()=> (
<Layout>
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
            <h5>MY PROPERTIES</h5>
            <PropertyDetails/>
            </div>
        </div>
        <div className='row propIcon'> 
            <div className='col-md-5 col-12 '>
                <h4> CREATE PROPERTY</h4>
                <img src='clean.jpg'className='img-fluid'alt='layer1'/>
                 <Link href ="/myProperties.js" >
                    <a className='propLink'><div>property contact info</div></a>
                </Link>
            </div>
            <div className='col-md-6 col-12'>
                <form className='form-3'>
                     <div className="form-group">
                        <label for="PropertyName">Property Name</label>
                        <input type="text" class="form-control" placeholder='Enter a name'/>
                    </div>
                    <label for="demo">Address</label>
                    <div className="input-group">
                        <input type="text" className="form-control border-right-0"placeholder='Enter a location'/>
                            <div className="input-group-append">
                                <div className="input-group-text bg-transparent">
                                <i className='fa fa-bars'></i>
                                </div>
                            </div>

                    </div>
                    <div className="form-group">
                        <label for="PropertyType">Property Type</label>
                        <select className="form-control">
                            <option>Select type</option>
                            <option>Select type 2</option>
                        </select>
                    </div>
                    <div className="form-group">
                    <label for="PropertyName">Property Name</label>
                    <p className='ml-n1'>Select LPM for this property</p>
                    <input type="text" className="form-control" placeholder='Select'/>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label check1-label font-weight-light">
                            <input type="checkbox" class="form-check-input" value=""/>Indicate if you want the selected LPM to help you add the apartment
                        </label>
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
export default MyPropertiesFourth;