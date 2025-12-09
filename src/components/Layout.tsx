import React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"
import QuoteModal from "./QuoteModal"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [showQuoteModal, setShowQuoteModal] = React.useState(false)

  return (
    <div className="min-h-screen font-poppins">
      <Navigation onQuoteClick={() => setShowQuoteModal(true)} />
      <main>{children}</main>
      <Footer />
      <QuoteModal 
        open={showQuoteModal}
        onOpenChange={setShowQuoteModal}
      />
    </div>
  )
}

export default Layout