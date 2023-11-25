import React from "react";
import ants_cover from "../art/ants_cover_w_binder.jpeg";

// ants ep
// fantano review
// rym ranking of 1001
// mathcore live vid and shoutout

export default function Epk() {
  return (
    <div className="epk-container">
      <div className="epk-row">
        <div className="epk-row-header">cohort b blah blah ep out now</div>
      </div>
      <div className="epk-row">
        <div className="epk-photo-content">
          <img src={ants_cover} alt="splitart" className="epk-square" />
          <div className="epk-photo-subtext">artwork by Logan Brennan</div>
        </div>
        <div className="epk-row-body">
          <div className="epk-row-text-1">
            <a className="epk-link">And If You Truly Liked Ants...</a>
          </div>
          <div className="epk-row-text-2">
            Cohort B, Shiverboard, and Don Pardo produce 8 minutes of
            incomporable, high intensity, unrelenting, rock n roll.
          </div>
        </div>
      </div>
      <div className="epk-row">
        <div className="epk-row-body">
          <div className="epk-row-text-1">3rd Best EP of 2022</div>
          <div className="epk-row-text-2">
            Mr. Anthony theneedledrop Fantano presented us with many a kind
            word.
          </div>
        </div>
        <iframe
          src="https://www.youtube.com/embed/aP04tybPu5o"
          title="Top 15 EPs of 2022"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="epk-square"
        ></iframe>
      </div>
      <div className="epk-row release-row">
        <div className="epk-release-header">Previous Releases</div>
        <div className="epk-previous-releases">
          <div className="epk-photo-content">
            <div className="epk-release-header">
              <a href=""></a>
            </div>
            <img src={ants_cover} alt="splitart" className="epk-square" />
            <div className="epk-photo-subtext">artwork by Logan Brennan</div>
          </div>
          <div className="epk-photo-content">
            <img src={ants_cover} alt="splitart" className="epk-square" />
            <div className="epk-photo-subtext">artwork by Logan Brennan</div>
          </div>
          <div className="epk-photo-content">
            <img src={ants_cover} alt="splitart" className="epk-square" />
            <div className="epk-photo-subtext">artwork by Logan Brennan</div>
          </div>
        </div>
      </div>
      <div className="epk-row">
        <iframe
          src="https://www.youtube.com/embed/T1mUBZiN5CA"
          title="Cohort B live at Mathcore Index Fest 2023 (full set)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="epk-square"
        ></iframe>
        <div className="epk-row-body">
          <div className="epk-row-text-1">Mathcore Index Fest 2023</div>
          <div className="epk-row-text-2">
            Cohort B was added to the festival last minute to fill in for their
            ailing friends in Venus Twins.
          </div>
          <div className="epk-row-text-2">
            They were also featured on the{" "}
            <a
              href="https://open.spotify.com/embed/episode/1qY3PAl1NHnjlP7cqoUTrI?utm_source=generator&t=2206"
              className="epk-link"
            >
              Mathcast podcast
            </a>
          </div>
        </div>
      </div>
      {/* contact shit */}
    </div>
  );
}
