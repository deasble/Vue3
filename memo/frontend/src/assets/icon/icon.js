/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faPlusCircle,
  faTrashCan,
  faPenToSquare,
  faCheck,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

export const icon = (app) => {
  library.add(faPlusCircle, faTrashCan, faPenToSquare, faCheck, faArrowsRotate);
  app.component("font-awesome-icon", FontAwesomeIcon);
};
