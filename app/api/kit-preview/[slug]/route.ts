import { NextRequest, NextResponse } from "next/server";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const kitsDir = join(process.cwd(), "kits");
  const previewPath = join(kitsDir, slug, "preview.html");

  if (!existsSync(previewPath)) {
    return new NextResponse("Preview not found", { status: 404 });
  }

  let html = readFileSync(previewPath, "utf-8");

  // Rewrite relative CSS/JS references to use the kit-file API
  html = html.replace(
    /href="([^"]+\.css)"/g,
    `href="/api/kit-file/${slug}/$1"`
  );
  html = html.replace(
    /src="([^"]+\.js)"/g,
    `src="/api/kit-file/${slug}/$1"`
  );

  // Inject variable listener script before </body>
  const listenerScript = `
<script>
window.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'update-variables') {
    var vars = e.data.variables;
    var root = document.documentElement;
    for (var key in vars) {
      // Convert camelCase or snake_case to kebab-case for CSS custom properties
      var kebab = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().replace(/_/g, '-');
      root.style.setProperty('--kit-' + kebab, String(vars[key]));

      // Apply text content updates via data-var attributes
      if (key === 'address') {
        var el = document.querySelector('[data-var="address"]');
        if (el) el.innerHTML = String(vars[key]).replace(/\\n/g, '<br>');
      }
      if (key === 'hours') {
        var el = document.querySelector('[data-var="hours"]');
        if (el) el.innerHTML = String(vars[key]).replace(/\\n/g, '<br>');
      }
      if (key === 'phone' || key === 'email') {
        var el = document.querySelector('[data-var="phone-email"]');
        if (el && vars.phone !== undefined && vars.email !== undefined) {
          el.innerHTML = String(vars.phone) + '<br>' + String(vars.email);
        }
      }
    }
  }
});
</script>`;

  html = html.replace("</body>", listenerScript + "\n</body>");

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html" },
  });
}
