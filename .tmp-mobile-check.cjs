const { chromium, devices } = require('playwright');
(async() => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ ...devices['Pixel 7'] });
  const page = await context.newPage();
  const url = 'http://localhost:8080/ayurvedic-programs/panchakarma-detox-programs/21-day-panchakarma-detox-program-in-india';
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);

  const metrics = await page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    return {
      innerWidth: window.innerWidth,
      scrollWidth: doc.scrollWidth,
      bodyScrollWidth: body.scrollWidth,
      hasHorizontalOverflow: doc.scrollWidth > window.innerWidth,
      h1: document.querySelector('h1')?.textContent?.trim() || null,
      tableCount: document.querySelectorAll('table').length,
      tableMinWidth: Array.from(document.querySelectorAll('table')).map(t => getComputedStyle(t).minWidth),
      badElements: Array.from(document.querySelectorAll('*')).filter(el => {
        const r = el.getBoundingClientRect();
        return r.left < -1 || r.right > window.innerWidth + 1;
      }).slice(0, 25).map(el => {
        const r = el.getBoundingClientRect();
        return {
          tag: el.tagName,
          cls: (el.className || '').toString().slice(0, 120),
          left: Math.round(r.left),
          right: Math.round(r.right),
          width: Math.round(r.width)
        };
      })
    }
  });

  await page.screenshot({ path: 'mobile-check.png', fullPage: true });
  console.log(JSON.stringify(metrics, null, 2));
  await browser.close();
})();
