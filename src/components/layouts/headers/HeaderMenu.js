/* eslint-disable */
/**
 * Header menu component
 */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classnames from "classnames";

// intl messages
import IntlMessages from '../../../util/IntlMessages';

// nav links
import navLinks from '../../../assets/data/NavLinks.js';

// helpers
import { getRoles } from "../../../helpers";

function HeaderMenu() {
   
   const roles = getRoles();
   return (
      <div className="horizontal-menu">
         <ul className="d-inline-block iron-header-menu mb-0">
            {navLinks.map((navLink, index) => {
               if (navLink.child_routes && navLink.child_routes != null) {
                  return (
                     <li key={index} className={classnames({ 'mega-menu': navLink.mega })}>
                        <a href="javascript:void(0)">
                           <IntlMessages id={navLink.menu_title} />
                        </a>
                        {(navLink.type && navLink.type === 'subMenu') ?
                           <Fragment>
                              {navLink.child_routes !== null &&
                                 <ul className="sub-menu mb-0">
                                    {navLink.child_routes && navLink.child_routes.map((subNavLink, index) => (
                                       <Fragment key={index}>
                                          {subNavLink.child_routes !== null ?
                                             <li>
                                                <a href="javascript:void(0)" className="d-flex justify-content-between align-items-center">
                                                   <IntlMessages id={subNavLink.menu_title} />
                                                   <i className="material-icons">keyboard_arrow_right</i>
                                                </a>
                                                <ul className="sub-menu-child mb-0">
                                                   {subNavLink.child_routes.map((subMenuItem, index) => (
                                                      <li key={index}>
                                                         <Link to={subMenuItem.path}>
                                                            <IntlMessages id={subMenuItem.menu_title} />
                                                         </Link>
                                                      </li>
                                                   ))}
                                                </ul>
                                             </li>
                                             :
                                             <li>
                                                <Link to={subNavLink.path}>
                                                   <IntlMessages id={subNavLink.menu_title} />
                                                </Link>
                                             </li>
                                          }
                                       </Fragment>
                                    ))}
                                 </ul>
                              }
                           </Fragment>
                           :
                           <Fragment>
                              {navLink.child_routes !== null &&
                                 <ul className="sub-menu mb-0 d-flex">
                                    {navLink.child_routes && Object.keys(navLink.child_routes).map((subNavLink, index) => (
                                       <li key={index}>
                                          <a href="javascript:void(0)"><IntlMessages id={subNavLink} /></a>
                                          <ul className="sub-menu mb-0">
                                             {navLink.child_routes[subNavLink].map((megaMenuItem, index) => (
                                                <li key={index}>
                                                   <Link to={megaMenuItem.path}>
                                                      <IntlMessages id={megaMenuItem.menu_title} />
                                                   </Link>
                                                </li>
                                             ))}
                                          </ul>
                                       </li>
                                    ))}
                                 </ul>
                              }
                           </Fragment>
                        }
                     </li>
                  )
               }
               
               if (roles && (roles === 'admin')) {
                  return (
                     <li key={index}>
                        <Link to={navLink.path} className={navLink.class}><IntlMessages id={navLink.menu_title} /></Link>
                     </li> 
                  )
               } else {
                  if (navLink.menu_title !== 'menu.adminPanel')
                     return (
                        <li key={index}>
                           <Link to={navLink.path} className={navLink.class}><IntlMessages id={navLink.menu_title} /></Link>
                        </li> 
                     )
                }
               
            })}
         </ul>
      </div>
   );
}

export default HeaderMenu;