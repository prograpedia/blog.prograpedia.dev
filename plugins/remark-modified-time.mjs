import { execSync } from "child_process";

export function remarkModifiedTime() {
  return function(tree, file) {
    const filepath = file.history[ 0 ];
    const modifiedTime = execSync(`git log -1 --pretty="format:%cI" ${filepath}`);
    console.log(modifiedTime);
    file.data.astro.frontmatter.lastUpdated = modifiedTime.toString().trim();
  };
}
