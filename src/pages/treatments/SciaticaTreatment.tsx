import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SciaticaTreatment = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sciatica Treatment</h1>
          <p className="text-lg text-white/90">Effective nerve pain relief</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">About Sciatica Treatment</h2>
          <p className="text-foreground mb-4 leading-relaxed">
            Effective nerve pain relief through specialized herbal oils, therapeutic massages, and internal medicines targeting sciatic nerve inflammation. Our treatment provides long-lasting relief from radiating leg pain.
          </p>
        </Card>

        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Pain Relief", desc: "Reduces radiating leg pain" },
              { title: "Improved Mobility", desc: "Restores normal movement" },
              { title: "Reduced Inflammation", desc: "Calms nerve irritation" },
              { title: "Prevents Recurrence", desc: "Strengthens supporting structures" },
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
            <h2 className="text-3xl font-bold text-primary mb-4">Get Relief from Sciatica Pain</h2>
            <p className="text-foreground mb-6">Start your natural healing journey</p>
            <Button size="lg" className="font-semibold">Book Consultation</Button>
          </div>
        </Card>
      </section>
    </Layout>
  );
};

export default SciaticaTreatment;
