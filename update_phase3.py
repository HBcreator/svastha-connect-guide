import os
import re

src_dir = os.path.join(os.path.dirname(__file__), 'src')
pages_dir = os.path.join(src_dir, 'pages')
centers_dir = os.path.join(pages_dir, 'centers')
app_path = os.path.join(src_dir, 'App.tsx')

routes_to_fix = [
  ('kerala/kairali-ayurvedic-healing-village', 'kairali-ayurvedic-healing-village-hospital-kerala-india', 'KairaliHealingVillage'),
  ('veda5', 'veda5-ayurveda-yoga-wellness-retreat-center-rishikesh-india', 'Veda5Center'),
  ('rishikesh/yan-cure', 'yan-cure-yoga-retreat-and-ayurveda-center-rishikesh-india', 'YanCureYogaRetreat'),
  ('soul-vacation-resort-spa-goa-india', 'soul-vacation-resort-and-wellness-center-goa-india', 'SoulVacationResort'),
  ('swan-yoga-retreat-goa-india', 'swan-yoga-retreat-and-ayurveda-center-goa-india', 'SWANYogaRetreat'),
  ('mercure-goa-devaaya-retreat-goa-india', 'mercure-goa-devaaya-resort-ayurveda-wellness-center-goa-india', 'MercureGoaDevaayaResort'),
  ('ashiyana-yoga-retreat-village-goa-india', 'ashiyana-yoga-retreat-center-goa-india', 'AshiyanaYogaRetreat'),
  ('nalanda-retreat-goa-india', 'nalanda-retreat-center-goa-india', 'NalandaRetreatGoa'),
  ('uttarakhand/ananda-in-the-himalayas', 'ananda-in-the-himalayas-resort-uttarakhand-india', 'AnandaInTheHimalayas'),
  ('delhi/namastedwaar', 'namaste-dwaar-countryside-wellness-retreat-delhi-india', 'NamasteDwaar'),
  ('kerala/ayurmana', 'ayurmana-ayurveda-hospital-kerala-india', 'AyurmanaCenter'),
  ('mysore/chamundi-hill-palace', 'chamundi-hill-palace-ayurvedic-center-kerala-india', 'ChamundiHillPalace'),
  ('kerala/kairali-heritage', 'kairali-heritage-resort-kerala-india', 'KairaliHeritage'),
  ('kerala/agni-ayurvedic-village', 'agni-ayurvedic-village-resort-kerala-india', 'AgniAyurvedicVillage'),
  ('kerala/dheemahi-kumarakom', 'dheemahi-kumarakom-premium-lakeside-retreat-kerala-india', 'DheemahiKumarakom'),
  ('kerala/kumarakom-lake-resort', 'kumarakom-lake-resort-kerala-india', 'KumarakomLakeResort'),
  ('kerala/nagarjuna-ayurveda-center', 'nagarjuna-ayurveda-center-kerala-india', 'NagarjunaAyurvedaCenter'),
  ('kerala/sanjeevanam-ayurveda-hospital', 'sanjeevanam-ayurveda-hospital-kerala-india', 'SanjeevanamAyurvedaHospital'),
  ('kerala/back-to-roots', 'back-to-roots-ayurveda-retreat-kerala-india', 'BackToRoots'),
  ('kerala/dhathri-ayurveda', 'dhathri-ayurveda-hospital-kerala-india', 'DhathriAyurvedicHospital'),
  ('kerala/krishnendu-ayurveda-hospital', 'krishnendu-ayurveda-hospital-kerala-india', 'KrishnenduAyurvedaHospital'),
  ('kerala/athreya-ayurvedic-center', 'athreya-ayurvedic-center-kerala-india', 'AthreyaAyurvedicCenter'),
  ('kerala/ayur-bethaniya-ayurveda-hospital', 'ayur-bethaniya-ayurveda-hospital-kerala-india', 'AyurBethaniyaAyurvedaHospital'),
  ('kerala/ayushi-ayurvedic-retreat', 'ayushi-ayurvedic-retreat-kerala-india', 'AyushiAyurvedicRetreat'),
  ('idukki/sitaram-mountain-retreat', 'sitaram-mountain-retreat-idukki-india', 'SitaramMountainRetreat'),
  ('kochi/akanta-ayurveda-and-yoga-resort', 'akanta-ayurveda-and-yoga-resort-kochi-india', 'AkantaAyurvedaYogaResort'),
  ('kerala/ideal-ayurvedic-resort', 'ideal-ayurvedic-resort-kerala-india', 'IdealAyurvedicResort')
]

# 1. Update App.tsx
with open(app_path, 'r', encoding='utf-8') as f:
    app_content = f.read()

app_changed = False
for old_slug, new_slug, comp in routes_to_fix:
    old_line = f'<Route path="/centers/{old_slug}" element={{<{comp} />}} />'
    new_line = f'<Route path="/centers/{new_slug}" element={{<{comp} />}} />\n          <Route path="/centers/{old_slug}" element={{<Navigate to="/centers/{new_slug}" replace />}} />'
    
    if old_line in app_content:
        app_content = app_content.replace(old_line, new_line)
        app_changed = True
    else:
        print(f"Could not find {old_line}")

if app_changed:
    with open(app_path, 'w', encoding='utf-8') as f:
        f.write(app_content)
    print("App.tsx updated")

# 2. String Replacements globally
for filename in os.listdir(pages_dir):
    if filename.endswith('.tsx') or filename.endswith('.ts'):
        filepath = os.path.join(pages_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        changed = False
        for old_slug, new_slug, _ in routes_to_fix:
            target = f'"{old_slug}"'
            replacement = f'"{new_slug}"'
            if target in content:
                content = content.replace(target, replacement)
                changed = True
                
        if changed:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated strings in {filename}")

# 3. Breadcrumbs
breadcrumb_components = [
  ('KairaliHealingVillage', 'KAIRALI AYURVEDIC HEALING VILLAGE KERALA'),
  ('Veda5Center', 'VEDA5 AYURVEDA YOGA WELLNESS RETREAT CENTER RISHIKESH'),
  ('YanCureYogaRetreat', 'YAN CURE YOGA RETREAT & AYURVEDA CENTER RISHIKESH'),
  ('SoulVacationResort', 'SOUL VACATION RESORT & WELLNESS CENTER GOA'),
  ('SWANYogaRetreat', 'SWAN YOGA RETREAT & AYURVEDA CENTER GOA'),
  ('MercureGoaDevaayaResort', 'MERCURE GOA DEVAAYA RESORT GOA'),
  ('AshiyanaYogaRetreat', 'ASHIYANA YOGA RETREAT CENTER GOA'),
  ('NalandaRetreatGoa', 'NALANDA RETREAT CENTER GOA'),
  ('AnandaInTheHimalayas', 'ANANDA IN THE HIMALAYAS RESORT UTTARAKHAND'),
  ('NamasteDwaar', 'NAMASTE DWAAR COUNTRYSIDE WELLNESS RETREAT DELHI'),
  ('AyurmanaCenter', 'AYURMANA AYURVEDA HOSPITAL KERALA'),
  ('ChamundiHillPalace', 'CHAMUNDI HILL PALACE AYURVEDIC CENTER KERALA'),
  ('KairaliHeritage', 'KAIRALI HERITAGE RESORT KERALA'),
  ('AgniAyurvedicVillage', 'AGNI AYURVEDIC VILLAGE RESORT KERALA'),
  ('DheemahiKumarakom', 'DHEEMAHI KUMARAKOM LAKESIDE RETREAT KERALA'),
  ('KumarakomLakeResort', 'KUMARAKOM LAKE RESORT KERALA'),
  ('NagarjunaAyurvedaCenter', 'NAGARJUNA AYURVEDA CENTER KERALA'),
  ('SanjeevanamAyurvedaHospital', 'SANJEEVANAM AYURVEDA HOSPITAL KERALA'),
  ('BackToRoots', 'BACK TO ROOTS AYURVEDA RETREAT KERALA'),
  ('DhathriAyurvedicHospital', 'DHATHRI AYURVEDA HOSPITAL KERALA'),
  ('KrishnenduAyurvedaHospital', 'KRISHNENDU AYURVEDA HOSPITAL KERALA'),
  ('AthreyaAyurvedicCenter', 'ATHREYA AYURVEDIC CENTER KERALA'),
  ('AyurBethaniyaAyurvedaHospital', 'AYUR BETHANIYA AYURVEDA HOSPITAL KERALA'),
  ('AyushiAyurvedicRetreat', 'AYUSHI AYURVEDIC RETREAT KERALA'),
  ('SitaramMountainRetreat', 'SITARAM MOUNTAIN RETREAT IDUKKI'),
  ('AkantaAyurvedaYogaResort', 'AKANTA AYURVEDA AND YOGA RESORT KOCHI'),
  ('IdealAyurvedicResort', 'IDEAL AYURVEDIC RESORT KERALA')
]

for comp_name, display_name in breadcrumb_components:
    filename = f"{comp_name}.tsx"
    filepath = os.path.join(centers_dir, filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filename}")
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if 'Breadcrumb Navigation' in content or 'Centers</Link>' in content:
        continue
        
    breadcrumb_code = f"""
      {{/* Breadcrumb Navigation */}}
      <nav className="bg-[#FCFBF7] border-b border-[#EDE8D0] py-3">
        <div className="container mx-auto px-4 max-w-6xl">
          <ol className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] overflow-x-auto whitespace-nowrap pb-1 -mb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <li className="flex items-center gap-2 shrink-0">
              <Link to="/" className="text-primary/50 hover:text-primary transition-colors flex items-center gap-1">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="flex items-center gap-2 shrink-0">
              <Link to="/centers" className="text-primary/50 hover:text-primary transition-colors">
                Centers
              </Link>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="text-primary/90 font-black shrink-0">
              {display_name}
            </li>
          </ol>
        </div>
      </nav>
"""

    if '<Navigation ' in content:
        content = re.sub(r'(<Navigation[^>]*/>)', r'\1\n' + breadcrumb_code, content)
        
        if 'ChevronRight' not in content:
            content = re.sub(r'import\s+{([^}]+)}\s+from\s+["\']lucide-react["\'];', r'import { \1, ChevronRight } from "lucide-react";', content)
            
        if 'import { Link }' not in content:
            if 'react-router-dom' in content:
                content = re.sub(r'import\s+{([^}]+)}\s+from\s+["\']react-router-dom["\'];', r'import { Link, \1 } from "react-router-dom";', content)
            else:
                content = 'import { Link } from "react-router-dom";\n' + content
                
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Added breadcrumb to {filename}")
    else:
        print(f"Navigation not found in {filename}")

print("Phase 3 updates completed.")
