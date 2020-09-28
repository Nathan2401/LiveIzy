import Layout from '../components/Layout';
import PropertyDetails from '../components/PropertyDetails';
const MyPropertiesThird = ()=> (
<Layout>
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
            <h5>MY PROPERTIES</h5>
            <PropertyDetails/>
            </div>
        </div>
        <div className='propIcon'>
            <div className='row'>
                <div className='col-md-4 col-12'>
                    <p className="text-center term-chev">NO 3 CHEVRON DRIVE</p>
                </div>
                <div className='col-md-4 col-12'>
                    <p className='term'>Term set for suite 4 apartment</p>
                </div>
            </div>
            <div className='row row-suite'>
                <div className="col-md-7 col-12">
                <p>Suite 4</p>
                </div>
                <div className="col-md-5 col-12">
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <span className='icon-rent'><img src='/shortwage.svg'/><span className='right-text'>₦20,000.00 Rent</span></span>
                        </div>
                        <div className='col-md-6 col-12'>
                            <span className='icon-rent'><img src='/user-3.svg'/><span className='right-text'>1 tenant</span></span>
                        </div>
                    </div>
                </div>
            </div>
            <form className='form-2'>
            <div className='row'>
                <div className='col-md-1 col-12'> </div>
                <div className='col-md-5 col-12'>
                    <div className='row'>
                        <div className='col-md-7 col-12'>
                            <div className='row'>
                                <div className='col-md-6 col-12'>
                                    <div class="form-group">
                                        <label for="First Name">First Name</label>
                                        <input type="text" class="form-control"/>
                                    </div>
                                    <button className='btn btn-outline-primary'>+ Add Tenant</button>
                                </div>
                                
                                <div className='col-md-6 col-12'>
                                    <div class="form-group">
                                        <label for="Last Name">Last Name</label>
                                        <input type="text" class="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5 col-12'>
                            <div class="form-group">
                                <label for="Email">Email</label>
                                <input type="email" class="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-12'>
                    <div className='row'>
                        <div className='col-md-9 col-12'>
                            <div className='row'>
                                <div className='col-md-5 col-12'>
                                    <div class="form-group">
                                        <label for="Mobile">Mobile</label>
                                        <input type="phone" class="form-control"/>
                                    </div>
                                </div>
                                <div className='col-md-7 col-12'>
                                    <div className="form-group">
                                        <label for="Screening">Screening</label>
                                        <select className="form-control multiple">
                                            <option></option>
                                            <optgroup>
                                                <option>Applications</option>
                                                <option>Applications + Credit + Criminal</option>
                                                <option>Applications + Credit + Criminal + Eviction</option>
                                                
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-12'>
                            <label for='ApplicationStatus'>Application Status</label>
                        </div>
                    </div>
                </div>
            </div>
            </form> 
            
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
export default MyPropertiesThird;