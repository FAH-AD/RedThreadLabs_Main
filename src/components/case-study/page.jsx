"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"


export default function CaseStudy() {
  return (
    <div className="case-study-section">
      <div className="case-study-container">
        <div className="case-study-header">
          <span className="case-study-badge">Client Success</span>
          <h2 className="case-study-title">Real Results for Real Brands</h2>
          <p className="case-study-subtitle">
            See how we&apos;ve helped our clients achieve remarkable growth.
          </p>
        </div>

        <div className="case-study-grid">
          <div className="case-study-image-wrapper">
            <div className="decor-top-left"></div>
            <Image
              src="/assets/testimonial.jpg"
              alt="Case Study"
              width={600}
              height={750}
              className="case-study-image"
            />
            <div className="decor-bottom-right"></div>
          </div>

          <div className="case-study-content">
            <div className="case-study-brand">BondiBoost</div>
            <h3 className="case-study-quote">
             &ldquo;Red Thread&apos;s audit alone helped us cut our CPA by 33%.&rdquo;
            </h3>
            <p className="case-study-author">— BondiBoost, Hair Care Brand</p>
            <div className="case-study-results">
              <div className="case-study-metrics">
                <div>
                  <p className="metric-label">Before</p>
                  <p className="metric-value">$42 CPA</p>
                </div>
                <div>
                  <p className="metric-label">After</p>
                  <p className="metric-value highlight">$28 CPA</p>
                </div>
              </div>
              <p className="case-study-description">
                We identified key friction points in their funnel and boosted retention with sharper funnel content and trust-led creatives.
                Result? A <span className="highlight">35% lift in ROI</span>— all without touching ad spend.
              </p>
            </div>
            <a
              href="/BondiBoost_CaseStudy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="case-study-button">
                Read the full case study <ArrowRight size={16} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
