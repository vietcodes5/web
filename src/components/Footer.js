import React from 'react';

export default function Footer(props) {
    return (
        <footer className="bg-dark">
            <div className="container text-light">
                <div className="row justify-content-center">
                    <div className="mx-5">
                        <div className="text-center">
                            <h4>Contact Infomation</h4>
                        </div>

                        <p>Email: vietcodeproject@gmail.com</p>
                        <p>Telephone: +84911090502</p>

                        <div className="row justify-content-around">
                            <a href="https://www.facebook.com/vietcode.org"><img src="#" alt="a" /></a>
                            <a href="https://www.facebook.com/vietcode.org"><img src="#" alt="a" /></a>
                        </div>
                    </div>

                    <div className="mx-5">
                        <div className="text-center">
                            <h4>Vietcode Project</h4>
                        </div>

                        <img src="#" alt="a" />

                        <p>© {new Date().getFullYear()} Vietcode Project Official Website</p>
                        <p>Website designed by Vietcode Xteam</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}