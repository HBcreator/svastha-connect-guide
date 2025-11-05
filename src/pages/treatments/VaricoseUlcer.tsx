import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const VaricoseUlcer = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Varicose Ulcer Treatment</h1>
          <p className="text-lg text-white/90">Natural healing for varicose ulcers</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">About Varicose Ulcer Treatment</h2>
          <p className="text-foreground mb-4 leading-relaxed">
            Natural healing for varicose ulcers using specialized herbal dressings, internal medicines, and vascular strengthening therapies. Our treatment promotes wound healing and prevents complications.
          </p>
        </Card>

        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Wound Healing", desc: "Accelerates ulcer recovery" },
              { title: "Reduces Swelling", desc: "Improves lymphatic drainage" },
              { title: "Improves Circulation", desc: "Strengthens vascular health" },
              { title: "Prevents Complications", desc: "Reduces risk of infection" },
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
            <h2 className="text-3xl font-bold text-primary mb-4">Heal Varicose Ulcers Naturally</h2>
            <p className="text-foreground mb-6">Get specialized Ayurvedic care</p>
            <Button size="lg" className="font-semibold">Book Consultation</Button>
          </div>
        </Card>
      </section>
    </Layout>
  );
};

export default VaricoseUlcer;
