import Layout from '../components/Layout';
const MYProperties = () =>(
    <Layout title="PROPERTY">
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h5 className='mt-2'>MY PROPERTIES</h5>
                </div>
                <div className='col-md-6 col-12'>
                    <ul className="nav nav-pill small-nav mt-4">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Vacant</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Draft</a>
                        </li>
                    </ul>
                </div>
                <div className='col-md-3 col-12'></div>
                 <div className='col-md-3 col-12'>
                 <button className='btn btn-primary mt-4 float-left ml-3'>+ New Property</button>
                </div>

            </div>
            <div className='row'>
            <div className='col-12'>
                <table className="table mt-5">
                    <thead>
                    <tr>
                        <th>PROPERTY ID</th>
                        <th col-span='2'>LOCATION</th>
                        <th>TOTAL RENT</th>
                        <th col-span='2'>OPEN MAINTENANCE</th>
                        <th>TENANTS</th>
                        <th></th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>577-899</td>
                        <td>NO.3 CHEVRON DRIVE</td>
                        <td>200,000</td>
                        <td><img src='/settings2.svg'/><span>1</span></td>
                        <td><img src='/owners.svg'/><span>3</span></td>
                        <td><span><img src='/edit.svg'/><img src='/bin.svg' className='ml-2'/></span></td>
                    </tr>
                    <tr>
                        <td>577-899</td>
                        <td>NO.3 CHEVRON DRIVE</td>
                        <td>200,000</td>
                        <td><img src='/settings2.svg'/><span>1</span></td>
                        <td><img src='/owners.svg'/><span>3</span></td>
                        <td><span><img src='/edit.svg'/><img src='/bin.svg' className='ml-2'/></span></td>
                    </tr>
                    <tr>
                        <td>577-899</td>
                        <td>NO.3 CHEVRON DRIVE</td>
                        <td>200,000</td>
                        <td><img src='/settings2.svg'/><span>1</span></td>
                        <td><img src='/owners.svg'/><span>3</span></td>
                        <td><span><img src='/edit.svg'/><img src='/bin.svg' className='ml-2'/></span></td>
                    </tr>
                    <tr>
                        <td>577-899</td>
                        <td>NO.3 CHEVRON DRIVE</td>
                        <td>200,000</td>
                        <td><img src='/settings2.svg'/><span>1</span></td>
                        <td><img src='/owners.svg'/><span>3</span></td>
                        <td><span><img src='/edit.svg'/><img src='/bin.svg' className='ml-2'/></span></td>
                    </tr>
                    <tr>
                        <td>577-899</td>
                        <td>NO.3 CHEVRON DRIVE</td>
                        <td>200,000</td>
                        <td><img src='/settings2.svg'/><span>1</span></td>
                        <td><img src='/owners.svg'/><span>3</span></td>
                        <td><span><img src='/edit.svg'/><img src='/bin.svg' className='ml-2'/></span></td>
                    </tr>
                    
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        <style global jsx>
        {`
        body{
            background:#f4f5f7;
        }

        `}
        </style>
    </Layout>
)
export default MYProperties;