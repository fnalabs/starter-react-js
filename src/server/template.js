export default function template (_, title, meta, link, style, css, content, js) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charSet='utf-8' />
<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
<meta name='viewport' content='width=device-width, initial-scale=1' />

${title}
${meta}
${link}
<link rel="manifest" href="/manifest.json">

<style type="text/css">${style}</style>
<link rel="stylesheet" href="/${css}" media="print" onload="this.media='all';this.onload=null;">

<!-- TODO: add favicons -->

</head>
<body>
${content}
<script type="application/javascript" src="/${js}" async></script>
</body>
</html>`
}
