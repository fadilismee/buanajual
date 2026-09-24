import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);

      // Salinan lokal bagian /jual. Halaman dibuka di mesin ini,
      // tanpa redirect ke subdomain yang sedang tidak hidup.
      if (url.pathname === "/" || url.pathname === "") {
        url.pathname = "/jual";
        request = new Request(url, request);
      } else if (url.pathname === "/form" || url.pathname === "/form/") {
        url.pathname = "/jual/form";
        request = new Request(url, request);
      }

      const handler = await getServerEntry();
      return await handler.fetch(request, env, ctx);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
