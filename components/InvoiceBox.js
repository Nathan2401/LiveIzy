const InvoiceBox = ({type,style}) =>(
    <div style ={style} className='invoiceBox'>
        
        <div className='row'>
            <div className="col-12">
                <p>₦10000</p>
            </div>
            <div className="col-md-8 col-12">
                <h6>{type}</h6>
            </div>
            <div className="col-md-4 col-12">
                <small>View all</small>
            </div>
        </div>
        <style jsx>{`
            .invoiceBox{
                border-radius:10px;
                color:#fff;
                margin-bottom:20px;
                width:94%;
                box-sizing:border-box;
                padding:15px 15px;
            }
            .invoiceBox h6 {
                font-size:14px;
            }
            .invoiceBox small {
                font-size:8px;
                
            }
        `}
        </style>
    </div>
);
export default InvoiceBox;