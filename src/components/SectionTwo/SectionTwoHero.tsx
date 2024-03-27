import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function SectionTwoHero() {
  return (
    <div className="section-two-first-graphic-wrapper">
      <StaticImage
        placeholder="none"
        alt="dataflow graphic"
        src="../../images/section-two-data-graphic.png"
        layout="constrained"
        width={777}
        height={429}
        quality={100}
        className="section-two-first-graphic"
      />
    </div>
  );
}

export default SectionTwoHero;
