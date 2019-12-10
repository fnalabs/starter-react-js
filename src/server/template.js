export default function template (strings, title, meta, link, manifest, content, scripts) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charSet='utf-8' />
<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
<meta name='viewport' content='width=device-width, initial-scale=1' />

${title}
${meta}
${link}
${manifest}

<!-- TODO: add favicons -->

</head>
<body>

${content}

<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'))
}
</script>
${scripts}

</body>
</html>`
}
