// import React, { useState, useEffect } from "react";
import "./style.css";

export default function Biotechnology(props) {
  // useEffect(() => {
  //   if (props.mode === "dark") {
  //     setcurrentColor("#f3f31f");
  //   } else {
  //     setcurrentColor("#189e2a");
  //   }
  // }, [props.mode]);
  // const [currentColor, setcurrentColor] = useState("blue");

  return (
    <div className={` text-${props.mode === "light" ? "dark" : "light"}`}>
      <div className=" container">
        <h1 className="text-center biotech">Biotechnology</h1>
        <div className="content">
          <h3  className={`text-center text-${
              props.mode === "light" ? "success" : "warning"
            }`}>Defination : </h3>
          <p className="">
            The concept of biotechnology encompasses a wide range of procedures
            for modifying living organisms according to human purposes, going
            back to domestication of animals, cultivation of the plants, and
            "improvements" to these through breeding programs that employ
            artificial selection and hybridization. Modern usage also includes
            genetic engineering as well as cell and tissue culture technologies.
          </p>
          <h3  className={`text-center text-${
              props.mode === "light" ? "success" : "warning"
            }`} className="text-center">
            Introduction to biotechnology
          </h3>
          <h4>Topics covered:-</h4>
          <li>
            <a href="#hni"> History and introduction</a>
          </li>
          <li>
            <a href="#">Traditional and modern biotechnology</a>{" "}
          </li>

          <li className="dropend">
            <a href="#">Overview of branches of biotechnology</a>
            <button
              className="button dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>

            <ul
              className="dropdown-menu drpdwn"
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Plant biotechnology
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Animal biotechnology
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Environmental biotechnology
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Agricultural biotechnology
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Marine biotechnology
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Healthcare biotechnology
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Industrial biotechnology
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Pharmaceutical biotechnology
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#"> Overview of biotechnology research in India</a>
          </li>
          <li>
            <a href="#"> Overview of biotechnology institutions in India</a>
          </li>
          <li>
            {" "}
            <a href="#"> Applications of biotechnology</a>
          </li>

          <h3  className={`text-center text-${
              props.mode === "light" ? "success" : "warning"
            }`} id="hni">
            History and Introduction
          </h3>
          <h4>History</h4>
          <div className="history">
            <ol>
              <li>
                Biotechnology has been used since the dawn of civilization.
              </li>
              <li>
                Basically it is the application of scientific and engineering
                principles for processing of materials by using biological
                agents to give rise to new products.
              </li>
              <li>Egyptians used yeasts to bake leavened bread.</li>
              <li>
                Fermentation techniques were developed by the Chinese for
                brewing and cheese making.
              </li>
              <li>Aztecs used spirulina algae to make cakes.</li>
              <li>
                1919 Karl Ercky, first coined the term ‘Biotechnology’, meaning
                the production of products from raw material with the use of
                living organisms.
                <p>He is known as the father of biotechnology.</p>
              </li>
            </ol>
          </div>
          <div className="intro">
            <h3  className={`text-center text-${
              props.mode === "light" ? "success" : "warning"
            }`} className="text-center">
              Introduction:-
            </h3>
            <p>
              The field of applied science which deals with living organisms and
              their derivatives to form new and improvised products.
            </p>
            <h5>There are 4 main types of biotechnology :-</h5>

            <li>
              <a href="#greenbt"> Green biotechnology</a>
            </li>
            <li>
              <a href="#redbt">Red biotechnology</a>
            </li>
            <li>
              <a href="#whitebt">White biotechnology</a>
            </li>
            <li>
              <a href="#bluebt">Blue biotechnology</a>
            </li>
            <h3
               className={`text-center text-${
              props.mode === "light" ? "success" : "warning"
            }`}
              className="text-center fw-bold"
              id="greenbt"
            >
              Green Biotechnology
            </h3>
            <p>
              Green biotechnology is biotechnology applied to agricultural
              processes. An example would be the selection and domestication of
              plants via micropropagation. Another example is the designing of
              transgenic plants to grow under specific environments in the
              presence (or absence) of chemicals.
              <br /> Basicaly ,Green biotechnology is related to the agriculture
              field
              <br />
              <br />
              <li>
                The products of plant biotechnology reduce the dependence on
                chemical or mechanical techniques.
              </li>
              <li>
                Development of new crops by gene modification , micropropagation
                to tissue culture falls under this category.
              </li>
              <li>
                It is a major branch of biotechnology which is used on a large
                scale in agriculture and agro- industrial fields.
              </li>
              <li>
                Green biotechnology covers agriculture, environmental, bioenergy
                etc.
              </li>
              <li>
                It provides solutions to the agriculture, horticulture and
                domestic animal breeding processes.
              </li>
            </p>
            <h3
               className={`text-center text-${
              props.mode === "light" ? "success" : "warning"
            }`}
              className="text-center fw-bold"
              id="redbt"
            >
              Red Biotechnology
            </h3>
            <p>
              Red biotechnology is the use of biotechnology in the medical and
              pharmaceutical industries, and health preservation.[24] This
              branch involves the production of vaccines and antibiotics,
              regenerative therapies, creation of artificial organs and new
              diagnostics of diseases
              <br />
              Bacicaly ,Red biotechnology is related to medical or
              pharmaceutical fields.
              <br />
              <br />
              <li>
                It involves the production of therapeutic drugs, vaccines,
                antibiotics, medicines, and health-related items.
              </li>
              <li>
                It is related to the development of new drugs, treatment
                techniques, hormones, stem cells, monoclonal antibodies, siRNA,
                diagnostic techniques, gene therapy, genetic testing etc.
              </li>
            </p>
            <h3
               className={`text-center text-${
              props.mode === "light" ? "success" : "warning"
            }`}
              className="text-center fw-bold"
              id="whitebt"
            >
              White Biotechnology
            </h3>
            <p>
              White biotechnology, also known as industrial biotechnology, is
              biotechnology applied to industrial processes. An example is the
              designing of an organism to produce a useful chemical. Another
              example is the using of enzymes as industrial catalysts to either
              produce valuable chemicals or destroy hazardous/polluting
              chemicals. White biotechnology tends to consume less in resources
              than traditional processes used to produce industrial goods
              <br />
              <br />
              <li>White biotechnology is related to the industrial field.</li>
              <li>
                Some applications of white biotechnology can be biocatalysts in
                industrial processes, production of industrially useful enzymes,
                and microorganism, production of wine, bread or beer.
              </li>
              <li>
                It is the fastest growing field of biotechnology that uses
                microorganisms in chemical production, plastics, tentiles,
                biofuels, cosmetics paper, tanning and food products.
              </li>
            </p>
            <h3
               className={`text-center text-${
              props.mode === "light" ? "success" : "warning"
            }`}
              className="text-center fw-bold"
              id="bluebt"
            >
              Blue Biotechnology
            </h3>
            <p>
              Blue biotechnology is based on the exploitation of sea resources
              to create products and industrial applications. This branch of
              biotechnology is the most used for the industries of refining and
              combustion principally on the production of bio-oils with
              photosynthetic micro-algae.
              <br />
              <br />
              <li>
                It is also called marine biotechnology in which marine resources
                are used for the formation of new products by various
                biotechnological techniques.
              </li>
              <li>
                Sea and oceans have a large number of biodiversity and
                bio-resources that can be used for human welfare. Here , aquatic
                resources like fishes, aquatic plants,
              </li>
              <li>
                Here , aquatic resources like fishes, aquatic plants, shellfish,
                sponges etc. are used for the production of food, medicine,
                beverages, fabrics, and personal care products that are used for
                human welfare by applying biotechnological techniques.
              </li>
              <li>
                Fresh-water river aquatic resources utilization also comes under
                this category.{" "}
              </li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
