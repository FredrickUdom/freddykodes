import '../Footer/Footer.css';

const FooterArea = () => {
    const date = new Date().getFullYear()
    return ( 
        <>
        <div className="footer text-white text-center py-2">
        <div className="colz-icon">

                           
                            <a href="https://www.facebook.com/freddyfred93">
                                <i className="fa fa-facebook-square px-4" aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                            </a>
                            {/* <a href="">
                                <i className="fa fa-google-plus-square" aria-hidden="true"></i>
                            </a> */}
                            <a href="https://www.instagram.com/fredrickudom/">
                                <i className="fa fa-instagram px-4" aria-hidden="true"></i>
                            </a>
                            {/* <a href="">
                                <i className="fa fa-youtube-square" aria-hidden="true"></i>
                            </a> */}
                            <a href="https://x.com/FredrickUdom">
                                <i className="fa fa-twitter px-4" aria-hidden="true"></i>
                            </a>
                            
                            <a href="https://github.com/FredrickUdom">
                            <i class="fa fa-github" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/fredrick-udom-696085227/">
                                <i class="fa fa-linkedin px-4" aria-hidden="true"></i>
                                
                            </a>
                        </div>
                        <div className="copy-right pt-3">
                        <p>FreddyKodes &copy; {date} </p>
                        </div>
                    </div>
            {/* <marquee behavior="" direction="">welcome to my Freddy Kodes</marquee> */}
        
        </>
     );
}
 
export default FooterArea;