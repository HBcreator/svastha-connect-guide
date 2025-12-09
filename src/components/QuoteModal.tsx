import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { Upload, X } from "lucide-react";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const COUNTRIES = [
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+91", name: "India" },
  { code: "+971", name: "United Arab Emirates" },
  { code: "+65", name: "Singapore" },
  { code: "+61", name: "Australia" },
  { code: "+81", name: "Japan" },
  { code: "+86", name: "China" },
];

const TREATMENTS = [
  "Panchakarma (Detox & Rejuvenation)",
  "Abhyanga (Therapeutic Massage)",
  "Shirodhara (Head Therapy)",
  "Kati Basti (Lower Back Therapy)",
  "Nasya (Nasal Therapies)",
  "Ayurvedic Weight Management",
  "Stress & Mental Wellness",
  "Joint & Arthritis Care",
  "Skin & Hair Treatments",
  "Women's Health & Fertility",
  "Chronic Disease Support",
];

const QuoteModal = ({ open, onOpenChange }: QuoteModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    phone: "",
    preferredCenter: "",
    treatment: "",
    condition: "",
    travelDates: "",
  });
  const [countryCode, setCountryCode] = useState("+91");
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (files.length + selectedFiles.length > 3) {
      toast.error("Maximum 3 files allowed");
      return;
    }
    
    const validFiles = selectedFiles.filter(file => file.size <= 10 * 1024 * 1024);
    if (validFiles.length < selectedFiles.length) {
      toast.error("Some files exceed 10MB limit");
    }
    
    setFiles([...files, ...validFiles].slice(0, 3));
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.country || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    const ticketId = `#SG${Math.floor(100000 + Math.random() * 900000)}`;
    toast.success(`Thank you! Your request (ID: ${ticketId}) is received. Our expert will contact you within 24–48 hours.`);
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      country: "",
      phone: "",
      preferredCenter: "",
      treatment: "",
      condition: "",
      travelDates: "",
    });
    setFiles([]);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary font-poppins">
            Get Free Quote
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Find the right Ayurvedic center for your healing journey
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country *</Label>
            <Select
              value={formData.country}
              onValueChange={(value) => {
                setFormData({ ...formData, country: value });
                const country = COUNTRIES.find(c => c.name === value);
                if (country) setCountryCode(country.code);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent className="bg-card z-[100]">
                {COUNTRIES.map((country) => (
                  <SelectItem key={country.name} value={country.name}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Contact Number *</Label>
            <div className="flex gap-2">
              <Input
                value={countryCode}
                disabled
                className="w-20"
              />
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="1234567890"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredCenter">Preferred Center/City</Label>
            <Input
              id="preferredCenter"
              value={formData.preferredCenter}
              onChange={(e) => setFormData({ ...formData, preferredCenter: e.target.value })}
              placeholder="e.g., Goa, Kerala, Bangalore"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="treatment">Treatment Interested In</Label>
            <Select
              value={formData.treatment}
              onValueChange={(value) => setFormData({ ...formData, treatment: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select treatment" />
              </SelectTrigger>
              <SelectContent className="bg-card z-[100]">
                {TREATMENTS.map((treatment) => (
                  <SelectItem key={treatment} value={treatment}>
                    {treatment}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="condition">Describe Your Condition</Label>
            <Textarea
              id="condition"
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              placeholder="Tell us about your health concerns and goals..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="files">Attach Files (Max 3 files, 10MB each)</Label>
            <div className="flex items-center gap-2">
              <label htmlFor="files" className="cursor-pointer">
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
                  <Upload size={16} />
                  <span className="text-sm">Choose Files</span>
                </div>
              </label>
              <input
                id="files"
                type="file"
                onChange={handleFileChange}
                multiple
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="hidden"
              />
            </div>
            {files.length > 0 && (
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-muted p-2 rounded">
                    <span className="text-sm truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-destructive hover:text-destructive/80"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="travelDates">Preferred Travel Dates</Label>
            <Input
              id="travelDates"
              type="date"
              value={formData.travelDates}
              onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
            />
          </div>

          <Button type="submit" className="w-full font-poppins font-semibold">
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
