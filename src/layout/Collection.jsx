import React from 'react'
import goalKeeper from "../assets/images/other-collections/goalkeeper.jpg";
import kid from "../assets/images/other-collections/kids.jpg";
import pro from "../assets/images/other-collections/pro-player.jpg";
import socks from "../assets/images/other-collections/socks.jpg";
import largeSize from "../assets/images/other-collections/large-sizes.jpg";
import shorts from "../assets/images/other-collections/shorts.jpg";
import right from "../assets/icons/png/right.png";

export default function Collection() {
  return (
    <div>
     <div className="otherCollections">
      <div className="otherCollections__heading">OTHER COLLECTIONS</div>
      <div className="otherCollections__cards">
        <div className="otherCollections__cards--card">
          <img
            src={kid}
            alt="kids"
            className="otherCollections__cards--card--image"
          />
            <div className="otherCollections__cards--card--image--blur">
                <div className="otherCollections__cards--card--blur--text">Kids</div>
                    <img
                    src={right}
                    alt="right icon"
                    className="otherCollections__cards--card--image--blur--icon"
                    />
            </div>
        </div>

        <div className="otherCollections__cards--card">
          <img
            src={largeSize}
            alt="kids"
            className="otherCollections__cards--card--image"
          />
          <div className="otherCollections__cards--card--image--blur">
            <div className="otherCollections__cards--card--blur--text">
              Large Sizes
            </div>
            <img
              src={right}
              alt="right icon"
              class="otherCollections__cards--card--image--blur--icon"
            />
          </div>
        </div>

        <div class="otherCollections__cards--card">
          <img
            src={goalKeeper}
            alt="kids"
            className="otherCollections__cards--card--image"
          />
          <div className="otherCollections__cards--card--image--blur">
            <div class="otherCollections__cards--card--blur--text">
              Goalkeeper
            </div>
            <img
              src={right}
              alt="right icon"
              className="otherCollections__cards--card--image--blur--icon"
            />
          </div>
        </div>

        <div className="otherCollections__cards--card">
          <img
            src={pro}
            alt="kids"
            className="otherCollections__cards--card--image"
          />
          <div className="otherCollections__cards--card--image--blur">
            <div className="otherCollections__cards--card--blur--text">
              Authentic/Pro Player
            </div>
            <img
              src={right}
              alt="right icon"
              className="otherCollections__cards--card--image--blur--icon"
            />
          </div>
        </div>

        <div className="otherCollections__cards--card">
          <img
            src={shorts}
            alt="kids"
            className="otherCollections__cards--card--image"
          />
          <div className="otherCollections__cards--card--image--blur">
            <div className="otherCollections__cards--card--blur--text">Shorts</div>
            <img
              src={right}
              alt="right icon"
              class="otherCollections__cards--card--image--blur--icon"
            />
          </div>
        </div>

        <div className="otherCollections__cards--card">
          <img
            src={socks}
            alt="kids"
            className="otherCollections__cards--card--image"
          />
          <div className="otherCollections__cards--card--image--blur">
            <div className="otherCollections__cards--card--blur--text">Socks</div>
            <img
              src={right}
              alt="right icon"
              className="otherCollections__cards--card--image--blur--icon"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

