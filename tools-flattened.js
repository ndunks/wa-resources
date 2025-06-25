const fs = require('node:fs');
const path = require('node:path');

/** @type {Set<string>} */
const moveds = new Set()
function flatten(dir, rootDir) {

  if (!rootDir) rootDir = dir

  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory())
      return flatten(fullPath, rootDir)

    if (rootDir == dir)
      return console.log("Not moving files in the rootDir")

    if (!entry.isFile())
      return console.log(`Not a file: ${fullPath}`)

    const relPath = path.relative(rootDir, fullPath);
    // const dirPrefix = path.dirname(relPath).replace(/[/\\]/g, '_');
    // const newFileName = (dirPrefix === '.' ? '' : dirPrefix + '_') + path.basename(entry.name);
    const dest = path.join(rootDir, entry.name);

    if (moveds.has(dest)) {
      return console.error(`Duplicates: ${dest}`)
    }
    moveds.add(dest)
    fs.renameSync(fullPath, dest)
    console.log(`OK: ${dest}`);

  });
}

flatten("static.whatsapp.net/rsrc-translations.php");
flatten("static.whatsapp.net/rsrc.php");
