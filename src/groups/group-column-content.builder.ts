import { Field } from "payload/types";

const groupColumnContentBuilder = (): Field[] => {
  return [
    {
      name: "type",
      type: "text",
      defaultValue: "column",
      admin: { readOnly: true, hidden: true },
    },
    {
      name: "content",
      label: {
        en: "Column contents",
        vi: "Nội dung các cột",
      },
      type: "array",
      fields: [
        {
          name: "title",
          label: {
            en: "Title",
            vi: "Danh mục",
          },
          type: "text",
          localized: true,
        },
        {
          name: "content",
          label: {
            en: "Content",
            vi: "Nội dung",
          },
          type: "richText",
          localized: true,
        },
      ],
    },
  ];
};

export default groupColumnContentBuilder;
