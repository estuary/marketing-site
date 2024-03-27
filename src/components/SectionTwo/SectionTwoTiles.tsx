import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function SectionTwoTiles() {
  return (
    <div className="section-two-tiles-wrapper">
      <div className="section-two-tile-wrapper">
        <div className="section-two-tile">
          <h3 className="section-two-tile-title">Tools the whole team can use</h3>
          <p className="section-two-tile-text">
            Make updates through Flow’s UI or CLI. Programmatic access for the ability to easily embed and whitelabel
            pipelines.
          </p>
        </div>
        <div className="section-two-tile">
          <h3 className="section-two-tile-title">Automation</h3>
          <p className="section-two-tile-text">
            No scheduling or orchestration tools required. Automated schema management and data deduplication.
          </p>
        </div>
      </div>
      <div className="section-two-tile-wrapper">
        <div className="section-two-tile">
          <h3 className="section-two-tile-title">Reliability</h3>
          <p className="section-two-tile-text">
            Proven, fault-tolerant architecture. Built upon cloud storage, extended with real-time capabilities.
          </p>
        </div>
        <div className="section-two-tile">
          <h3 className="section-two-tile-title">Scale</h3>
          <p className="section-two-tile-text">Powering active workloads at 7GB/s CDC from any size database.</p>
        </div>
        <div className="section-two-tile">
          <h3 className="section-two-tile-title">Accuracy & Control</h3>
          <p className="section-two-tile-text">
            Your pipelines, how you want them. Safeguard your data products with built in, customizable schema controls.
            Idempotent, exactly once semantics.
          </p>
        </div>
      </div>

      <div className="section-two-bottom-header">
        <div className="section-two-bottom-left">
          <h2 className="section-two-bottom-title">Real-time database replication</h2>
          <ul className="section-two-bottom-header-ul">
            <li>Powering exact copies of your data where you want them. Supports databases of 10TB+.</li>
            <li>Database connectors & real-time Salesforce integration built in-house.</li>
            <li>
              Supports open source batch-based connectors. Bring any Airbyte connector in and run it enabling access to
              200+ connectors.
            </li>
          </ul>
        </div>
        <div className="section-two-bottom-right">
          <StaticImage
            placeholder="none"
            alt="estuary product screenshot"
            src="../images/realtime-replication.png"
            className="section-two-second-graphic"
            layout="fixed"
            quality={100}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionTwoTiles;
