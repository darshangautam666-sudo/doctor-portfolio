"use client"
import { MapPin, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/profile/header";

const Contact = () => {
  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg">
                Feel free to reach out for consultations or inquiries
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <a
                  href="tel:+916002293939"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 60022 93939
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:info@drdarshan.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@drdarshan.com
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground">
                  Golia, Biswanath Chariali, Assam<br />
                  India - 784176
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;