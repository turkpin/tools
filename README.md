# Turkpin DEV Tools

Şirket içi geliştirici araçlarının merkezi koleksiyonu. Bu proje, geliştirme süreçlerinde kullanılan çeşitli araçları tek bir arayüz altında toplar ve otomatik olarak yeni eklenen araçları keşfeder.

## 🚀 Ana Özellikler

- 🔧 **Şirket İçi Araç Koleksiyonu**: Geliştirme süreçlerinde kullanılan araçların merkezi deposu
- 🌐 **Web Tabanlı Arayüz**: Kullanıcı dostu, responsive web arayüzü
- 📁 **Otomatik Keşif**: Yeni eklenen araçlar otomatik olarak arayüzde görüntülenir
- 🎨 **Modern Tasarım**: Tailwind CSS ile dark/light mode desteği
- 📱 **Responsive**: Mobil ve masaüstü cihazlarda uyumlu

## 🛠️ Mevcut Araçlar

### Chrome/Tampermonkey Araçları
- **GitHub PR Commits**: GitHub PR commit sayfalarında gelişmiş navigasyon ve görselleştirme özellikleri
  - Sticky commit başlığı
  - Commit sayacı (X of Y)
  - Klavye navigasyonu (← → ok tuşları)

### SQL Araçları
- **INSERT to SET Converter**: SQL INSERT sorgularını SET formatına çeviren web aracı
  - Gerçek zamanlı dönüştürme
  - Kolay kopyala-yapıştır arayüzü
  - Hata yönetimi

### VSCode Araçları
- **Git/GitHub PR Tasks**: GitHub PR'larını yerel ortama çekme ve yönetim için VSCode task'ları
  - PR çekme
  - PR branch'i silme
  - PR yeniden çekme

## 🏗️ Nasıl Çalışır

Bu proje Jekyll'in statik dosya keşfi özelliğini kullanır:

1. **Otomatik Keşif**: Jekyll tüm statik dosyaları otomatik olarak tarar
2. **Klasör Organizasyonu**: Her araç kategorisi kendi klasöründe organize edilir
3. **Web Arayüzü**: `index.html` dosyası tüm araçları otomatik olarak listeler
4. **Responsive Layout**: Modern card-based layout ile kolay erişim

## 🚀 Kurulum ve Geliştirme

### Gereksinimler
- Ruby (2.7+)
- Jekyll
- Bundler

### Kurulum
```bash
# Bağımlılıkları yükle
bundle install

# Geliştirme sunucusunu başlat
bundle exec jekyll serve

# Tarayıcıda aç
open http://localhost:4000
```

### Yerel Geliştirme
```bash
# Değişiklikleri canlı izle
bundle exec jekyll serve --livereload

# Draft yazılarını da göster
bundle exec jekyll serve --drafts
```

## 📁 Proje Yapısı

```
/
├── _config.yml          # Jekyll yapılandırması
├── index.html           # Ana sayfa ve araç listesi
├── chrome/              # Chrome/Tampermonkey araçları
│   └── tempermonkey/
├── sql/                 # SQL araçları
├── vscode/              # VSCode araçları
│   └── git/
│       └── tasks/
└── README.md            # Bu dosya
```

## 🔧 Yeni Araç Ekleme

Yeni bir araç eklemek çok basit:

1. **Klasör Seçimi**: Uygun kategori klasörünü seçin veya yeni bir tane oluşturun
2. **Dosya Ekleme**: Aracınızı ilgili klasöre ekleyin
3. **Otomatik Görüntüleme**: Jekyll otomatik olarak yeni aracı keşfeder ve arayüzde gösterir

### Örnek: Yeni SQL Aracı Ekleme
```bash
# sql/ klasörüne yeni araç ekle
cp my-new-tool.html sql/

# Sunucuyu yeniden başlat (gerekirse)
bundle exec jekyll serve
```

### Desteklenen Dosya Türleri
- HTML dosyaları (doğrudan çalıştırılabilir)
- JavaScript dosyaları
- CSS dosyaları
- JSON konfigürasyon dosyaları
- Markdown dökümanları

## 🎨 Arayüz Özellikleri

- **Dark Mode**: Otomatik tema algılama
- **Responsive Design**: Mobil uyumlu
- **Kategorize Görünüm**: Araçlar kategorilere göre gruplandırılır
- **Arama ve Filtreleme**: Kolay erişim için
- **Dosya Türü İkonları**: Görsel kategorizasyon

## 🔍 Özelleştirme

### Tema Ayarları
`_config.yml` dosyasında:
```yaml
title: Tools Explorer
exclude: [_config.yml, Gemfile, Gemfile.lock, LICENSE, README.md]
```

### CSS Özelleştirme
Ana sayfa Tailwind CSS kullanır. Özel stil için:
- `index.html` içindeki Tailwind sınıflarını düzenleyin
- Özel CSS eklemek için `<style>` etiketi kullanın

## 📝 Katkıda Bulunma

1. Yeni araç eklerken açıklayıcı isimler kullanın
2. Karmaşık araçlar için README dosyası ekleyin
3. Test edilmiş araçlar ekleyin
4. Gerekirse kategori klasörleri oluşturun

## 📞 Destek

Bu araç koleksiyonu şirket içi kullanım için geliştirilmiştir. Sorularınız için geliştirme ekibine başvurun.

---

**Son Güncelleme**: 2025-01-07  
**Jekyll Sürümü**: 4.x  
**Tailwind CSS**: 3.x (CDN)
