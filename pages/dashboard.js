import Layout from '../components/Layout';
import InvoiceBox from '../components/InvoiceBox';
import TenantSection from '../components/TenantSection';
import IzyBox from '../components/IzyBox';
const Dashboard = () => (
    <Layout title ='DashBoard'>
        <div className='row'>
            <div className='col-md-8 col-12'>
                <div className='backgroundCover'>
                    <div className='row row-welcome'>
                        <div className='col-md-6 col-12'>
                            <h5>Hi Kelechi Oleka</h5>
                        </div>
                        <div className='col-md-6 col-12'>
                            <div className='welcomeCover mt-n3'>
                                <img src='/welcome.svg'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='propRentCover'>
                    <div className='row proprev-1'>
                        <div className='col-md-9 col-12'>
                            <span><img src='/faviron.svg'/><h5 className='ml-5 mt-n4'>PROPERTY REVENUE OVERVIEW</h5></span>
                            </div>
                        <div className='col-md-3 col-12'>
                            <div className="form-group">
                                <select className="form-control">
                                    <option>This Month</option>
                                    <option>January</option>
                                </select>
                            </div>
                        </div>
                        
                    </div>
                    <hr className='mt-n1'/>
                    <div className='row'>
                        <div className='col-md-4 col-12'>
                            <img src='/chart.jpg' className='img-fluid'/>
                            
                            <h6 className='next-rent'>NEXT RENT PAYMENT</h6>
                            <p className='float-left net-text'>Wed,May 2020</p>
                        </div>
                        <div className='col-md-8 col-12'>
                            <div className='row Total-Rent'>
                                <div className='col-md-6 col-12'>
                                    <InvoiceBox type='Total Rent Value' style={{backgroundColor:'#243D51',marginTop:'30px'}}/>
                                    <InvoiceBox type='Unpaid Invoice' style={{backgroundColor:'#C8222C'}} />
                                </div>
                        
                                <div className='col-md-6 col-12'>
                                <InvoiceBox type='Paid Invoice' style={{backgroundColor:'#1FC9D9',marginTop:'30px'}}/>
                                <InvoiceBox type='Paid Invoice' style={{backgroundColor:'#1FC9D9'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            
            </div>
            <div className='col-md-4 col-12'>
                <div className='button-section'>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <button className='btn btn-primary'>Record Payment</button>
                        </div>
                        <div className='col-md-6 col-12'>
                            <button className='btn btn-primary'>Add Tenant</button>
                        </div>
                    </div>
                    <div className='tenant-cover'>
                        <div className='tenantCov-child1'>
                            <div className='row'>
                                <div className='col-md-8 col-12'>
                                    <h6>Tenant Request</h6>
                                </div>
                                 <div className='col-md-4 col-12'>
                                    <button className='btn btn-outline-primary'>Show All &#62;</button>
                                </div>

                            </div>
                        </div>
                        <hr/>
                        <TenantSection src='default-avatar.png' title='Savanah Robertson'/>
                        <TenantSection src='grace.jpg' title='Savanah Robertson'/>
                        <TenantSection src='chibueze.jpg' title='Savanah Robertson'/>
                        <TenantSection src='default-avatar.png' title='Savanah Robertson'/>
                        <TenantSection src='grace.jpg' title='Savanah Robertson'/>
                        
                    </div>
                </div>

            </div>
        </div>
        <div className ='izy-part'>
            <div className='row'>
                <div className='col-md-8 col-12'>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <IzyBox type='IZY PAY' src='/metal3.svg'/>
                            
                        </div>
                        <div className='col-md-6 col-12'>
                            <IzyBox type='IZY SAVER' src='/metal2.svg'/>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-12'>
                </div>
            </div>
        </div>
        
    <style global jsx>{`
        body{
            background:#f4f5f7;
            
            
        }
       
    `}
    
    </style>
    <style jsx>{`
        
    `}
    
    
    </style>
    
    </Layout>
    
);
export default Dashboard;