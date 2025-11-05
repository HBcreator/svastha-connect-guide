import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const LumbarSpondylosis = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lumbar Spondylosis Treatment</h1>
          <p className="text-lg text-white/90">Lower back strengthening program</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">About Lumbar Spondylosis Treatment</h2>
          <p className="text-foreground mb-4 leading-relaxed">
            Lower back strengthening program with medicated therapies, herbal oils, and lifestyle modifications for spinal health. Our treatment focuses on pain relief and preventing progression.
          </p>
        </Card>

        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Back Pain Relief", desc: "Reduces lower back discomfort" },
              { title: "Improved Posture", desc: "Corrects spinal alignment" },
              { title: "Increased Mobility", desc: "Enhances flexibility" },
              { title: "Prevents Progression", desc: "Stops degeneration" },
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Strengthen Your Lower Back</h2>
            <p className="text-foreground mb-6">Get comprehensive spinal care</p>
            <Button size="lg" className="font-semibold">Book Consultation</Button>
          </div>
        </Card>
      </section>
    </Layout>
  );
};

export default LumbarSpondylosis;
