import { Field } from "payload/types";

const groupQuoteContentBuilder = (): Field[] => {
  return [
    {
      name: "type",
      type: "text",
      defaultValue: "quote",
      admin: { readOnly: true, hidden: true },
    },
    {
      name: "from",
      label: {
        en: "Quoting from",
        vi: "Trích dẫn của",
      },
      type: "group",
      fields: [
        {
          name: "name",
          label: {
            en: "Person name",
            vi: "Họ tên",
          },
          type: "text",
          required: true,
        },
        {
          name: "image",
          label: {
            en: "Image",
            vi: "Ảnh",
          },
          type: "upload",
          relationTo: "media",
          localized: true,
          required: true,
        },
        {
          name: "note",
          label: {
            en: "Note",
            vi: "Ghi chú",
          },
          type: "text",
          localized: true,
        },
      ],
    },
  ];
};

export default groupQuoteContentBuilder;
