# Turkpin DEV Tools

Geliştirici verimliliğini artırmak için hazırlanmış küçük, bağımsız araçlar koleksiyonu.

## Kurulum

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

Tarayıcıda `http://localhost:4000` adresini aç.

## Araçlar

### Chrome / Tampermonkey

| Araç | Açıklama |
|------|----------|
| GitHub PR Commits | GitHub PR commit sayfalarında başlığı sabitler, "X / Y" commit sayacı ekler ve ok tuşlarıyla commit'ler arasında gezinmeyi sağlar. |

### Data

| Araç | Açıklama |
|------|----------|
| Data Viewer | JSON verisini (yapıştırma veya dosya yükleme) sıralanabilir ve filtrelenebilir bir tabloya dönüştürür. `=`, `!=`, `contains`, `>`, `<`, boş/dolu ve özel JS ifadesi gibi operatörleri destekler. |

### JSON

| Araç | Açıklama |
|------|----------|
| JSON Escape Sequence Validator | JSON metnindeki geçersiz kaçış dizilerini konum ve bağlamıyla birlikte raporlar. "Fix Issues" butonu hatalı ters eğik çizgileri otomatik olarak düzeltir. |

### Mail

| Araç | Açıklama |
|------|----------|
| E-posta İmza Oluşturucu | Turkpin çalışanları için kurumsal e-posta imzası oluşturur. Ad, unvan, telefon ve e-posta girilerek imza canlı önizlenir; HTML veya düz metin olarak kopyalanabilir. |

### PHP

| Araç | Açıklama |
|------|----------|
| PHP Trace Formatter | Ham PHP stack trace metnini ayrıştırarak yapılandırılmış JSON formatında sözdizimi vurgulamasıyla görüntüler. |

### Postman

| Araç | Açıklama |
|------|----------|
| Postman Formatter | Postman'dan dışa aktarılan koleksiyonları okunabilir biçimde listeler ve endpoint yapısını düzenli şekilde gösterir. |

### Smarty

| Araç | Açıklama |
|------|----------|
| Smarty Formatter | Smarty şablon kodunu formatlar ve okunabilirliğini artırır. |

### SQL

| Araç | Açıklama |
|------|----------|
| Inserts to Updates | SQL `INSERT` ifadelerini `UPDATE` ifadelerine dönüştürür. |
| Values to SET | SQL `VALUES` bloklarını `SET` sözdizimine çevirir. |

### VS Code

| Araç | Açıklama |
|------|----------|
| Get PR from Git (Task) | Git geçmişinden PR bilgisini çeken VS Code görev tanımı. |

## Yeni Araç Ekleme

1. İlgili klasörün altına `arac-adi.html` dosyası oluştur.
2. Sayfanın `<title>` ve `<h1>` etiketlerini doldur.
3. Jekyll ana sayfası (`index.html`) araçları otomatik olarak listeler.