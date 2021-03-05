import React from "react";
import resume from "../../images/larry_gamboa_2021resume_updated012021.pdf";

const Aside = () => {
    return (
        <div className="aside">
            <h2>Let's Connect</h2>
            <hr />
                <ul className="connect">
                    <li><a href="https://www.linkedin.com/in/gamboalarry/" target="_blank" rel="noreferrer">LinkedIn &rarr;</a></li>
                    <li><a href="https://github.com/larrygamboa/" target="_blank" rel="noreferrer">GitHub &rarr;</a></li>
                    <li><a href="https://www.behance.net/larrygamboa" target="_blank" rel="noreferrer">Behance &rarr;</a></li>
                    <li><a href="https://www.instagram.com/capturesbylg/" target="_blank" rel="noreferrer">Instagram &rarr;</a></li>
                    <li><hr /></li>
                    <li><a href="mailto:techmedia.lg@gmail.com">techmedia.lg@gmail.com</a></li>
                    <li>858.275.3161</li>
                    <li><hr /></li>
                    <li><a href={resume} target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary mb-3">Download Resum&eacute;</button></a></li>
                </ul>
        </div>
    )
}

export default Aside;
