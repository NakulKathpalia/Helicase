import React, { useState, useEffect } from "react";
import "./style.css";

export default function Immunology(props) {
  const [IsScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    setIsScrolling(false);
  }, [IsScrolling]);

  return (
    <div
      className={` text-${
        props.mode === "light" ? "dark" : "light"
      } customScroll
      `}
    >
      <div className="container" style={{ display: "flex" }}>
        <div>
          <div
            className={`content-box justify-content-start  p-3 text-${
              props.mode
            } bg-${props.mode === "light" ? "fadedgreen" : "fadedblue"}`}
          >
            <div className=" align-items-center pb-2 mb-1 link-dark text-decoration-none border-bottom border-dark">
              <div className="fs-4 text-center fw-semibold">Contents</div>
            </div>
            <ul className="list-unstyled ps-0">
              <li>
                <a
                  href="#Defination"
                  className="link-dark mx-1 fw-bold rounded"
                >
                  Defination
                </a>
                <li>
                  <a className="link-dark rounded" href="#immunity"></a>
                </li>
              </li>
              <li className="mb-1">
                <div className="d-inline">
                  <a
                    className="link-dark mx-1 fw-bold rounded"
                    href="#immunity"
                  >
                    Immunity
                  </a>
                </div>
                <div
                  className="btn btn-toggle align-items-center rounded fw-bold d-inline collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#home-collapse"
                  aria-expanded="true"
                >
                  <i class="bi bi-chevron-compact-down"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-compact-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                    />
                  </svg>
                </div>
                <div className="collapse show" id="home-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <a href="#iii" className="link-dark fw-semibold rounded">
                        Innate or inherent immunity
                        <ol>
                          <li>
                            <a
                              className="link-dark fw-semibold rounded"
                              href="#abr"
                            >
                              Anatomical barriers
                            </a>
                          </li>
                          <li>
                            <a
                              className="link-dark fw-semibold rounded"
                              href="#pbr"
                            >
                              Physiological barriers
                            </a>
                          </li>
                          <li>
                            <a
                              className="link-dark fw-semibold rounded"
                              href="#phbr"
                            >
                              Phagocytic barrier
                            </a>
                          </li>
                          <li>
                            <a
                              className="link-dark fw-semibold rounded"
                              href="#ibr"
                            >
                              Inflammatory barrier
                            </a>
                          </li>
                        </ol>
                      </a>
                    </li>
                    <li>
                      <a className="link-dark fw-semibold rounded" href="miir">
                        Mechanism of Innate Immune Recognition
                      </a>
                    </li>
                    <li>
                      <a href="#aai" className="link-dark fw-semibold rounded">
                        Acquired or adaptive immunity
                        <ol>
                          <li>
                            <a
                              className="link-dark fw-semibold rounded"
                              href="#ai"
                            >
                              Active Immunity
                            </a>
                          </li>
                          <li>
                            <a
                              className="link-dark fw-semibold rounded"
                              href="#pi"
                            >
                              Passive Immunity
                            </a>
                          </li>
                        </ol>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <div className="d-inline">
                  <a className="link-dark mx-1 fw-bold rounded" href="#cis">
                    Cells of Immune System
                  </a>
                </div>
                <div
                  className="btn btn-toggle align-items-center rounded fw-bold d-inline collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#cis-collapse"
                  aria-expanded="true"
                >
                  <i class="bi bi-chevron-compact-down"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-compact-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                    />
                  </svg>
                </div>
                <div className="collapse" id="cis-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <a href="#" className="link-dark fw-semibold rounded">
                        Haematopoiesis
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link-dark rounded">
                        Sites of Haematopoiesis
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link-dark rounded">
                        Mechanism of Haematopoiesis
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link-dark rounded">
                        <u>Cells of Immune System</u>
                        <ol>
                          <li>
                            <a className="link-dark rounded" href="#lc">
                              Lymphoid Cells
                            </a>
                          </li>
                          <li>
                            <a className="link-dark rounded" href="#mp">
                              Mononuclear Phagocytes
                            </a>
                          </li>
                          <li>
                            <a className="link-dark rounded" href="#gc">
                              Granulocytes
                            </a>
                          </li>
                          <li>
                            <a className="link-dark rounded" href="#mc">
                              Mast Cells
                            </a>
                          </li>
                          <li>
                            <a className="link-dark rounded" href="#dc">
                              Dendritic Cells
                            </a>
                          </li>
                        </ol>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link-dark rounded"></a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <div className="d-inline">
                  <a className="link-dark mx-1 fw-bold rounded" href="#ois">
                    Organs of Immune System
                  </a>
                </div>
                <div
                  className="btn btn-toggle align-items-center rounded fw-bold d-inline collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#ois-collapse"
                  aria-expanded="true"
                >
                  <i class="bi bi-chevron-compact-down"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-compact-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                    />
                  </svg>
                </div>
                <div className="collapse" id="ois-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a className="link-dark rounded" href="#">Primary Lymphoid Organs 
                    <ol>
                      <li><a className="link-dark rounded" href="#">Thymus</a></li>
                      <li><a className="link-dark rounded" href="#">Bone Marrow</a></li>
                    </ol>
                    <ul><li><a className="link-dark rounded" href="#">Lymphatic System</a></li></ul>
                    </a></li>
                    <li><a className="link-dark rounded" href="#">Secondary Lymphoid Organs 
                    <ol>
                      <li><a className="link-dark rounded" href="#">Lymph Nodes</a></li>
                      <li><a className="link-dark rounded" href="#">Spleen</a></li>
                      <li><a className="link-dark rounded" href="#">Mucosal-Associated Lymphoid Tissue </a></li>
                    </ol>
                    </a></li>
                  </ul>
                </div>
              </li>


              <li className="mb-1">
                <div className="d-inline">
                <a className="link-dark mx-1 fw-bold rounded" href="#antigen">
                    Antigen
                  </a>
                </div>
                <div
                  className="btn btn-toggle align-items-center rounded fw-bold d-inline collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#antigen-collapse"
                  aria-expanded="true"
                >
                  <i class="bi bi-chevron-compact-down"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-compact-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                    />
                  </svg>
                </div>
                <div className="collapse" id="antigen-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a className="link-dark rounded" href="#">Types of Antigen</a></li>
                    <li><a className="link-dark rounded" href="#">Immunogenecity vs Antigenicity
                    <ol>
                      <li><a href="#"className="link-dark rounded">Contribution of the Immunogen</a></li>
                      <li><a href="#"className="link-dark rounded">Contribution of the Biological System </a></li>
                    </ol>
                    </a></li>
                    <li><a className="link-dark rounded" href="#">Epitopes</a></li>
                    <li><a className="link-dark rounded" href="#">Hapten</a></li>
                  </ul>
                </div>

              </li>

              <li className="mb-1">
                <div className="d-inline">
                <a className="link-dark mx-1 fw-bold rounded" href="#antibody">
                    Antibody
                  </a>
                </div>
                <div
                  className="btn btn-toggle align-items-center rounded fw-bold d-inline collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#antibody-collapse"
                  aria-expanded="true"
                >
                  <i class="bi bi-chevron-compact-down"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-compact-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                    />
                  </svg>
                </div>
                <div className="collapse" id="antibody-collapse">
                <ul type="square"  className="btn-toggle-nav  fw-normal pb-1 small">
                    <li><a className="link-dark rounded" href="#sa">Structure of Antibody</a></li>
                    <li><a className="link-dark rounded" href="#igd">Immunoglobulin Domains</a></li>
                    <li><a className="link-dark rounded" href="#tab">Types of Antibodies</a></li>
                    <li><a className="link-dark rounded" href="#adi">Antigenic Determinants on Immunoglobulins</a></li>
                  </ul>
                </div>
                  
                
              </li>

              <li className="border-top my-3"></li>
              <li className="mb-1">
                <button
                  className="btn btn-toggle align-items-center rounded collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#account-collapse"
                  aria-expanded="false"
                >
                  Account
                </button>
                <div className="collapse" id="account-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <a href="#" className="link-dark rounded">
                        New...
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link-dark rounded">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link-dark rounded">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link-dark rounded">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="content">
          <div className="text-center heading ">Immunology</div>
          <h3
            id="Defination"
            className={`text-center text-${
              props.mode === "light" ? "success" : "warning"
            }`}
          >
            Defination :
          </h3>
          <p className="my-2">
            The immune system is a remarkably versatile defence system that has
            evolved to protect animals from invading pathogenic microorganisms
            and cancer. Immunology is the branch of science dealing with the
            study of immune
          </p>
          <h3
            className={`text-center text-${
              props.mode === "light" ? "success" : "warning"
            }`}
          >
            Origin of Immunology
          </h3>
          <p className="my-2">
            immunity is the state of being immune. The word immunity (derived
            from Latin, <i> immunis</i> and <i>immunitas</i>-free of or too
            exempt) was used in the context of being resistant against the
            attack of a disease. The science that envisages the study of
            immunity is termed as
            <b> Immunology</b>. The history of immunology is really slightly
            more than 100 years if we consider <b>Louis Pasteur</b> as the
            "Father of immunology" as most do. If one thinks about cellular
            immunology, the real history begins in the late 1950's.
          </p>
          <div id="immunity">
            <h3
              className={`text-center text-${
                props.mode === "light" ? "success" : "warning"
              }`}
            >
              Immunity
            </h3>
            <p className="my-2">
              Immunity refers to the general ability of a host to resist a
              particular infection or disease. There are two fundamentally
              different types of immune responses to invading microorganisms and
              foreign material:
            </p>
          </div>
          <ol>
            <li>
              <a href="#iii">Innate or inherent immunity</a>
            </li>
            <li>
              <a href="#aai">Acquired or adaptive immunity</a>
            </li>
          </ol>
          <h4 className="text-center ">
            <u id="iii"> Innate or Inherent Immunity</u>
          </h4>
          <p className="my-2">
            It is present in an individual from the birth and includes general
            mechanisms which are inherited as the part of the innate structure
            and function of each individual. Thus, it is also known as innate or
            natural immunity. It provides the first line of defence against
            infection. Most components of innate immunity are present before the
            onset of infection and are ready to be mobilized upon the infection.
            It constitutes a set of disease-resistant mechanism that are not
            specific to a particular Pathogen and thus offers resistance to any
            pathogen or foreign material encountered by the host. It is
            therefore, also known as non-specific immunity. This response lacks
            immunological memory that is non-specific response occur to the same
            extent each time a pathogen is encountered. Thus, innate immunity
            is:
          </p>
          <ol>
            <li>First line of defence</li>
            <li>Non-specific</li>
            <li>Lacks immunological memory</li>
            <li>Antigen-independent response</li>
            <li>Immediate maximal response</li>
          </ol>
          <h6>
            Innate immunity comprises of four types of defensive barriers which
            are as follows:
          </h6>
          <ol>
            <li>
              <a href="#abr">Anatomical barriers</a>
            </li>
            <li>
              <a href="#pbr"> Physiological barriers</a>
            </li>
            <li>
              <a href="#phbr">Phagocytic barrier</a>
            </li>
            <li>
              <a href="#">Inflammatory barrier</a>
            </li>
          </ol>
          <h4 id="abr">Anatomical barriers</h4>
          <p className="my-2">
            Physical and anatomical barriers occurs at skin surface,
            gastrointestinal tract, urinogenital tract, respiratory tract and
            primary gland that tend to prevent the entry of pathogens. It is the
            first line of defence against microorganisms. Protection by
            anatomical barriers is as follows:
          </p>

          <div className="py-3 table-responsive">
            <table className={`table table-${props.mode}`}>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Anatomical Barrier</th>
                  <th scope="col">Additional Defence Mechanism</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Skin</td>
                  <td>Sweat, desquamation, flushing, organic acids</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Gastrointestinal tract</td>
                  <td>
                    Peristalsis, gastric acid, bile acids, digestive enzyme,
                    flushing, thiocyanate, defensins, gut flora
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Respiratory airways and lungs</td>
                  <td>Mucociliary elevator, surfactant, defensins</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Nasopharynx</td>
                  <td>Mucus, saliva, lysozyme</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Eyes</td>
                  <td>Tears</td>
                </tr>
              </tbody>
            </table>
            <h5>
              <li className="py-2">
                <u>Skin</u> :-
              </li>
            </h5>
            <p className="my-3">
              The intact skin contributes greatly to non-specific host
              resistance. It forms a very effective mechanical barrier because
              of which commensal microorganisms living in or on the skin are
              prevented to gain access to the underlying tissues to some extent.
              The skin consists of two distinct layers a thinner outer layer
              called as <b>epidermis</b> and a thicker inner layer called as
              <b> dermis</b>. The epidermis contains several layers of tightly
              packed epithelial cells. Firstly, the outer epidermal layers
              consists of dead cells known as <b>cykeratinotes</b>. These cells
              produce waterproofing protein called keratin which cannot be
              hydrolysed enzymatically by microorganisms. Moreover, the skin is
              subjected to periodical drying and thus, the lack of mantigenture
              drives many resident microbiota into dormant state. Also, the
              continuous shedding of outer epithelial cells removes many of
              those microorganisms that manage to adhere to the skin surface.
            </p>
            <p className="py-2">
              Secondly, the inner dermis is composed of connective tissues and
              contains blood vessels, hair follicles, sweat glands and
              <b> sebaceous glands</b>. The sebaceous glands are associated with
              hair follicles and produce an oily secretion called sebum. sebum
              consists of lactic acid and fatty acids which maintains the pH of
              the skin between 3 and 5. This pH inhibits the growth of most
              microorganisms. The sebum may be partially degraded by the enzymes
              of some Gram-positive bacteria which change the secreted lipids to
              unsaturated fatty acids such as oleic acid that have strong
              antimicrobial activity against Gram-negative bacteria and some
              fungi.
            </p>
            <p className="py-2">
              The <b> sweat gland</b> contains a high concentration of sodium
              chloride which makes the skin surface hyperosmotic and thus,
              osmotically stresses most microorganisms. It also releases
              <b> lysozyme</b>, an enzyme which can hydrolyse the &beta; (1
              &#8594; 4) glycosidic bond in the bacterial cell wall
              peptidoglycan. It also produces antimicrobial peptides called
              <b>cathelicidins</b> ( Latin,
              <i> catharticus</i> , to purge and,
              <i> cida </i> to kill ) that destroys bacterial invaders either by
              punching holes in their plasma membrane or by solubilizing the
              membrane through some detergent like action.
            </p>
            <p className="py-2">
              Despite of these skin defences some pathogenic organisms gain
              access to the tissue under the skin. This may be due to breaks in
              the skin resulting from scratches, wounds or abrasion or insect
              bites. Here, they encounter a specialized set of cells called
              <b>skin associated lymphoid tissue (SALT)</b>. The major function
              of the SALT is to confine the microbial invaders to the area
              immediately underlying the skin and to prevent them from gaining
              access to the bloodstream. One type of SALT cell is the
              <b>Langerhans cell</b> which is a specialised dendritic cell that
              can phagocytose antigen. Once the Langerhans cell has internalised
              the antigen, it migrates from the epidermis to nearby lymph nodes
              where it differentiates into a specialized cell called the
              <b>interdigitating dendritic cells</b>. This cell presents the
              antigen on its surface and activate the nearby T-cell. The
              activated T-cell then interact with activated B-cell to induce a
              humoral response that produces specific antibodies.
            </p>
            <p className="py-2">
              The epidermis also contains intraepidermal lymphocytes that can
              intercept any antigen that breach the first line of Hence, these
              cells function as T-cell to destroy the antigen. Moreover, a large
              number of tissue macrophages are also located in the dermal layer
              of the skin that phagocytose the microorganisms.
            </p>
            <h5>
              <li className="py-2">
                <u>Mucous Membrane</u>
              </li>
            </h5>
            <p className="py-2">
              The conjunctivae and the alimentary, respiratory, and urogenital
              tracts are lined by mucous membranes. These membranes consist of
              an outer epithelial layer made up of stratified squamous
              epithelial cells and an underlying layer of connective tissue.
              Many pathogens enter the body by binding to and penetrating mucous
              membrane, a number of non-specific defence mechanisms tend to
              prevent this entry. The epithelial cells secrete the viscous fluid
              called mucous which entraps foreign microorganisms. Moreover, many
              mucosal surfaces are bathed in specific antimicrobial or antiviral
              substances. For example, cervical mucous, prostatic fluid, tears,
              and saliva contains a hydrolytic enzyme called lysozyme which
              hydrolyse the peptidoglycan. Mucous secretions also contain
              significant amount of iron-binding lactoferrin. It sequesters iron
              from the plasma which reduces the amount of available iron to
              invading microbes and thus limit their ability to multiply.
              Finally mucous membranes produce lactoperoxidase enzyme which
              produce superoxide radicals that are toxic to many microorganisms.
            </p>
            <p className="py-2">
              Mucous membranes also have a specialized immune barrier called
              Mucous Associated Lymphoid Tissue (MALT).
            </p>
            <h5>
              <li className="py-2">
                <u>Respiratory System</u>
              </li>
            </h5>
            <p className="py-2">
              The mammalian respiratory system has formidable defence
              mechanisms. The average person inhales at least eight microbes.
              minute or 10,000 each day. Once inhaled a microorganism must first
              survive and penetrate air filtration system of upper and lower
              respiratory tracts because the airflow in these tracts is very
              turbulent that direct the microbes to deposit on the mantigent, sticky
              mucosal surfaces.
            </p>
            <p className="py-2">
              The mucociliary blanket of respiratory epithelium traps
              microorganisms less than 10-um in diameter that are deposited on
              mucosal surfaces and transport them by ciliary action away from
              the lungs. Microorganisms larger than 10 um are usually trapped by
              hairs and cilia lining the nasal cavity. The cilia beat towards
              the pharynx so that the mucous with its trapped microorganisms
              moved toward the mouth and expelled. Thus, coughing, and sneezing
              reflexes clear the respiratory system by expelling the air
              forcefully from the lungs through mouth and nose respectively.
              Salivation also washes microbes from the mouth and nasopharyngeal
              areas into the stomach. Moreover, the microorganisms that bypass
              this mucous layer and reaches the alveoli encounter a population
              of fixed phagocytic cells called alveolar macrophages which can
              ingest and kill the microbes by phagocytosis.
            </p>
            <h5>
              <li className="py-2">
                <u>Gastrointestinal Tract</u>
              </li>
            </h5>
            <p className="py-2">
              The gastrointestinal secretions and resident flora play an
              important role in control of potential pathogens. The flora of the
              digestive tract acts competitively against pathogens through the
              mechanisms that supplement the other physical defences of the
              system. In the mouth the flushing action of saliva remove the
              organisms to the stomach. Moreover, saliva contains hydrolytic
              enzyme called lysozyme which degrade the bacterial cell wall. Its
              flushing action also stimulate streptococci (normal flora) to
              produce peroxides which are toxic to pathogenic organisms. Once
              the organisms reached the stomach They are killed by its gastric
              juice, which is a mixture of hydrochloric acid, proteolytic enzyme
              and mucous. It maintains “the low pH (2 to 3) to have bactericidal
              and viricidal action. However, many organisms are protected by
              food particles and reach the small intestine. In small intestine
              microbes are damaged by various pancreatic enzymes, bile enzymes
              in intestinal secretions and GALT system. Also, the peristalsis
              (Greek, Peri-around and stalsis-contraction) and the normal loss
              of columnar epithelial cells helps in the removal of intestinal
              microbes. In addition, the normal microbiota of large intestine
              produces metabolic products such as fatty acids that prevent
              unwanted microbes from becoming established. They also take up
              attachment sites and compete for nutrients. The mucous membranes
              of intestinal tract contain cells called Paneth cells These cells
              produce lysozyme and a set of peptides called cryptins which are
              toxic for some organisms.
            </p>
            <h5>
              <li className="py-2">
                <u>Genitourinary Tract</u>
              </li>
            </h5>
            <p className="py-2">
              The kidneys, ureters and urinary bladder of mammals are sterile
              under normal circumstances. This sterility is due to number of
              factors. Firstly, the kidney medulla is so hypertonic that only
              few microbes can survive. The lower urinary tract is protected by
              flushing action of urine and some mucous about 4-10 times each
              day. The urine kills the bacteria due to its low pH (4.5) and
              presence of urea and other metabolic end products such as uric
              acid, hippuric acid, indican, fatty acid. Mucin and enzymes, in
              males the length of urethra (20 cm) provides a distance barrier
              that excludes microorganisms from Urinary bladder. Whereas the
              short urethra (5 cm) in females is more readily traversed by
              microorganisms. Moreover, in adult female. The vaginal wall is
              lined by squamous epithelial cell which produces an increased
              amount of glycogen under the influence of oestrogen. This glycogen
              was degraded by acid tolerant Lactobacillus acidophilus bacteria
              called Doderlein’s bacilli into lactic acid which creates the
              acidic environment (pH 3 to 5) which is unfavourable to most
              organisms, Cervical mucous also have some antibacterial activity.
            </p>
            <h5>
              <li className="py-2">
                <u>Mammary Gland</u>
              </li>
            </h5>
            <p className="py-2">
              In mammary gland, flushing action of milk prevents invasion by
              some potential organism. Moreover, milk itself contains bacterial
              inhibitors called as Lactenins. The lactenins include complement,
              lysozyme and lactoferrin and enzyme lactoperoxidase and IgA
              antibodies. The lactoferrin compete with bacteria for iron and
              thus render it unavailable for their growth. Lactoperoxidase and
              thiocyanate ions of milk in the presence of exogenous hydrogen
              peroxide get activated and lactoperoxidase reacts on thiocyanate
              and convert it into bacteriostatic sulphur dicyanide. The
              phagocytic cells released into the mammary gland in response to
              irritation caused by the sucking action may also contribute to
              antimicrobial resistance.
            </p>
            <h4 id="pbr" className="py-2">
              Physiological Barriers
            </h4>
            <p className="py-2">
              The physiological barriers that contribute to immunity include
              temperature, pH and various soluble and cell associated molecules.
              Many species are not susceptible to certain diseases because their
              normal body temperature inhibits the growth of the pathogens. For
              example, chickens have immunity to anthrax because their high body
              temperature inhibits the growth of bacteria. Gastric acidity is
              also a physiological barrier because very few ingested microbes
              can survive the low pH of the stomach contents.
            </p>
            <p className="py-2">
              A variety of antimicrobial substances are produced by various
              cells that act as endogenous natural antibiotics or disinfectants.
              These antimicrobial substances are micropeptides. Most of them are
              cationic, i.e. they carry net positive charge while reacting. The
              epithelial lining of GI, respiratory and genitourinary tract
              produce some of these peptides, others are produced by glandular
              secretions that mantigenten and lubricate this system and some are
              also produced by phagocytic cells. Cationic peptides work
              synergistically with lactoferrin, lysozyme and other proteins that
              are present in body fluids or tissues. They also have the ability
              to recruit inflammatory cells like neutrophils, mast cells etc. at
              the site of infection or injury. The best studied antimicrobial
              peptides in humans are
            </p>
            <ol className="py-2">
              <li>Defensins</li>
              <li>Hepcidin</li>
              <li>Cathelicidins</li>
              <li>Interferon</li>
              <li>Complement</li>
            </ol>
            <h6>
              <li className="py-2">
                <u> Defensins</u>
              </li>
            </h6>
            <p className="py-2">
              All the epithelial surfaces such as skin, lining of GI,
              genitourinary tract and lining of nasal passages and lungs are
              protected by defensins. Some defensins are secreted by epithelial
              cell and others by neutrophils. There are B-sheet peptides which
              have 29 to 40 amino acid residues and 3 intramolecular cysteine
              disulphide bonds. The two forms of defensins exist namely o. and B
              forms. Defensins stimulate the production of IL- 8, chemotactic
              factor and neutrophil activating cytokine In airway epithelial
              cells which would enhance neutrophil recruitment.
            </p>
            <p className="py-2">
              a-Defensins Six human a-defensins (hADs) are known, out of which
              four belong to neutrophil a-defensins (HINP 1-4), which are
              exclusively produced by neutrophils or polymorphonuclear cells.
              hAD-5 and hAD-6 are produced constitutively by secretory Paneth
              cells found within small intestine. hAD-5 is also expressed in
              vagina and ectocervix. Human a-defensins peptides HNP-1 and HINP-2
              have been shown to stimulate or to have chemotactic activity
              towards murine and human T-cell and monocytes.
            </p>
            <p className="py-2">
              B-defensins Human B-defensins (hBD-1) is synthesized as a 68 amino
              acid precursor that undergoes aminoterminal proteolytic
              processing. High concentrations of hBD-1 are found in loop of
              Henle, distal tubules and collecting tubules of kidney, vagina,
              cervix, uterus, and fallopian tubes. hBD-2 was detected in airway
              surface fluid of human lung. The fully processed peptide had
              broad-spectrum salt-sensitive antibacterial activity und showed
              synergy with lysozyme and lactoferrin. It also acts as chemotactic
              factor for immature dendritic cells and memory T-cells.
            </p>
            <h6>
              <li className="py-2">
                <u>Hepcidin</u>
              </li>
            </h6>
            <p className="py-2">
              Hepcidin is a peptide of 25 amino acid with a B-sheet structure.
              It is secreted by the liver and controls the level of iron in the
              blood and extracellular fluids (ECF) by regulating its release
              from intracellular sites. Its secretion is increased in response
              to pathogenic invasion. Many pathogens require iron for their
              virulence and thus, hepcidin block the release of iron into the
              blood and starves the microbes.
            </p>
            <h6>
              <li className="py-2">
                <u>Cathelicidins</u>
              </li>
            </h6>
            <p className="py-2">
              Human express only one cathelicidin, i.e., LL-37, a peptide of 37
              amino acids. It is synthesized by macrophages, neutrophils, and
              epithelial cells of skin and urinary tract. It destroys the
              bacterial invaders cither by creating holes in their plasma
              membrane or by solubilizing the membrane through some detergent in
              action. It also acts synergistically with lactoferrin and
              lysozyme.
            </p>
            <h6>
              <li className="py-2">
                <u>Interferon</u>
              </li>
            </h6>
            <p className="py-2">
              Interferons (IFN’s) are a group of related low molecular weight,
              regulatory cytokinesis produced by eukaryotic cells in response to
              a viral infection, i.e., they are antiviral proteins. Interferons
              are usually species specific but virus non-specific. Three main
              types of interferons are recognized-
            </p>
            <p className="py-2">
              Interferon-a (IFN-a) is encoded by a family of some 20 genes on
              chromosome 9, that can be synthesized by virus infected
              leukocytes.
            </p>
            <p className="py-2">
              Interferon-B (IFN-B) is encoded by a single gene on chromosome 9,
              that can be synthesized by fibroblasts.
            </p>
            <p className="py-2">
              Interferon-y (IFN-y) is encoded by a single gene on chromosome 12,
              that can be produced by antigen-stimulated T-cell and natural
              killer cells.
            </p>
            <p className="py-2">
              Viral infection of a cell leads to the production of IFN a? which
              activates antiviral state in the neighbouring cells and thus,
              enabling them to resist virus infection. Interferons activate
              several genes, out of which two have direct effect a 67 kDa
              protein kinase which inhibit the phosphorylation of elF-2 and
              blocks translation of proteins and a 2’, 5’-oligoadenylate
              synthetase which activate latent endonuclease (RNAaseL) involved
              in degrading viral RNA.
            </p>
            <h6>
              <li className="py-2">
                <u>Complement</u>
              </li>
            </h6>
            <p className="py-2">
              The term complement was coined by Paul Ehrlich defining it as ‘the
              activity of blood serum that competes the action of antibody ‘.
              the complement system consists of more than 30 heat liable,
              soluble, and cell-bound proteins and glycoproteins. These are
              synthesised mainly by liver hepatocytes and by blood monocytes,
              tissue macrophages and epithelial cells of gastrointestinal and
              genitourinary tract which constitute 5% of serum globulin
              fraction. Most of them circulate in serum in inactive forms as
              proenzymes and become activated by proteolytic cleavage which
              removes an inhibitory fragment and expose the active site. The
              complement system act in a enzyme cascades, where each step
              generates enzymes which act in the following step of cascade and
              thus carry out number of basic functions including
            </p>
            <li>lysis of cell, bacyeria, and viruses.</li>
            <li>
              Opsonization, which promotes phagocytosis immune of particulate
              antigen.
            </li>
            <li>
              Binding to specific receptors on cells of immune system,
              triggering specific cell functions, inflammations, and secretions
              of immunoregulatory molecules.
            </li>
            <li>
              Immune clearance which removes immune complexes from the
              circulation and deposits them in spleen and liver.
            </li>
            <p>
              The complement proteins are designated as C1 to C9 in addition to
              factor B ,factor J, factor H, factor I, S protein, properdin, C1
              INH complex etc.
            </p>
            <p className="py-2">
              <u>Classical Pathway</u> :- It begins with the formation of
              soluble antigen-antibody complexes or with the binding of antibody
              to antigen on a suitable target, i.e ., it is activated by
              antibody bound to antigen. IgM and some subclasses of IgG can
              effectively activate this pathway. The initial stage of activation
              involves C1, C2, C3 and C4 proteins.
            </p>
            <p className="py-2">
              <u>The Lectin Pathway</u> Lectins are proteins that recognize and
              bind to specific carbohydrate of the target. This pathway does not
              depend on the antibody for its activation. It is activated by the
              binding of mannose-binding lectin (MBL) to the mannose residues on
              glycoproteins on the surface of microorganisms. This pathway
              requires C4 and C2.
            </p>
            <p className="py-2">
              <u>The Alternative Pathway</u> This pathway is activated by
              various cell surface constituents of microorganisms that are
              foreign to the host without the need of antibody molecule. This
              pathway mainly required C3, factor B, factor D and properdin.
            </p>
            <p className="py-2">
              All the three pathways generate enzymes which cleave C3 into two
              fragments C3a and C3b. This is the central step in the process of
              complement activation.
            </p>
            <p className="py-2">
              <>
                <b>The principle functions of the complement system are :-</b>
              </>
            </p>
            <p>
              <u>Opsonization and Cell Activation </u> It involves complement
              components coating the surface of target such as a bacterium.
              Phagocytic cells carrying receptors for these complement
              components are then able to bind to the bacteria, which triggers
              phagocytosis and cell activation.
            </p>
            <p className="py-2">
              <u>Chemotaxis</u> Polymorphs and macrophages have specific
              receptors for small component fragments that are generated during
              complement activation such as C3a, C4a and C5a. These are known as
              anaphylotoxins. These fragments diffuse away from the site of
              activation and bind to the receptors on mast cells and blood
              basophils and induce degranulation with the release of histamine
              and other pharmacologically active mediators, which stimulate
              chemotaxis.
            </p>
            <p className="py-2">
              <u>Lysis of Target Cell</u> The final step in complement
              activation causes the assembly of a membrane attack complex (MAC)
              which involves the sequential interaction of C5b, C6, C7, C8 and
              C9 complement proteins. This complex get inserted into lipid
              bilayer or target cell and forms a large channel through it,
              enabling the ions and Small molecules to diffuse freely across the
              membrane and thus, results in osmotic lysis of the target cell
              like Gram negative bacteria, parasites, Viruses, Erythrocytes, and
              nucleated cells
            </p>
            <img
              src="complementory_pathway.jpg"
              alt="complementory_pathway.jpg"
              className="cp"
            />
            <h4 className="py-2" id="phbr">
              Phagocytic Barriers
            </h4>
            <p className="py-2">
              Another important innate defence mechanism is the ingestion of
              extracellular particulate material by phagocytosis. The
              phagocytosis (Greek, phagein-to eat, cyte-cell and osis-a process)
              is one type of endocytosis which means the uptake of material by a
              cell from the environment. The phagocytosis is carried out by the
              number of phagocytic cell present in the body such as monocytes,
              tissue macrophages, dendritic cells and neutrophils. The mechanism
              of phagocytosis includes -Recognition, Ingestion and Digestion and
              release of debris. Recognition phagocytic cells use two basic
              mechanisms for the recognition of microorganisms-Opsonin-dependent
              (opsonic) and opsonin independent recognition (nonopsonic). The
              phagocytic process can be greatly enhanced by opsonization.
              Opsonization is a process in which microbes are coated by serum
              components like antibodies, complement, mannose binding proteins
              etc and thereby preparing them for recognition and ingestion by
              phagocytic cells.
            </p>
            <p className="py-2">
              In opsonin-dependent recognition mechanism serum components
              opsonize the microorganisms and act as a bridge between
              microorganisms and the phagocyte. They act by binding to the
              surface of the microbe at one end and to specific receptor on the
              phagocyte surface at another end.
            </p>
            <p className="py-2">
              The opsonin-independent mechanism uses other specific and
              non-specific receptors on phagocytic cells that recognize
              structures expressed on the surface of different microbes. The
              different form of recognition is as follows:
            </p>
            <p className="py-2">
              The one mode is termed as lectin phagocytosis which is based on
              the recognition between surface lectins on one cell and surface
              carbohydrate receptor on another cell.
            </p>
            <p className="py-2">
              The second mode is the result of protein-protein interaction
              between Arg-Gly-Asp peptide sequence of microorganism and
              phagocytic cell receptors.
            </p>
            <p className="py-2">
              The third mode is hydrophobic interaction between bacteria and
              phagocytic cell.
            </p>
            <p className="py-2">
              Ingestion After recognition, the whole pathogenic microorganism
              ingested. By ingesting microbial pathogens, Phagocytic leukocytes
              accomplish two essential functions-firstly, they initiate a
              microbial death pathway, by routing the
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
