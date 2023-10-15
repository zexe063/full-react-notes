import { useDebugValue } from "react"
import { createPortal } from "react-dom";



function Dummy(){

    return(
<>
  <div className="wrap wrap-fluid">
    <div id="top-navbar" className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand clearfix" href="https://nicepage.com">
            <img
              className="pull-left"
              width={123}
              height={40}
              alt="Nicepage.com"
              src="//csite.nicepage.com/Images/logo-w.png"
            />
          </a>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <div className="navbar-collapse collapse">
          <ul
            className="logon-block nav navbar-nav nav-list navbar-left u-unstyled"
            style={{ fontSize: 14 }}
          >
            <li className="dropdown">
              <a href="/download">Download</a>
            </li>
            <li className="dropdown">
              <a href="/features">400+ Features</a>
            </li>
            <li className="dropdown">
              <a
                aria-expanded="false"
                role="button"
                data-toggle="dropdown"
                className="dropdown-toggle template-menu-item"
                href="/html-templates"
              >
                10,000+ Templates
                <span className="caret" />
              </a>
              <ul
                role="menu"
                className="dropdown-menu dropdown-menu-hover u-unstyled"
              >
                <li>
                  <a
                    href="/website-templates"
                    className="templates-url"
                    data-urls="website-templates;templates"
                  >
                    Website Templates
                  </a>
                </li>
                <li>
                  <a href="/website-design" className="templates-url">
                    Website Designs
                  </a>
                </li>
                <li>
                  <a href="/wordpress-themes">WordPress Themes</a>
                </li>
                <li>
                  <a href="/joomla-templates">Joomla Templates</a>
                </li>
                <li>
                  <a
                    href="/html-templates"
                    className="templates-url"
                    data-urls="html-templates;html5-template;css-templates"
                  >
                    HTML Templates
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a
                aria-expanded="false"
                role="button"
                data-toggle="dropdown"
                className="dropdown-toggle"
                href="#"
              >
                Website Builders
                <span className="caret" />
              </a>
              <ul
                role="menu"
                className="dropdown-menu dropdown-menu-hover u-unstyled"
              >
                <li>
                  <a className="builder-link" href="/html-website-builder">
                    HTML Website Builder
                  </a>
                </li>
                <li>
                  <a className="builder-link" href="/wordpress-website-builder">
                    WordPress Website Builder
                  </a>
                </li>
                <li>
                  <a className="builder-link" href="/joomla-page-builder">
                    Joomla Page Builder
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="/premium">Premium</a>
            </li>
            <li>
              <a href="/forum">Forums</a>
            </li>
            <li className="dropdown">
              <a href="/blog">Blog</a>
            </li>
            <li className="dropdown">
              <a
                aria-expanded="false"
                role="button"
                data-toggle="dropdown"
                className="dropdown-toggle"
                href="#"
              >
                Help
                <span className="caret" />
              </a>
              <ul
                role="menu"
                className="dropdown-menu dropdown-menu-hover u-unstyled"
              >
                <li>
                  <a href="/doc">Documentation</a>
                </li>
                {/*li><a href="/live-demo">Schedule A Personal Demo</a></li*/}
                <li>
                  <a href="/Forum/Topic/Create">Contact Support</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="logon-block nav navbar-nav nav-list navbar-right u-unstyled">
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                EN <span className="caret" />
              </a>
              <ul className="dropdown-menu u-unstyled" role="menu">
                <li>
                  <a href="/html-templates">EN</a>
                </li>
                <li>
                  <a href="/de/html-vorlagen">DE</a>
                </li>
                <li>
                  <a href="/nl/html-sjablonen">NL</a>
                </li>
                <li>
                  <a href="/fr/modeles-html">FR</a>
                </li>
                <li>
                  <a href="/it/modelli-html">IT</a>
                </li>
                <li>
                  <a href="/es/plantillas-html">ES</a>
                </li>
                <li>
                  <a href="/pl/szablony-html">PL</a>
                </li>
                <li>
                  <a href="/pt/modelos-html">PT</a>
                </li>
                <li>
                  <a href="/tr/html-sablonlari">TR</a>
                </li>
                <li>
                  <a href="/ru/html-shablony">RU</a>
                </li>
                <li>
                  <a href="/hu/html-sablonok">HU</a>
                </li>
                <li>
                  <a href="/cs/html-sablony">CS</a>
                </li>
                <li>
                  <a href="/sv/html-mallar">SV</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/Editor/Account/LogOn">Sign In</a>
            </li>
            <li className="divider-vertical" />
            <li>
              <a href="https://nicepage.com/Editor/Account/Register">
                Register
              </a>
            </li>
            <li className="divider-vertical" />
          </ul>
        </div>
      </div>
    </div>
    <section id="main" className="container-fluid">
      <div className="pages-content">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-container">
              <div className="heading-block ">
                <h1 className="">10,000+ Free HTML Templates</h1>
                <form
                  action="/html-templates"
                  id="search-form"
                  method="get"
                  noValidate="novalidate"
                >
                  <input type="hidden" name="term" id="term" />
                  <input
                    aria-label="Enter Search Keywords"
                    className="form-control search-input"
                    id="key"
                    name="key"
                    placeholder="Enter Keywords"
                    type="text"
                    defaultValue=""
                  />
                  <input
                    type="submit"
                    defaultValue=""
                    className="btn search-btn"
                    onclick="return submitSearchForm(event)"
                  />
                </form>
                <div className="heading-description ">
                  Best HTML Template Free Download. HTML Website Templates,
                  Basic and Simple HTML Templates. Responsive and fully
                  customizable with easy Drag-n-Drop HTML Website Builder
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="templates-block">
              <h2 className="">
                <a href="/html-templates?pages=True">
                  HTML Template Categories
                </a>
              </h2>
              <div className="thumbnail-slider">
                <div className="thumbnail-slider-viewport-wrapper">
                  <div className="thumbnail-slider-viewport">
                    <div className="thumbnail-slider-list">
                      <a
                        href="/c/art-design-html-templates"
                        data-title="Art & Design"
                      >
                        <span style={{ width: 150, height: 275 }}>
                          <img
                            alt="Art & Design HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/23/07/html-template-23071.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/technology-html-templates"
                        data-title="Technology"
                      >
                        <span style={{ width: 150, height: 275 }}>
                          <img
                            alt="Technology HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/23/33/html-template-23330.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/food-restaurant-html-templates"
                        data-title="Food & Restaurant"
                      >
                        <span style={{ width: 150, height: 275 }}>
                          <img
                            alt="Food & Restaurant HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/24/98/html-template-24984.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/architecture-building-html-templates"
                        data-title="Architecture & Building"
                      >
                        <span style={{ width: 150, height: 275 }}>
                          <img
                            alt="Architecture & Building HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/48/82/html-template-48825.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/business-law-html-templates"
                        data-title="Business & Law"
                      >
                        <span style={{ width: 150, height: 275 }}>
                          <img
                            alt="Business & Law HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/96/73/html-template-96735.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/education-html-templates"
                        data-title="Education"
                      >
                        <span style={{ width: 150, height: 275 }}>
                          <img
                            alt="Education HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/16/88/html-template-16882.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/fashion-beauty-html-templates"
                        data-title="Fashion & Beauty"
                      >
                        <span style={{ width: 150, height: 275 }}>
                          <img
                            alt="Fashion & Beauty HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/25/12/html-template-25122.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/interior-html-templates"
                        data-title="Interior"
                      >
                        <span style={{ width: 150, height: 275 }}>
                          <img
                            alt="Interior HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/25/34/html-template-25343.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/cars-transportation-html-templates"
                        data-title="Cars & Transportation"
                      >
                        <span style={{ width: 150, height: 272 }}>
                          <img
                            alt="Cars & Transportation HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/19/50/html-template-19500.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/industrial-html-templates"
                        data-title="Industrial"
                      >
                        <span style={{ width: 150, height: 275 }}>
                          <img
                            alt="Industrial HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/60/52/html-template-60525.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/music-entertainment-html-templates"
                        data-title="Music & Entertainment"
                      >
                        <span style={{ width: 150, height: 272 }}>
                          <img
                            alt="Music & Entertainment HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/14/66/html-template-14662.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/travel-hotels-html-templates"
                        data-title="Travel & Hotels"
                      >
                        <span style={{ width: 150, height: 275 }}>
                          <img
                            alt="Travel & Hotels HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/28/88/html-template-28885.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a href="/c/sports-html-templates" data-title="Sports">
                        <span style={{ width: 150, height: 275 }}>
                          <img
                            alt="Sports HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/60/21/html-template-60211.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a href="/c/sale-html-templates" data-title="Sale">
                        <span style={{ width: 150, height: 275 }}>
                          <img
                            alt="Sale HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/83/73/html-template-83730.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/medicine-science-html-templates"
                        data-title="Medicine & Science"
                      >
                        <span style={{ width: 150, height: 275 }}>
                          <img
                            alt="Medicine & Science HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/16/75/html-template-16755.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/real-estate-html-templates"
                        data-title="Real Estate"
                      >
                        <span style={{ width: 150, height: 274 }}>
                          <img
                            alt="Real Estate HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/34/93/html-template-34934.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a href="/c/wedding-html-templates" data-title="Wedding">
                        <span style={{ width: 150, height: 275 }}>
                          <img
                            alt="Wedding HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/32/36/html-template-32364.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a href="/c/nature-html-templates" data-title="Nature">
                        <span style={{ width: 150, height: 275 }}>
                          <img
                            alt="Nature HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/80/96/html-template-80962.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/pets-animals-html-templates"
                        data-title="Pets & Animals"
                      >
                        <span style={{ width: 150, height: 239 }}>
                          <img
                            alt="Pets & Animals HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/14/60/html-template-14604.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/portfolio-html-templates"
                        data-title="Portfolio"
                      >
                        <span style={{ width: 150, height: 275 }}>
                          <img
                            alt="Portfolio HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/26/18/html-template-261875.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  className="thumbnail-slider-control left off"
                  href="#"
                  rel="noopener"
                  aria-label="thumbnail slider show more"
                >
                  <span className="thumbnail-slider-control-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M9.53 11.71L5.99 8.18a.25.25 0 0 1 0-.36L9.53 4.3a.75.75 0 1 0-1.06-1.06L4.93 6.76c-.68.69-.68 1.8 0 2.48l3.54 3.53a.75.75 0 0 0 1.06-1.06z"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  className="thumbnail-slider-control right"
                  href="#"
                  rel="noopener"
                  aria-label="thumbnail slider show more"
                >
                  <span className="thumbnail-slider-control-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M6.47 4.29l3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="templates-block block-slider">
              <h2 className="">
                <a href="/html-templates?blocks=True">HTML Block Categories</a>
              </h2>
              <div className="thumbnail-slider">
                <div className="thumbnail-slider-viewport-wrapper">
                  <div className="thumbnail-slider-viewport">
                    <div className="thumbnail-slider-list">
                      <a
                        href="/c/art-design-html-templates"
                        data-title="Art & Design"
                      >
                        <span style={{ width: 262, height: 173 }}>
                          <img
                            alt="Art & Design HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/10/12/html-template-101288.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/technology-html-templates"
                        data-title="Technology"
                      >
                        <span style={{ width: 262, height: 158 }}>
                          <img
                            alt="Technology HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/46/70/html-template-46707.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/food-restaurant-html-templates"
                        data-title="Food & Restaurant"
                      >
                        <span style={{ width: 262, height: 139 }}>
                          <img
                            alt="Food & Restaurant HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/81/37/html-template-81379.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/architecture-building-html-templates"
                        data-title="Architecture & Building"
                      >
                        <span style={{ width: 262, height: 149 }}>
                          <img
                            alt="Architecture & Building HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/80/01/html-template-80018.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/business-law-html-templates"
                        data-title="Business & Law"
                      >
                        <span style={{ width: 262, height: 162 }}>
                          <img
                            alt="Business & Law HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/97/38/html-template-97385.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/education-html-templates"
                        data-title="Education"
                      >
                        <span style={{ width: 262, height: 148 }}>
                          <img
                            alt="Education HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/74/01/html-template-74015.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/fashion-beauty-html-templates"
                        data-title="Fashion & Beauty"
                      >
                        <span style={{ width: 262, height: 157 }}>
                          <img
                            alt="Fashion & Beauty HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/73/38/html-template-73389.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/interior-html-templates"
                        data-title="Interior"
                      >
                        <span style={{ width: 262, height: 190 }}>
                          <img
                            alt="Interior HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/42/24/html-template-42240.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/cars-transportation-html-templates"
                        data-title="Cars & Transportation"
                      >
                        <span style={{ width: 262, height: 133 }}>
                          <img
                            alt="Cars & Transportation HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/68/23/html-template-68236.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/industrial-html-templates"
                        data-title="Industrial"
                      >
                        <span style={{ width: 262, height: 160 }}>
                          <img
                            alt="Industrial HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/56/10/html-template-56106.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/music-entertainment-html-templates"
                        data-title="Music & Entertainment"
                      >
                        <span style={{ width: 262, height: 158 }}>
                          <img
                            alt="Music & Entertainment HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/11/24/html-template-112435.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/travel-hotels-html-templates"
                        data-title="Travel & Hotels"
                      >
                        <span style={{ width: 262, height: 192 }}>
                          <img
                            alt="Travel & Hotels HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/27/39/html-template-273933.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a href="/c/sports-html-templates" data-title="Sports">
                        <span style={{ width: 262, height: 145 }}>
                          <img
                            alt="Sports HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/94/77/html-template-94777.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a href="/c/sale-html-templates" data-title="Sale">
                        <span style={{ width: 262, height: 132 }}>
                          <img
                            alt="Sale HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/53/00/html-template-53001.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/medicine-science-html-templates"
                        data-title="Medicine & Science"
                      >
                        <span style={{ width: 262, height: 144 }}>
                          <img
                            alt="Medicine & Science HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/71/42/html-template-71427.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/real-estate-html-templates"
                        data-title="Real Estate"
                      >
                        <span style={{ width: 262, height: 150 }}>
                          <img
                            alt="Real Estate HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/54/46/html-template-54464.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a href="/c/wedding-html-templates" data-title="Wedding">
                        <span style={{ width: 262, height: 131 }}>
                          <img
                            alt="Wedding HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/41/12/html-template-41120.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a href="/c/nature-html-templates" data-title="Nature">
                        <span style={{ width: 262, height: 151 }}>
                          <img
                            alt="Nature HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/66/95/html-template-66951.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/pets-animals-html-templates"
                        data-title="Pets & Animals"
                      >
                        <span style={{ width: 262, height: 144 }}>
                          <img
                            alt="Pets & Animals HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/72/64/html-template-72643.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                      <a
                        href="/c/portfolio-html-templates"
                        data-title="Portfolio"
                      >
                        <span style={{ width: 172, height: 180 }}>
                          <img
                            alt="Portfolio HTML Templates"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            data-src="https://images01.nicepagecdn.com/page/26/21/html-template-262120.jpg"
                            className="lazyload"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  className="thumbnail-slider-control left off"
                  href="#"
                  rel="noopener"
                  aria-label="thumbnail slider show more"
                >
                  <span className="thumbnail-slider-control-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M9.53 11.71L5.99 8.18a.25.25 0 0 1 0-.36L9.53 4.3a.75.75 0 1 0-1.06-1.06L4.93 6.76c-.68.69-.68 1.8 0 2.48l3.54 3.53a.75.75 0 0 0 1.06-1.06z"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  className="thumbnail-slider-control right"
                  href="#"
                  rel="noopener"
                  aria-label="thumbnail slider show more"
                >
                  <span className="thumbnail-slider-control-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M6.47 4.29l3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="block-styles-container gray-block">
              <div className="templates-block block-styles">
                <h2 className="">
                  <a href="/html-templates?blocks=True">HTML Block Designs</a>
                </h2>
                <a
                  href="/c/text-on-image-html-templates"
                  data-title="Text On Image"
                  style={{}}
                >
                  <span style={{ width: 262, height: 147 }}>
                    <img
                      alt="Text On Image HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/68/44/html-template-68449.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/features-html-templates"
                  data-title="Features"
                  style={{}}
                >
                  <span style={{ width: 262, height: 186 }}>
                    <img
                      alt="Features HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/71/13/html-template-71130.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/contacts-html-templates"
                  data-title="Contacts"
                  style={{}}
                >
                  <span style={{ width: 262, height: 153 }}>
                    <img
                      alt="Contacts HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/98/82/html-template-98828.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/about-us-html-templates"
                  data-title="About Us"
                  style={{}}
                >
                  <span style={{ width: 262, height: 150 }}>
                    <img
                      alt="About Us HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/11/06/html-template-110615.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/full-width-slider-html-templates"
                  data-title="Full Width Slider"
                  style={{}}
                >
                  <span style={{ width: 262, height: 201 }}>
                    <img
                      alt="Full Width Slider HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/79/31/html-template-79311.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/shapes-html-templates"
                  data-title="Shapes"
                  style={{}}
                >
                  <span style={{ width: 262, height: 171 }}>
                    <img
                      alt="Shapes HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/72/04/html-template-72045.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a href="/c/wide-html-templates" data-title="Wide" style={{}}>
                  <span style={{ width: 262, height: 135 }}>
                    <img
                      alt="Wide HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/76/59/html-template-76596.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/over-grid-html-templates"
                  data-title="Over Grid"
                  style={{}}
                >
                  <span style={{ width: 262, height: 146 }}>
                    <img
                      alt="Over Grid HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/59/41/html-template-59419.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a href="/c/group-html-templates" data-title="Group" style={{}}>
                  <span style={{ width: 262, height: 164 }}>
                    <img
                      alt="Group HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/10/21/html-template-102105.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a href="/c/split-html-templates" data-title="Split" style={{}}>
                  <span style={{ width: 262, height: 142 }}>
                    <img
                      alt="Split HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/98/06/html-template-98067.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a href="/c/tiles-html-templates" data-title="Tiles" style={{}}>
                  <span style={{ width: 262, height: 203 }}>
                    <img
                      alt="Tiles HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/72/86/html-template-72867.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/layered-images-html-templates"
                  data-title="Layered Images"
                  style={{}}
                >
                  <span style={{ width: 262, height: 179 }}>
                    <img
                      alt="Layered Images HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/43/93/html-template-43931.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/gallery-html-templates"
                  data-title="Gallery"
                  style={{}}
                >
                  <span style={{ width: 262, height: 184 }}>
                    <img
                      alt="Gallery HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/79/25/html-template-79253.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a href="/c/grid-html-templates" data-title="Grid" style={{}}>
                  <span style={{ width: 262, height: 230 }}>
                    <img
                      alt="Grid HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/11/06/html-template-110617.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/overlap-block-html-templates"
                  data-title="Overlap Block"
                  style={{}}
                >
                  <span style={{ width: 262, height: 182 }}>
                    <img
                      alt="Overlap Block HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/57/47/html-template-57476.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/slider-html-templates"
                  data-title="Slider"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 148 }}>
                    <img
                      alt="Slider HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/96/54/html-template-96542.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/thirds-html-templates"
                  data-title="Thirds"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 141 }}>
                    <img
                      alt="Thirds HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/73/37/html-template-73379.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/grid-repeater-html-templates"
                  data-title="Grid Repeater"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 145 }}>
                    <img
                      alt="Grid Repeater HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/92/29/html-template-92290.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/modal-popup-html-templates"
                  data-title="Modal Popup"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 205 }}>
                    <img
                      alt="Modal Popup HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/12/37/html-template-123744.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/blog-posts-html-templates"
                  data-title="Blog Posts"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 184 }}>
                    <img
                      alt="Blog Posts HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/87/50/html-template-87500.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/product-details-html-templates"
                  data-title="Product Details"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 167 }}>
                    <img
                      alt="Product Details HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/11/51/html-template-115148.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/product-list-html-templates"
                  data-title="Product List"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 148 }}>
                    <img
                      alt="Product List HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/89/24/html-template-89243.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/video-html-templates"
                  data-title="Video"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 124 }}>
                    <img
                      alt="Video HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/57/18/html-template-57185.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/brands-html-templates"
                  data-title="Brands"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 120 }}>
                    <img
                      alt="Brands HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/83/93/html-template-83936.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/testimonials-html-templates"
                  data-title="Testimonials"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 108 }}>
                    <img
                      alt="Testimonials HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/66/41/html-template-66411.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/contact-form-html-templates"
                  data-title="Contact Form"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 121 }}>
                    <img
                      alt="Contact Form HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/91/51/html-template-91513.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/counter-html-templates"
                  data-title="Counter"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 104 }}>
                    <img
                      alt="Counter HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/42/21/html-template-42212.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/text-html-templates"
                  data-title="Text"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 124 }}>
                    <img
                      alt="Text HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/50/01/html-template-50010.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/text-button-html-templates"
                  data-title="Text & Button"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 139 }}>
                    <img
                      alt="Text & Button HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/25/09/html-template-250994.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/team-html-templates"
                  data-title="Team"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 140 }}>
                    <img
                      alt="Team HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/80/00/html-template-80008.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/table-html-templates"
                  data-title="Table"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 127 }}>
                    <img
                      alt="Table HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/85/76/html-template-85766.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/pricing-html-templates"
                  data-title="Pricing"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 120 }}>
                    <img
                      alt="Pricing HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/42/40/html-template-42402.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/tabs-html-templates"
                  data-title="Tabs"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 116 }}>
                    <img
                      alt="Tabs HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/92/92/html-template-92926.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/faq-html-templates"
                  data-title="FAQ"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 153 }}>
                    <img
                      alt="FAQ HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/26/57/html-template-265764.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/accordion-html-templates"
                  data-title="Accordion"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 140 }}>
                    <img
                      alt="Accordion HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/23/06/html-template-230602.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
                <a
                  href="/c/social-html-templates"
                  data-title="Social"
                  style={{ display: "none" }}
                >
                  <span style={{ width: 262, height: 149 }}>
                    <img
                      alt="Social HTML Templates"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      data-src="https://images01.nicepagecdn.com/page/83/06/html-template-83062.jpg"
                      className="lazyload"
                    />
                  </span>
                </a>
              </div>
              <a
                href="#"
                className="block-styles-all"
                rel="noopener"
                aria-label="thumbnail slider show more"
              >
                <span className="thumbnail-slider-control-btn">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    enableBackground="new 0 0 16 16"
                    xmlSpace="preserve"
                  >
                    <path d="M3.2,6.3c-0.3,0.3-0.3,0.8,0,1.2l3.5,4c0.7,0.8,1.8,0.8,2.5,0l3.5-4c0,0,0,0,0,0c0.3-0.3,0.3-0.9,0-1.2 c-0.3-0.3-0.8-0.3-1.1,0l-3.5,4c-0.1,0.1-0.3,0.1-0.4,0l-3.5-4C4,6,3.5,6,3.2,6.3z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="templates-block">
              <h2 className="">
                <a href="/html-templates?pages=False">
                  Best HTML Website Templates
                </a>
              </h2>
              <time
                itemProp="dateModified"
                content="2023-07-31"
                className="last-updated-block"
              >
                Last Updated: Jul 31, 2023
              </time>
              <div className="thumbnails-grid">
                <ul className="thumbnails thumbnails-loading list-unstyled">
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 365 }}
                    data-like={467}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5413529/designer-contacts-html-template"
                        style={{ width: 260, height: 315 }}
                        title="Designer Contacts Html Website"
                      >
                        <img
                          alt="Designer Contacts Html Website"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/13/html-template-5413529.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/54/13/html-template-full-5413529.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5413529/designer-contacts-html-template"
                        title="Designer Contacts Html Website"
                      >
                        Designer Contacts Html Website
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 393 }}
                    data-like={37}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5502134/we-craft-compelling-narratives-html-template"
                        style={{ width: 260, height: 343 }}
                        title="We Craft Compelling Narratives Clothing Store"
                      >
                        <img
                          alt="We Craft Compelling Narratives Clothing Store"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/55/02/html-template-5502134.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/55/02/html-template-full-5502134.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5502134/we-craft-compelling-narratives-html-template"
                        title="We Craft Compelling Narratives Clothing Store"
                      >
                        We Craft Compelling Narratives Clothing Store
                      </a>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 693 }}
                    data-like={26}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5476970/the-go-to-security-automation-tool-html-template"
                        style={{ width: 260, height: 643 }}
                        title="The Go-To Security Automation Tool Bootstrap 4"
                      >
                        <img
                          alt="The Go-To Security Automation Tool Bootstrap 4"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/76/html-template-5476970.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/54/76/html-template-full-5476970.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5476970/the-go-to-security-automation-tool-html-template"
                        title="The Go-To Security Automation Tool Bootstrap 4"
                      >
                        The Go-To Security Automation Tool Bootstrap 4
                      </a>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 208 }}
                    data-like={364}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5404234/top-agents-html-template"
                        style={{ width: 260, height: 158 }}
                        title="Top Agents Color Schemes"
                      >
                        <img
                          alt="Top Agents Color Schemes"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/04/html-template-5404234.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5404234/top-agents-html-template"
                        title="Top Agents Color Schemes"
                      >
                        Top Agents Color Schemes
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 819 }}
                    data-like={185}
                    data-set={13}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5389188/making-travel-easier-and-wonderful-html-template"
                        style={{ width: 260, height: 769 }}
                        title="Making Travel Easier And Wonderful Store Template"
                      >
                        <img
                          alt="Making Travel Easier And Wonderful Store Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/89/html-template-5389188.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/53/89/html-template-full-5389188.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5389188/making-travel-easier-and-wonderful-html-template"
                        title="Making Travel Easier And Wonderful Store Template"
                      >
                        Making Travel Easier And Wonderful Store Template
                      </a>
                    </div>
                    <div className="page-date">Jul 28, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 223 }}
                    data-like={239}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5404246/safety-is-valued-html-template"
                        style={{ width: 260, height: 173 }}
                        title="Safety Is Valued Web Page"
                      >
                        <img
                          alt="Safety Is Valued Web Page"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/04/html-template-5404246.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5404246/safety-is-valued-html-template"
                        title="Safety Is Valued Web Page"
                      >
                        Safety Is Valued Web Page
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 712 }}
                    data-like={6}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5500952/promises-made-promises-kept-html-template"
                        style={{ width: 260, height: 662 }}
                        title="Promises Made, Promises Kept Template Download"
                      >
                        <img
                          alt="Promises Made, Promises Kept Template Download"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/55/00/html-template-5500952.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/55/00/html-template-full-5500952.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5500952/promises-made-promises-kept-html-template"
                        title="Promises Made, Promises Kept Template Download"
                      >
                        Promises Made, Promises Kept Template Download
                      </a>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 636 }}
                    data-like={169}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5413184/about-web-designer-html-template"
                        style={{ width: 260, height: 586 }}
                        title="About Web Designer Online Blog"
                      >
                        <img
                          alt="About Web Designer Online Blog"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/13/html-template-5413184.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/54/13/html-template-full-5413184.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5413184/about-web-designer-html-template"
                        title="About Web Designer Online Blog"
                      >
                        About Web Designer Online Blog
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 800 }}
                    data-like={1}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5501448/laser-focused-html-template"
                        style={{ width: 260, height: 750 }}
                        title="Laser-Focused Social Media"
                      >
                        <img
                          alt="Laser-Focused Social Media"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/55/01/html-template-5501448.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/55/01/html-template-full-5501448.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5501448/laser-focused-html-template"
                        title="Laser-Focused Social Media"
                      >
                        Laser-Focused Social Media
                      </a>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 437 }}
                    data-like={4}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5502552/powerful-automation-html-template"
                        style={{ width: 260, height: 387 }}
                        title="Powerful Automation Site Template"
                      >
                        <img
                          alt="Powerful Automation Site Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/55/02/html-template-5502552.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/55/02/html-template-full-5502552.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <h3>
                        <a
                          href="/ht/5502552/powerful-automation-html-template"
                          title="Powerful Automation Site Template"
                        >
                          Powerful Automation Site Template
                        </a>
                      </h3>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 420 }}
                  >
                    <div
                      className="download-block "
                      style={{ backgroundColor: "#363636" }}
                    >
                      <img
                        className="lazyload"
                        data-src="//images01.nicepage.com/thumbs/a122014e1e8cdf24af08f98c/8739790df40451e683e5a152/templates-small-animation-dark_150.gif"
                        alt="10 000+ Website Templates"
                      />
                      <div
                        style={{ color: "#ffffff" }}
                        className="download-title"
                      >
                        10 000+ Website Templates
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#cd30c0" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 196 }}
                    data-like={22}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5469446/better-together-html-template"
                        style={{ width: 260, height: 146 }}
                        title="Better Together Page Portfolio"
                      >
                        <img
                          alt="Better Together Page Portfolio"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/69/html-template-5469446.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5469446/better-together-html-template"
                        title="Better Together Page Portfolio"
                      >
                        Better Together Page Portfolio
                      </a>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 909 }}
                    data-like={142}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5413317/designer-portfolio-html-template"
                        style={{ width: 260, height: 859 }}
                        title="Designer Portfolio Modern Web"
                      >
                        <img
                          alt="Designer Portfolio Modern Web"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/13/html-template-5413317.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/54/13/html-template-full-5413317.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5413317/designer-portfolio-html-template"
                        title="Designer Portfolio Modern Web"
                      >
                        Designer Portfolio Modern Web
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 205 }}
                    data-like={83}
                    data-set={13}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5389153/wildlife-tours-and-nature-trips-html-template"
                        style={{ width: 260, height: 155 }}
                        title="Wildlife Tours And Nature Trips Page Template"
                      >
                        <img
                          alt="Wildlife Tours And Nature Trips Page Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/89/html-template-5389153.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5389153/wildlife-tours-and-nature-trips-html-template"
                        title="Wildlife Tours And Nature Trips Page Template"
                      >
                        Wildlife Tours And Nature Trips Page Template
                      </a>
                    </div>
                    <div className="page-date">Jul 28, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 643 }}
                    data-like={6}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5469113/deliver-smart-outcomes-html-template"
                        style={{ width: 260, height: 593 }}
                        title="Deliver Smart Outcomes Last Updated"
                      >
                        <img
                          alt="Deliver Smart Outcomes Last Updated"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/69/html-template-5469113.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/54/69/html-template-full-5469113.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5469113/deliver-smart-outcomes-html-template"
                        title="Deliver Smart Outcomes Last Updated"
                      >
                        Deliver Smart Outcomes Last Updated
                      </a>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 840 }}
                    data-like={78}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5468289/our-ecosystem-of-partners-html-template"
                        style={{ width: 260, height: 790 }}
                        title="Our Ecosystem Of Partners Html Landing"
                      >
                        <img
                          alt="Our Ecosystem Of Partners Html Landing"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/68/html-template-5468289.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/54/68/html-template-full-5468289.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5468289/our-ecosystem-of-partners-html-template"
                        title="Our Ecosystem Of Partners Html Landing"
                      >
                        Our Ecosystem Of Partners Html Landing
                      </a>
                    </div>
                    <div className="page-date">Jul 26, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 194 }}
                    data-like={146}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5404223/agents-will-help-you-find-html-template"
                        style={{ width: 260, height: 144 }}
                        title="Agents Will Help You Find Store Template"
                      >
                        <img
                          alt="Agents Will Help You Find Store Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/04/html-template-5404223.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5404223/agents-will-help-you-find-html-template"
                        title="Agents Will Help You Find Store Template"
                      >
                        Agents Will Help You Find Store Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 220 }}
                    data-like={8}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5488253/design-innovation-and-strategy-html-template"
                        style={{ width: 260, height: 170 }}
                        title="Design Innovation And Strategy Html Landing Page"
                      >
                        <img
                          alt="Design Innovation And Strategy Html Landing Page"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/88/html-template-5488253.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5488253/design-innovation-and-strategy-html-template"
                        title="Design Innovation And Strategy Html Landing Page"
                      >
                        Design Innovation And Strategy Html Landing Page
                      </a>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 301 }}
                    data-like={36}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5488400/we-are-researchers-and-innovators-html-template"
                        style={{ width: 260, height: 251 }}
                        title="We Are Researchers And Innovators Template Demo"
                      >
                        <img
                          alt="We Are Researchers And Innovators Template Demo"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/88/html-template-5488400.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5488400/we-are-researchers-and-innovators-html-template"
                        title="We Are Researchers And Innovators Template Demo"
                      >
                        We Are Researchers And Innovators Template Demo
                      </a>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 314 }}
                    data-like={135}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5405727/small-demo-html-template"
                        style={{ width: 260, height: 264 }}
                        title="Small Demo Creative Agency"
                      >
                        <img
                          alt="Small Demo Creative Agency"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/05/html-template-5405727.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5405727/small-demo-html-template"
                        title="Small Demo Creative Agency"
                      >
                        Small Demo Creative Agency
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 241 }}
                    data-like={2}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5486906/we-work-with-organizations-big-and-small-html-template"
                        style={{ width: 260, height: 191 }}
                        title="We Work With Organizations Big And Small Website Builder"
                      >
                        <img
                          alt="We Work With Organizations Big And Small Website Builder"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/86/html-template-5486906.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <h3>
                        <a
                          href="/ht/5486906/we-work-with-organizations-big-and-small-html-template"
                          title="We Work With Organizations Big And Small Website Builder"
                        >
                          We Work With Organizations Big And Small Website
                          Builder
                        </a>
                      </h3>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 280 }}
                  >
                    <div
                      className="download-block white-block"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        style={{ color: "#3c3c3c" }}
                        className="download-title"
                      >
                        Customize Any Template
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#ec311e" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 184 }}
                    data-like={4}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5502094/designers-engineers-innovators-html-template"
                        style={{ width: 260, height: 134 }}
                        title="Designers, Engineers, Innovators Fully Responsive"
                      >
                        <img
                          alt="Designers, Engineers, Innovators Fully Responsive"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/55/02/html-template-5502094.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5502094/designers-engineers-innovators-html-template"
                        title="Designers, Engineers, Innovators Fully Responsive"
                      >
                        Designers, Engineers, Innovators Fully Responsive
                      </a>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 552 }}
                    data-like={64}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5420629/create-your-base-html-template"
                        style={{ width: 260, height: 502 }}
                        title="Create Your Base Ecommerce Website"
                      >
                        <img
                          alt="Create Your Base Ecommerce Website"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/20/html-template-5420629.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/54/20/html-template-full-5420629.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5420629/create-your-base-html-template"
                        title="Create Your Base Ecommerce Website"
                      >
                        Create Your Base Ecommerce Website
                      </a>
                    </div>
                    <div className="page-date">Jul 25, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 701 }}
                    data-like={278}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5371256/we-help-our-clients-achieve-great-things-html-template"
                        style={{ width: 260, height: 651 }}
                        title="We Help Our Clients Achieve Great Things Html Web Site"
                      >
                        <img
                          alt="We Help Our Clients Achieve Great Things Html Web Site"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/71/html-template-5371256.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/53/71/html-template-full-5371256.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5371256/we-help-our-clients-achieve-great-things-html-template"
                        title="We Help Our Clients Achieve Great Things Html Web Site"
                      >
                        We Help Our Clients Achieve Great Things Html Web Site
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 200 }}
                    data-like={1}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5483816/we-believe-exceptional-products-are-holistic-html-template"
                        style={{ width: 260, height: 150 }}
                        title="We Believe Exceptional Products Are Holistic Based On"
                      >
                        <img
                          alt="We Believe Exceptional Products Are Holistic Based On"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/83/html-template-5483816.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5483816/we-believe-exceptional-products-are-holistic-html-template"
                        title="We Believe Exceptional Products Are Holistic Based On"
                      >
                        We Believe Exceptional Products Are Holistic Based On
                      </a>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 177 }}
                    data-like={59}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5460660/the-compliance-you-require-html-template"
                        style={{ width: 260, height: 127 }}
                        title="The Compliance You Require HTML Template Code"
                      >
                        <img
                          alt="The Compliance You Require HTML Template Code"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/60/html-template-5460660.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5460660/the-compliance-you-require-html-template"
                        title="The Compliance You Require HTML Template Code"
                      >
                        The Compliance You Require HTML Template Code
                      </a>
                    </div>
                    <div className="page-date">Jul 25, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 721 }}
                    data-like={60}
                    data-set={13}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5380775/good-travel-agency-to-work-with-html-template"
                        style={{ width: 260, height: 671 }}
                        title="Good Travel Agency To Work With Web Templates"
                      >
                        <img
                          alt="Good Travel Agency To Work With Web Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/80/html-template-5380775.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/53/80/html-template-full-5380775.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5380775/good-travel-agency-to-work-with-html-template"
                        title="Good Travel Agency To Work With Web Templates"
                      >
                        Good Travel Agency To Work With Web Templates
                      </a>
                    </div>
                    <div className="page-date">Jul 28, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 199 }}
                    data-like={5}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5487309/we-are-a-global-product-design-company-html-template"
                        style={{ width: 260, height: 149 }}
                        title="We Are A Global Product Design Company Responsive Website"
                      >
                        <img
                          alt="We Are A Global Product Design Company Responsive Website"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/87/html-template-5487309.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5487309/we-are-a-global-product-design-company-html-template"
                        title="We Are A Global Product Design Company Responsive Website"
                      >
                        We Are A Global Product Design Company Responsive
                        Website
                      </a>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 269 }}
                    data-like={2}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5364885/innovation-is-our-compass-html-template"
                        style={{ width: 260, height: 219 }}
                        title="Innovation Is Our Compass Site Templates"
                      >
                        <img
                          alt="Innovation Is Our Compass Site Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/64/html-template-5364885.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5364885/innovation-is-our-compass-html-template"
                        title="Innovation Is Our Compass Site Templates"
                      >
                        Innovation Is Our Compass Site Templates
                      </a>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 210 }}
                    data-like={54}
                    data-set={13}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5389158/nature-wildlife-tours-in-england-html-template"
                        style={{ width: 260, height: 160 }}
                        title="Nature & Wildlife Tours In England Html Page"
                      >
                        <img
                          alt="Nature & Wildlife Tours In England Html Page"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/89/html-template-5389158.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5389158/nature-wildlife-tours-in-england-html-template"
                        title="Nature & Wildlife Tours In England Html Page"
                      >
                        Nature &amp; Wildlife Tours In England Html Page
                      </a>
                    </div>
                    <div className="page-date">Jul 28, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 823 }}
                    data-like={8}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5479417/good-design-elicits-emotions-and-should-be-felt-html-template"
                        style={{ width: 260, height: 773 }}
                        title="Good Design Elicits Emotions And Should Be Felt Templates Free"
                      >
                        <img
                          alt="Good Design Elicits Emotions And Should Be Felt Templates Free"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/79/html-template-5479417.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/54/79/html-template-full-5479417.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <h3>
                        <a
                          href="/ht/5479417/good-design-elicits-emotions-and-should-be-felt-html-template"
                          title="Good Design Elicits Emotions And Should Be Felt Templates Free"
                        >
                          Good Design Elicits Emotions And Should Be Felt
                          Templates Free
                        </a>
                      </h3>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 280 }}
                  >
                    <div
                      className="download-block "
                      style={{ backgroundColor: "#363636" }}
                    >
                      <div
                        style={{ color: "#ffffff" }}
                        className="download-title"
                      >
                        Build Website with no Coding
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#cd30c0" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 307 }}
                    data-like={3}
                    data-set={13}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5389522/small-group-tours-safaris-and-expeditions-html-template"
                        style={{ width: 260, height: 257 }}
                        title="Small-Group Tours, Safaris And Expeditions From Scratch"
                      >
                        <img
                          alt="Small-Group Tours, Safaris And Expeditions From Scratch"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/89/html-template-5389522.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5389522/small-group-tours-safaris-and-expeditions-html-template"
                        title="Small-Group Tours, Safaris And Expeditions From Scratch"
                      >
                        Small-Group Tours, Safaris And Expeditions From Scratch
                      </a>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 174 }}
                    data-like={48}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5460673/learn-the-basics-html-template"
                        style={{ width: 260, height: 124 }}
                        title="Learn The Basics Html Css"
                      >
                        <img
                          alt="Learn The Basics Html Css"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/60/html-template-5460673.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5460673/learn-the-basics-html-template"
                        title="Learn The Basics Html Css"
                      >
                        Learn The Basics Html Css
                      </a>
                    </div>
                    <div className="page-date">Jul 25, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 459 }}
                    data-like={92}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/3462408/find-on-the-map-html-template"
                        style={{ width: 260, height: 409 }}
                        title="Find On The Map Admin Templates"
                      >
                        <img
                          alt="Find On The Map Admin Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/34/62/html-template-3462408.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/34/62/html-template-full-3462408.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/3462408/find-on-the-map-html-template"
                        title="Find On The Map Admin Templates"
                      >
                        Find On The Map Admin Templates
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 237 }}
                    data-like={89}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5405753/small-gallery-html-template"
                        style={{ width: 260, height: 187 }}
                        title="Small Gallery Agency Template"
                      >
                        <img
                          alt="Small Gallery Agency Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/05/html-template-5405753.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5405753/small-gallery-html-template"
                        title="Small Gallery Agency Template"
                      >
                        Small Gallery Agency Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 230 }}
                    data-like={4}
                    data-set={13}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5389331/unique-trip-around-the-world-html-template"
                        style={{ width: 260, height: 180 }}
                        title="Unique Trip Around The World Free HTML Templates"
                      >
                        <img
                          alt="Unique Trip Around The World Free HTML Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/89/html-template-5389331.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5389331/unique-trip-around-the-world-html-template"
                        title="Unique Trip Around The World Free HTML Templates"
                      >
                        Unique Trip Around The World Free HTML Templates
                      </a>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 204 }}
                    data-like={5}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5365145/expert-consulting-services-html-template"
                        style={{ width: 260, height: 154 }}
                        title="Expert Consulting Services Website Layout"
                      >
                        <img
                          alt="Expert Consulting Services Website Layout"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/65/html-template-5365145.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5365145/expert-consulting-services-html-template"
                        title="Expert Consulting Services Website Layout"
                      >
                        Expert Consulting Services Website Layout
                      </a>
                    </div>
                    <div className="page-date">Jul 31, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 280 }}
                    data-like={644}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5368005/a-digital-experience-agency-fueled-on-talent-html-template"
                        style={{ width: 260, height: 230 }}
                        title="A Digital Experience Agency Fueled On Talent One Page"
                      >
                        <img
                          alt="A Digital Experience Agency Fueled On Talent One Page"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/68/html-template-5368005.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5368005/a-digital-experience-agency-fueled-on-talent-html-template"
                        title="A Digital Experience Agency Fueled On Talent One Page"
                      >
                        A Digital Experience Agency Fueled On Talent One Page
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 627 }}
                    data-like={1086}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5326870/reinvert-what-your-business-could-be-html-template"
                        style={{ width: 260, height: 577 }}
                        title="Reinvert What Your Business Could Be Html Site"
                      >
                        <img
                          alt="Reinvert What Your Business Could Be Html Site"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/26/html-template-5326870.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/53/26/html-template-full-5326870.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5326870/reinvert-what-your-business-could-be-html-template"
                        title="Reinvert What Your Business Could Be Html Site"
                      >
                        Reinvert What Your Business Could Be Html Site
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 547 }}
                    data-like={33}
                    data-set={13}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5389149/make-your-trips-truly-pleasant-experiences-html-template"
                        style={{ width: 260, height: 497 }}
                        title="Make Your Trips Truly Pleasant Experiences Live Demo"
                      >
                        <img
                          alt="Make Your Trips Truly Pleasant Experiences Live Demo"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/89/html-template-5389149.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/53/89/html-template-full-5389149.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5389149/make-your-trips-truly-pleasant-experiences-html-template"
                        title="Make Your Trips Truly Pleasant Experiences Live Demo"
                      >
                        Make Your Trips Truly Pleasant Experiences Live Demo
                      </a>
                    </div>
                    <div className="page-date">Jul 28, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 186 }}
                    data-like={38}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5460293/no-code-automation-html-template"
                        style={{ width: 260, height: 136 }}
                        title="No-Code Automation Html Web"
                      >
                        <img
                          alt="No-Code Automation Html Web"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/60/html-template-5460293.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <h3>
                        <a
                          href="/ht/5460293/no-code-automation-html-template"
                          title="No-Code Automation Html Web"
                        >
                          No-Code Automation Html Web
                        </a>
                      </h3>
                    </div>
                    <div className="page-date">Jul 25, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 320 }}
                  >
                    <div
                      className="download-block white-block"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        style={{ color: "#3c3c3c" }}
                        className="download-title"
                      >
                        Free Website Builder Software
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#ec311e" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 480 }}
                    data-like={39}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/3150085/mission-critical-security-html-template"
                        style={{ width: 260, height: 430 }}
                        title="Mission-Critical Security Web Development"
                      >
                        <img
                          alt="Mission-Critical Security Web Development"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/31/50/html-template-3150085.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/31/50/html-template-full-3150085.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/3150085/mission-critical-security-html-template"
                        title="Mission-Critical Security Web Development"
                      >
                        Mission-Critical Security Web Development
                      </a>
                    </div>
                    <div className="page-date">Jul 26, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 270 }}
                    data-like={21}
                    data-set={13}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5389122/let-us-help-you-dream-and-plan-your-ideal-trips-html-template"
                        style={{ width: 260, height: 220 }}
                        title="​Let Us Help You Dream And Plan Your Ideal Trips HTML Template"
                      >
                        <img
                          alt="​Let Us Help You Dream And Plan Your Ideal Trips HTML Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/89/html-template-5389122.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5389122/let-us-help-you-dream-and-plan-your-ideal-trips-html-template"
                        title="​Let Us Help You Dream And Plan Your Ideal Trips HTML Template"
                      >
                        ​Let Us Help You Dream And Plan Your Ideal Trips HTML
                        Template
                      </a>
                    </div>
                    <div className="page-date">Jul 28, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 202 }}
                    data-like={36}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5460287/we-invest-in-software-html-template"
                        style={{ width: 260, height: 152 }}
                        title="We Invest In Software Bootstrap HTML"
                      >
                        <img
                          alt="We Invest In Software Bootstrap HTML"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/60/html-template-5460287.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5460287/we-invest-in-software-html-template"
                        title="We Invest In Software Bootstrap HTML"
                      >
                        We Invest In Software Bootstrap HTML
                      </a>
                    </div>
                    <div className="page-date">Jul 25, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 908 }}
                    data-like={36}
                    data-set={13}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5388942/your-adventures-starts-here-html-template"
                        style={{ width: 260, height: 858 }}
                        title="Your Adventures Starts Here Free Download"
                      >
                        <img
                          alt="Your Adventures Starts Here Free Download"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/88/html-template-5388942.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/53/88/html-template-full-5388942.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5388942/your-adventures-starts-here-html-template"
                        title="Your Adventures Starts Here Free Download"
                      >
                        Your Adventures Starts Here Free Download
                      </a>
                    </div>
                    <div className="page-date">Jul 28, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 218 }}
                    data-like={65}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5404569/well-do-it-together-html-template"
                        style={{ width: 260, height: 168 }}
                        title="We'Ll Do It Together Responsive Html"
                      >
                        <img
                          alt="We'Ll Do It Together Responsive Html"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/04/html-template-5404569.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5404569/well-do-it-together-html-template"
                        title="We'Ll Do It Together Responsive Html"
                      >
                        We'Ll Do It Together Responsive Html
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 207 }}
                    data-like={22}
                    data-set={13}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5389121/good-trips-only-html-template"
                        style={{ width: 260, height: 157 }}
                        title="Good Trips Only Contact Form"
                      >
                        <img
                          alt="Good Trips Only Contact Form"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/89/html-template-5389121.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5389121/good-trips-only-html-template"
                        title="Good Trips Only Contact Form"
                      >
                        Good Trips Only Contact Form
                      </a>
                    </div>
                    <div className="page-date">Jul 28, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 245 }}
                    data-like={6}
                    data-set={13}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5380785/the-perfect-vacations-html-template"
                        style={{ width: 260, height: 195 }}
                        title="The Perfect Vacations Simple HTML Template"
                      >
                        <img
                          alt="The Perfect Vacations Simple HTML Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/80/html-template-5380785.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5380785/the-perfect-vacations-html-template"
                        title="The Perfect Vacations Simple HTML Template"
                      >
                        The Perfect Vacations Simple HTML Template
                      </a>
                    </div>
                    <div className="page-date">Jul 28, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 331 }}
                    data-like={37}
                    data-set={13}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5380769/vacation-adventures-takes-many-forms-html-template"
                        style={{ width: 260, height: 281 }}
                        title="Vacation Adventures Takes Many Forms Html5 Template"
                      >
                        <img
                          alt="Vacation Adventures Takes Many Forms Html5 Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/80/html-template-5380769.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5380769/vacation-adventures-takes-many-forms-html-template"
                        title="Vacation Adventures Takes Many Forms Html5 Template"
                      >
                        Vacation Adventures Takes Many Forms Html5 Template
                      </a>
                    </div>
                    <div className="page-date">Jul 28, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 207 }}
                    data-like={63}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5404350/immediate-goals-html-template"
                        style={{ width: 260, height: 157 }}
                        title="Immediate Goals Html Website Template"
                      >
                        <img
                          alt="Immediate Goals Html Website Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/04/html-template-5404350.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5404350/immediate-goals-html-template"
                        title="Immediate Goals Html Website Template"
                      >
                        Immediate Goals Html Website Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 656 }}
                    data-like={127}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5377614/progressive-look-html-template"
                        style={{ width: 260, height: 606 }}
                        title="Progressive Look Html Code Template"
                      >
                        <img
                          alt="Progressive Look Html Code Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/77/html-template-5377614.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/53/77/html-template-full-5377614.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <h3>
                        <a
                          href="/ht/5377614/progressive-look-html-template"
                          title="Progressive Look Html Code Template"
                        >
                          Progressive Look Html Code Template
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 280 }}
                  >
                    <div
                      className="download-block "
                      style={{ backgroundColor: "#363636" }}
                    >
                      <div
                        style={{ color: "#ffffff" }}
                        className="download-title"
                      >
                        Create your own Website
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#cd30c0" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 381 }}
                    data-like={31}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5469336/industry-leading-html-template"
                        style={{ width: 260, height: 331 }}
                        title="Industry Leading Admin Templates"
                      >
                        <img
                          alt="Industry Leading Admin Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/69/html-template-5469336.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5469336/industry-leading-html-template"
                        title="Industry Leading Admin Templates"
                      >
                        Industry Leading Admin Templates
                      </a>
                    </div>
                    <div className="page-date">Jul 26, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 307 }}
                    data-like={4}
                    data-set={13}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5380767/international-land-adventures-html-template"
                        style={{ width: 260, height: 257 }}
                        title="International Land Adventures Portfolio Template"
                      >
                        <img
                          alt="International Land Adventures Portfolio Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/80/html-template-5380767.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5380767/international-land-adventures-html-template"
                        title="International Land Adventures Portfolio Template"
                      >
                        International Land Adventures Portfolio Template
                      </a>
                    </div>
                    <div className="page-date">Jul 28, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 233 }}
                    data-like={30}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5460472/email-your-deck-html-template"
                        style={{ width: 260, height: 183 }}
                        title="Email Your Deck Color Schemes"
                      >
                        <img
                          alt="Email Your Deck Color Schemes"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/60/html-template-5460472.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5460472/email-your-deck-html-template"
                        title="Email Your Deck Color Schemes"
                      >
                        Email Your Deck Color Schemes
                      </a>
                    </div>
                    <div className="page-date">Jul 25, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 220 }}
                    data-like={48}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5404263/feedback-on-the-job-html-template"
                        style={{ width: 260, height: 170 }}
                        title="Feedback On The Job Content Support"
                      >
                        <img
                          alt="Feedback On The Job Content Support"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/04/html-template-5404263.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5404263/feedback-on-the-job-html-template"
                        title="Feedback On The Job Content Support"
                      >
                        Feedback On The Job Content Support
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 251 }}
                    data-like={3}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5371469/helping-our-clients-achieve-great-things-every-day-html-template"
                        style={{ width: 260, height: 201 }}
                        title="Helping Our Clients Achieve Great Things Every Day Template Details"
                      >
                        <img
                          alt="Helping Our Clients Achieve Great Things Every Day Template Details"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/71/html-template-5371469.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5371469/helping-our-clients-achieve-great-things-every-day-html-template"
                        title="Helping Our Clients Achieve Great Things Every Day Template Details"
                      >
                        Helping Our Clients Achieve Great Things Every Day
                        Template Details
                      </a>
                    </div>
                    <div className="page-date">Jul 28, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 198 }}
                    data-like={22}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5460546/for-the-whole-team-html-template"
                        style={{ width: 260, height: 148 }}
                        title="For The Whole Team Premium Elements"
                      >
                        <img
                          alt="For The Whole Team Premium Elements"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/60/html-template-5460546.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5460546/for-the-whole-team-html-template"
                        title="For The Whole Team Premium Elements"
                      >
                        For The Whole Team Premium Elements
                      </a>
                    </div>
                    <div className="page-date">Jul 25, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 234 }}
                    data-like={24}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5460640/a-platform-you-can-trust-html-template"
                        style={{ width: 260, height: 184 }}
                        title="A Platform You Can Trust Page HTML"
                      >
                        <img
                          alt="A Platform You Can Trust Page HTML"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/60/html-template-5460640.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5460640/a-platform-you-can-trust-html-template"
                        title="A Platform You Can Trust Page HTML"
                      >
                        A Platform You Can Trust Page HTML
                      </a>
                    </div>
                    <div className="page-date">Jul 25, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 537 }}
                    data-like={18}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5428173/write-to-our-managers-html-template"
                        style={{ width: 260, height: 487 }}
                        title="Write To Our Managers Landing Page"
                      >
                        <img
                          alt="Write To Our Managers Landing Page"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/28/html-template-5428173.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/54/28/html-template-full-5428173.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5428173/write-to-our-managers-html-template"
                        title="Write To Our Managers Landing Page"
                      >
                        Write To Our Managers Landing Page
                      </a>
                    </div>
                    <div className="page-date">Jul 25, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 808 }}
                    data-like={9}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5427800/build-your-success-team-html-template"
                        style={{ width: 260, height: 758 }}
                        title="Build Your Success Team HTML CSS"
                      >
                        <img
                          alt="Build Your Success Team HTML CSS"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/27/html-template-5427800.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/54/27/html-template-full-5427800.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5427800/build-your-success-team-html-template"
                        title="Build Your Success Team HTML CSS"
                      >
                        Build Your Success Team HTML CSS
                      </a>
                    </div>
                    <div className="page-date">Jul 25, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 147 }}
                    data-like={35}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5404583/make-a-call-and-find-out-html-template"
                        style={{ width: 260, height: 97 }}
                        title="Make A Call And Find Out Social Media"
                      >
                        <img
                          alt="Make A Call And Find Out Social Media"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/04/html-template-5404583.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <h3>
                        <a
                          href="/ht/5404583/make-a-call-and-find-out-html-template"
                          title="Make A Call And Find Out Social Media"
                        >
                          Make A Call And Find Out Social Media
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 460 }}
                  >
                    <div
                      className="download-block white-block"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <img
                        className="lazyload"
                        data-src="//images01.nicepage.com/thumbs/a122014e1e8cdf24af08f98c/66c81b94d04f55a2aa46a8bd/responsive-small-animation-color_150.gif"
                        alt="Fully Responsive Templates"
                      />
                      <div
                        style={{ color: "#3c3c3c" }}
                        className="download-title"
                      >
                        Fully Responsive Templates
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#ec311e" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 759 }}
                    data-like={928}
                    data-set={30}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5252569/barber-team-html-template"
                        style={{ width: 260, height: 709 }}
                        title="Barber Team Google Maps"
                      >
                        <img
                          alt="Barber Team Google Maps"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/52/html-template-5252569.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/52/52/html-template-full-5252569.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5252569/barber-team-html-template"
                        title="Barber Team Google Maps"
                      >
                        Barber Team Google Maps
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 190 }}
                    data-like={557}
                    data-set={14}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5315447/take-a-step-towards-us-html-template"
                        style={{ width: 260, height: 140 }}
                        title="Take A Step Towards Us Agency Template"
                      >
                        <img
                          alt="Take A Step Towards Us Agency Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/15/html-template-5315447.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5315447/take-a-step-towards-us-html-template"
                        title="Take A Step Towards Us Agency Template"
                      >
                        Take A Step Towards Us Agency Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 402 }}
                    data-like={53}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5387464/phone-numbers-html-template"
                        style={{ width: 260, height: 352 }}
                        title="Phone Numbers Website Layout HTML"
                      >
                        <img
                          alt="Phone Numbers Website Layout HTML"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/87/html-template-5387464.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/53/87/html-template-full-5387464.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5387464/phone-numbers-html-template"
                        title="Phone Numbers Website Layout HTML"
                      >
                        Phone Numbers Website Layout HTML
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 184 }}
                    data-like={14}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5460387/exceptional-user-html-template"
                        style={{ width: 260, height: 134 }}
                        title="Exceptional User HTML Page Template"
                      >
                        <img
                          alt="Exceptional User HTML Page Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/60/html-template-5460387.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5460387/exceptional-user-html-template"
                        title="Exceptional User HTML Page Template"
                      >
                        Exceptional User HTML Page Template
                      </a>
                    </div>
                    <div className="page-date">Jul 25, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 213 }}
                    data-like={18}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5460547/automation-works-html-template"
                        style={{ width: 260, height: 163 }}
                        title="Automation Works Responsive Html5"
                      >
                        <img
                          alt="Automation Works Responsive Html5"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/60/html-template-5460547.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5460547/automation-works-html-template"
                        title="Automation Works Responsive Html5"
                      >
                        Automation Works Responsive Html5
                      </a>
                    </div>
                    <div className="page-date">Jul 25, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 193 }}
                    data-like={1889}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4974531/need-first-class-html-template"
                        style={{ width: 260, height: 143 }}
                        title="Need First-Class Free Website"
                      >
                        <img
                          alt="Need First-Class Free Website"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/49/74/html-template-4974531.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4974531/need-first-class-html-template"
                        title="Need First-Class Free Website"
                      >
                        Need First-Class Free Website
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 170 }}
                    data-like={24}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5404277/any-suggestions-html-template"
                        style={{ width: 260, height: 120 }}
                        title="Any Suggestions Responsive Html5 Template"
                      >
                        <img
                          alt="Any Suggestions Responsive Html5 Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/04/html-template-5404277.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5404277/any-suggestions-html-template"
                        title="Any Suggestions Responsive Html5 Template"
                      >
                        Any Suggestions Responsive Html5 Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 740 }}
                    data-like={608}
                    data-set={32}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5213148/solar-energy-company-html-template"
                        style={{ width: 260, height: 690 }}
                        title="Solar Energy Company Basic HTML Template"
                      >
                        <img
                          alt="Solar Energy Company Basic HTML Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/13/html-template-5213148.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/52/13/html-template-full-5213148.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5213148/solar-energy-company-html-template"
                        title="Solar Energy Company Basic HTML Template"
                      >
                        Solar Energy Company Basic HTML Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 957 }}
                    data-like={162}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5365180/we-produce-awesome-visuals-html-template"
                        style={{ width: 260, height: 907 }}
                        title="We Produce Awesome Visuals New Themes"
                      >
                        <img
                          alt="We Produce Awesome Visuals New Themes"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/65/html-template-5365180.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/53/65/html-template-full-5365180.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5365180/we-produce-awesome-visuals-html-template"
                        title="We Produce Awesome Visuals New Themes"
                      >
                        We Produce Awesome Visuals New Themes
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 310 }}
                    data-like={541}
                    data-set={30}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5251194/contemporary-haircuts-grooming-html-template"
                        style={{ width: 260, height: 260 }}
                        title="Contemporary Haircuts & Grooming Design Template"
                      >
                        <img
                          alt="Contemporary Haircuts & Grooming Design Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/51/html-template-5251194.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <h3>
                        <a
                          href="/ht/5251194/contemporary-haircuts-grooming-html-template"
                          title="Contemporary Haircuts & Grooming Design Template"
                        >
                          Contemporary Haircuts &amp; Grooming Design Template
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 420 }}
                  >
                    <div
                      className="download-block "
                      style={{ backgroundColor: "#363636" }}
                    >
                      <img
                        className="lazyload"
                        data-src="//images01.nicepage.com/a122014e1e8cdf24af08f98c/20a096fad2aa5e36b4b599e4/drag-n-drop-small-animation-dark.gif"
                        alt="Easy Drag and Drop Editor"
                      />
                      <div
                        style={{ color: "#ffffff" }}
                        className="download-title"
                      >
                        Easy Drag and Drop Editor
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#cd30c0" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 291 }}
                    data-like={184}
                    data-set={20}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5355687/zupeople-and-organization-html-template"
                        style={{ width: 260, height: 241 }}
                        title="ЗуPeople And Organization Modern Web"
                      >
                        <img
                          alt="ЗуPeople And Organization Modern Web"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/55/html-template-5355687.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5355687/zupeople-and-organization-html-template"
                        title="ЗуPeople And Organization Modern Web"
                      >
                        ЗуPeople And Organization Modern Web
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 1009 }}
                    data-like={1326}
                    data-set={33}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4948822/the-leading-consulting-firms-for-management-services-html-template"
                        style={{ width: 260, height: 959 }}
                        title="The Leading Consulting Firms For Management Services Css Templates"
                      >
                        <img
                          alt="The Leading Consulting Firms For Management Services Css Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/49/48/html-template-4948822.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/49/48/html-template-full-4948822.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4948822/the-leading-consulting-firms-for-management-services-html-template"
                        title="The Leading Consulting Firms For Management Services Css Templates"
                      >
                        The Leading Consulting Firms For Management Services Css
                        Templates
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 241 }}
                    data-like={146}
                    data-set={12}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5370410/development-of-our-network-html-template"
                        style={{ width: 260, height: 191 }}
                        title="Development Of Our Network Html Web Page Template"
                      >
                        <img
                          alt="Development Of Our Network Html Web Page Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/70/html-template-5370410.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5370410/development-of-our-network-html-template"
                        title="Development Of Our Network Html Web Page Template"
                      >
                        Development Of Our Network Html Web Page Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 735 }}
                    data-like={22}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5404774/a-small-demo-of-projects-html-template"
                        style={{ width: 260, height: 685 }}
                        title="A Small Demo Of Projects Responsive Html5"
                      >
                        <img
                          alt="A Small Demo Of Projects Responsive Html5"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/04/html-template-5404774.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/54/04/html-template-full-5404774.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5404774/a-small-demo-of-projects-html-template"
                        title="A Small Demo Of Projects Responsive Html5"
                      >
                        A Small Demo Of Projects Responsive Html5
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 595 }}
                    data-like={1128}
                    data-set={19}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5030823/highly-customizable-html-template"
                        style={{ width: 260, height: 545 }}
                        title="Highly Customizable Html Page Design"
                      >
                        <img
                          alt="Highly Customizable Html Page Design"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/50/30/html-template-5030823.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/50/30/html-template-full-5030823.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5030823/highly-customizable-html-template"
                        title="Highly Customizable Html Page Design"
                      >
                        Highly Customizable Html Page Design
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 644 }}
                    data-like={2374}
                    data-set={23}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4753423/the-creative-agency-for-your-next-big-thing-html-template"
                        style={{ width: 260, height: 594 }}
                        title="The Creative Agency For Your Next Big Thing Web Development"
                      >
                        <img
                          alt="The Creative Agency For Your Next Big Thing Web Development"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/47/53/html-template-4753423.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/47/53/html-template-full-4753423.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4753423/the-creative-agency-for-your-next-big-thing-html-template"
                        title="The Creative Agency For Your Next Big Thing Web Development"
                      >
                        The Creative Agency For Your Next Big Thing Web
                        Development
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 196 }}
                    data-like={152}
                    data-set={20}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5356750/experts-consultants-html-template"
                        style={{ width: 260, height: 146 }}
                        title="Experts & Consultants Free Html"
                      >
                        <img
                          alt="Experts & Consultants Free Html"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/56/html-template-5356750.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5356750/experts-consultants-html-template"
                        title="Experts & Consultants Free Html"
                      >
                        Experts &amp; Consultants Free Html
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 189 }}
                    data-like={265}
                    data-set={14}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5315661/these-are-the-main-tasks-html-template"
                        style={{ width: 260, height: 139 }}
                        title="These Are The Main Tasks Responsive HTML Template"
                      >
                        <img
                          alt="These Are The Main Tasks Responsive HTML Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/15/html-template-5315661.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5315661/these-are-the-main-tasks-html-template"
                        title="These Are The Main Tasks Responsive HTML Template"
                      >
                        These Are The Main Tasks Responsive HTML Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 208 }}
                    data-like={634}
                    data-set={27}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5167769/dreadlock-services-for-all-textures-of-hair-html-template"
                        style={{ width: 260, height: 158 }}
                        title="Dreadlock Services For All Textures Of Hair Real Estate"
                      >
                        <img
                          alt="Dreadlock Services For All Textures Of Hair Real Estate"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/51/67/html-template-5167769.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5167769/dreadlock-services-for-all-textures-of-hair-html-template"
                        title="Dreadlock Services For All Textures Of Hair Real Estate"
                      >
                        Dreadlock Services For All Textures Of Hair Real Estate
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 587 }}
                    data-like={590}
                    data-set={26}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5196772/it-started-with-honesty-passion-and-innovation-html-template"
                        style={{ width: 260, height: 537 }}
                        title="It Started With Honesty, Passion And Innovation Business Consulting"
                      >
                        <img
                          alt="It Started With Honesty, Passion And Innovation Business Consulting"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/51/96/html-template-5196772.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/51/96/html-template-full-5196772.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <h3>
                        <a
                          href="/ht/5196772/it-started-with-honesty-passion-and-innovation-html-template"
                          title="It Started With Honesty, Passion And Innovation Business Consulting"
                        >
                          It Started With Honesty, Passion And Innovation
                          Business Consulting
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 460 }}
                  >
                    <div
                      className="download-block white-block"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <img
                        className="lazyload"
                        data-src="//images01.nicepage.com/thumbs/a122014e1e8cdf24af08f98c/de4b91b424635284ad7ea46f/templates-small-animation-color_150.gif"
                        alt="The Biggest Template Collection"
                      />
                      <div
                        style={{ color: "#3c3c3c" }}
                        className="download-title"
                      >
                        The Biggest Template Collection
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#ec311e" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 254 }}
                    data-like={1071}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4974216/what-do-we-stand-for-html-template"
                        style={{ width: 260, height: 204 }}
                        title="What Do We Stand For Design Template"
                      >
                        <img
                          alt="What Do We Stand For Design Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/49/74/html-template-4974216.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4974216/what-do-we-stand-for-html-template"
                        title="What Do We Stand For Design Template"
                      >
                        What Do We Stand For Design Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 500 }}
                    data-like={1201}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4968845/creating-change-giant-ideas-html-template"
                        style={{ width: 260, height: 450 }}
                        title="Creating Change Giant Ideas Creative Agency"
                      >
                        <img
                          alt="Creating Change Giant Ideas Creative Agency"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/49/68/html-template-4968845.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/49/68/html-template-full-4968845.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4968845/creating-change-giant-ideas-html-template"
                        title="Creating Change Giant Ideas Creative Agency"
                      >
                        Creating Change Giant Ideas Creative Agency
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 221 }}
                    data-like={16}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5404289/tariff-for-any-amount-html-template"
                        style={{ width: 260, height: 171 }}
                        title="Tariff For Any Amount Landing Page Template"
                      >
                        <img
                          alt="Tariff For Any Amount Landing Page Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/04/html-template-5404289.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5404289/tariff-for-any-amount-html-template"
                        title="Tariff For Any Amount Landing Page Template"
                      >
                        Tariff For Any Amount Landing Page Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 741 }}
                    data-like={2582}
                    data-set={35}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4528555/beautiful-campsites-html-template"
                        style={{ width: 260, height: 691 }}
                        title="Beautiful Campsites Free Css"
                      >
                        <img
                          alt="Beautiful Campsites Free Css"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/45/28/html-template-4528555.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/45/28/html-template-full-4528555.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4528555/beautiful-campsites-html-template"
                        title="Beautiful Campsites Free Css"
                      >
                        Beautiful Campsites Free Css
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 793 }}
                    data-like={108}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/429507/our-client-results-speak-for-themselves-html-template"
                        style={{ width: 260, height: 743 }}
                        title="Our Client Results Speak For Themselves Free Css"
                      >
                        <img
                          alt="Our Client Results Speak For Themselves Free Css"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/42/95/html-template-429507.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/42/95/html-template-full-429507.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/429507/our-client-results-speak-for-themselves-html-template"
                        title="Our Client Results Speak For Themselves Free Css"
                      >
                        Our Client Results Speak For Themselves Free Css
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 250 }}
                    data-like={344}
                    data-set={32}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5233073/energy-independence-html-template"
                        style={{ width: 260, height: 200 }}
                        title="Energy Independence Portfolio Template"
                      >
                        <img
                          alt="Energy Independence Portfolio Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/33/html-template-5233073.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5233073/energy-independence-html-template"
                        title="Energy Independence Portfolio Template"
                      >
                        Energy Independence Portfolio Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 750 }}
                    data-like={424}
                    data-set={26}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5192394/we-are-a-creative-company-html-template"
                        style={{ width: 260, height: 700 }}
                        title="We Are A Creative Company Wordpress Themes"
                      >
                        <img
                          alt="We Are A Creative Company Wordpress Themes"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/51/92/html-template-5192394.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/51/92/html-template-full-5192394.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5192394/we-are-a-creative-company-html-template"
                        title="We Are A Creative Company Wordpress Themes"
                      >
                        We Are A Creative Company Wordpress Themes
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 842 }}
                    data-like={521}
                    data-set={27}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5158228/we-offer-first-class-services-at-affordable-prices-html-template"
                        style={{ width: 260, height: 792 }}
                        title="We Offer First Class Services At Affordable Prices Full Photo"
                      >
                        <img
                          alt="We Offer First Class Services At Affordable Prices Full Photo"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/51/58/html-template-5158228.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/51/58/html-template-full-5158228.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5158228/we-offer-first-class-services-at-affordable-prices-html-template"
                        title="We Offer First Class Services At Affordable Prices Full Photo"
                      >
                        We Offer First Class Services At Affordable Prices Full
                        Photo
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 773 }}
                    data-like={28}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5387290/become-one-of-us-html-template"
                        style={{ width: 260, height: 723 }}
                        title="Become One Of Us Bootstrap Html"
                      >
                        <img
                          alt="Become One Of Us Bootstrap Html"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/87/html-template-5387290.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/53/87/html-template-full-5387290.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5387290/become-one-of-us-html-template"
                        title="Become One Of Us Bootstrap Html"
                      >
                        Become One Of Us Bootstrap Html
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 331 }}
                    data-like={90}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5368586/we-never-rest-on-past-success-html-template"
                        style={{ width: 260, height: 281 }}
                        title="We Never Rest On Past Success Fully Responsive"
                      >
                        <img
                          alt="We Never Rest On Past Success Fully Responsive"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/68/html-template-5368586.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <h3>
                        <a
                          href="/ht/5368586/we-never-rest-on-past-success-html-template"
                          title="We Never Rest On Past Success Fully Responsive"
                        >
                          We Never Rest On Past Success Fully Responsive
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 420 }}
                  >
                    <div
                      className="download-block "
                      style={{ backgroundColor: "#363636" }}
                    >
                      <img
                        className="lazyload"
                        data-src="//images01.nicepage.com/thumbs/a122014e1e8cdf24af08f98c/7eb1dacfadda5d798aa622f4/html-wordpress-small-animation-dark_150.gif"
                        alt="Export to HTML and WordPress"
                      />
                      <div
                        style={{ color: "#ffffff" }}
                        className="download-title"
                      >
                        Export to HTML and WordPress
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#cd30c0" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 255 }}
                    data-like={90}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5369123/quality-always-and-no-matter-what-html-template"
                        style={{ width: 260, height: 205 }}
                        title="Quality Always And No Matter What Bootstrap Templates"
                      >
                        <img
                          alt="Quality Always And No Matter What Bootstrap Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/69/html-template-5369123.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5369123/quality-always-and-no-matter-what-html-template"
                        title="Quality Always And No Matter What Bootstrap Templates"
                      >
                        Quality Always And No Matter What Bootstrap Templates
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 209 }}
                    data-like={1166}
                    data-set={36}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4871450/full-service-grooming-studio-html-template"
                        style={{ width: 260, height: 159 }}
                        title="Full Service Grooming Studio Live Demo"
                      >
                        <img
                          alt="Full Service Grooming Studio Live Demo"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/48/71/html-template-4871450.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4871450/full-service-grooming-studio-html-template"
                        title="Full Service Grooming Studio Live Demo"
                      >
                        Full Service Grooming Studio Live Demo
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 819 }}
                    data-like={1061}
                    data-set={24}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4916555/we-are-professional-bakers-html-template"
                        style={{ width: 260, height: 769 }}
                        title="We Are Professional Bakers Site Templates"
                      >
                        <img
                          alt="We Are Professional Bakers Site Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/49/16/html-template-4916555.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/49/16/html-template-full-4916555.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4916555/we-are-professional-bakers-html-template"
                        title="We Are Professional Bakers Site Templates"
                      >
                        We Are Professional Bakers Site Templates
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 210 }}
                    data-like={1998}
                    data-set={35}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4544680/information-about-our-camping-html-template"
                        style={{ width: 260, height: 160 }}
                        title="Information About Our Camping Web Design"
                      >
                        <img
                          alt="Information About Our Camping Web Design"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/45/44/html-template-4544680.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4544680/information-about-our-camping-html-template"
                        title="Information About Our Camping Web Design"
                      >
                        Information About Our Camping Web Design
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 174 }}
                    data-like={577}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4967975/an-independent-design-agency-html-template"
                        style={{ width: 260, height: 124 }}
                        title="An Independent Design Agency Ecommerce Template"
                      >
                        <img
                          alt="An Independent Design Agency Ecommerce Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/49/67/html-template-4967975.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4967975/an-independent-design-agency-html-template"
                        title="An Independent Design Agency Ecommerce Template"
                      >
                        An Independent Design Agency Ecommerce Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 174 }}
                    data-like={7}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5460460/the-worlds-best-companies-html-template"
                        style={{ width: 260, height: 124 }}
                        title="The World’S Best Companies Html Website Templates"
                      >
                        <img
                          alt="The World’S Best Companies Html Website Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/54/60/html-template-5460460.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row short-format">
                      <a
                        href="/ht/5460460/the-worlds-best-companies-html-template"
                        title="The World’S Best Companies Html Website Templates"
                      >
                        The World’S Best Companies Html Website Templates
                      </a>
                    </div>
                    <div className="page-date">Jul 25, 2023</div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 231 }}
                    data-like={3294}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4029637/contact-form-with-contacts-html-template"
                        style={{ width: 260, height: 181 }}
                        title="Contact Form With Contacts Templates Free"
                      >
                        <img
                          alt="Contact Form With Contacts Templates Free"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/40/29/html-template-4029637.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4029637/contact-form-with-contacts-html-template"
                        title="Contact Form With Contacts Templates Free"
                      >
                        Contact Form With Contacts Templates Free
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 684 }}
                    data-like={4048}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/3790399/teaching-and-learning-center-html-template"
                        style={{ width: 260, height: 634 }}
                        title="Teaching And Learning Center HTML Template Download"
                      >
                        <img
                          alt="Teaching And Learning Center HTML Template Download"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/37/90/html-template-3790399.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/37/90/html-template-full-3790399.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/3790399/teaching-and-learning-center-html-template"
                        title="Teaching And Learning Center HTML Template Download"
                      >
                        Teaching And Learning Center HTML Template Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 179 }}
                    data-like={1697}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4593216/our-business-growth-html-template"
                        style={{ width: 260, height: 129 }}
                        title="Our Business Growth HTML Website Template"
                      >
                        <img
                          alt="Our Business Growth HTML Website Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/45/93/html-template-4593216.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4593216/our-business-growth-html-template"
                        title="Our Business Growth HTML Website Template"
                      >
                        Our Business Growth HTML Website Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 262 }}
                    data-like={264}
                    data-set={32}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5223026/sompetitive-advantages-html-template"
                        style={{ width: 260, height: 212 }}
                        title="Сompetitive Advantages Free Templates"
                      >
                        <img
                          alt="Сompetitive Advantages Free Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/23/html-template-5223026.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <h3>
                        <a
                          href="/ht/5223026/sompetitive-advantages-html-template"
                          title="Сompetitive Advantages Free Templates"
                        >
                          Сompetitive Advantages Free Templates
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 420 }}
                  >
                    <div
                      className="download-block white-block"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <img
                        className="lazyload"
                        data-src="//images01.nicepage.com/thumbs/a122014e1e8cdf24af08f98c/66c81b94d04f55a2aa46a8bd/responsive-small-animation-color_150.gif"
                        alt="Mobile-Friendly Templates"
                      />
                      <div
                        style={{ color: "#3c3c3c" }}
                        className="download-title"
                      >
                        Mobile-Friendly Templates
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#ec311e" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 480 }}
                    data-like={1397}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4715683/homemade-pizza-html-template"
                        style={{ width: 260, height: 430 }}
                        title="Homemade Pizza Html5 Template"
                      >
                        <img
                          alt="Homemade Pizza Html5 Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/47/15/html-template-4715683.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4715683/homemade-pizza-html-template"
                        title="Homemade Pizza Html5 Template"
                      >
                        Homemade Pizza Html5 Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 813 }}
                    data-like={149}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5275937/our-people-and-our-culture-html-template"
                        style={{ width: 260, height: 763 }}
                        title="Our People And Our Culture Site Template"
                      >
                        <img
                          alt="Our People And Our Culture Site Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/75/html-template-5275937.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/52/75/html-template-full-5275937.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5275937/our-people-and-our-culture-html-template"
                        title="Our People And Our Culture Site Template"
                      >
                        Our People And Our Culture Site Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 765 }}
                    data-like={330}
                    data-set={26}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5204099/we-create-experiences-that-brands-live-by-html-template"
                        style={{ width: 260, height: 715 }}
                        title="We Create Experiences That Brands Live By Landing Page Template"
                      >
                        <img
                          alt="We Create Experiences That Brands Live By Landing Page Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/04/html-template-5204099.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/52/04/html-template-full-5204099.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5204099/we-create-experiences-that-brands-live-by-html-template"
                        title="We Create Experiences That Brands Live By Landing Page Template"
                      >
                        We Create Experiences That Brands Live By Landing Page
                        Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 502 }}
                    data-like={297}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5221079/about-our-production-html-template"
                        style={{ width: 260, height: 452 }}
                        title="About Our Production HTML Design"
                      >
                        <img
                          alt="About Our Production HTML Design"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/21/html-template-5221079.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/52/21/html-template-full-5221079.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5221079/about-our-production-html-template"
                        title="About Our Production HTML Design"
                      >
                        About Our Production HTML Design
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 245 }}
                    data-like={77}
                    data-set={20}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5355670/an-inclusive-and-welcoming-workplace-html-template"
                        style={{ width: 260, height: 195 }}
                        title="An Inclusive And Welcoming Workplace Html Website"
                      >
                        <img
                          alt="An Inclusive And Welcoming Workplace Html Website"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/55/html-template-5355670.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5355670/an-inclusive-and-welcoming-workplace-html-template"
                        title="An Inclusive And Welcoming Workplace Html Website"
                      >
                        An Inclusive And Welcoming Workplace Html Website
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 625 }}
                    data-like={3754}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/3754173/digital-firm-html-template"
                        style={{ width: 260, height: 575 }}
                        title="Digital Firm Clothing Store"
                      >
                        <img
                          alt="Digital Firm Clothing Store"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/37/54/html-template-3754173.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/37/54/html-template-full-3754173.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/3754173/digital-firm-html-template"
                        title="Digital Firm Clothing Store"
                      >
                        Digital Firm Clothing Store
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 325 }}
                    data-like={75}
                    data-set={20}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5355673/building-growth-futures-html-template"
                        style={{ width: 260, height: 275 }}
                        title="Building Growth Futures Bootstrap 4"
                      >
                        <img
                          alt="Building Growth Futures Bootstrap 4"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/55/html-template-5355673.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5355673/building-growth-futures-html-template"
                        title="Building Growth Futures Bootstrap 4"
                      >
                        Building Growth Futures Bootstrap 4
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 710 }}
                    data-like={8528}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/2578756/mobile-app-development-company-html-template"
                        style={{ width: 260, height: 660 }}
                        title="Mobile App Development Company Color Schemes"
                      >
                        <img
                          alt="Mobile App Development Company Color Schemes"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/25/78/html-template-2578756.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/25/78/html-template-full-2578756.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/2578756/mobile-app-development-company-html-template"
                        title="Mobile App Development Company Color Schemes"
                      >
                        Mobile App Development Company Color Schemes
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 761 }}
                    data-like={79}
                    data-set={20}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5355898/we-help-clients-solve-complex-business-problems-html-template"
                        style={{ width: 260, height: 711 }}
                        title="We Help Clients Solve Complex Business Problems Store Template"
                      >
                        <img
                          alt="We Help Clients Solve Complex Business Problems Store Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/55/html-template-5355898.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/53/55/html-template-full-5355898.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5355898/we-help-clients-solve-complex-business-problems-html-template"
                        title="We Help Clients Solve Complex Business Problems Store Template"
                      >
                        We Help Clients Solve Complex Business Problems Store
                        Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 555 }}
                    data-like={1906}
                    data-set={11}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4365090/satisfaction-rate-html-template"
                        style={{ width: 260, height: 505 }}
                        title="Satisfaction Rate Web Page"
                      >
                        <img
                          alt="Satisfaction Rate Web Page"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/43/65/html-template-4365090.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/43/65/html-template-full-4365090.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <h3>
                        <a
                          href="/ht/4365090/satisfaction-rate-html-template"
                          title="Satisfaction Rate Web Page"
                        >
                          Satisfaction Rate Web Page
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 420 }}
                  >
                    <div
                      className="download-block "
                      style={{ backgroundColor: "#363636" }}
                    >
                      <img
                        className="lazyload"
                        data-src="//images01.nicepage.com/thumbs/a122014e1e8cdf24af08f98c/856e5d129c4a51379c1f87c3/template-builder-dark_150.gif"
                        alt="Easy Template Builder"
                      />
                      <div
                        style={{ color: "#ffffff" }}
                        className="download-title"
                      >
                        Easy Template Builder
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#cd30c0" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 497 }}
                    data-like={66}
                    data-set={12}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5370478/simple-consultation-html-template"
                        style={{ width: 260, height: 447 }}
                        title="Simple Consultation Template Download"
                      >
                        <img
                          alt="Simple Consultation Template Download"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/70/html-template-5370478.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/53/70/html-template-full-5370478.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5370478/simple-consultation-html-template"
                        title="Simple Consultation Template Download"
                      >
                        Simple Consultation Template Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 241 }}
                    data-like={959}
                    data-set={23}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4785906/we-are-embracers-of-change-html-template"
                        style={{ width: 260, height: 191 }}
                        title="We Are Embracers Of Change Online Blog"
                      >
                        <img
                          alt="We Are Embracers Of Change Online Blog"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/47/85/html-template-4785906.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4785906/we-are-embracers-of-change-html-template"
                        title="We Are Embracers Of Change Online Blog"
                      >
                        We Are Embracers Of Change Online Blog
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 692 }}
                    data-like={2365}
                    data-set={13}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4092512/career-opportunities-html-template"
                        style={{ width: 260, height: 642 }}
                        title="Career Opportunities Social Media"
                      >
                        <img
                          alt="Career Opportunities Social Media"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/40/92/html-template-4092512.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/40/92/html-template-full-4092512.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4092512/career-opportunities-html-template"
                        title="Career Opportunities Social Media"
                      >
                        Career Opportunities Social Media
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 219 }}
                    data-like={84}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5326876/grid-repeater-on-grayscale-image-html-template"
                        style={{ width: 260, height: 169 }}
                        title="Grid Repeater On Grayscale Image Site Template"
                      >
                        <img
                          alt="Grid Repeater On Grayscale Image Site Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/26/html-template-5326876.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5326876/grid-repeater-on-grayscale-image-html-template"
                        title="Grid Repeater On Grayscale Image Site Template"
                      >
                        Grid Repeater On Grayscale Image Site Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 735 }}
                    data-like={374}
                    data-set={35}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5102110/the-planning-firm-with-53-offices-and-7000-professionals-html-template"
                        style={{ width: 260, height: 685 }}
                        title="The Planning Firm With 53 Offices And 7000+ Professionals Page Portfolio"
                      >
                        <img
                          alt="The Planning Firm With 53 Offices And 7000+ Professionals Page Portfolio"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/51/02/html-template-5102110.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/51/02/html-template-full-5102110.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5102110/the-planning-firm-with-53-offices-and-7000-professionals-html-template"
                        title="The Planning Firm With 53 Offices And 7000+ Professionals Page Portfolio"
                      >
                        The Planning Firm With 53 Offices And 7000+
                        Professionals Page Portfolio
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 929 }}
                    data-like={2048}
                    data-set={25}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4086464/interior-design-portfolio-html-template"
                        style={{ width: 260, height: 879 }}
                        title="Interior Design Portfolio Modern Web"
                      >
                        <img
                          alt="Interior Design Portfolio Modern Web"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/40/86/html-template-4086464.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/40/86/html-template-full-4086464.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4086464/interior-design-portfolio-html-template"
                        title="Interior Design Portfolio Modern Web"
                      >
                        Interior Design Portfolio Modern Web
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 336 }}
                    data-like={606}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4974244/latest-client-html-template"
                        style={{ width: 260, height: 286 }}
                        title="Latest Client Page Template"
                      >
                        <img
                          alt="Latest Client Page Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/49/74/html-template-4974244.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4974244/latest-client-html-template"
                        title="Latest Client Page Template"
                      >
                        Latest Client Page Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 208 }}
                    data-like={451}
                    data-set={28}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4917147/join-now-for-just-10-html-template"
                        style={{ width: 260, height: 158 }}
                        title="Join Now For Just $10 Last Updated"
                      >
                        <img
                          alt="Join Now For Just $10 Last Updated"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/49/17/html-template-4917147.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4917147/join-now-for-just-10-html-template"
                        title="Join Now For Just $10 Last Updated"
                      >
                        Join Now For Just $10 Last Updated
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 223 }}
                    data-like={446}
                    data-set={35}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5093359/we-create-adventurous-places-html-template"
                        style={{ width: 260, height: 173 }}
                        title="We Create Adventurous Places Html Landing"
                      >
                        <img
                          alt="We Create Adventurous Places Html Landing"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/50/93/html-template-5093359.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5093359/we-create-adventurous-places-html-template"
                        title="We Create Adventurous Places Html Landing"
                      >
                        We Create Adventurous Places Html Landing
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 385 }}
                    data-like={1760}
                    data-set={32}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4301899/consulting-firm-contact-page-html-template"
                        style={{ width: 260, height: 335 }}
                        title="Consulting Firm Contact Page Store Template"
                      >
                        <img
                          alt="Consulting Firm Contact Page Store Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/43/01/html-template-4301899.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/43/01/html-template-full-4301899.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <h3>
                        <a
                          href="/ht/4301899/consulting-firm-contact-page-html-template"
                          title="Consulting Firm Contact Page Store Template"
                        >
                          Consulting Firm Contact Page Store Template
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 420 }}
                  >
                    <div
                      className="download-block white-block"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <img
                        className="lazyload"
                        data-src="//images01.nicepage.com/thumbs/a122014e1e8cdf24af08f98c/de4b91b424635284ad7ea46f/templates-small-animation-color_150.gif"
                        alt="10 000+ Website Templates"
                      />
                      <div
                        style={{ color: "#3c3c3c" }}
                        className="download-title"
                      >
                        10 000+ Website Templates
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#ec311e" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 866 }}
                    data-like={1083}
                    data-set={28}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4725742/handyman-services-and-home-repair-html-template"
                        style={{ width: 260, height: 816 }}
                        title="Handyman Services And Home Repair Html Landing Page"
                      >
                        <img
                          alt="Handyman Services And Home Repair Html Landing Page"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/47/25/html-template-4725742.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/47/25/html-template-full-4725742.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4725742/handyman-services-and-home-repair-html-template"
                        title="Handyman Services And Home Repair Html Landing Page"
                      >
                        Handyman Services And Home Repair Html Landing Page
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 190 }}
                    data-like={491}
                    data-set={17}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4975410/about-us-block-with-slider-html-template"
                        style={{ width: 260, height: 140 }}
                        title="About Us Block With Slider Template Demo"
                      >
                        <img
                          alt="About Us Block With Slider Template Demo"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/49/75/html-template-4975410.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4975410/about-us-block-with-slider-html-template"
                        title="About Us Block With Slider Template Demo"
                      >
                        About Us Block With Slider Template Demo
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 674 }}
                    data-like={895}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4804102/major-shareholders-html-template"
                        style={{ width: 260, height: 624 }}
                        title="Major Shareholders Creative Agency"
                      >
                        <img
                          alt="Major Shareholders Creative Agency"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/48/04/html-template-4804102.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/48/04/html-template-full-4804102.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4804102/major-shareholders-html-template"
                        title="Major Shareholders Creative Agency"
                      >
                        Major Shareholders Creative Agency
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 228 }}
                    data-like={78}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5326875/we-provide-premium-consulting-services-html-template"
                        style={{ width: 260, height: 178 }}
                        title="We Provide Premium Consulting Services Website Builder"
                      >
                        <img
                          alt="We Provide Premium Consulting Services Website Builder"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/26/html-template-5326875.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5326875/we-provide-premium-consulting-services-html-template"
                        title="We Provide Premium Consulting Services Website Builder"
                      >
                        We Provide Premium Consulting Services Website Builder
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 145 }}
                    data-like={143}
                    data-set={12}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5297783/trend-services-html-template"
                        style={{ width: 260, height: 95 }}
                        title="Trend Services Fully Responsive"
                      >
                        <img
                          alt="Trend Services Fully Responsive"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/97/html-template-5297783.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5297783/trend-services-html-template"
                        title="Trend Services Fully Responsive"
                      >
                        Trend Services Fully Responsive
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 358 }}
                    data-like={193}
                    data-set={30}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/2457323/the-best-barber-experience-html-template"
                        style={{ width: 260, height: 308 }}
                        title="The Best Barber Experience Ecommerce Website"
                      >
                        <img
                          alt="The Best Barber Experience Ecommerce Website"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/24/57/html-template-2457323.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/2457323/the-best-barber-experience-html-template"
                        title="The Best Barber Experience Ecommerce Website"
                      >
                        The Best Barber Experience Ecommerce Website
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 206 }}
                    data-like={61}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5326569/the-firm-provides-economic-financial-and-strategic-analysis-html-template"
                        style={{ width: 260, height: 156 }}
                        title="The Firm Provides Economic, Financial And Strategic Analysis Html Web Site"
                      >
                        <img
                          alt="The Firm Provides Economic, Financial And Strategic Analysis Html Web Site"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/26/html-template-5326569.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5326569/the-firm-provides-economic-financial-and-strategic-analysis-html-template"
                        title="The Firm Provides Economic, Financial And Strategic Analysis Html Web Site"
                      >
                        The Firm Provides Economic, Financial And Strategic
                        Analysis Html Web Site
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 219 }}
                    data-like={114}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5260358/global-leaders-come-to-us-to-solve-industry-defining-challenges-html-template"
                        style={{ width: 260, height: 169 }}
                        title="Global Leaders Come To Us To Solve Industry-Defining Challenges Based On"
                      >
                        <img
                          alt="Global Leaders Come To Us To Solve Industry-Defining Challenges Based On"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/60/html-template-5260358.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5260358/global-leaders-come-to-us-to-solve-industry-defining-challenges-html-template"
                        title="Global Leaders Come To Us To Solve Industry-Defining Challenges Based On"
                      >
                        Global Leaders Come To Us To Solve Industry-Defining
                        Challenges Based On
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 173 }}
                    data-like={59}
                    data-set={12}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5370691/headed-the-department-html-template"
                        style={{ width: 260, height: 123 }}
                        title="Headed The Department HTML Template Code"
                      >
                        <img
                          alt="Headed The Department HTML Template Code"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/70/html-template-5370691.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5370691/headed-the-department-html-template"
                        title="Headed The Department HTML Template Code"
                      >
                        Headed The Department HTML Template Code
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 811 }}
                    data-like={191}
                    data-set={30}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5250710/the-best-barbershop-html-template"
                        style={{ width: 260, height: 761 }}
                        title="The Best Barbershop Web Templates"
                      >
                        <img
                          alt="The Best Barbershop Web Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/50/html-template-5250710.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/52/50/html-template-full-5250710.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <h3>
                        <a
                          href="/ht/5250710/the-best-barbershop-html-template"
                          title="The Best Barbershop Web Templates"
                        >
                          The Best Barbershop Web Templates
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 280 }}
                  >
                    <div
                      className="download-block "
                      style={{ backgroundColor: "#363636" }}
                    >
                      <div
                        style={{ color: "#ffffff" }}
                        className="download-title"
                      >
                        Customize Any Template
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#cd30c0" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 672 }}
                    data-like={110}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5275108/we-broke-the-rules-by-developing-customized-strategies-html-template"
                        style={{ width: 260, height: 622 }}
                        title="We Broke The Rules By Developing Customized Strategies Responsive Website"
                      >
                        <img
                          alt="We Broke The Rules By Developing Customized Strategies Responsive Website"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/75/html-template-5275108.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/52/75/html-template-full-5275108.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5275108/we-broke-the-rules-by-developing-customized-strategies-html-template"
                        title="We Broke The Rules By Developing Customized Strategies Responsive Website"
                      >
                        We Broke The Rules By Developing Customized Strategies
                        Responsive Website
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 867 }}
                    data-like={13606}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/1241583/new-technology-perspectives-html-template"
                        style={{ width: 260, height: 817 }}
                        title="New Technology Perspectives Site Templates"
                      >
                        <img
                          alt="New Technology Perspectives Site Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/12/41/html-template-1241583.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/12/41/html-template-full-1241583.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/1241583/new-technology-perspectives-html-template"
                        title="New Technology Perspectives Site Templates"
                      >
                        New Technology Perspectives Site Templates
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 291 }}
                    data-like={109}
                    data-set={30}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5252281/haircuts-shaving-and-beard-trimming-services-html-template"
                        style={{ width: 260, height: 241 }}
                        title="Haircuts, Shaving And Beard Trimming Services Html Page"
                      >
                        <img
                          alt="Haircuts, Shaving And Beard Trimming Services Html Page"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/52/html-template-5252281.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5252281/haircuts-shaving-and-beard-trimming-services-html-template"
                        title="Haircuts, Shaving And Beard Trimming Services Html Page"
                      >
                        Haircuts, Shaving And Beard Trimming Services Html Page
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 680 }}
                    data-like={1436}
                    data-set={19}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4460252/property-management-html-template"
                        style={{ width: 260, height: 630 }}
                        title="Property Management Templates Free"
                      >
                        <img
                          alt="Property Management Templates Free"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/44/60/html-template-4460252.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/44/60/html-template-full-4460252.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4460252/property-management-html-template"
                        title="Property Management Templates Free"
                      >
                        Property Management Templates Free
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 204 }}
                    data-like={57}
                    data-set={12}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5370587/learn-more-about-services-html-template"
                        style={{ width: 260, height: 154 }}
                        title="Learn More About Services From Scratch"
                      >
                        <img
                          alt="Learn More About Services From Scratch"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/70/html-template-5370587.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5370587/learn-more-about-services-html-template"
                        title="Learn More About Services From Scratch"
                      >
                        Learn More About Services From Scratch
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 209 }}
                    data-like={106}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5275794/we-achieve-extraordinary-outcomes-html-template"
                        style={{ width: 260, height: 159 }}
                        title="We Achieve Extraordinary Outcomes Html Css"
                      >
                        <img
                          alt="We Achieve Extraordinary Outcomes Html Css"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/75/html-template-5275794.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5275794/we-achieve-extraordinary-outcomes-html-template"
                        title="We Achieve Extraordinary Outcomes Html Css"
                      >
                        We Achieve Extraordinary Outcomes Html Css
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 197 }}
                    data-like={1361}
                    data-set={19}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4481532/visit-our-office-html-template"
                        style={{ width: 260, height: 147 }}
                        title="Visit Our Office Admin Templates"
                      >
                       
                        <img
                          alt="Visit Our Office Admin Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/44/81/html-template-4481532.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4481532/visit-our-office-html-template"
                        title="Visit Our Office Admin Templates"
                      >
                        Visit Our Office Admin Templates
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 221 }}
                    data-like={2858}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/815676/ask-for-information-html-template"
                        style={{ width: 260, height: 171 }}
                        title="Ask For Information Agency Template"
                      >
                        <img
                          alt="Ask For Information Agency Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/81/56/html-template-815676.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/815676/ask-for-information-html-template"
                        title="Ask For Information Agency Template"
                      >
                        Ask For Information Agency Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 202 }}
                    data-like={109}
                    data-set={14}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5315586/this-is-our-boss-html-template"
                        style={{ width: 260, height: 152 }}
                        title="This Is Our Boss Free HTML Templates"
                      >
                        <img
                          alt="This Is Our Boss Free HTML Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/15/html-template-5315586.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5315586/this-is-our-boss-html-template"
                        title="This Is Our Boss Free HTML Templates"
                      >
                        This Is Our Boss Free HTML Templates
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 845 }}
                    data-like={194}
                    data-set={32}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5231517/qualified-solar-professionals-html-template"
                        style={{ width: 260, height: 795 }}
                        title="Qualified Solar Professionals Website Layout"
                      >
                        <img
                          alt="Qualified Solar Professionals Website Layout"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/31/html-template-5231517.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/52/31/html-template-full-5231517.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <h3>
                        <a
                          href="/ht/5231517/qualified-solar-professionals-html-template"
                          title="Qualified Solar Professionals Website Layout"
                        >
                          Qualified Solar Professionals Website Layout
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 280 }}
                  >
                    <div
                      className="download-block white-block"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        style={{ color: "#3c3c3c" }}
                        className="download-title"
                      >
                        Build Website with no Coding
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#ec311e" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 858 }}
                    data-like={699}
                    data-set={36}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4859949/manhattan-barbershop-html-template"
                        style={{ width: 260, height: 808 }}
                        title="Manhattan Barbershop One Page"
                      >
                        <img
                          alt="Manhattan Barbershop One Page"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/48/59/html-template-4859949.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/48/59/html-template-full-4859949.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4859949/manhattan-barbershop-html-template"
                        title="Manhattan Barbershop One Page"
                      >
                        Manhattan Barbershop One Page
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 581 }}
                    data-like={1643}
                    data-set={13}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4298248/lower-food-cost-html-template"
                        style={{ width: 260, height: 531 }}
                        title="Lower Food Cost Html Site"
                      >
                        <img
                          alt="Lower Food Cost Html Site"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/42/98/html-template-4298248.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/42/98/html-template-full-4298248.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4298248/lower-food-cost-html-template"
                        title="Lower Food Cost Html Site"
                      >
                        Lower Food Cost Html Site
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 869 }}
                    data-like={227}
                    data-set={26}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5203901/quality-and-attractive-designs-html-template"
                        style={{ width: 260, height: 819 }}
                        title="Quality And Attractive Designs Live Demo"
                      >
                        <img
                          alt="Quality And Attractive Designs Live Demo"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/03/html-template-5203901.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/52/03/html-template-full-5203901.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5203901/quality-and-attractive-designs-html-template"
                        title="Quality And Attractive Designs Live Demo"
                      >
                        Quality And Attractive Designs Live Demo
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 742 }}
                    data-like={1035}
                    data-set={19}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4628549/engineers-about-projects-html-template"
                        style={{ width: 260, height: 692 }}
                        title="Engineers About Projects Html Web"
                      >
                        <img
                          alt="Engineers About Projects Html Web"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/46/28/html-template-4628549.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/46/28/html-template-full-4628549.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4628549/engineers-about-projects-html-template"
                        title="Engineers About Projects Html Web"
                      >
                        Engineers About Projects Html Web
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 655 }}
                    data-like={64}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5332844/this-is-the-best-direction-html-template"
                        style={{ width: 260, height: 605 }}
                        title="This Is The Best Direction Web Development"
                      >
                        <img
                          alt="This Is The Best Direction Web Development"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/32/html-template-5332844.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/53/32/html-template-full-5332844.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5332844/this-is-the-best-direction-html-template"
                        title="This Is The Best Direction Web Development"
                      >
                        This Is The Best Direction Web Development
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 811 }}
                    data-like={1029}
                    data-set={35}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4544705/book-your-outdoor-adventure-html-template"
                        style={{ width: 260, height: 761 }}
                        title="Book Your Outdoor Adventure HTML Template"
                      >
                        <img
                          alt="Book Your Outdoor Adventure HTML Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/45/44/html-template-4544705.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/45/44/html-template-full-4544705.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4544705/book-your-outdoor-adventure-html-template"
                        title="Book Your Outdoor Adventure HTML Template"
                      >
                        Book Your Outdoor Adventure HTML Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 694 }}
                    data-like={847}
                    data-set={28}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4724231/handyman-services-html-template"
                        style={{ width: 260, height: 644 }}
                        title="Handyman Services Bootstrap HTML"
                      >
                        <img
                          alt="Handyman Services Bootstrap HTML"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/47/24/html-template-4724231.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/47/24/html-template-full-4724231.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4724231/handyman-services-html-template"
                        title="Handyman Services Bootstrap HTML"
                      >
                        Handyman Services Bootstrap HTML
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 660 }}
                    data-like={994}
                    data-set={33}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4596310/one-of-the-best-known-firms-html-template"
                        style={{ width: 260, height: 610 }}
                        title="One Of The Best-Known Firms Free Download"
                      >
                        <img
                          alt="One Of The Best-Known Firms Free Download"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/45/96/html-template-4596310.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/45/96/html-template-full-4596310.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4596310/one-of-the-best-known-firms-html-template"
                        title="One Of The Best-Known Firms Free Download"
                      >
                        One Of The Best-Known Firms Free Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 199 }}
                    data-like={50}
                    data-set={12}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5370522/call-to-the-office-html-template"
                        style={{ width: 260, height: 149 }}
                        title="Call To The Office Responsive Html"
                      >
                        <img
                          alt="Call To The Office Responsive Html"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/70/html-template-5370522.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5370522/call-to-the-office-html-template"
                        title="Call To The Office Responsive Html"
                      >
                        Call To The Office Responsive Html
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 1005 }}
                    data-like={1200}
                    data-set={27}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4418586/architecture-and-town-planning-html-template"
                        style={{ width: 260, height: 955 }}
                        title="Architecture And Town Planning Contact Form"
                      >
                        <img
                          alt="Architecture And Town Planning Contact Form"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/44/18/html-template-4418586.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/44/18/html-template-full-4418586.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <h3>
                        <a
                          href="/ht/4418586/architecture-and-town-planning-html-template"
                          title="Architecture And Town Planning Contact Form"
                        >
                          Architecture And Town Planning Contact Form
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 320 }}
                  >
                    <div
                      className="download-block "
                      style={{ backgroundColor: "#363636" }}
                    >
                      <div
                        style={{ color: "#ffffff" }}
                        className="download-title"
                      >
                        Free Website Builder Software
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#cd30c0" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 765 }}
                    data-like={56}
                    data-set={20}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5356561/economics-sonsulting-html-template"
                        style={{ width: 260, height: 715 }}
                        title="Economics Сonsulting Simple HTML Template"
                      >
                        <img
                          alt="Economics Сonsulting Simple HTML Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/56/html-template-5356561.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/53/56/html-template-full-5356561.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5356561/economics-sonsulting-html-template"
                        title="Economics Сonsulting Simple HTML Template"
                      >
                        Economics Сonsulting Simple HTML Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 815 }}
                    data-like={2215}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/3840270/teaching-practices-html-template"
                        style={{ width: 260, height: 765 }}
                        title="Teaching Practices Html5 Template"
                      >
                        <img
                          alt="Teaching Practices Html5 Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/38/40/html-template-3840270.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/38/40/html-template-full-3840270.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/3840270/teaching-practices-html-template"
                        title="Teaching Practices Html5 Template"
                      >
                        Teaching Practices Html5 Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 663 }}
                    data-like={854}
                    data-set={28}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4663785/we-bake-fresh-handmade-bread-html-template"
                        style={{ width: 260, height: 613 }}
                        title="We Bake Fresh, Handmade Bread Html Website Template"
                      >
                        <img
                          alt="We Bake Fresh, Handmade Bread Html Website Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/46/63/html-template-4663785.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/46/63/html-template-full-4663785.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4663785/we-bake-fresh-handmade-bread-html-template"
                        title="We Bake Fresh, Handmade Bread Html Website Template"
                      >
                        We Bake Fresh, Handmade Bread Html Website Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 1030 }}
                    data-like={533}
                    data-set={28}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4928892/fitness-classes-indoor-pools-html-template"
                        style={{ width: 260, height: 980 }}
                        title="Fitness Classes, Indoor Pools Html Code Template"
                      >
                        <img
                          alt="Fitness Classes, Indoor Pools Html Code Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/49/28/html-template-4928892.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/49/28/html-template-full-4928892.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4928892/fitness-classes-indoor-pools-html-template"
                        title="Fitness Classes, Indoor Pools Html Code Template"
                      >
                        Fitness Classes, Indoor Pools Html Code Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 640 }}
                    data-like={2758}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/3562298/pro-design-studio-html-template"
                        style={{ width: 260, height: 590 }}
                        title="Pro Design Studio Admin Templates"
                      >
                        <img
                          alt="Pro Design Studio Admin Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/35/62/html-template-3562298.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/35/62/html-template-full-3562298.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/3562298/pro-design-studio-html-template"
                        title="Pro Design Studio Admin Templates"
                      >
                        Pro Design Studio Admin Templates
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 665 }}
                    data-like={1849}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4027124/professional-and-enthusiastic-html-template"
                        style={{ width: 260, height: 615 }}
                        title="Professional And Enthusiastic Portfolio Template"
                      >
                        <img
                          alt="Professional And Enthusiastic Portfolio Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/40/27/html-template-4027124.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/40/27/html-template-full-4027124.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4027124/professional-and-enthusiastic-html-template"
                        title="Professional And Enthusiastic Portfolio Template"
                      >
                        Professional And Enthusiastic Portfolio Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 158 }}
                    data-like={108}
                    data-set={12}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5297869/what-we-believe-in-html-template"
                        style={{ width: 260, height: 108 }}
                        title="What We Believe In Color Schemes"
                      >
                        <img
                          alt="What We Believe In Color Schemes"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/97/html-template-5297869.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5297869/what-we-believe-in-html-template"
                        title="What We Believe In Color Schemes"
                      >
                        What We Believe In Color Schemes
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 297 }}
                    data-like={151}
                    data-set={30}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5252642/super-professional-barbers-html-template"
                        style={{ width: 260, height: 247 }}
                        title="Super Professional Barbers Content Support"
                      >
                        <img
                          alt="Super Professional Barbers Content Support"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/52/html-template-5252642.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5252642/super-professional-barbers-html-template"
                        title="Super Professional Barbers Content Support"
                      >
                        Super Professional Barbers Content Support
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 218 }}
                    data-like={88}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5274844/we-work-with-ambitious-client-html-template"
                        style={{ width: 260, height: 168 }}
                        title="We Work With Ambitious Client Template Details"
                      >
                        <img
                          alt="We Work With Ambitious Client Template Details"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/74/html-template-5274844.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5274844/we-work-with-ambitious-client-html-template"
                        title="We Work With Ambitious Client Template Details"
                      >
                        We Work With Ambitious Client Template Details
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 212 }}
                    data-like={46}
                    data-set={12}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5370335/new-stats-html-template"
                        style={{ width: 260, height: 162 }}
                        title="New Stats Premium Elements"
                      >
                        <img
                          alt="New Stats Premium Elements"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/70/html-template-5370335.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <h3>
                        <a
                          href="/ht/5370335/new-stats-html-template"
                          title="New Stats Premium Elements"
                        >
                          New Stats Premium Elements
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 280 }}
                  >
                    <div
                      className="download-block white-block"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div
                        style={{ color: "#3c3c3c" }}
                        className="download-title"
                      >
                        Create your own Website
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#ec311e" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 720 }}
                    data-like={2027}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/3847937/a-bit-about-me-html-template"
                        style={{ width: 260, height: 670 }}
                        title="A Bit About Me Page HTML"
                      >
                        <img
                          alt="A Bit About Me Page HTML"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/38/47/html-template-3847937.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/38/47/html-template-full-3847937.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/3847937/a-bit-about-me-html-template"
                        title="A Bit About Me Page HTML"
                      >
                        A Bit About Me Page HTML
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 228 }}
                    data-like={74}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5315896/data-and-analytics-services-html-template"
                        style={{ width: 260, height: 178 }}
                        title="Data And Analytics Services Landing Page"
                      >
                        <img
                          alt="Data And Analytics Services Landing Page"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/15/html-template-5315896.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5315896/data-and-analytics-services-html-template"
                        title="Data And Analytics Services Landing Page"
                      >
                        Data And Analytics Services Landing Page
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 208 }}
                    data-like={45}
                    data-set={12}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5370551/marketing-and-planning-html-template"
                        style={{ width: 260, height: 158 }}
                        title="Marketing And Planning HTML CSS"
                      >
                        <img
                          alt="Marketing And Planning HTML CSS"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/70/html-template-5370551.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5370551/marketing-and-planning-html-template"
                        title="Marketing And Planning HTML CSS"
                      >
                        Marketing And Planning HTML CSS
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 144 }}
                    data-like={100}
                    data-set={12}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5297834/book-for-the-next-html-template"
                        style={{ width: 260, height: 94 }}
                        title="Book For The Next Social Media"
                      >
                        <img
                          alt="Book For The Next Social Media"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/97/html-template-5297834.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5297834/book-for-the-next-html-template"
                        title="Book For The Next Social Media"
                      >
                        Book For The Next Social Media
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 830 }}
                    data-like={1347}
                    data-set={24}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4225951/we-create-brands-and-bring-them-to-life-html-template"
                        style={{ width: 260, height: 780 }}
                        title="We Create Brands And Bring Them To Life Google Maps"
                      >
                        <img
                          alt="We Create Brands And Bring Them To Life Google Maps"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/42/25/html-template-4225951.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/42/25/html-template-full-4225951.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4225951/we-create-brands-and-bring-them-to-life-html-template"
                        title="We Create Brands And Bring Them To Life Google Maps"
                      >
                        We Create Brands And Bring Them To Life Google Maps
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 379 }}
                    data-like={144}
                    data-set={32}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5214342/solar-project-development-html-template"
                        style={{ width: 260, height: 329 }}
                        title="Solar Project Development Agency Template"
                      >
                        <img
                          alt="Solar Project Development Agency Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/14/html-template-5214342.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5214342/solar-project-development-html-template"
                        title="Solar Project Development Agency Template"
                      >
                        Solar Project Development Agency Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 571 }}
                    data-like={272}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5110004/lets-talk-about-html-template"
                        style={{ width: 260, height: 521 }}
                        title="Let'S Talk About Website Layout HTML"
                      >
                        <img
                          alt="Let'S Talk About Website Layout HTML"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/51/10/html-template-5110004.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/51/10/html-template-full-5110004.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5110004/lets-talk-about-html-template"
                        title="Let'S Talk About Website Layout HTML"
                      >
                        Let'S Talk About Website Layout HTML
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 665 }}
                    data-like={485}
                    data-set={24}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/3264603/landing-html-template"
                        style={{ width: 260, height: 615 }}
                        title="Landing HTML Page Template"
                      >
                        <img
                          alt="Landing HTML Page Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/32/64/html-template-3264603.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/32/64/html-template-full-3264603.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/3264603/landing-html-template"
                        title="Landing HTML Page Template"
                      >
                        Landing HTML Page Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 807 }}
                    data-like={1781}
                    data-set={28}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/3854218/local-home-repair-html-template"
                        style={{ width: 260, height: 757 }}
                        title="Local Home Repair Responsive Html5"
                      >
                        <img
                          alt="Local Home Repair Responsive Html5"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/38/54/html-template-3854218.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/38/54/html-template-full-3854218.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/3854218/local-home-repair-html-template"
                        title="Local Home Repair Responsive Html5"
                      >
                        Local Home Repair Responsive Html5
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 222 }}
                    data-like={595}
                    data-set={23}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4786621/contacts-with-grid-repeater-html-template"
                        style={{ width: 260, height: 172 }}
                        title="Contacts With Grid Repeater Free Website"
                      >
                        <img
                          alt="Contacts With Grid Repeater Free Website"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/47/86/html-template-4786621.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <h3>
                        <a
                          href="/ht/4786621/contacts-with-grid-repeater-html-template"
                          title="Contacts With Grid Repeater Free Website"
                        >
                          Contacts With Grid Repeater Free Website
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 460 }}
                  >
                    <div
                      className="download-block "
                      style={{ backgroundColor: "#363636" }}
                    >
                      <img
                        className="lazyload"
                        data-src="//images01.nicepage.com/thumbs/a122014e1e8cdf24af08f98c/b99db2cc11f35f4eab449723/responsive-small-animation-dark_150.gif"
                        alt="Fully Responsive Templates"
                      />
                      <div
                        style={{ color: "#ffffff" }}
                        className="download-title"
                      >
                        Fully Responsive Templates
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#cd30c0" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 180 }}
                    data-like={3370}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/3081008/contact-us-block-with-map-html-template"
                        style={{ width: 260, height: 130 }}
                        title="Contact Us Block With Map Responsive Html5 Template"
                      >
                        <img
                          alt="Contact Us Block With Map Responsive Html5 Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/30/81/html-template-3081008.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/3081008/contact-us-block-with-map-html-template"
                        title="Contact Us Block With Map Responsive Html5 Template"
                      >
                        Contact Us Block With Map Responsive Html5 Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 358 }}
                    data-like={962}
                    data-set={27}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4455005/creative-residential-designsolutions-html-template"
                        style={{ width: 260, height: 308 }}
                        title="Creative Residential Designsolutions Basic HTML Template"
                      >
                        <img
                          alt="Creative Residential Designsolutions Basic HTML Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/44/55/html-template-4455005.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4455005/creative-residential-designsolutions-html-template"
                        title="Creative Residential Designsolutions Basic HTML Template"
                      >
                        Creative Residential Designsolutions Basic HTML Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 713 }}
                    data-like={784}
                    data-set={19}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4617588/a-full-range-of-services-html-template"
                        style={{ width: 260, height: 663 }}
                        title="A Full Range Of Services New Themes"
                      >
                        <img
                          alt="A Full Range Of Services New Themes"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/46/17/html-template-4617588.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/46/17/html-template-full-4617588.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4617588/a-full-range-of-services-html-template"
                        title="A Full Range Of Services New Themes"
                      >
                        A Full Range Of Services New Themes
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 204 }}
                    data-like={1194}
                    data-set={13}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4310973/a-culinary-html-template"
                        style={{ width: 260, height: 154 }}
                        title="A Culinary Design Template"
                      >
                        <img
                          alt="A Culinary Design Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/43/10/html-template-4310973.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4310973/a-culinary-html-template"
                        title="A Culinary Design Template"
                      >
                        A Culinary Design Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 798 }}
                    data-like={2367}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/3544585/start-your-trip-almost-anywhere-html-template"
                        style={{ width: 260, height: 748 }}
                        title="Start Your Trip Almost Anywhere Modern Web"
                      >
                        <img
                          alt="Start Your Trip Almost Anywhere Modern Web"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/35/44/html-template-3544585.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/35/44/html-template-full-3544585.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/3544585/start-your-trip-almost-anywhere-html-template"
                        title="Start Your Trip Almost Anywhere Modern Web"
                      >
                        Start Your Trip Almost Anywhere Modern Web
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 309 }}
                    data-like={41}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5370963/combining-quantitative-data-with-qualitative-insights-html-template"
                        style={{ width: 260, height: 259 }}
                        title="Combining Quantitative Data With Qualitative Insights Css Templates"
                      >
                        <img
                          alt="Combining Quantitative Data With Qualitative Insights Css Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/70/html-template-5370963.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5370963/combining-quantitative-data-with-qualitative-insights-html-template"
                        title="Combining Quantitative Data With Qualitative Insights Css Templates"
                      >
                        Combining Quantitative Data With Qualitative Insights
                        Css Templates
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 331 }}
                    data-like={75}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5275933/we-helped-our-client-create-a-five-year-plan-html-template"
                        style={{ width: 260, height: 281 }}
                        title="We Helped Our Client Create A Five-Year Plan Html Web Page Template"
                      >
                        <img
                          alt="We Helped Our Client Create A Five-Year Plan Html Web Page Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/75/html-template-5275933.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5275933/we-helped-our-client-create-a-five-year-plan-html-template"
                        title="We Helped Our Client Create A Five-Year Plan Html Web Page Template"
                      >
                        We Helped Our Client Create A Five-Year Plan Html Web
                        Page Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 264 }}
                    data-like={271}
                    data-set={35}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5093726/our-brand-designers-strategists-and-programmers-html-template"
                        style={{ width: 260, height: 214 }}
                        title="Our Brand Designers, Strategists, And Programmers Responsive Html5"
                      >
                        <img
                          alt="Our Brand Designers, Strategists, And Programmers Responsive Html5"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/50/93/html-template-5093726.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5093726/our-brand-designers-strategists-and-programmers-html-template"
                        title="Our Brand Designers, Strategists, And Programmers Responsive Html5"
                      >
                        Our Brand Designers, Strategists, And Programmers
                        Responsive Html5
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 229 }}
                    data-like={1129}
                    data-set={12}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4333622/increase-sales-html-template"
                        style={{ width: 260, height: 179 }}
                        title="Increase Sales Html Page Design"
                      >
                        <img
                          alt="Increase Sales Html Page Design"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/43/33/html-template-4333622.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4333622/increase-sales-html-template"
                        title="Increase Sales Html Page Design"
                      >
                        Increase Sales Html Page Design
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 236 }}
                    data-like={139}
                    data-set={32}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5213378/power-generation-from-solar-html-template"
                        style={{ width: 260, height: 186 }}
                        title="Power Generation From Solar Web Development"
                      >
                        <img
                          alt="Power Generation From Solar Web Development"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/13/html-template-5213378.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <h3>
                        <a
                          href="/ht/5213378/power-generation-from-solar-html-template"
                          title="Power Generation From Solar Web Development"
                        >
                          Power Generation From Solar Web Development
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 420 }}
                  >
                    <div
                      className="download-block white-block"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <img
                        className="lazyload"
                        data-src="//images01.nicepage.com/thumbs/a122014e1e8cdf24af08f98c/b09223d099135909bcb0d471/drag-n-drop2_150.gif"
                        alt="Easy Drag and Drop Editor"
                      />
                      <div
                        style={{ color: "#3c3c3c" }}
                        className="download-title"
                      >
                        Easy Drag and Drop Editor
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#ec311e" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 641 }}
                    data-like={306}
                    data-set={19}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5030798/free-open-html-template"
                        style={{ width: 260, height: 591 }}
                        title="Free & Open Free Html"
                      >
                        <img
                          alt="Free & Open Free Html"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/50/30/html-template-5030798.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/50/30/html-template-full-5030798.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5030798/free-open-html-template"
                        title="Free & Open Free Html"
                      >
                        Free &amp; Open Free Html
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 179 }}
                    data-like={126}
                    data-set={32}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5225572/solar-power-works-by-converting-energy-html-template"
                        style={{ width: 260, height: 129 }}
                        title="Solar Power Works By Converting Energy Responsive HTML Template"
                      >
                        <img
                          alt="Solar Power Works By Converting Energy Responsive HTML Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/25/html-template-5225572.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5225572/solar-power-works-by-converting-energy-html-template"
                        title="Solar Power Works By Converting Energy Responsive HTML Template"
                      >
                        Solar Power Works By Converting Energy Responsive HTML
                        Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 185 }}
                    data-like={353}
                    data-set={15}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4974204/people-cohesion-html-template"
                        style={{ width: 260, height: 135 }}
                        title="People Cohesion Real Estate"
                      >
                        <img
                          alt="People Cohesion Real Estate"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/49/74/html-template-4974204.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4974204/people-cohesion-html-template"
                        title="People Cohesion Real Estate"
                      >
                        People Cohesion Real Estate
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 248 }}
                    data-like={618}
                    data-set={28}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4735067/kitchen-and-bath-repair-html-template"
                        style={{ width: 260, height: 198 }}
                        title="Kitchen And Bath Repair Business Consulting"
                      >
                        <img
                          alt="Kitchen And Bath Repair Business Consulting"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/47/35/html-template-4735067.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4735067/kitchen-and-bath-repair-html-template"
                        title="Kitchen And Bath Repair Business Consulting"
                      >
                        Kitchen And Bath Repair Business Consulting
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 822 }}
                    data-like={2941}
                    data-set={27}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/3125838/dreadlocks-and-weave-spa-html-template"
                        style={{ width: 260, height: 772 }}
                        title="Dreadlocks And Weave Spa Design Template"
                      >
                        <img
                          alt="Dreadlocks And Weave Spa Design Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/31/25/html-template-3125838.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/31/25/html-template-full-3125838.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/3125838/dreadlocks-and-weave-spa-html-template"
                        title="Dreadlocks And Weave Spa Design Template"
                      >
                        Dreadlocks And Weave Spa Design Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 256 }}
                    data-like={73}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5275719/bold-steps-define-the-future-html-template"
                        style={{ width: 260, height: 206 }}
                        title="Bold Steps Define The Future Creative Agency"
                      >
                        <img
                          alt="Bold Steps Define The Future Creative Agency"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/75/html-template-5275719.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5275719/bold-steps-define-the-future-html-template"
                        title="Bold Steps Define The Future Creative Agency"
                      >
                        Bold Steps Define The Future Creative Agency
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 781 }}
                    data-like={64}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5326552/award-winning-company-html-template"
                        style={{ width: 260, height: 731 }}
                        title="Award-Winning Company Landing Page Template"
                      >
                        <img
                          alt="Award-Winning Company Landing Page Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/26/html-template-5326552.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/53/26/html-template-full-5326552.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5326552/award-winning-company-html-template"
                        title="Award-Winning Company Landing Page Template"
                      >
                        Award-Winning Company Landing Page Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 590 }}
                    data-like={2059}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/3626410/business-novelty-html-template"
                        style={{ width: 260, height: 540 }}
                        title="Business Novelty Free Css"
                      >
                        <img
                          alt="Business Novelty Free Css"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/36/26/html-template-3626410.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/36/26/html-template-full-3626410.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/3626410/business-novelty-html-template"
                        title="Business Novelty Free Css"
                      >
                        Business Novelty Free Css
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 181 }}
                    data-like={74}
                    data-set={14}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5315399/turn-your-ideas-around-html-template"
                        style={{ width: 260, height: 131 }}
                        title="Turn Your Ideas Around Free Css"
                      >
                        <img
                          alt="Turn Your Ideas Around Free Css"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/15/html-template-5315399.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5315399/turn-your-ideas-around-html-template"
                        title="Turn Your Ideas Around Free Css"
                      >
                        Turn Your Ideas Around Free Css
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 245 }}
                    data-like={10509}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/813195/contact-info-with-icons-html-template"
                        style={{ width: 260, height: 195 }}
                        title="Contact Info With Icons Portfolio Template"
                      >
                        <img
                          alt="Contact Info With Icons Portfolio Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/81/31/html-template-813195.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <h3>
                        <a
                          href="/ht/813195/contact-info-with-icons-html-template"
                          title="Contact Info With Icons Portfolio Template"
                        >
                          Contact Info With Icons Portfolio Template
                        </a>
                      </h3>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item"
                    style={{ width: 260, height: 460 }}
                  >
                    <div
                      className="download-block "
                      style={{ backgroundColor: "#363636" }}
                    >
                      <img
                        className="lazyload"
                        data-src="//images01.nicepage.com/thumbs/a122014e1e8cdf24af08f98c/8739790df40451e683e5a152/templates-small-animation-dark_150.gif"
                        alt="The Biggest Template Collection"
                      />
                      <div
                        style={{ color: "#ffffff" }}
                        className="download-title"
                      >
                        The Biggest Template Collection
                      </div>
                      <a
                        className="btn btn-lg download-btn"
                        href="/download"
                        type="button"
                        rel="nofollow"
                        style={{ backgroundColor: "#cd30c0" }}
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 709 }}
                    data-like={48}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5352746/look-how-it-goes-html-template"
                        style={{ width: 260, height: 659 }}
                        title="Look How It Goes Wordpress Themes"
                      >
                        <img
                          alt="Look How It Goes Wordpress Themes"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/52/html-template-5352746.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/53/52/html-template-full-5352746.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5352746/look-how-it-goes-html-template"
                        title="Look How It Goes Wordpress Themes"
                      >
                        Look How It Goes Wordpress Themes
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 647 }}
                    data-like={158}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5191816/top-scores-html-template"
                        style={{ width: 260, height: 597 }}
                        title="Top Scores Full Photo"
                      >
                        <img
                          alt="Top Scores Full Photo"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/51/91/html-template-5191816.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/51/91/html-template-full-5191816.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5191816/top-scores-html-template"
                        title="Top Scores Full Photo"
                      >
                        Top Scores Full Photo
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 312 }}
                    data-like={634}
                    data-set={19}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4662276/nyc-running-club-contact-form-html-template"
                        style={{ width: 260, height: 262 }}
                        title="NYC Running Club Contact Form Bootstrap Html"
                      >
                        <img
                          alt="NYC Running Club Contact Form Bootstrap Html"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/46/62/html-template-4662276.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4662276/nyc-running-club-contact-form-html-template"
                        title="NYC Running Club Contact Form Bootstrap Html"
                      >
                        NYC Running Club Contact Form Bootstrap Html
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 177 }}
                    data-like={37}
                    data-set={12}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5370349/development-specialist-html-template"
                        style={{ width: 260, height: 127 }}
                        title="Development Specialist Fully Responsive"
                      >
                        <img
                          alt="Development Specialist Fully Responsive"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/53/70/html-template-5370349.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5370349/development-specialist-html-template"
                        title="Development Specialist Fully Responsive"
                      >
                        Development Specialist Fully Responsive
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 662 }}
                    data-like={306}
                    data-set={19}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5023863/always-trusted-html-template"
                        style={{ width: 260, height: 612 }}
                        title="Always Trusted Bootstrap Templates"
                      >
                        <img
                          alt="Always Trusted Bootstrap Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/50/23/html-template-5023863.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/50/23/html-template-full-5023863.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5023863/always-trusted-html-template"
                        title="Always Trusted Bootstrap Templates"
                      >
                        Always Trusted Bootstrap Templates
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 247 }}
                    data-like={143}
                    data-set={22}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5211319/bakery-catalog-html-template"
                        style={{ width: 260, height: 197 }}
                        title="Bakery Catalog Live Demo"
                      >
                        <img
                          alt="Bakery Catalog Live Demo"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/11/html-template-5211319.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5211319/bakery-catalog-html-template"
                        title="Bakery Catalog Live Demo"
                      >
                        Bakery Catalog Live Demo
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 131 }}
                    data-like={639}
                    data-set={33}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/4596496/text-block-with-links-html-template"
                        style={{ width: 260, height: 81 }}
                        title="Text Block With Links Site Templates"
                      >
                        <img
                          alt="Text Block With Links Site Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/45/96/html-template-4596496.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/4596496/text-block-with-links-html-template"
                        title="Text Block With Links Site Templates"
                      >
                        Text Block With Links Site Templates
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 277 }}
                    data-like={241}
                    data-set={35}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5062437/architecture-design-and-planning-firm-html-template"
                        style={{ width: 260, height: 227 }}
                        title="Architecture, Design And Planning Firm Web Design"
                      >
                        <img
                          alt="Architecture, Design And Planning Firm Web Design"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/50/62/html-template-5062437.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5062437/architecture-design-and-planning-firm-html-template"
                        title="Architecture, Design And Planning Firm Web Design"
                      >
                        Architecture, Design And Planning Firm Web Design
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 550 }}
                    data-like={159}
                    data-set={18}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5154766/make-sure-you-choose-html-template"
                        style={{ width: 260, height: 500 }}
                        title="Make Sure You Choose Ecommerce Template"
                      >
                        <img
                          alt="Make Sure You Choose Ecommerce Template"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/51/54/html-template-5154766.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                      <a
                        className="btn btn-default btn-sm expand-page-button pull-right page-more"
                        href="#"
                        data-url="https://images01.nicepagecdn.com/page/51/54/html-template-full-5154766.jpg"
                      >
                        More ↓
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <a
                        href="/ht/5154766/make-sure-you-choose-html-template"
                        title="Make Sure You Choose Ecommerce Template"
                      >
                        Make Sure You Choose Ecommerce Template
                      </a>
                    </div>
                  </li>
                  <li
                    className="thumbnail-item title-one-row"
                    data-height={0}
                    style={{ width: 260, height: 275 }}
                    data-like={81}
                    data-set={12}
                  >
                    <div className="page-image">
                      <a
                        className="thumbnail"
                        href="/ht/5297919/four-purchasing-managers-html-template"
                        style={{ width: 260, height: 225 }}
                        title="Four Purchasing Managers Html Website Templates"
                      >
                        <img
                          alt="Four Purchasing Managers Html Website Templates"
                          className="media-image lazyload noversion"
                          data-src="https://images01.nicepagecdn.com/page/52/97/html-template-5297919.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                          style={{ maxWidth: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="page-title one-row ">
                      <h3>
                        <a
                          href="/ht/5297919/four-purchasing-managers-html-template"
                          title="Four Purchasing Managers Html Website Templates"
                        >
                          Four Purchasing Managers Html Website Templates
                        </a>
                      </h3>
                    </div>
                  </li>
                </ul>
                <div className="nav-buttons">
                  <a
                    className="btn btn-lg btn-default"
                    href="https://nicepage.com/html-templates?page=2"
                    type="button"
                  >
                    Next &gt;&gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last-custom-block">
        <div className="row">
          <div className="col-md-12">
            <div className="seo-text-block">
              <h2>Responsive HTML Website Templates</h2>
              <p>
                Web design and responsive site prototyping, including eCommerce,
                have changed recently. The builder uses an HTML ecommerce
                website template for a simple landing page as a complete or
                fully responsive website became spread and popular. A landing
                page usually comes as a template demo supplied by free CSS
                templates or free CSS website, allowing to catch visitor's
                interest with various color schemes and a collection of stylish
                web design template and elements. And please note that most of
                the page templates have simple HTML. They are clean, free
                templates and have a live demo. You can also design an online
                presentation of various forms of a single page website with a
                click.
              </p>
              <h2>Minimalistic Website Templates</h2>
              <p>
                To start any website with an HTML template, you will need
                content free or premium. Some photo materials can have privacy
                issues, and you should learn that before using those on your
                page template or WordPress themes. Modern web technologies used
                in web templates, including HTML CSS JavaScript, and bootstrap,
                allow the transformation of the basic HTML page into an advanced
                eCommerce website system, which a business company of any
                industry can use. Even simple aspect uses like personal
                portfolio template gallery, or single page updates, blog and
                events, for example, for a clothing store allowing using
                responsive design template samples to speed up the development
                and stimulate creative website design progress. You can use our
                free HTML templates as a quick construction for email templates,
                suitable for an HTML email, or a website layout and page HTML
                based on bootstrap templates for an online store.
              </p>
              <h2>Need Free Website Templates?</h2>
              <p>
                Site templates usually provided as HTML CSS templates perfectly
                suit various topics like an agency template and free HTML page
                portfolio or WordPress website templates. It can also be a
                website template for food, fashion, social media, or consulting
                website template. You can add photos and other content and free
                graphics required to make responsive templates and reflect the
                latest digital trends. It is normal to get HTML themes free and
                use them as an HTML site template or a web page used as a
                landing page template. Some downloaded HTML landing page
                templates, as samples, containing photography you can use for a
                portfolio template. And if you add product details, you can make
                a clothing store template, software home, and ideal template
                design.
              </p>
              <h2>Simple HTML Templates</h2>
              <p>
                Today to create a great layout for personal and business use,
                for example, a travel, wedding, health, interior, industrial,
                fitness, hotel, and other categories HTML website that looks
                perfect, you most likely need to search for a free download of a
                responsive template. Usually, a minimal HTML website template is
                open source and can have a builder or bootstrap HTML framework
                from GitHub as a foundation. For professional users in design
                having experience, we offer a comprehensive collection of
                WordPress and an HTML website template featuring style presets
                and effects, like parallax, video, contact form elements, and
                services to implement any creative ideas with WordPress plugins.
              </p>
              <p>
                HTML website templates may have have different applications. You
                can get css templates free download for templates with google
                maps, also make an HTML website template for making other
                templates free. Many designers may know that there are no ways
                to learn how to make a CSS website and with free download for
                making landing page HTML template. Today many contributors
                deliver html code template, expecting to get feedback in return
                that they care and appreciate since, for many people, it may be
                a good start or change in their work and careers.
              </p>
              <h2>One Page Responsive HTML Templates</h2>
              <p>
                What may you also expect visiting a template download service
                for HTML web samples? You can also get WordPress and an HTML
                website template designed since free WordPress themes are
                usually offered together with an HTML page template. You can
                share your responsive template if you like. New themes are
                always in demand on large learning and start up communities and
                forum sites. Businesses prefer fresh projects that they can get
                from HTML theme download resources. And for some specific uses
                like, for example, admin templates, simple HTML templates have
                big interest and marketing value. And HTML website template with
                CSS templates may include free Bootstrap templates for building
                HTML5 site templates.
              </p>
              <p>
                If you need a free website template, for example, real estate
                HTML template, HTML creative agency template for a bootstrap 4
                website template or bootstrap 4 template, you can build a page
                HTML template. There are many lms online courses on how to make
                HTML design templates. However, no kits are providing a skip to
                main content for an online course. You can start with a website
                template HTML builder to make a multipurpose html website with
                templates html5 based and study a tutorial how to design HTML
                website only then skip to main.
              </p>
              <p>
                You may also be interested in
                <a href="/templates">Templates</a>,
                <a href="/html5-template">HTML5 Template</a>,
                <a href="/css-templates">Cascading Style Sheets Templates</a>,
                <a href="/templates">Templates</a>,
                <a href="/wysiwyg-html-editor">WYSIWYG HTML Editor</a>
              </p>
              {/*br/>
<a href="/html-website-templates">HTML Website Templates</a>,
<a href="/basic-html-template">Basic HTML Template</a>, and
<a href="/simple-html-template">Simple HTML Template</a*/}
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="push" />
  </div>
  <div className="footer">
    <div className="footer-top">
      <div className="container">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n.footer-top a {\n    color: #ddd !important;\n    font-size: 16px;\n}\n"
          }}
        />
        <div className="row">
          <div className="col-md-2 col-sm-6 col-xs-12">
            <h6>Company</h6>
            <ul>
              <li>
                <a href="/doc/frequently-asked-questions-16656">FAQ</a>
              </li>
              <li>
                <a href="/Terms">Terms of Use</a>
              </li>
              <li>
                <a href="/Privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/Agreement">License Agreement</a>
              </li>
              <li>
                <a href="/About">About Us</a>
              </li>
              <li>
                <a href="/partners">Partners</a>
              </li>
              <li>
                <a href="/Abuse">Abuse</a>
              </li>
              <li>
                <a href="/Forum/Topic/Create">Contact Support</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 col-xs-12">
            <h6>Product</h6>
            <ul>
              <li>
                <a href="/download">Download</a>
              </li>
              <li>
                <a href="/features">400+ Features</a>
              </li>
              <li>
                <a href="/nicepage-review">Review</a>
              </li>
              <li>
                <a href="/affiliates">Affiliates</a>
              </li>
              <li>
                <a href="/doc">Documentation</a>
              </li>
              <li>
                <a href="/forum">Forum</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <h6>Themes &amp; Templates</h6>
            <ul>
              <li>
                <a href="/website-templates">Website Templates</a>
              </li>
              <li>
                <a href="/wordpress-themes">WordPress Themes</a>
              </li>
              <li>
                <a href="/html-templates">HTML Templates</a>
              </li>
              <li>
                <a href="/css-templates">CSS Templates</a>
              </li>
              <li>
                <a href="/joomla-templates">Joomla Templates</a>
              </li>
              <li>
                <a href="/woocommerce-theme">WooCommerce Themes</a>
              </li>
              <li>
                <a href="/html5-template">HTML5 Templates</a>
              </li>
              <li>
                <a href="/one-page-template">One Page Templates</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <h6>Nicepage</h6>
            <ul>
              <li>
                <a href="/website-builder">Website Builder</a>
              </li>
              <li>
                <a href="/html">HTML Website Builder</a>
              </li>
              <li>
                <a href="/wordpress">WordPress Website Builder</a>
              </li>
              <li>
                <a href="/joomla">Joomla Page Builder</a>
              </li>
              <li>
                <a href="/wysiwyg-html-editor">WYSIWYG HTML Editor</a>
              </li>
              <li>
                <a href="/static-site-generator">Static Site Generator</a>
              </li>
              <li>
                <a href="/html-code">HTML Code Generator</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 col-xs-12">
            <h6>Web Design</h6>
            <ul>
              <li>
                <a href="/website-design">Website Designs</a>
              </li>
              <li>
                <a href="/web-page-design">Web Page Designs</a>
              </li>
              <li>
                <a href="/web-design">Web Design</a>
              </li>
              <li>
                <a href="/web-page-designer">Web Page Designer</a>
              </li>
              <li>
                <a href="/landing-page">Landing Pages</a>
              </li>
              <li>
                <a href="/homepage-design">Homepage Designs</a>
              </li>
              <li>
                <a href="/website-mockup">Website Mockup</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div id="footer-links" className="footer-inline col-sm-12 pull-right">
            <div
              style={{ whiteSpace: "nowrap", float: "left", textAlign: "left" }}
            >
              <div className="row">
                <div className="col-sm-3">
                  <a
                    href="https://facebook.com/nicepageapp"
                    rel="noreferrer"
                    target="_blank"
                    style={{ marginRight: 10 }}
                  >
                    <svg
                      x="0px"
                      y="0px"
                      viewBox="0 0 112.2 112.2"
                      style={{ width: 24 }}
                    >
                      <circle fill="#3B5998" cx="56.1" cy="56.1" r={55} />
                      <path
                        fill="#FFFFFF"
                        d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
  	c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"
                      />
                    </svg>
                    <span
                      style={{
                        position: "relative",
                        top: "-7px",
                        marginLeft: 5
                      }}
                    >
                      Facebook
                    </span>
                  </a>
                </div>
                <div className="col-sm-3">
                  <a
                    href="https://twitter.com/NicepageApp"
                    rel="noreferrer"
                    target="_blank"
                    style={{ marginRight: 10 }}
                  >
                    <svg
                      x="0px"
                      y="0px"
                      viewBox="0 0 112.2 112.2"
                      style={{ width: 24 }}
                    >
                      <circle
                        fill="#55ACEE"
                        className="st0"
                        cx="56.1"
                        cy="56.1"
                        r={55}
                      />
                      <path
                        fill="#FFFFFF"
                        d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
				c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
				c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
				c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
				c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"
                      />
                    </svg>
                    <span
                      style={{
                        position: "relative",
                        top: "-7px",
                        marginLeft: 5
                      }}
                    >
                      Twitter
                    </span>
                  </a>
                </div>
                <div className="col-sm-3">
                  <a
                    href="https://youtube.com/nicepage?sub_confirmation=1"
                    rel="noreferrer"
                    target="_blank"
                    style={{ marginRight: 10 }}
                  >
                    <svg
                      x="0px"
                      y="0px"
                      viewBox="0 0 112.2 112.2"
                      style={{ width: 24 }}
                    >
                      <circle fill="#D22215" cx="56.1" cy="56.1" r={55} />
                      <path
                        fill="#FFFFFF"
                        d="M74.9,33.3H37.3c-7.4,0-13.4,6-13.4,13.4v18.8c0,7.4,6,13.4,13.4,13.4h37.6c7.4,0,13.4-6,13.4-13.4V46.7
  	C88.3,39.3,82.3,33.3,74.9,33.3L74.9,33.3z M65.9,57l-17.6,8.4c-0.5,0.2-1-0.1-1-0.6V47.5c0-0.5,0.6-0.9,1-0.6l17.6,8.9
  	C66.4,56,66.4,56.8,65.9,57L65.9,57z"
                      />
                    </svg>
                    <span
                      style={{
                        position: "relative",
                        top: "-7px",
                        marginLeft: 5
                      }}
                    >
                      YouTube
                    </span>
                  </a>
                </div>
                <div className="col-sm-3">
                  <a
                    href="https://www.pinterest.com/nicepagecom/pins"
                    rel="noreferrer"
                    target="_blank"
                    style={{ marginRight: 10 }}
                  >
                    <svg
                      x="0px"
                      y="0px"
                      viewBox="0 0 112.2 112.2"
                      style={{ width: 24 }}
                    >
                      <circle fill="#CB2027" cx="56.1" cy="56.1" r={55} />
                      <path
                        fill="#FFFFFF"
                        d="M61.1,76.9c-4.7-0.3-6.7-2.7-10.3-5c-2,10.7-4.6,20.9-11.9,26.2c-2.2-16.1,3.3-28.2,5.9-41
  	c-4.4-7.5,0.6-22.5,9.9-18.8c11.6,4.6-10,27.8,4.4,30.7C74.2,72,80.3,42.8,71,33.4C57.5,19.6,31.7,33,34.9,52.6
  	c0.8,4.8,5.8,6.2,2,12.9c-8.7-1.9-11.2-8.8-10.9-17.8C26.5,32.8,39.3,22.5,52.2,21c16.3-1.9,31.6,5.9,33.7,21.2
  	C88.2,59.5,78.6,78.2,61.1,76.9z"
                      />
                    </svg>
                    <span
                      style={{
                        position: "relative",
                        top: "-7px",
                        marginLeft: 5
                      }}
                    >
                      Pinterest
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/*    
<ul class="u-unstyled">
	<li><a href="/pricing">Premium</a></li>
	<li>|</li>
	<li><a href="/affiliates">Affiliates</a></li>
	<li>|</li>
	<li><a href="/Forum/Topic/Create?private=1">Contact Support</a></li>
	<li>|</li>
	<li><a href="/About">About</a></li>
	<li>|</li>
	<li><a href="/Terms">Terms</a></li>
	<li>|</li>
	<li><a href="/Privacy">Privacy</a></li>
	<li>|</li>
	<li><a href="/Agreement">License</a></li>
</ul>
*/}
            <div className="copy">
              © 2023 Nicepage Free Website Builder Software - All Rights
              Reserved
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</>

  
    )
}

export default Dummy;