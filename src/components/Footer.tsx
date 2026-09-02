"use client";

import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="nav-brand" style={{ marginBottom: "1.5rem" }}>
            <Leaf className="text-accent" style={{ width: "32px", height: "32px", color: "var(--accent-color)" }} />
            <div className="nav-brand-text">
              <span className="brand-title" style={{ color: "white" }}>MAHAURJA</span>
              <span className="brand-subtitle" style={{ color: "#cbd5e1" }}>BHARAT INDUSTRIAL & RENEWABLES</span>
            </div>
          </div>
          <p>{t("contact_subtitle")}</p>
        </div>
        <div>
          <h3>{t("contact_title")}</h3>
          <p><strong>{t("contact_name")}</strong> - Founder & Director</p>
          <p><Phone style={{ width: "16px", display: "inline-block", verticalAlign: "middle", marginRight: "8px" }} /> +91 9340212401</p>
          <p><Mail style={{ width: "16px", display: "inline-block", verticalAlign: "middle", marginRight: "8px" }} /> harsh@bharatindustrialrenewables.com</p>
          <p style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
            <MapPin style={{ width: "16px", flexShrink: 0, marginTop: "4px" }} /> 
            <span>288, Lokmanya Tilak Path, Ujjain Road, Railway Crossing ke paas, Badnagar, Jila Ujjain (M.P.) 456771</span>
          </p>
        </div>
      </div>
      <div className="footer-tags">
        {t("footer_tagline")}
      </div>
    </footer>
  );
}
