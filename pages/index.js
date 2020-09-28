import Head from 'next/head';

const Index = ()=>(
    <div>
    <Head>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <title>LiveIzy-Home</title>
    </Head>
    <div className="container-fluid">
    <header>
        
    
            <nav className="navbar navbar-expand-sm navbar-dark">
            <a className="navbar-brand" href='#'><img src="/logo.png"style={{width:'60%'}}/></a>
            <ul className="navbar-nav u-nav">
                <li className="nav-item liNav">
                <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item liNav dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    All Services
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">izyRent</a>
                    <a className="dropdown-item" href="#">izyProman</a>
                    <a className="dropdown-item" href="#">izyPay</a>
                    <a className="dropdown-item" href="#">izyfood</a>
                </div>
                </li>
                <li className="nav-item liNav">
                <a className="nav-link" href="#">Rent</a>
                </li>
                 <li className="nav-item liNav">
                <a className="nav-link" href="#">Team</a>
                </li>
            </ul>
            <button className="navbar-btn btn-outline-primary">Login</button>
            <button className="navbar-btn btn-light ml-auto mr-5">SignUp</button>
            
            </nav>
        
    </header>

    <main>
        <div className='container container1'>
            <div className='row'>
                <div className=" col-md-7 col-12 rentPayCover">
                    <h1 className='rentPayCover-child'>Rent.now.Pay later.</h1>
                    <h1 className='rentPayCover-child'>List your property and guaranty your rent</h1>
                    <p className='rentPayCover-child'>Whether you have one apartment or one thousand, <br/>Liveizy makes life easier</p>
                    <div className='row'>
                        <div className='col-md-5 col-12'>
                            <input type='text' className="form-control form-control-lg input-email rentPayCover-child" placeholder="Enter your email address"/>
                            <button type='submit' className='btn btn-primary getStarted-btn'>Get started, it is free</button>
                        </div>
                    </div>
                    
                </div>
                <div className=" col-md-5 col-12">
                    <div className='redBox'></div>
                    <div className='yellowBox'></div>
                    <div className='img-cover'>
                        <img src='/home-smile.png' className='img-fluid'/>
                        <div className='img-text text-center'>Peace of mind </div>
                    </div>
                </div>
                
            </div>
        </div>
    </main>
    <footer className="bg-dark liveIzyFooter text-center">&copy;Liveizy {new Date().getFullYear()}</footer>
    </div>
    <style jsx>{`
        .container-fluid{
            padding-right:0;
            padding-left:0;
            margin-right:auto;
            margin-left:auto;
        }
        .container1{
            padding-top:40px;
            padding-bottom:40px;
        }
        .navbar{
            padding:30px;
        }
         .u-nav{
             margin:0 auto;
            

        }
        .liNav .nav-link{
            color:#fff;
            margin-right:35px;
        }

        .navbar-btn{
            width:80px;
            
        }
        
        .navbar-btn.btn-outline-primary{
            margin-right:-200px;
            background-color:transparent;
        
        }
        navbar-btn.btn-light{
            background:#fff;
            color:#062239;
            font-size:10px;
        }
            
        }
        .dropdown .dropdown-menu a{
            color:#000;
            text-align:center;
            font-size:12px;
            
        }
        .img-fluid{
            border-top-left-radius:50px;
            height:330px;
        }
        .img-cover{
            background-color:#0b3469;
            border:15px solid #0b3469;
            height:450px;
            width:85%;
        }
        
        .redBox{
            width:50px;
            height:50px;
            background-color:#C8222C;
            position:absolute;
        
            left:370px;
         

        }
         .yellowBox{
            width:50px;
            height:50px;
            background-color:#E1F10C;
            position:absolute;
        
            top:150px;
            right:420px;
            
            

        }
        .img-text{
             width:100%;
             height:90px;
             background-color:#C8222C;
             padding:30px 50px;
         }   

       
        .input-email{
            font-size:14px;
            
        }
        .rentPayCover{
            margin-top:30px;
        }
        .rentPayCover-child{
            margin-bottom:20px;
        }
         .liveIzyFooter{
             width:100%;
             height:50px;
             border:2px solid black;
         }

        

        

        
        


        

        
        
    `}
    </style>
    <style global jsx>{`
        body{
            margin:0;
            padding:0;
            background-color:#051138;
            color:#fff;
        }
        * {box-sizing: border-box;
            
        }
    `}
    
    </style>
    </div>
);
export default Index;