const IzyBox = ({type,src}) => (
    <div className='IzyBox'>
        <div className='row'>
            <div className='col-md-6 col-12'>
                <h6>{type}</h6>
                <p className='first-money'>₦1000.00</p>
                <p className='sec-money'>fund account</p>
            
            </div>
            <div className='col-md-6 col-12'>
                <div className='metal-icon'>
                    <img src={src}/>
                </div>
            </div>
        </div>
        <style jsx>{`
            .IzyBox{
            background-color:#fff;
            height:200px;
            width:100%;
            padding:40px 20px;
            margin-bottom:20px;
            }
            .IzyBox h6{
                color:#032F4A;
            }
            .first-money{
                color:#032F4A;
            }
            .sec-money{
                color:#C8222C;
                font-size:12px;
            }
            
            .metal-icon{
                width:90px;
                height:90px;
                line-height:90px;
                border:2px solid #043B5C;
                border-radius:100%;
                background-color:#043B5C

            }
            .metal-icon img{
                margin-left:15px;
            } 
        `}
            
        </style>
    </div>
);
export default IzyBox;