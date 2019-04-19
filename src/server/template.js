export default function template (strings, title, meta, link, content) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charSet='utf-8' />
<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
<meta name='viewport' content='width=device-width, initial-scale=1' />

${title}
${meta}
${link}

<!-- TODO: add favicons -->

</head>
<body>

${content}

<script src='/main.js' async></script>

</body>
</html>`
}
