import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const prefix = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");
const types = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".json": "application/json", ".txt": "text/plain", ".xml": "application/xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml",
  ".woff2": "font/woff2", ".pdf": "application/pdf",
};
const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    if (prefix && url.pathname === prefix) {
      res.writeHead(301, { Location: `${prefix}/` }).end();
      return;
    }
    if (prefix && !url.pathname.startsWith(`${prefix}/`)) throw new Error("Not found");
    const relative = decodeURIComponent(url.pathname.slice(prefix.length)).replace(/^\/+/, "");
    let file = path.resolve(root, relative);
    if (file !== root && !file.startsWith(root + path.sep)) throw new Error("Not found");
    if ((await stat(file)).isDirectory()) {
      if (!url.pathname.endsWith("/")) {
        res.writeHead(301, { Location: `${url.pathname}/` }).end();
        return;
      }
      file = path.join(file, "index.html");
    }
    res.writeHead(200, { "Content-Type": types[path.extname(file)] ?? "application/octet-stream" });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(await readFile(path.join(root, "404.html")));
  }
});
server.listen(Number(process.env.PORT ?? 4173), "127.0.0.1", () => {
  console.log(`Lite preview: http://127.0.0.1:${server.address().port}${prefix}/`);
});
