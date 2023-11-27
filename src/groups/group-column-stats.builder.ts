import { Field } from "payload/types";

const groupColumnStatsBuilder = (): Field[] => {
  return [
    {
      type: "row",
      fields: [
        {
          name: "number_prefix",
          label: {
            en: "Prefix",
            vi: "Tiền tố",
          },
          type: "text",
          localized: true,
          admin: {
            width: "20%",
          },
        },
        {
          name: "number",
          label: {
            en: "Number",
            vi: "Thông số",
          },
          type: "number",
          required: true,
          localized: true,
          admin: {
            width: "60%",
          },
        },
        {
          name: "number_suffix",
          label: {
            en: "Suffix",
            vi: "Hậu tố",
          },
          type: "text",
          localized: true,
          admin: {
            width: "20%",
          },
          defaultValue: "+",
        },
      ],
    },
    {
      name: "label",
      label: {
        en: "Label",
        vi: "Đề mục",
      },
      required: true,
      type: "text",
      localized: true,
    },
  ];
};

export default groupColumnStatsBuilder;
