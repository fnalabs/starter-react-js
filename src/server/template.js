export default function template (_, title, meta, link, style, css, content, js) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charSet='utf-8' />
<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
<meta name='viewport' content='width=device-width, initial-scale=1' />

${title}
${meta}
${link}
<link rel="manifest" href="/manifest.json">

<style type="text/css">${style}</style>
<noscript><link rel="stylesheet" type="text/css" href="/${css}"></noscript>

<!-- TODO: add favicons -->

</head>
<body>

${content}

<script type="text/javascript">
// TODO: Replace with link preload solution when support exceeds 90%. https://caniuse.com/#feat=link-rel-preload
document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", '<link rel="stylesheet" type="text/css" href="/${css}">')
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js"))
}
</script>
<script type="application/javascript" src="/${js}" async></script>

</body>
</html>`
}
