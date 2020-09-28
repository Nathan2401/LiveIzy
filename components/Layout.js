import Head from 'next/head';

import Avatar from 'react-avatar';
export default ({children,title}) => (
    <div>
    <Head>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <title>LiveIzy-{title}</title>
    </Head>
        <div className="container-fluid">
            <div className='row'>
                <div className='col-md-2 col-12'>
                    <header>
                        <nav className="navbar bg-custom navbar-dark layout-navbar">
  
                            <a className="navbar-brand" href="#"><img src='logo.png'className='img-logo'/></a>
                            

                            <div className='avartar-cov mx-auto text-center text-light'>
                                <Avatar src='/default-avatar.png' size='80' round={true}/>
                                <h5>Oleka Olechi</h5>
                                <p>UVBA1591</p>
                            </div>

                            
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <span>
                                        <img src='/dashboard.svg'className='liChildren'/>
                                        <a className="nav-link" href="#">DASHBOARD</a>
                                    </span>
                                </li>
                                 <li className="nav-item dropdown">
                                    <span>
                                        <img src='/home-run.svg'className='liChildren'/>
                                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                        
                                            PROPERTIES
                                        </a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Link 1</a>
                                                
                                            </div>
                                    </span>
                                </li>
                                 <li className="nav-item">
                                    <span>
                                        <img src='/wallet.svg' className='liChildren'/>
                                        <a className="nav-link" href="#">WALLET</a>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span>
                                        <img src='information.svg'className='liChildren'/>
                                        <a className="nav-link" href="#">APPLICATIONS</a>
                                    </span>
                                </li>
                                 <li className="nav-item">
                                    <span>
                                        <img src='/user1.svg'className='liChildren'/>
                                        <a className="nav-link" href="#">LPMS</a>
                                    </span>
                                </li>
                                 <li className="nav-item">
                                    <span>
                                        <img src='/wage.svg' className=' liChildren'/>
                                        <a className="nav-link" href="#">INCOME</a>
                                    </span>
                                </li>
                                 <li className="nav-item">
                                    <span>
                                        <img src='/owner.svg'className='liChildren'/>
                                        <a className="nav-link " href="#">TENANTS</a>
                                    </span>
                                </li>
                                 <li className="nav-item">
                                    <span>
                                        <img src='/mail.svg' className='liChildren'/>
                                        <a className="nav-link" href="#">MESSAGE</a>
                                    </span>
                                </li>
                                 <li className="nav-item">
                                    <span>
                                        <img src='/settings.svg'className='liChildren'/>
                                        <a className="nav-link" href="#">ACCOUNT SETTING</a>
                                    </span>
                                </li>
                                 <li className="nav-item">
                                    <span>
                                        <img src='/plus.svg'className='liChildren'/>
                                        <a className="nav-link " href="#">REFERRAL</a>
                                    </span>
                                </li>
                                
                               
                            </ul>
                        </nav>

 

                    </header>
                </div>
                <div className='col-md-10 col-12'>
                    <header>
                        <div className='headerCover'>
                            <div className='headCoverChild'>
                                <i className="fa fa-align-left fa-2x topIcon" aria-hidden="true"></i>
                               <h5 className='heading-1'>{title}</h5>
                            </div>
                            <div className='headCoverChild'>
                                <span>
                                    <img src='notification.svg' className='not-icon'/>
                                    <span className='badge badge-primary ml-n4'style={{width:'10px',fontSize:'8px'}}>1</span>
                                </span>
                                
                                <div style={{background:'#e1f8fe',width:'100px',height:'30px'}} className='headCoverGChild'>
                                    <img src='/nopath.png'style={{width:'20%'}}/>
                                    <span className="badge badge-success ml-n1" style={{width:'5px',height:'8px'}}>.</span>
                                    <span className='headCoverGChild-text text-center' style={{left:'10px',color:'#043B5C'}}>Kelechi</span>
                                </div>

                            </div>
                        </div>
                        <hr className='mt-n1'/>
                    </header>
                    <main>
                       {children}
                    </main>
                </div>
                
            </div>
            <footer></footer>
        </div>
        <style jsx>{`

            .layout-navbar{
                background-color:#062239;
                
            }
            .nav-item span{
            display:grid;
            grid-template-columns:1fr 1fr;
            margin-top:20px;
            margin-left:10px;
            }
            .nav-item img{
                margin-top:5px;
                width:50%;
                height:20px;

                
            }
            .nav-item .nav-link{
                font-size:12px;
                margin-left:-30px;
            }
            .img-logo{
                width:60%;
                margin-left:40px;
                margin-bottom:40px;
                margin-top:20px;
            }
            .avartar-cov p{
                font-size:12px;
            }
            

            }
            .headerCover{
                display:grid;
                grid-template-columns:20%  20%;
                grid-column-gap:60%;
                padding:10px 20px;
                 }
            .headCoverChild{
                display:grid;
                grid-template-columns:1fr 1fr;
            }
            .headCoverChild h5{
                color:#043B5C;
            }
            .not-icon{
                width:50%;
                height:20px;
            }
           .headCoverGChild{
               margin-left:-40px;
               position:relative;
           }
           .headCoverGChild-text{
               position:relative;
               font-size:12px;
               margin-left:5px;
           }
           .heading-1{
               margin-left:-40px;
           }
           hr{
               width:97%;
               border-bottom:1px solid #043B5C;
               margin-left:1px;
              
            
               
           }
            
        `}
        </style>
        <style global jsx>{`
        *{
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -ms-box-sizing: border-box;
            box-sizing: border-box;
            box-sizing:border-box;
        }
       body{
        max-width:100%;
        overflow-x:hidden;
        }


        `}
        </style>
    </div>
);


