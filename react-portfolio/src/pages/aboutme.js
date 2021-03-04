import React from "react";
import "../App.css";

const aboutMe = () => {
    return (
        <div id="main-content">
            <div className="container bg-white">
                <div className ="row">
                    <div className="col-lg-9 col-xlg-9 p-4">
                        <h2>Introduction</h2>
                        <hr />
                        <img src="../images/lg-profile-pic.jpg" alt="Larry Gamboa" className="float-left rounded mr-3" />
                        <p>I'm a skilled hybrid web graphic designer and front-end developer with over 10 years of professional experience. I began my career in print design before transitioning over into the realm of web development. With my skills, I have designed and developed websites for clients in the medical, law, financial, and educational industries. I also have extensive experience from working with big name companies such as Active Network, HD Supply, and PETCO. Along with graphic design, I possess skills in front-end web development using HTML, CSS, Javascript, content management systems, and responsive front-end frameworks. I'm knowledgeable in wireframing, UI design, and responsive web design. I'm very passionate about design and want to continue utilizing my talents while continuing to develop my front-end web development skill sets.</p>
                        <h3 className="mt-3">Specialties</h3>
                        <div className="row">
                            <ul className="col-sm-12 col-md-6 col-lg-6 col-xlg-6 pl-5 ul-mb-none">
                                <li>HTML/CSS/Javascript web development</li>
                                <li>Bootstrap/Materialize/Foundation responsive front-end frameworks</li>
                                <li>Open-source, cross-platform, JavaScript runtime environment with Node.js</li>
                                <li>Open-source database management system with MySQL</li>
                                <li>GitHub code hosting platform for version control and collaboration</li>
                            </ul>
                            <ul className="col-sm-12 col-md-6 col-lg-6 col-xlg-6 pl-5">
                                <li>Website interface wireframe and design</li>
                                <li>Responsive web design</li>
                                <li>Print graphic design</li>
                                <li>Content management systems</li>
                                <li>Adobe Creative Cloud</li>
                                <li>Photography and photo editing</li>
                            </ul>
                        </div>
                        <h3 className="mt-3">Education</h3>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-4 col-xlg-4">
                                <p><strong>Full Stack Web Development, UCSD Extension</strong><br />
                                Year: 2020-2021<br />
                                Degree: In Progress
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 col-xlg-4">
                                <p><strong>Platt College, San Diego</strong><br />
                                Year: 2005-2006<br />
                                Degree: Bachelor of Science in Media Arts
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 col-xlg-4">
                                <p><strong>Platt College, San Diego</strong><br />
                                Year: 2001-2002<br />
                                Degree: Associate of Applied Science in Graphic Design
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xlg-3 p-4">
                        <h2>Let's Connect</h2>
                        <hr />
                        <ul className="connect">
                            <li><a href="https://www.linkedin.com/in/gamboalarry/" target="_blank">LinkedIn &rarr;</a></li>
                            <li><a href="https://github.com/larrygamboa/" target="_blank">GitHub &rarr;</a></li>
                            <li><a href="https://www.behance.net/larrygamboa" target="_blank">Behance &rarr;</a></li>
                            <li><a href="https://www.instagram.com/capturesbylg/" target="_blank">Instagram &rarr;</a></li>
                            <li><hr /></li>
                            <li><a href="mailto:techmedia.lg@gmail.com">techmedia.lg@gmail.com</a></li>
                            <li>858.275.3161</li>
                            <li><hr /></li>
                            <li><a href="../images/larry_gamboa_2021resume_updated012021.pdf" target="_blank"><button type="button" className="btn btn-primary mb-3">Download Resum&eacute;</button></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutMe;
