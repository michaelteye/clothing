import React from 'react'
import twitter from "../assets/icons/png/twitter.png"
import facebook from "../assets/icons/png/facebook-f.png"
import instagram from "../assets/icons/png/instagram.png"
import planePaper from "../assets/icons/png/paper-plane.png"
import partners from "../assets/images/payment-partners.png"

export default function Footer() {
  return (
    <div>
         <div className="footer">
      <div className="footer__columns">
        <ul className="footer__columns--column">
          <li className="footer__columns--column--head">Main Menu</li>
          <li className="footer__columns--column--sub">Home</li>
          <li className="footer__columns--column--sub">T-shirts</li>
          <li className="footer__columns--column--sub">NBA</li>
          <li className="footer__columns--column--sub">Tracksuits</li>
          <li className="footer__columns--column--sub">
            Products Delivery 1 - 2 Days
          </li>
          <li className="footer__columns--column--sub">Contact</li>
          <li className="footer__columns--column--sub">Reviews</li>
        </ul>

        <ul className="footer__columns--column">
          <li className="footer__columns--column--head">Secondary Menu</li>
          <li className="footer__columns--column--sub">Search</li>
          <li className="footer__columns--column--sub">Privacy Policy</li>
          <li className="footer__columns--column--sub">Shopping Policy</li>
          <li className="footer__columns--column--sub">Returns Policy</li>
          <li className="footer__columns--column--sub">Terms of Service</li>
        </ul>

        <ul className="footer__columns--column">
          <li className="footer__columns--column--head">Subscribe</li>
          <li className="footer__columns--column--sub">
            Subscribe to our mailing list to <br />
            receive the latest news
          </li>
          <div className="footer__columns--column--email">
            <input
              type="text"
              className="footer__columns--column--email--emailaddress"
              placeholder="Email Address"
            />
            <img
              src={planePaper}
              alt=""
              className="footer__columns--column--email--send"
            />
          </div>
        </ul>

        <ul className="footer__columns--column">
          <li className="footer__columns--column--head">Follow us</li>

          <div className="footer__columns--column--social">
            <img
              src={facebook}
              alt="facebook"
              className="footer__columns--column--social--icon"
            />
            <img
              src={twitter}
              alt="facebook"
              className="footer__columns--column--social--icon"
            />
            <img
              src={instagram}
              alt="facebook"
              className="footer__columns--column--social--icon"
            />
          </div>
        </ul>
      </div>

      <div className="footer__down">
        <img
          src={partners}
          alt="payment-partners"
          className="footer__down--right"
        />
        <div className="footer__down--left">
          &copy; 2021 Jambuzani - All rights reserved
        </div>
      </div>
    </div>
    </div>
  )
}
