import WhatYouWillLearn from "../components/learn/WhatYouWillLearn";
import SummaryValues from "../components/summary/SummaryValues";
import SelectValuesGrid from "../components/values/SelectValuesGrid";
import MyStoryComponent from "../components/myStory/MyStoryComponent";
import DominantValue from "../components/dominantValue/DominantValue";
import SecondaryValuesWrapper from "../secondaryValues/SecondaryValues";
import PersonalViewing from "../components/personalViewing/PersonalViewing";

const vibrationCourseTemplate = [
  {
    id: 1,
    title: "Introducción al curso",
    totalTime: "5 min",
    lessons: [
      {
        id: 101,
        title: "¿Qué aprenderás?",
        time: "5 min",
        completed: false,
        type: "video",
        component: WhatYouWillLearn,
        props: { name: "¿Qué aprenderás?" },
      },
    ],
  },
  {
    id: 2,
    title: "Conoce los valores",
    totalTime: "34 min",
    lessons: [
      {
        id: 201,
        title: "Conoce la lista de valores",
        time: "7 min",
        completed: false,
        type: "lector",
        component: SummaryValues,
      },
      {
        id: 202,
        title: "Video introductorio - Selecciona 10 valores principales",
        time: "3 min",
        completed: false,
        type: "video",
        component: WhatYouWillLearn,
        props: { name: "Selecciona 10 valores principales" },
      },
      {
        id: 203,
        title: "Selecciona 10 valores principales",
        time: "7 min",
        completed: false,
        type: "ejercicio",
        component: SelectValuesGrid,
      },
    ],
  },
  {
    id: 3,
    title: "Captura de valores",
    totalTime: "20 min",
    lessons: [
      {
        id: 301,
        title: "Video introductorio - Tabla de captura de valores",
        time: "3 min",
        completed: false,
        type: "video",
        component: WhatYouWillLearn,
        props: { name: "Tabla de captura de valores" },
      },
      {
        id: 302,
        title: "Tabla de captura de valores",
        time: "7 min",
        completed: false,
        type: "ejercicio",
        component: SecondaryValuesWrapper,
      },
      {
        id: 303,
        title: "Video introductorio - Selecciona el valor dominante",
        time: "3 min",
        completed: false,
        type: "video",
        component: WhatYouWillLearn,
        props: { name: "Selecciona el valor dominante" },
      },
      {
        id: 304,
        title: "Selecciona el valor dominante",
        time: "7 min",
        completed: false,
        type: "ejercicio",
        component: DominantValue,
      },
    ],
  },
  {
    id: 4,
    title: "Escribe tu historia",
    totalTime: "13 min",
    lessons: [
      {
        id: 401,
        title: "Video introductorio - Escribe tu historia",
        time: "3 min",
        completed: false,
        type: "video",
        component: WhatYouWillLearn,
        props: { name: "Escribe tu historia" },
      },
      {
        id: 402,
        title: "Visualización personal",
        time: "10 min",
        completed: false,
        type: "ejercicio",
        component: PersonalViewing,
      },
      {
        id: 403,
        title: "Escribe tu historia",
        time: "10 min",
        completed: false,
        type: "ejercicio",
        component: MyStoryComponent,
      },
    ],
  },
];

export default vibrationCourseTemplate;
