import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faOsi } from '@fortawesome/free-brands-svg-icons/faOsi';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';

// Tell Font Awesome to skip adding the CSS automatically since it's being imported
config.autoAddCss = false;

// List of used icons - amend if new icons are needed
library.add(faOsi, faGithub, faGlobe, faInfo, faDatabase);
