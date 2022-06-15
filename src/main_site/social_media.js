import React from "react";

function gitHubLink() {window.open("https://github.com/cassierains")}
function linkedInLink() {window.open("https://www.linkedin.com/in/cassandra-sibley-210b251a2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYhFs3VMpSumerCjOV90FBQ%3D%3D")}
function fiverrLink() {window.open("https://www.fiverr.com/phoenix_js?public_mode=true")}

const MediaLinks = () => {
    return (
        <div className="navbar">
            <li>
            <button className="navButton"
                onClick={gitHubLink}
                >GitHub
            </button>
        </li>
        <li>
            <button className="navButton"
                onClick={linkedInLink}
                >LinkedIn
            </button>
        </li>
        <li>
            <button className="navButton"
                onClick={fiverrLink}
                >Fiverr
            </button>
        </li>
        </div>
    );
};

export default MediaLinks;