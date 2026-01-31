"use client";

import { useState, useCallback } from "react";
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import WhoWeHelp from "@/components/WhoWeHelp";
import OurApproach from "@/components/OurApproach";
import HowWeWork from "@/components/HowWeWork";
import TrustBuilders from "@/components/TrustBuilders";
import SocialProof from "@/components/SocialProof";
import BrokerPartnership from "@/components/BrokerPartnership";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);
  const [isBrokerReferral, setIsBrokerReferral] = useState(false);

  const openForm = useCallback((referral?: boolean) => {
    setIsBrokerReferral(!!referral);
    setFormOpen(true);
  }, []);

  const closeForm = useCallback(() => {
    setFormOpen(false);
    setIsBrokerReferral(false);
  }, []);

  return (
    <>
      <ScrollProgress />
      <Header onOpenForm={() => openForm()} />

      <main>
        <Hero onOpenForm={() => openForm()} />
        <WhoWeHelp onOpenForm={() => openForm()} />
        <OurApproach />
        <HowWeWork onOpenForm={() => openForm()} />
        <TrustBuilders />
        <SocialProof />
        <BrokerPartnership onOpenForm={openForm} />
        <Pricing onOpenForm={() => openForm()} />
        <FAQ />
        <FinalCTA onOpenForm={() => openForm()} />
      </main>

      <Footer />

      <LeadForm
        open={formOpen}
        onClose={closeForm}
        isBrokerReferral={isBrokerReferral}
      />
    </>
  );
}
