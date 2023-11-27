import { Field } from "payload/types";
import titleField from "../fields/title.field";

const buildBlockDataResponse = (content: Field[]): Field[] => {
  return [
    {
      ...titleField(),
      label: {
        en: "Section title",
        vi: "Tiêu đề khu vực",
      },
      type: "richText",
    },
    {
      label: {
        vi: "Nội dung khu vực",
        en: "Section Content",
      },
      name: "content",
      type: "group",
      fields: content,
    },
  ];
};

export default buildBlockDataResponse;
