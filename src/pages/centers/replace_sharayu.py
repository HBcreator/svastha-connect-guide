import re

file_path = "E:/Demo website/Svastha global site/svastha-connect-guide/src/pages/centers/SharayuAyurveda.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Component name
content = content.replace("SwarayuAyurveda", "SharayuAyurveda")

# 2. Main titles
content = content.replace("Swarayu Ayurveda Clinic & Panchakarma Center", "Sharayu Ayurveda – Best Ayurvedic Doctor in Mumbai")
content = content.replace("Swarayu Ayurveda Clinic <br /> & Panchakarma Center", "Sharayu Ayurveda – <br /> Best Ayurvedic Doctor")
content = content.replace("Swarayu Ayurveda Clinic", "Sharayu Ayurveda")
content = content.replace("Swarayu Ayurveda", "Sharayu Ayurveda")

# 3. Location and Rating
content = content.replace("Vile Parle East", "Tardeo")
content = content.replace("4.6", "4.9")
content = content.replace("160+", "156")

# 4. Doctors and info
content = content.replace("Dr. Smita Gaikwad", "Dr. Rachana Goragandhi")

# 5. Image paths
content = content.replace("/TOP centers/mumbai pune nashik/Swarayu Ayurveda Clinic & Panchakarma Centre/image 1.webp", "/TOP centers/mumbai pune nashik/Sharayu Ayurveda – Best Ayurvedic Doctor in Mumbai/image 1.jpg")
content = content.replace("/TOP centers/mumbai pune nashik/Swarayu Ayurveda Clinic & Panchakarma Centre/image 2.webp", "/TOP centers/mumbai pune nashik/Sharayu Ayurveda – Best Ayurvedic Doctor in Mumbai/image 2.jpg")

# 6. Contact and Map
content = content.replace("Swarayu+Ayurveda+Clinic,+Vile+Parle+East,+Mumbai", "Sharayu+Ayurveda,+Tardeo,+Mumbai")
content = content.replace("+91 989 xxxx xxx", "+91 98xxx xxxx")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Basic replacements done.")
