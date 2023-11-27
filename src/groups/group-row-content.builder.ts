import { Field } from "payload/types";
import titleField from "../fields/title.field";

const groupRowContentBuilder = (): Field[] => {
  return [
    {
      name: "type",
      type: "text",
      defaultValue: "content",
      admin: { readOnly: true, hidden: true },
    },
    { ...titleField(), type: "richText" },
  ];
};

export default groupRowContentBuilder;
