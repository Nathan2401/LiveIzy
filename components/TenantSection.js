const TenantSection = ({src,title}) => (
    <div className='TenantSectionCov'>
        <div className='row'>
            <div className='col-md-8 col-12'>
                <div className='row'>
                    <div className='col-md-4 col-12'>
                        <img src={src} className='img-fluid rounded-circle'/>
                    </div>
                    <div className='col-md-8 col-12'> 
                        <p>{title}</p>
                        <p className='mt-n3'>{new Date().toDateString()}</p>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-12'>
            <button className='btn btn-info'>View all</button>
            </div>
            
        </div>
        <style jsx>{`
            .TenantSectionCov p:first-child{
                font-size:10px;
                color:#043B5C;
                font-weight:bold;

            }
            .TenantSectionCov p:last-child{
                font-size:8px;

            }
            

            .TenantSectionCov button {
                background-color:#BEDEF1;
                font-size:8px;
                border-radius:40px;
                width:50px;
                height:20px;
                padding:3px 3px;
                color:#1461A2;
            }
        `}
        </style>
    </div>
);
export default TenantSection;